import Image from "next/image";
import Link from "next/link";

import Reveal from "../../components/Reveal";
import Section from "../../components/Section";

const heroPoints = [
  "24/7 awake support team",
  "Holistic behavioral health coordination",
  "Family-first communication and advocacy",
];

const quickFacts = [
  { label: "Licensed & Awake", value: "24/7", helper: "Crisis-trained team on every shift" },
  { label: "Resident Focus", value: "6-8", helper: "Boutique capacity for true familiarity" },
  { label: "Care Plans", value: "Individualized", helper: "Co-written with families & providers" },
];

const coreValues = [
  {
    title: "Dignity",
    description: "We honor the inherent worth of every individual.",
  },
  {
    title: "Compassion",
    description: "We approach every interaction with empathy and care.",
  },
  {
    title: "Empowerment",
    description: "We support individuals in building independence, confidence, and self-direction.",
  },
  {
    title: "Integrity",
    description: "We maintain the highest standards of ethics and professionalism.",
  },
  {
    title: "Connection",
    description: "We foster relationships that promote healing, belonging, and trust.",
  },
];

const safetyStandards = [
  {
    title: "Safety First",
    description: "Trauma-informed care, CPI-trained staff, and protocols for medication, elopement, and crises.",
  },
  {
    title: "Clinical Partnerships",
    description: "Coordination with behavioral health providers, primary care, and specialists to keep everyone aligned.",
  },
  {
    title: "Compliance Ready",
    description: "Documentation, incident reporting, and audits that meet licensing and payer requirements.",
  },
  {
    title: "Family Visibility",
    description: "Transparent updates, shared care notes, and open visiting to keep loved ones in the loop.",
  },
];

const journey = [
  {
    title: "Discover",
    description: "A 15-minute clarity call to confirm fit, answer urgent questions, and outline next steps.",
  },
  {
    title: "Visit & Review",
    description: "Tour the home, meet the awake team, and review safety plans, routines, and sensory needs.",
  },
  {
    title: "Tailor",
    description: "We co-create an intake plan: meds, routines, communication cadence, and transition supports.",
  },
  {
    title: "Welcome Home",
    description: "First 72 hours with extra touchpoints, family check-ins, and a calm settling rhythm.",
  },
];

const services = [
  {
    title: "24/7 Residential Care & Supervision",
    description: "Awake, trained team members ensure safety, comfort, and companionship day and night.",
  },
  {
    title: "Person-Centered Planning",
    description: "Collaborative goal setting that uplifts resident voice and honors preferred routines.",
  },
  {
    title: "Behavioral Health Coordination",
    description: "Integrated supports and professional partnerships that promote emotional wellness.",
  },
  {
    title: "Medication Support",
    description: "Medication administration, health monitoring, and communication with providers.",
  },
  {
    title: "Daily Living Skills",
    description: "Coaching across ADLs and IADLs to nurture confidence and independence.",
  },
  {
    title: "Recreation & Community Life",
    description: "Meaningful activities and outings that inspire joy, belonging, and connection.",
  },
  {
    title: "Family Collaboration",
    description: "Transparent communication, advocacy, and support for the people who love our residents.",
  },
];

export const metadata = {
  title: "About | Kindred Konnections",
  description: "Learn about our mission, vision, and holistic care model for residents and families.",
};

export default function AboutPage() {
  return (
    <main className="bg-kc-gray text-kc-charcoal">
      {/* Hero */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-kc-navy via-[#132946] to-kc-navy text-white">
        <div className="absolute inset-0">
          <div className="absolute -left-32 top-12 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-kc-teal/30 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/30" />
        </div>

        <div className="relative container-kc section-pad grid items-center gap-12 xl:grid-cols-[1.1fr_0.95fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
              About Kindred Konnections
            </span>
            <h1 className="text-4xl md:text-5xl leading-tight font-normal">
              A Calm, Heart-Led Group Home Where Residents Feel Seen, Safe, and Genuinely At Home.
            </h1>
            <p className="max-w-2xl text-lg text-white/85 leading-relaxed">
              We provide a boutique residential setting for adults and transitional-age youth with developmental disabilities and behavioral health needs - combining warm routines, awake supervision, and transparent family partnerships.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-white/75">
              {heroPoints.map((point) => (
                <span key={point} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  {point}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact" className="btn-primary hover-lift">
                Schedule a Tour
              </Link>
              <Link
                href="/admissions"
                className="btn-outline hover-lift border-white text-white hover:bg-white hover:text-kc-navy"
              >
                View Admissions
              </Link>
            </div>
          </div>

          <Reveal>
            <div className="rounded-[28px] border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/70">At a Glance</p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                {quickFacts.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <dt className="text-[11px] uppercase tracking-[0.24em] text-white/65">{item.label}</dt>
                    <dd className="mt-2 text-2xl font-semibold">{item.value}</dd>
                    <p className="text-xs text-white/70">{item.helper}</p>
                  </div>
                ))}
              </dl>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/80">
                “Residents deserve beauty, predictability, and voice. We design every routine with that in mind.”
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-10 top-20 h-64 w-64 rounded-full bg-kc-peach/50 blur-3xl" />
          <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-kc-mist blur-3xl" />
        </div>
        <div className="relative container-kc section-pad">
          <div className="mx-auto max-w-4xl text-center space-y-4">
            <h2 className="text-3xl text-kc-navy">Why We Exist</h2>
            <p className="text-gray-700">
              Our mission and vision guide every Konnection we nurture - inside the home and across the community we serve.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-kc-mist bg-white p-8 shadow-[0_12px_34px_rgba(15,28,46,0.08)]">
                <h3 className="text-2xl text-kc-navy">Mission</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Deliver compassionate, person-centered, 24-hour care that honors every resident&apos;s dignity, preferences, and pace - so they can heal, grow, and belong in a safe home.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-3xl border border-kc-mist bg-gradient-to-br from-kc-peach/80 to-white p-8 shadow-[0_12px_34px_rgba(15,28,46,0.08)]">
                <h3 className="text-2xl text-kc-navy">Vision</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Build a model group home where individuals with diverse abilities experience true choice, trusted relationships, and seamless access to supportive services.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Who & How */}
      <Section className="bg-kc-gray/70">
        <div className="container-kc section-pad grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="rounded-3xl bg-white p-8 shadow-[0_14px_36px_rgba(12,21,38,0.1)] border border-kc-mist">
              <h2 className="text-2xl text-kc-navy">Who We Support</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Adults and transitional-age youth with developmental disabilities and co-occurring behavioral health needs who benefit from structure, compassionate supervision, and sensory-aware spaces.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-gray-700">
                <div className="rounded-2xl bg-kc-gray p-4 border border-kc-mist">
                  <p className="font-semibold text-kc-navy">Stability</p>
                  <p className="mt-1">Predictable routines with choice points woven in.</p>
                </div>
                <div className="rounded-2xl bg-kc-gray p-4 border border-kc-mist">
                  <p className="font-semibold text-kc-navy">Voice &amp; Identity</p>
                  <p className="mt-1">Communication supports, sensory tools, and respectful language.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative">
              <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-kc-peach/70 blur-2xl" />
              <div className="absolute -right-6 -bottom-10 h-32 w-32 rounded-full bg-kc-teal/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-kc-mist bg-white/80 backdrop-blur shadow-[0_14px_36px_rgba(12,21,38,0.12)]">
                <Image
                  src="/hero-family.jpg"
                  alt="Residents and caregivers spending time together in the living room"
                  width={960}
                  height={640}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/35" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 text-sm text-kc-charcoal shadow-lg backdrop-blur">
                  <p className="font-semibold text-kc-navy">How We Care</p>
                  <ul className="mt-2 space-y-2">
                    <li>• Trauma-informed, CPI-trained team on every shift</li>
                    <li>• Collaborative planning with families and providers</li>
                    <li>• Community outings, therapies, and sensory-friendly spaces</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="bg-white">
        <div className="container-kc section-pad">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl text-kc-navy">Our Core Values</h2>
            <p className="mx-auto max-w-2xl text-gray-700">
              These guiding principles shape every resident experience, family conversation, and team decision in our home.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {coreValues.map((value) => (
              <Reveal key={value.title}>
                <div className="group rounded-3xl border border-kc-mist bg-white p-6 shadow-[0_12px_34px_rgba(15,28,46,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(15,28,46,0.14)]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-kc-teal/15 text-kc-navy font-semibold">
                    {value.title.charAt(0)}
                  </div>
                  <h3 className="text-lg font-semibold text-kc-navy">{value.title}</h3>
                  <p className="mt-3 text-sm text-gray-700">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Safety & Trust */}
      <Section className="bg-kc-gray">
        <div className="container-kc section-pad">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl text-kc-navy">Safety, Compliance, &amp; Trust</h2>
            <p className="mx-auto max-w-3xl text-gray-700">
              Families and case managers need confidence that safety, documentation, and collaboration are built into every shift.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {safetyStandards.map((item) => (
              <Reveal key={item.title}>
                <div className="card h-full">
                  <div className="border-l-4 border-kc-teal pl-4">
                    <h3 className="text-lg font-semibold text-kc-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-kc-gray">
        <div className="container-kc section-pad">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl text-kc-navy">Services Offered</h2>
            <p className="mx-auto max-w-2xl text-gray-700">
              Comprehensive supports that balance daily living rhythms, clinical coordination, and meaningful community involvement.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Reveal key={service.title}>
                <div className="card h-full space-y-3 bg-white p-6">
                  <h3 className="text-lg font-semibold text-kc-navy">{service.title}</h3>
                  <p className="text-sm text-gray-700">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Journey */}
      <Section className="bg-white">
        <div className="container-kc section-pad">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl text-kc-navy">Your Intake Journey</h2>
            <p className="mx-auto max-w-2xl text-gray-700">
              A clear, supported path so residents and families feel prepared before day one.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, idx) => (
              <Reveal key={step.title}>
                <div className="rounded-3xl border border-kc-mist bg-kc-gray/50 p-6 shadow-[0_12px_34px_rgba(15,28,46,0.08)]">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-kc-teal/15 text-kc-navy font-semibold">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-kc-navy">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <div className="container-kc section-pad">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-kc-navy via-[#132946] to-kc-teal text-white p-10 shadow-2xl relative">
              <div className="absolute inset-0 opacity-20" aria-hidden>
                <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-white/40 blur-3xl" />
                <div className="absolute right-8 bottom-0 h-56 w-56 rounded-full bg-white/30 blur-3xl" />
              </div>
              <div className="relative">
                <h2 className="text-3xl font-normal">Let&apos;s Build The Next Konnection</h2>
                <p className="mt-4 max-w-2xl text-white/85 leading-relaxed">
                  Families, care coordinators, and referral partners trust Kindred Konnections to deliver transparent, compassionate support. We&apos;re ready to walk beside you at every step.
                </p>
                <p className="mt-6 text-sm text-white/75">
                  Reach out through our{" "}
                  <Link href="/contact" className="font-medium text-white underline-offset-4 hover:underline">
                    contact form
                  </Link>{" "}
                  or call us directly to begin building a Konnection.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary hover-lift">
                    Start a Conversation
                  </Link>
                  <Link href="/faq" className="btn-outline hover-lift border-white text-white hover:bg-white hover:text-kc-navy">
                    View FAQs
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
