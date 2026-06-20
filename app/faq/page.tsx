export default function FAQPage() {
  const faqs = [
    {
      q: "What services does Kindred Konnections provide?",
      a: "We offer compassionate residential care including assistance with daily living, medication management, wellness checks, nutritious meals, and engaging daily activities.",
    },
    {
      q: "How does the admissions process work?",
      a: "You can start by filling out our admissions form online. Once submitted, our team will reach out to schedule a consultation and walk you through next steps.",
    },
    {
      q: "Can families visit residents?",
      a: "Absolutely! Family visits are encouraged. We coordinate flexible visiting hours so loved ones can stay connected and involved.",
    },
    {
      q: "Is Kindred Konnections licensed?",
      a: "Yes. Our facility and staff meet all state licensing and training requirements to ensure the highest standards of care and safety.",
    },
    {
      q: "Do you accept insurance or private pay?",
      a: "We accept private pay and can help families explore long-term care coverage options or other available financial assistance programs.",
    },
  ];

  return (
    <main className="container-kc section-pad">
      <h1 className="text-3xl font-semibold text-kc-navy">Frequently Asked Questions</h1>
      <p className="mt-3 text-gray-600 max-w-2xl">
        Find answers to the most common questions families ask. If you don’t see what you’re looking for, please{" "}
        <a href="/contact" className="text-kc-teal underline hover:text-kc-navy">contact us</a>.
      </p>

      <div className="mt-10 grid gap-4">
        {faqs.map(({ q, a }) => (
          <details
            key={q}
            className="group card p-6 border border-gray-200 rounded-2xl transition-all duration-200 hover:shadow-md"
          >
            <summary className="text-lg font-medium text-kc-navy cursor-pointer flex justify-between items-center">
              {q}
              <span className="text-kc-teal group-open:rotate-180 transition-transform">⌃</span>
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}