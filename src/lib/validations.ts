/**
 * Shared validation for the lead-capture form.
 * Used by both the client component (field-level feedback)
 * and the API route (server-side re-validation).
 */

export interface LeadFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  teamSize: string;
  interest: string;
  message: string;
}

export interface FieldError {
  field: keyof LeadFormData;
  message: string;
}

/* ---- Constants ---- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s\-().]{7,20}$/;

export const TEAM_SIZES = ["1–50", "51–200", "201–500", "500+"] as const;
export const INTERESTS = [
  "Product & Innovation",
  "Gen-AI Mastery",
  "Leadership Elevation",
  "Tech & Data Insights",
  "Operations Excellence",
  "Digital Enterprise",
  "Fintech Innovation",
  "Custom Program",
] as const;

export type TeamSize = (typeof TEAM_SIZES)[number];
export type Interest = (typeof INTERESTS)[number];

/* ---- Validator ---- */
export function validateLeadForm(data: Partial<LeadFormData>): FieldError[] {
  const errors: FieldError[] = [];

  // Name
  const name = (data.name ?? "").trim();
  if (!name) {
    errors.push({ field: "name", message: "Full name is required." });
  } else if (name.length < 2) {
    errors.push({ field: "name", message: "Name must be at least 2 characters." });
  } else if (name.length > 100) {
    errors.push({ field: "name", message: "Name must be under 100 characters." });
  }

  // Email
  const email = (data.email ?? "").trim();
  if (!email) {
    errors.push({ field: "email", message: "Work email is required." });
  } else if (!EMAIL_RE.test(email)) {
    errors.push({ field: "email", message: "Please enter a valid email address." });
  } else if (email.length > 254) {
    errors.push({ field: "email", message: "Email address is too long." });
  }

  // Company
  const company = (data.company ?? "").trim();
  if (!company) {
    errors.push({ field: "company", message: "Company name is required." });
  } else if (company.length > 150) {
    errors.push({ field: "company", message: "Company name must be under 150 characters." });
  }

  // Phone (optional)
  const phone = (data.phone ?? "").trim();
  if (phone) {
    if (!PHONE_RE.test(phone)) {
      errors.push({ field: "phone", message: "Please enter a valid phone number." });
    } else if (phone.length > 20) {
      errors.push({ field: "phone", message: "Phone number is too long." });
    }
  }

  // Team Size
  const teamSize = (data.teamSize ?? "").trim();
  if (!teamSize) {
    errors.push({ field: "teamSize", message: "Please select your team size." });
  } else if (!(TEAM_SIZES as readonly string[]).includes(teamSize)) {
    errors.push({ field: "teamSize", message: "Invalid team size selection." });
  }

  // Interest
  const interest = (data.interest ?? "").trim();
  if (!interest) {
    errors.push({ field: "interest", message: "Please select an area of interest." });
  } else if (!(INTERESTS as readonly string[]).includes(interest)) {
    errors.push({ field: "interest", message: "Invalid interest selection." });
  }

  // Message (optional)
  if ((data.message ?? "").length > 1000) {
    errors.push({ field: "message", message: "Message must be under 1,000 characters." });
  }

  return errors;
}

/** Convert an array of FieldErrors to a keyed object for fast lookup */
export function errorsToMap(
  errors: FieldError[]
): Partial<Record<keyof LeadFormData, string>> {
  return Object.fromEntries(errors.map((e) => [e.field, e.message]));
}
