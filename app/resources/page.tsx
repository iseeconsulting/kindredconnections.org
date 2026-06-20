import Link from "next/link";

const guides = [
  {
    title: "Admissions Starter Guide",
    description: "Step-by-step overview of our intake call, assessment, and transition planning timeline.",
    href: "/admissions",
    cta: "Review Admissions",
    available: true,
  },
  {
    title: "Preparing for Move-In",
    description: "Packing tips, medication coordination, and what to expect on arrival day.",
    href: null,
    cta: "Guide coming soon",
    available: false,
  },
  {
    title: "Family Communication Checklist",
    description: "How we share updates, schedule visits, and collaborate with your support network.",
    href: null,
    cta: "Checklist coming soon",
    available: false,
  },
];

const externalResources = [
  {
    title: "Family Caregiver Alliance",
    description: "Education, respite options, and support groups for caregivers.",
    href: "https://www.caregiver.org/",
  },
  {
    title: "Disability Hub MN",
    description: "Eligibility guidance, benefits navigation, and planning tools for Minnesotans.",
    href: "https://disabilityhubmn.org/",
  },
  {
    title: "National Alliance on Mental Illness (NAMI)",
    description: "Mental health education, helplines, and peer support resources.",
    href: "https://www.nami.org/Home",
  },
];

export default function ResourcesPage() {
  return (
    <main className="container-kc section-pad">
      <h1 className="text-3xl font-semibold text-kc-navy">Resources</h1>
      <p className="mt-3 text-gray-600 max-w-2xl">
        Tools and references for families, case managers, and caregivers partnering with Kindred Konnections.
        Let us know what else would be helpful and we’ll build it for you—{" "}
        <Link href="/contact" className="text-kc-teal underline hover:text-kc-navy">
          contact us
        </Link>{" "}
        anytime.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-kc-navy">Guides & Checklists</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <div key={guide.title} className="card flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="font-medium text-kc-navy">{guide.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{guide.description}</p>
              </div>
              {guide.available ? (
                <Link href={guide.href ?? "#"} className="btn-outline mt-6 inline-flex">
                  {guide.cta}
                </Link>
              ) : (
                <span className="mt-6 inline-flex rounded-full bg-kc-gray px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-kc-charcoal/70">
                  {guide.cta}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-kc-navy">Helpful External Resources</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {externalResources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noreferrer"
              className="card p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-medium text-kc-navy">{resource.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{resource.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-kc-teal underline-offset-4 hover:underline">
                Open link
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
