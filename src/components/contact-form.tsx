"use client";

import { useState } from "react";
import { ArrowUpRight } from "@/components/ui";
import { skills, site } from "@/lib/site";

const field =
  "mt-2 h-12 w-full rounded-xl border border-line bg-bone px-4 text-[15px] text-ink placeholder:text-ink/50 focus:border-copper/60 focus:outline-none";
const label =
  "font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/70";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      "Namaste, I'd like to know more about a course at We Train You.",
      name.trim() && `Name: ${name.trim()}`,
      phone.trim() && `Phone: ${phone.trim()}`,
      course && `Interested in: ${course}`,
      message.trim() && `Message: ${message.trim()}`,
    ].filter(Boolean);

    window.open(
      `${site.whatsapp.split("?")[0]}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-line bg-bone p-6 sm:p-8"
    >
      <p className="font-display text-[clamp(1.35rem,2vw,1.75rem)] leading-tight">
        Tell us what you want to learn.
      </p>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink/70">
        Fill this in and it opens WhatsApp with the message ready to send — no
        account, no waiting for an email.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={label}>
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Full name"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className={label}>
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="98XXXXXXXX"
            className={field}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-course" className={label}>
            Course
          </label>
          <select
            id="contact-course"
            name="course"
            value={course}
            onChange={(event) => setCourse(event.target.value)}
            className={field}
          >
            <option value="">Not sure yet</option>
            {skills.map((skill) => (
              <option key={skill.slug} value={skill.name}>
                {skill.name}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={label}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Which batch are you looking at? Any questions about fees or timing?"
            className={`${field} h-auto resize-none py-3 leading-relaxed`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brown px-6 text-sm font-semibold text-bone transition-colors hover:bg-copper sm:w-auto"
      >
        Send on WhatsApp
        <ArrowUpRight className="h-4 w-4" />
      </button>
      <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/70">
        Opens WhatsApp · {site.phones[0]}
      </p>
    </form>
  );
}
