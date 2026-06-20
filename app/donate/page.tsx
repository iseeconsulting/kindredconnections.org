"use client";

import Link from "next/link";

const givingOptions = [
  {
    title: "Resident Essentials Fund",
    description:
      "Helps us provide nourishing meals, personal care items, and engaging supplies tailored to each resident.",
  },
  {
    title: "Home Upgrades & Accessibility",
    description:
      "Supports adaptive equipment, sensory-friendly furnishings, and outdoor improvements that keep our home welcoming.",
  },
  {
    title: "Family & Community Experiences",
    description:
      "Covers gatherings, transportation, and special moments that keep loved ones connected.",
  },
];

export default function DonatePage() {
  return (
    <main className="container-kc section-pad">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-kc-navy">Support Kindred Konnections</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Your generosity sustains heart-led care. Every contribution directly enhances daily life for
          residents and the families who trust us.
        </p>
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {givingOptions.map((option) => (
          <div key={option.title} className="card h-full p-6 text-left">
            <h2 className="text-xl font-semibold text-kc-navy">{option.title}</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">{option.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-[1fr_0.85fr] md:items-center">
        <div className="rounded-3xl bg-kc-gray p-8 shadow-sm text-left">
          <h2 className="text-2xl font-semibold text-kc-navy">Ways To Give Today</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-700 leading-relaxed">
            <li>
              <span className="font-semibold text-kc-navy">Online contribution:</span> Email{" "}
              <a href="mailto:giving@kindredkonnections.com" className="text-kc-teal underline-offset-4 hover:underline">
                giving@kindredkonnections.com
              </a>{" "}
              and we’ll send a secure payment link.
            </li>
            <li>
              <span className="font-semibold text-kc-navy">Mail a check:</span> Kindred Konnections,
              Attn: Giving, 123 Care Lane, St. Paul, MN 55101.
            </li>
            <li>
              <span className="font-semibold text-kc-navy">Corporate or in-kind gifts:</span> Reach out to
              coordinate sponsorships, volunteer days, or supply drives.
            </li>
          </ul>
        </div>

        <div className="card p-8 text-center">
          <p className="text-lg font-semibold text-kc-navy">Ready to start a conversation?</p>
          <p className="mt-3 text-sm text-gray-600">
            We’ll tailor giving opportunities to align with your goals and share impact updates along the way.
          </p>
          <Link href="/contact" className="btn-primary hover-lift mt-6 inline-flex px-8 py-3 text-base">
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}
