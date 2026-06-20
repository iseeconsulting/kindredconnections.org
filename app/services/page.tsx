import Link from "next/link";

import Reveal from "../../components/Reveal";
import Section from "../../components/Section";

const heroHighlights = [
  "Licensed 24/7 awake staffing",
  "Medication administration & health monitoring",
  "Trauma-informed, person-centered supports",
];

const serviceAreas = [
  {
    title: "Daily Living & Skills",
    summary: "Respectful assistance that keeps routines familiar and empowering.",
    bullets: [
      "Support with bathing, dressing, grooming, and mobility",
      "Meal prep, hydration cues, and nutritional monitoring",
      "Coaching for ADLs/IADLs that builds confidence and independence",
    ],
  },
  {
    title: "Health & Wellness Coordination",
    summary: "Integrated medical oversight in partnership with your providers.",
    bullets: [
      "Medication administration, refills, and documentation",
      "Vitals, wellness check-ins, and appointment coordination",
      "Behavioral health collaboration and crisis prevention planning",
    ],
  },
  {
    title: "Community & Meaningful Days",
    summary: "Engaging activities that honor interests, culture, and sensory needs.",
    bullets: [
      "Creative arts, music therapy moments, and movement groups",
      "Outings for appointments, recreation, and volunteerism",
      "Quiet spaces and sensory supports for calm re-centering",
    ],
  },
  {
    title: "Family & Circle Collaboration",
    summary: "Open communication keeps everyone connected and informed.",
    bullets: [
      "Regular care plan reviews and shared goal tracking",
      "Flexible visiting hours and family-inclusive events",
      "Transparent updates via calls, email, or secure messaging",
    ],
  },
];

const carePillars = [
  {
    title: "Team Training & Expertise",
    description:
      "All staff complete trauma-informed, person-centered, and crisis prevention certifications with ongoing coaching.",
  },
  {
    title: "Individualized Plans",
    description:
      "Plans are co-authored with residents, families, and case managers, reviewed quarterly, and updated whenever needs shift.",
  },
  {
    title: "Safe, Sensory-Aware Home",
    description:
      "Private and shared spaces are thoughtfully arranged for accessibility, soothing lighting, and de-escalation tools.",
  },
];

const dayInLife = [
  {
    time: "Morning",
    detail: "Support with wake-up routines, medication, and a shared breakfast prepared around individual preferences.",
  },
  {
    time: "Midday",
    detail: "Skill-building sessions, provider appointments, and community outings with personalized sensory supports.",
  },
  {
    time: "Evening",
    detail: "Family calls or visits, home-cooked dinner, calming activities, and bedtime assistance that follows resident rhythms.",
  },
];

export const metadata = {
  title: "Services | Kindred Konnections",
  description:
    "Discover the daily living support, health coordination, activities, and family collaboration that shape life at Kindred Konnections.",
};

export default function ServicesPage() {
  return (
    <main className="bg-kc-gray text-kc-charcoal">
      <Section className="bg-white">
        <div className="container-kc section-pad text-center space-y-5">
          <h1 className="text-4xl font-semibold text-kc-navy">Services & Supports</h1>
          <p className="mx-auto max-w-3xl text-gray-700 text-lg leading-relaxed">
            Kindred Konnections pairs compassionate caregivers with structured, person-centered plans so residents
            can live, heal, and grow in a home that feels truly theirs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {heroHighlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-2 rounded-full border border-kc-navy/10 bg-kc-gray px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-kc-charcoal/70"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-kc-gray">
        <div className="container-kc section-pad">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold text-kc-navy">What We Provide Every Day</h2>
            <p className="mx-auto max-w-2xl text-gray-700">
              Each service area blends structure with flexibility, adapting to residents’ preferences, cultural identities,
              and goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {serviceAreas.map((service) => (
              <Reveal key={service.title}>
                <div className="card h-full space-y-4 bg-white p-6 text-left">
                  <div>
                    <h3 className="text-xl font-semibold text-kc-navy">{service.title}</h3>
                    <p className="mt-2 text-sm text-gray-700">{service.summary}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-kc section-pad">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold text-kc-navy">How We Make It Work</h2>
            <p className="mx-auto max-w-2xl text-gray-700">
              Thoughtful care comes from strong systems. These pillars keep our supports consistent, responsive, and transparent.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {carePillars.map((pillar) => (
              <Reveal key={pillar.title}>
                <div className="card h-full bg-kc-gray/60 p-6 text-left">
                  <h3 className="text-lg font-semibold text-kc-navy">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-kc-gray">
        <div className="container-kc section-pad grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
          <Reveal>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-kc-navy">A Day At Kindred Konnections</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Routines provide stability, and personalization keeps them meaningful. Here’s a glimpse into how we weave support
                through the day.
              </p>
              <div className="mt-6 space-y-4">
                {dayInLife.map((item) => (
                  <div key={item.time}>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-kc-teal">{item.time}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="card bg-white p-8 text-center">
              <p className="text-lg font-semibold text-kc-navy">Ready to talk through your needs?</p>
              <p className="mt-3 text-sm text-gray-600">
                Every resident brings a unique story. Let’s design the right services together and set up a thoughtful admission plan.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Connect With Us
                </Link>
                <Link href="/admissions" className="btn-outline">
                  View Admissions Steps
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
