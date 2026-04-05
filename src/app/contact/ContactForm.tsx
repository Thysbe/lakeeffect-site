"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "General", message: "" });

  const subjects = ["Booking", "Press", "Demos", "General"];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    // Placeholder: replace with actual form submission
    await new Promise((r) => setTimeout(r, 1000));
    setState("success");
  }

  const inputClass = [
    "w-full bg-transparent border-b border-shore px-0 py-3",
    "text-[0.8rem] text-snow placeholder-mist/50 outline-none",
    "focus:border-lake transition-colors duration-200",
    "appearance-none rounded-none",
  ].join(" ");

  const labelClass = "block text-[0.62rem] tracking-[0.25em] uppercase text-lake mb-2";

  if (state === "success") {
    return (
      <div className="py-16">
        <p
          className="font-display uppercase"
          style={{
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: "oklch(93% 0.012 218)",
          }}
        >
          Message sent.
        </p>
        <p
          className="text-[0.75rem] text-mist mt-4 leading-relaxed"
          style={{ fontFamily: "var(--font-space), sans-serif" }}
        >
          We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10" noValidate>
      <div>
        <label htmlFor="name" className={labelClass} style={{ fontFamily: "var(--font-space), sans-serif" }}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className={inputClass}
          style={{ fontFamily: "var(--font-space), sans-serif" }}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass} style={{ fontFamily: "var(--font-space), sans-serif" }}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={inputClass}
          style={{ fontFamily: "var(--font-space), sans-serif" }}
        />
      </div>

      <div>
        <label htmlFor="subject" className={labelClass} style={{ fontFamily: "var(--font-space), sans-serif" }}>
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
          style={{ fontFamily: "var(--font-space), sans-serif" }}
        >
          {subjects.map((s) => (
            <option key={s} value={s} style={{ background: "oklch(10% 0.028 246)" }}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass} style={{ fontFamily: "var(--font-space), sans-serif" }}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="What's on your mind?"
          className={`${inputClass} resize-none`}
          style={{ fontFamily: "var(--font-space), sans-serif" }}
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="font-display uppercase tracking-[0.1em] text-night bg-snow hover:bg-ice disabled:bg-shore disabled:text-mist transition-colors duration-200 px-10 py-4 text-sm cursor-pointer disabled:cursor-not-allowed"
        style={{ fontWeight: 700, letterSpacing: "0.08em" }}
      >
        {state === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
