"use client";

import { FormEvent, ReactNode, useState } from "react";
import { programs } from "@/data/programs";
import { school } from "@/data/school";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200";

export default function AdmissionForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [renderedAt] = useState(() => Date.now());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, formRenderedAt: renderedAt }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section id="admissions" className="section-scroll-offset bg-mint-100/40 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Admissions"
          title="Admission Enquiry"
          subtitle="Fill in the form below and our team will get in touch with you shortly."
        />

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 gap-5 rounded-3xl bg-white p-6 shadow-soft-lg sm:grid-cols-2 sm:p-10"
        >
          {/* Honeypot field — hidden from real users, catches simple bots */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <Field label="Parent Name" required>
            <input required name="parentName" type="text" className={inputClasses} placeholder="e.g. Priya Sharma" />
          </Field>

          <Field label="Child Name" required>
            <input required name="childName" type="text" className={inputClasses} placeholder="Child's full name" />
          </Field>

          <Field label="Date of Birth">
            <input name="dateOfBirth" type="date" className={inputClasses} />
          </Field>

          <Field label="Class Interested In" required>
            <select required name="classInterested" defaultValue="" className={inputClasses}>
              <option value="" disabled>
                Select a program
              </option>
              {programs.map((program) => (
                <option key={program.slug} value={program.name}>
                  {program.name} ({program.ageRange})
                </option>
              ))}
            </select>
          </Field>

          <Field label="Phone Number" required>
            <input required name="phone" type="tel" className={inputClasses} placeholder="10-digit mobile number" />
          </Field>

          <Field label="WhatsApp Number">
            <input name="whatsapp" type="tel" className={inputClasses} placeholder="If different from phone" />
          </Field>

          <Field label="Email" className="sm:col-span-2">
            <input name="email" type="email" className={inputClasses} placeholder="you@example.com" />
          </Field>

          <Field label="Message" className="sm:col-span-2">
            <textarea
              name="message"
              rows={4}
              className={inputClasses}
              placeholder="Tell us anything else you'd like us to know"
            />
          </Field>

          <div className="sm:col-span-2">
            <Button type="submit" variant="primary" className="w-full sm:w-auto">
              {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
            </Button>
          </div>

          {status === "success" ? (
            <p className="rounded-2xl bg-mint-100 p-4 text-sm font-medium text-mint-700 sm:col-span-2">
              Thank you for contacting {school.name}. Our team will get in
              touch with you shortly.
            </p>
          ) : null}

          {status === "error" ? (
            <p className="rounded-2xl bg-blossom-100 p-4 text-sm font-medium text-blossom-700 sm:col-span-2">
              {errorMessage}
            </p>
          ) : null}
        </form>
      </Container>
    </section>
  );
}

function Field({
  label,
  required,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-bold text-ink">
        {label}
        {required ? <span className="text-tangerine-500"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
