import Link from "next/link";
import Reveal from "../../components/Reveal";
import Section from "../../components/Section";

const steps = [
  {
    title: "1 Connection Call",
    description:
      "Reach out via form, phone, or email. We schedule a conversation within 48 hours to understand needs, timeline, and funding.",
  },
  {
    title: "2 Home & Fit Assessment",
    description:
      "Tour the home (virtual or in-person), review supports, and gather documentation so we can build a personalized transition plan.",
  },
  {
    title: "3 Transition & Welcome",
    description:
      "We coordinate move-in, align schedules with providers, and stay in close contact to ensure residents and families feel at home.",
  },
];

const checklist = [
  "Recent support plan or care summary",
  "Medication list and provider contacts",
  "Funding information (waiver, private pay, or pending)",
  "Important routines, communication needs, and sensory preferences",
];

export const metadata = {
  title: "Admissions | Kindred Konnections",
  description: "Understand our admissions process, what to expect, and how we support your transition.",
};

export default function AdmissionsPage() {
  return (
    <main className="bg-kc-gray">
      <Section className="bg-white">
        <div className="container-kc section-pad text-center space-y-4">
          <h1 className="text-4xl font-semibold text-kc-navy">Admissions At Kindred Konnections</h1>
          <p className="mx-auto max-w-2xl text-gray-600 text-lg">
            We keep admissions personal, transparent, and collaborative. Here’s how we walk beside you from
            the first conversation to a comfortable move-in day.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/contact" className="btn-primary">
              Schedule a Call
            </Link>
            <Link href="/resources" className="btn-outline">
              View Resources
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-kc-gray">
        <div className="container-kc section-pad">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-semibold text-kc-navy">Three Simple Steps</h2>
            <p className="mx-auto max-w-2xl text-gray-700">
              We customize the timeline for every resident, but the heartbeat stays the same—clarity, care,
              and consistent communication.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <Reveal key={step.title}>
                <div className="card h-full p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-kc-teal">
                    {step.title}
                  </p>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-kc section-pad grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div className="rounded-3xl bg-kc-gray p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-kc-navy">What To Gather</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Having these details ready helps us move quickly and tailor supports from day one. If you’re
                unsure where to begin, we’ll walk through it together.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-gray-700">
                {checklist.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl border border-kc-peach bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-kc-navy">During The Transition</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We coordinate introductions, confirm medical supports, and align routines with the resident’s
                preferences. Families receive regular updates, and we adjust the plan as everyone settles in.
              </p>
              <p className="mt-4 text-sm text-gray-600">
                Need a specific accommodation or timeline? Let us know—we’re flexible and will collaborate with
                case managers and providers to get it right.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-kc-navy text-white">
        <div className="container-kc section-pad text-center space-y-4">
          <h2 className="text-3xl font-semibold">We’re Ready When You Are</h2>
          <p className="mx-auto max-w-2xl text-white/80">
            Reach out and we’ll set up the first conversation within two business days. Together we’ll determine
            if Kindred Konnections is the right fit—and if so, create a thoughtful welcome plan.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-kc-navy hover:bg-kc-teal hover:text-white">
            Connect With Our Team
          </Link>
        </div>
      </Section>
    </main>
  );
}
