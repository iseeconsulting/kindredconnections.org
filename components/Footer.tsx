import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/40 bg-kc-navy text-white">
      <div className="container-kc py-12 flex flex-col md:flex-row justify-between gap-8">
        <div className="flex items-start gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-white/40 bg-white/80">
            <Image
              src="/kindred-konnections-logo.png"
              alt="Kindred Konnections logo"
              fill
              sizes="64px"
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="font-semibold text-xl tracking-tight">Kindred Konnections</h3>
            <p className="text-sm text-white/70 mt-2 max-w-sm">
              A nurturing group home anchored in heart-first care, meaningful routines, and true
              Konnections for every resident and family.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 text-sm text-white/80">
          <div className="flex flex-col gap-2">
            <span className="uppercase text-xs tracking-[0.2em] text-white/60">Explore</span>
            <Link href="/services" className="hover:text-kc-teal transition-colors">
              Services
            </Link>
            <Link href="/admissions" className="hover:text-kc-teal transition-colors">
              Admissions
            </Link>
            <Link href="/resources" className="hover:text-kc-teal transition-colors">
              Resources
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="uppercase text-xs tracking-[0.2em] text-white/60">Connect</span>
            <Link href="/about" className="hover:text-kc-teal transition-colors">
              Our Story
            </Link>
            <Link href="/faq" className="hover:text-kc-teal transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-kc-teal transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-kc py-4 text-xs text-white/60 text-center md:text-left">
          © {year} Kindred Konnections. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
