export default function PrivacyPage() {
  return (
    <main className="container-kc section-pad">
      <h1 className="text-3xl font-semibold text-kc-navy">Privacy & Disclaimers</h1>
      <p className="mt-3 text-gray-600 max-w-2xl">
        At Kindred Konnections, we value your trust and are committed to protecting your privacy.
        This page outlines how we handle personal information, online communications, and disclaimers
        regarding the use of this website.
      </p>

      <section className="mt-10 space-y-6 text-gray-700 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-kc-navy mb-2">1 Information We Collect</h2>
          <p>
            We may collect limited personal information such as your name, phone number, and email
            address when you contact us or complete forms on our site. This information is used solely
            to respond to inquiries or facilitate admissions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-kc-navy mb-2">2 How We Use Your Information</h2>
          <p>
            Submitted information is used for communication, coordination of care, and record keeping.
            We never sell or share your personal information with outside organizations without consent,
            except as required by law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-kc-navy mb-2">3 Website Analytics</h2>
          <p>
            We may use tools like Google Analytics to better understand how visitors interact with our
            website. This data is aggregated and does not identify individual users.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-kc-navy mb-2">4 Disclaimers</h2>
          <p>
            The information provided on this website is for general informational purposes only and
            should not be taken as medical or legal advice. Always consult qualified professionals
            regarding specific care or compliance questions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-kc-navy mb-2">5 Updates To This Policy</h2>
          <p>
            We may occasionally update this page to reflect new privacy practices or regulatory changes.
            Updates will be posted here with a revised effective date.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-kc-navy mb-2">6 Contact Us</h2>
          <p>
            If you have questions about our privacy policy or disclaimers, please{" "}
            <a href="/contact" className="text-kc-teal underline hover:text-kc-navy">
              contact us
            </a>
            . We’re happy to provide more details.
          </p>
        </div>
      </section>
    </main>
  );
}
