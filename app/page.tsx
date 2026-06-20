import Link from "next/link";

import Reveal from "../components/Reveal";
import Section from "../components/Section";

const heroHighlights = [
  "Licensed 24/7 awake team",
  "Person-centered daily rhythms",
  "Family collaboration at every step",
];

const quickFacts = [
  { label: "Residents", value: "6–8", helper: "Boutique capacity for familiarity" },
  { label: "Support", value: "24/7", helper: "Awake, crisis-trained team" },
  { label: "Care Plans", value: "Tailored", helper: "Co-written with families" },
];

const services = [
  {
    title: "Daily Living & Skills",
    bullets: [
      "Support with bathing, dressing, grooming, and mobility",
      "Meal prep, hydration cues, and nutritional monitoring",
      "Coaching for ADLs/IADLs to build confidence",
    ],
  },
  {
    title: "Health & Wellness Coordination",
    bullets: [
      "Medication administration, refills, and documentation",
      "Vitals, wellness check-ins, and appointment coordination",
      "Behavioral health collaboration and crisis prevention planning",
    ],
  },
  {
    title: "Community & Meaningful Days",
    bullets: [
      "Creative arts, music, movement, and sensory-friendly activities",
      "Outings for appointments, recreation, and volunteerism",
      "Quiet spaces and sensory supports for calm re-centering",
    ],
  },
  {
    title: "Family Collaboration",
    bullets: [
      "Regular care plan reviews and shared goal tracking",
      "Flexible visiting hours and family-inclusive events",
      "Transparent updates by call, email, or secure messaging",
    ],
  },
];

const carePillars = [
  {
    title: "Trauma-Informed & Trained",
    description:
      "Crisis-prevention, person-centered, and ongoing coaching keep support consistent and calm.",
  },
  {
    title: "Individualized Plans",
    description:
      "Co-authored with residents, families, and case managers; reviewed and updated as needs change.",
  },
  {
    title: "Sensory-Aware Home",
    description:
      "Accessible, soothing spaces with clear routines that reduce overwhelm and promote choice.",
  },
];

const steps = [
  {
    title: "Connection Call",
    description: "We schedule within 48 hours to confirm fit, timeline, and funding details.",
  },
  {
    title: "Home & Fit Assessment",
    description: "Tour (virtual or in-person), review supports, and gather documentation for a transition plan.",
  },
  {
    title: "Transition & Welcome",
    description: "Coordinate move-in, align with providers, and keep families updated as everyone settles.",
  },
];

const faq = [
  {
    q: "What services do you provide?",
    a: "Compassionate residential care: daily living support, medication management, wellness checks, nutritious meals, and engaging activities.",
  },
  {
    q: "How does admissions work?",
    a: "Start with a quick call or form. We then schedule a consultation to review needs and outline next steps together.",
  },
  {
    q: "Can families visit?",
    a: "Yes—flexible visiting hours and regular updates keep loved ones connected.",
  },
  {
    q: "Are you licensed?",
    a: "Yes. The home and team meet state licensing and training requirements.",
  },
  {
    q: "What funding do you accept?",
    a: "Private pay and we’ll help explore waiver or other coverage options when available.",
  },
];

export default function HomePage() {
  return (
    <main className="text-kc-charcoal">
      {/* Hero */}
      <Section className="relative overflow-hidden bg-kc-navy text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-kc-navy via-black/60 to-kc-teal/35 opacity-90" />
          <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-kc-teal/25 blur-3xl" />
        </div>

        <div className="relative z-10 container-kc section-pad grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              Welcome to Kindred Konnections
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow">
              Heart-Led Residential Care That Feels Like Home.
            </h1>
            <p className="max-w-2xl text-white/85 text-lg leading-relaxed">
              Safe, boutique group home care for individuals with developmental disabilities and behavioral health
              needs—anchored in calm routines, awake supervision, and transparent family communication.
            </p>
            <div className="flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="#admissions" className="btn-primary hover-lift">
                Start Admissions
              </Link>
              <Link
                href="#contact"
                className="btn-outline hover-lift border-2 border-white text-white hover:bg-white hover:text-kc-navy"
              >
                Talk With Us
              </Link>
            </div>
          </div>

          <Reveal>
            <div className="rounded-3xl border border-white/15 bg-white/20 p-6 shadow-lg backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">At a glance</p>
              <dl className="mt-5 grid gap-4 md:grid-cols-3">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="min-w-0 rounded-2xl border border-white/15 bg-white/10 p-4">
                    <dt className="text-[11px] uppercase tracking-[0.2em] text-white/65">{fact.label}</dt>
                    <dd className="mt-2 text-[clamp(0.95rem,2.4vw,1.25rem)] font-semibold leading-tight whitespace-nowrap">
                      {fact.value}
                    </dd>
                    <p className="text-xs text-white/70">{fact.helper}</p>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm text-white/75">
                Predictable rhythms, open visits, and proactive updates keep residents and families connected.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="bg-white">
        <div className="container-kc section-pad grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-kc-teal">About</p>
              <h2 className="text-3xl font-semibold text-kc-navy">A Calm, Heart-Led Home.</h2>
              <p className="text-gray-700 leading-relaxed">
                We provide a boutique residential setting for adults and transitional-age youth—combining warm routines,
                awake supervision, and transparent family partnerships. Residents shape their days with our support, guided
                by safety, dignity, and voice.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 text-sm text-gray-700">
                <div className="rounded-2xl bg-kc-gray p-4 border border-kc-mist">
                  <p className="font-semibold text-kc-navy">Who We Support</p>
                  <p className="mt-1">
                    Developmental disabilities with behavioral health needs who benefit from structure, sensory-aware spaces,
                    and consistent collaboration.
                  </p>
                </div>
                <div className="rounded-2xl bg-kc-gray p-4 border border-kc-mist">
                  <p className="font-semibold text-kc-navy">Family Visibility</p>
                  <p className="mt-1">Open visiting, regular updates, and shared care notes to keep everyone aligned.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-kc-mist bg-kc-gray p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-kc-navy">Our Care Pillars</h3>
              <div className="mt-5 grid gap-4">
                {carePillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-2xl bg-white p-4 shadow-[0_10px_24px_rgba(12,21,38,0.08)]">
                    <p className="text-sm font-semibold text-kc-navy">{pillar.title}</p>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="bg-kc-gray">
        <div className="container-kc section-pad">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold text-kc-navy">Services & Supports</h2>
            <p className="mx-auto max-w-3xl text-gray-700">
              Compassionate caregivers paired with structured, person-centered plans so residents can live, heal, and grow.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Reveal key={service.title}>
                <div className="card h-full bg-white p-6 text-left">
                  <h3 className="text-lg font-semibold text-kc-navy">{service.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700 leading-relaxed">
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

      {/* Admissions */}
      <Section id="admissions" className="bg-white">
        <div className="container-kc section-pad">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold text-kc-navy">Admissions—Fast, Clear, Collaborative</h2>
            <p className="mx-auto max-w-2xl text-gray-700">
              We customize timelines, but the heartbeat is the same: clarity, care, and consistent communication.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <Reveal key={step.title}>
                <div className="card h-full p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-kc-teal">{step.title}</p>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="#contact" className="btn-primary">
              Schedule a Call
            </Link>
            <Link href="/resources" className="btn-outline">
              View Resources
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-kc-gray">
        <div className="container-kc section-pad">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-semibold text-kc-navy">Frequently Asked Questions</h2>
            <p className="text-gray-700">Quick answers your families ask most often.</p>
          </div>

          <div className="mt-8 grid gap-4">
            {faq.map(({ q, a }) => (
              <details key={q} className="group card p-5 bg-white border border-gray-200 rounded-2xl">
                <summary className="cursor-pointer text-lg font-medium text-kc-navy flex justify-between items-center">
                  {q}
                  <span className="text-kc-teal group-open:rotate-180 transition-transform">⌃</span>
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-kc-navy text-white">
        <div className="container-kc section-pad grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Ready To Talk?</h2>
            <p className="text-white/80 leading-relaxed">
              We’ll respond within two business days to schedule a consultation and outline next steps together.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a href="mailto:hello@kindredkonnections.com" className="btn-outline border-white text-white hover:bg-white hover:text-kc-navy">
                Email: hello@kindredkonnections.com
              </a>
            </div>
          </div>

          <Reveal>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Short form</p>
              <p className="mt-3 text-sm text-white/80">
                Prefer the form? Use the contact page and we’ll follow up quickly.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex w-full justify-center rounded-xl bg-white px-4 py-3 text-kc-navy font-semibold hover:bg-kc-teal hover:text-white transition"
              >
                Go to Contact Form
              </Link>
              <p className="mt-3 text-xs text-white/60">
                Need documents for admissions? Bring care summaries, medication lists, provider contacts, and funding details if available.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
