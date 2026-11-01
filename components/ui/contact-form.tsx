"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`IEEE CSDE enquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${site.contacts.general.email}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  return (
    <form onSubmit={onSubmit} className={cn("contact-sheet", className)}>
      <div className="contact-sheet-head">
        <span>Message</span>
        <span>CSDE {site.focusYear}</span>
      </div>
      <h3 className="contact-sheet-title">Send a message</h3>
      <p className="contact-sheet-note">Your mail client will open with the enquiry ready to send.</p>
      <div className="contact-sheet-pair">
        <div>
          <label htmlFor="name" className="mb-1 block font-mono text-[11px] tracking-[0.12em] text-accent uppercase">
            Name
          </label>
          <input id="name" name="name" autoComplete="name" className="field-input" suppressHydrationWarning />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block font-mono text-[11px] tracking-[0.12em] text-accent uppercase">
            E-mail
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field-input" suppressHydrationWarning />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block font-mono text-[11px] tracking-[0.12em] text-accent uppercase">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} className="field-input" suppressHydrationWarning />
      </div>
      <button type="submit" className="btn-primary group" suppressHydrationWarning>
        Send message
        <span className="icon-nudge">
          <ArrowRight size={16} />
        </span>
      </button>
      {status === "ready" ? (
        <p className="text-sm text-muted">Your mail client should open with the message ready to send.</p>
      ) : null}
    </form>
  );
}
