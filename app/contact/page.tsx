"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="container-kc section-pad">
      {/* Intro */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-kc-navy">Get In Touch</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
          Whether you’re exploring admissions or just have a few questions, we’d love to hear from you.
        </p>
      </div>

      {/* Form Card */}
      <div className="mt-10 mx-auto max-w-2xl card p-8">
        <form onSubmit={onSubmit} className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-kc-navy mb-1" htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-gray-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-kc-teal/40 focus:border-kc-teal"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-kc-navy mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-gray-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-kc-teal/40 focus:border-kc-teal"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-kc-navy mb-1" htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              className="w-full rounded-xl border border-gray-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-kc-teal/40 focus:border-kc-teal"
              placeholder="(555) 555-5555"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-kc-navy mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full rounded-xl border border-gray-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-kc-teal/40 focus:border-kc-teal"
              placeholder="How can we help?"
            />
          </div>

          <div className="flex items-center gap-4">
            <button type="submit" className="btn-primary px-6 py-3 text-base">
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Sent!"
                : "Send Message"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
            )}
          </div>
        </form>
      </div>

      {/* Alt contact */}
      <p className="mt-8 text-sm text-gray-500 text-center">
        You can also reach us directly at{" "}
        <a href="mailto:kianna@kindredkonnections.org" className="text-kc-teal underline">
          kianna@kindredkonnections.org
        </a>
        .
      </p>
    </main>
  );
}
