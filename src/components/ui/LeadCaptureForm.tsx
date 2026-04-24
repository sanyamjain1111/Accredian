"use client";

import { useState, useId } from "react";
import {
  User,
  Mail,
  Building2,
  Phone,
  Users,
  Sparkles,
  MessageSquare,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  validateLeadForm,
  errorsToMap,
  TEAM_SIZES,
  INTERESTS,
  type LeadFormData,
} from "@/lib/validations";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Types                                                                */
/* ------------------------------------------------------------------ */
type Status = "idle" | "loading" | "success" | "error";
type FieldErrors = Partial<Record<keyof LeadFormData, string>>;

const EMPTY_FORM: LeadFormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  teamSize: "",
  interest: "",
  message: "",
};

/* ------------------------------------------------------------------ */
/* Sub-components                                                        */
/* ------------------------------------------------------------------ */
function FieldWrapper({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-neutral-700">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p
          role="alert"
          className="flex items-center gap-1.5 text-xs text-red-600 animate-shake"
        >
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase =
  "w-full px-4 py-3 rounded-xl border text-sm text-neutral-900 placeholder-neutral-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400/60 focus:border-primary-400 bg-white";

function TextInput({
  id,
  error,
  icon: Icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  error?: string;
  icon?: React.ElementType;
}) {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
      )}
      <input
        id={id}
        className={cn(
          inputBase,
          Icon && "pl-10",
          error
            ? "border-red-400 focus:ring-red-400/60 focus:border-red-400"
            : "border-neutral-200 hover:border-neutral-300"
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
    </div>
  );
}

function SelectInput({
  id,
  error,
  icon: Icon,
  placeholder,
  options,
  value,
  onChange,
}: {
  id: string;
  error?: string;
  icon?: React.ElementType;
  placeholder: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none z-10" />
      )}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          inputBase,
          "appearance-none cursor-pointer",
          Icon && "pl-10",
          !value && "text-neutral-400",
          error
            ? "border-red-400 focus:ring-red-400/60 focus:border-red-400"
            : "border-neutral-200 hover:border-neutral-300"
        )}
        aria-invalid={!!error}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-neutral-900">
            {o}
          </option>
        ))}
      </select>
      {/* Caret */}
      <svg
        className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Success state                                                         */
/* ------------------------------------------------------------------ */
function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center text-center gap-5 py-10 animate-scale-in">
      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center ring-4 ring-green-100">
        <CheckCircle2 className="w-8 h-8 text-green-500" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">You&apos;re all set!</h3>
        <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mx-auto">
          Thank you for reaching out. Our enterprise team will contact you within{" "}
          <strong className="text-neutral-700">48 hours</strong> with a tailored proposal.
        </p>
      </div>
      <button
        onClick={onReset}
        className="text-sm text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2 transition-colors"
      >
        Submit another enquiry
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main form component                                                   */
/* ------------------------------------------------------------------ */
export function LeadCaptureForm({ className }: { className?: string }) {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;

  const [form, setForm] = useState<LeadFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string>("");
  // Track which fields have been touched to show inline errors
  const [touched, setTouched] = useState<Partial<Record<keyof LeadFormData, boolean>>>({});

  function set(field: keyof LeadFormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    // Clear error on change
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function touch(field: keyof LeadFormData) {
    if (touched[field]) return;
    setTouched((t) => ({ ...t, [field]: true }));
    // Validate just this field on blur
    const fieldErrors = validateLeadForm(form).filter((e) => e.field === field);
    if (fieldErrors.length > 0) {
      setErrors((e) => ({ ...e, [field]: fieldErrors[0].message }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");

    // Full client-side validation
    const fieldErrors = validateLeadForm(form);
    if (fieldErrors.length > 0) {
      setErrors(errorsToMap(fieldErrors));
      // Touch all fields so errors show
      const allTouched = Object.fromEntries(
        Object.keys(EMPTY_FORM).map((k) => [k, true])
      ) as Record<keyof LeadFormData, boolean>;
      setTouched(allTouched);
      // Focus first error field
      const first = fieldErrors[0].field;
      document.getElementById(id(first))?.focus();
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await res.json();

      if (!res.ok) {
        if (res.status === 400 && json.errors) {
          setErrors(json.errors);
          setTouched(
            Object.fromEntries(Object.keys(EMPTY_FORM).map((k) => [k, true])) as Record<
              keyof LeadFormData,
              boolean
            >
          );
          setStatus("idle");
          return;
        }
        throw new Error(json.message ?? "Submission failed.");
      }

      setStatus("success");
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  }

  function handleReset() {
    setForm(EMPTY_FORM);
    setErrors({});
    setTouched({});
    setServerError("");
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div className={className}>
        <SuccessState onReset={handleReset} />
      </div>
    );
  }

  const isLoading = status === "loading";

  const visibleError = (field: keyof LeadFormData) =>
    touched[field] ? errors[field] : undefined;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Enterprise enquiry form"
      className={cn("flex flex-col gap-5", className)}
    >
      {/* Server / network error banner */}
      {serverError && (
        <div
          role="alert"
          className="flex items-start gap-3 px-4 py-3.5 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700 animate-fade-in-up"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Row 1: Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <FieldWrapper id={id("name")} label="Full Name" required error={visibleError("name")}>
          <TextInput
            id={id("name")}
            type="text"
            placeholder="Priya Sharma"
            autoComplete="name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            onBlur={() => touch("name")}
            icon={User}
            error={visibleError("name")}
            disabled={isLoading}
          />
        </FieldWrapper>

        <FieldWrapper id={id("email")} label="Work Email" required error={visibleError("email")}>
          <TextInput
            id={id("email")}
            type="email"
            placeholder="priya@company.com"
            autoComplete="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            onBlur={() => touch("email")}
            icon={Mail}
            error={visibleError("email")}
            disabled={isLoading}
          />
        </FieldWrapper>
      </div>

      {/* Row 2: Company + Phone */}
      <div className="grid sm:grid-cols-2 gap-5">
        <FieldWrapper id={id("company")} label="Company Name" required error={visibleError("company")}>
          <TextInput
            id={id("company")}
            type="text"
            placeholder="Acme Corp"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => set("company", e.target.value)}
            onBlur={() => touch("company")}
            icon={Building2}
            error={visibleError("company")}
            disabled={isLoading}
          />
        </FieldWrapper>

        <FieldWrapper id={id("phone")} label="Phone Number" error={visibleError("phone")}>
          <TextInput
            id={id("phone")}
            type="tel"
            placeholder="+91 98765 43210"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            onBlur={() => touch("phone")}
            icon={Phone}
            error={visibleError("phone")}
            disabled={isLoading}
          />
        </FieldWrapper>
      </div>

      {/* Row 3: Team Size + Interest */}
      <div className="grid sm:grid-cols-2 gap-5">
        <FieldWrapper id={id("teamSize")} label="Team Size" required error={visibleError("teamSize")}>
          <SelectInput
            id={id("teamSize")}
            placeholder="Select team size"
            options={TEAM_SIZES}
            value={form.teamSize}
            onChange={(v) => { set("teamSize", v); touch("teamSize"); }}
            icon={Users}
            error={visibleError("teamSize")}
          />
        </FieldWrapper>

        <FieldWrapper id={id("interest")} label="Area of Interest" required error={visibleError("interest")}>
          <SelectInput
            id={id("interest")}
            placeholder="Select a program"
            options={INTERESTS}
            value={form.interest}
            onChange={(v) => { set("interest", v); touch("interest"); }}
            icon={Sparkles}
            error={visibleError("interest")}
          />
        </FieldWrapper>
      </div>

      {/* Message */}
      <FieldWrapper id={id("message")} label="Message" error={visibleError("message")}>
        <div className="relative">
          <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
          <textarea
            id={id("message")}
            rows={4}
            placeholder="Tell us about your team's learning goals, current challenges, or any specific requirements…"
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            onBlur={() => touch("message")}
            disabled={isLoading}
            className={cn(
              inputBase,
              "pl-10 resize-none",
              visibleError("message")
                ? "border-red-400 focus:ring-red-400/60 focus:border-red-400"
                : "border-neutral-200 hover:border-neutral-300"
            )}
          />
        </div>
        <div className="text-right">
          <span
            className={cn(
              "text-xs",
              form.message.length > 950 ? "text-red-500" : "text-neutral-400"
            )}
          >
            {form.message.length}/1,000
          </span>
        </div>
      </FieldWrapper>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className={cn(
          "mt-1 w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200",
          "bg-primary-700 text-white hover:bg-primary-800 shadow-sm hover:shadow-md",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400",
          "disabled:opacity-70 disabled:cursor-not-allowed",
          !isLoading && "hover:-translate-y-0.5 active:translate-y-0"
        )}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            Get My Free Consultation
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-neutral-400">
        No spam, ever. Your data is safe and will never be shared with third parties.
      </p>
    </form>
  );
}
