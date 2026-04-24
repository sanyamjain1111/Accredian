import { NextRequest, NextResponse } from "next/server";
import { validateLeadForm, errorsToMap, type LeadFormData } from "@/lib/validations";

/* ------------------------------------------------------------------ */
/* Simple in-memory rate limiter (per-IP, 5 req / 60 s)               */
/* In production swap for Redis / Upstash Rate Limit                   */
/* ------------------------------------------------------------------ */
const ipMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);
  if (!entry || entry.resetAt < now) {
    ipMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

/* ------------------------------------------------------------------ */
/* Sanitise a single string value                                       */
/* ------------------------------------------------------------------ */
function sanitise(v: unknown, maxLen = 2000): string {
  if (typeof v !== "string") return "";
  // Strip HTML tags to prevent stored-XSS if data is ever rendered raw
  return v.trim().slice(0, maxLen).replace(/<[^>]*>/g, "");
}

/* ------------------------------------------------------------------ */
/* POST /api/leads                                                      */
/* ------------------------------------------------------------------ */
export async function POST(req: NextRequest) {
  try {
    /* Rate limit */
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    /* Parse body */
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request payload." },
        { status: 400 }
      );
    }

    /* Sanitise all inputs before validation */
    const data: Partial<LeadFormData> = {
      name:     sanitise(body.name, 100),
      email:    sanitise(body.email, 254).toLowerCase(),
      company:  sanitise(body.company, 150),
      phone:    sanitise(body.phone, 20) || undefined,
      teamSize: sanitise(body.teamSize, 20),
      interest: sanitise(body.interest, 60),
      message:  sanitise(body.message, 1000) || undefined,
    };

    /* Server-side validation (never trust client-only validation) */
    const errors = validateLeadForm(data);
    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, message: "Please correct the errors below.", errors: errorsToMap(errors) },
        { status: 400 }
      );
    }

    /* ----------------------------------------------------------------
       Persist the lead.
       In production, replace this block with your preferred storage:
         • Prisma/Postgres:  await prisma.lead.create({ data })
         • Supabase:         await supabase.from("leads").insert(data)
         • Email (Resend):   await resend.emails.send({ ... })
         • CRM (HubSpot):    await hubspot.crm.contacts.create({ ... })
    ---------------------------------------------------------------- */
    const lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      submittedAt: new Date().toISOString(),
      ...data,
    };

    // Log to server console (visible in Vercel function logs)
    console.info("[lead captured]", JSON.stringify(lead, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Our team will be in touch within 48 hours.",
        id: lead.id,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[api/leads] Unexpected error:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

/* Only POST is supported */
export function GET() {
  return NextResponse.json({ message: "Method not allowed." }, { status: 405 });
}
