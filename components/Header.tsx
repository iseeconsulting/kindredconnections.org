"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  function openDropdown(id: string) {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setDd(id);
  }

  function scheduleClose(id: string) {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => {
      setDd((current) => (current === id ? null : current));
    }, 150);
  }

  return (
    <header className="sticky top-0 z-50 bg-kc-gray/70 backdrop-blur border-b border-white/40 shadow-sm">
      <div className="container-kc flex items-center justify-between py-3">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-xl overflow-hidden border border-white/60 bg-white shadow-sm group-hover:shadow-md transition">
            <Image
              src="/kindred-konnections-logo.png"
              alt="Kindred Konnections logo"
              fill
              sizes="56px"
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <span className="block font-semibold tracking-tight text-kc-navy group-hover:text-kc-teal transition-colors">
              Kindred Konnections
            </span>
            <span className="block text-xs text-kc-charcoal/70">Group Home Care</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/#about" className="hover:text-kc-teal transition-colors">
            About
          </Link>
          <Link href="/#services" className="hover:text-kc-teal transition-colors">
            Services
          </Link>
          <Link href="/#admissions" className="hover:text-kc-teal transition-colors">
            Admissions
          </Link>
          <Link href="/#faq" className="hover:text-kc-teal transition-colors">
            FAQ
          </Link>

          {/* Info dropdown: privacy + full pages */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown("Info")}
            onMouseLeave={() => scheduleClose("Info")}
          >
            <button
              className="hover:text-kc-teal transition-colors"
              aria-haspopup="menu"
              aria-expanded={dd === "Info"}
              onFocus={() => openDropdown("Info")}
              onBlur={() => scheduleClose("Info")}
            >
              More ▾
            </button>
            {dd === "Info" && (
              <div
                className="absolute left-0 z-40 mt-2 w-64 rounded-xl border bg-white shadow-lg p-2"
                onMouseEnter={() => openDropdown("Info")}
                onMouseLeave={() => scheduleClose("Info")}
              >
                <Link href="/privacy" className="block rounded-lg px-3 py-2 text-sm hover:bg-kc-gray" onFocus={() => openDropdown("Info")}>
                  Privacy &amp; Disclaimers
                </Link>
                <Link href="/resources" className="block rounded-lg px-3 py-2 text-sm hover:bg-kc-gray" onFocus={() => openDropdown("Info")}>
                  Resources (full page)
                </Link>
                <Link href="/services" className="block rounded-lg px-3 py-2 text-sm hover:bg-kc-gray" onFocus={() => openDropdown("Info")}>
                  Services (full page)
                </Link>
                <Link href="/about" className="block rounded-lg px-3 py-2 text-sm hover:bg-kc-gray" onFocus={() => openDropdown("Info")}>
                  About (full page)
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/#contact"
            className="rounded-xl bg-kc-navy text-white px-4 py-2 hover:bg-kc-teal transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden h-9 w-9 grid place-items-center rounded-lg border border-kc-charcoal/20 text-kc-navy bg-white/80"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white/90 backdrop-blur">
          <div className="container-kc py-3 flex flex-col gap-1">
            <Link href="/#about" onClick={() => setOpen(false)} className="py-2">
              About
            </Link>
            <Link href="/#services" onClick={() => setOpen(false)} className="py-2">
              Services
            </Link>
            <Link href="/#admissions" onClick={() => setOpen(false)} className="py-2">
              Admissions
            </Link>
            <Link href="/#faq" onClick={() => setOpen(false)} className="py-2">
              FAQ
            </Link>

            {/* Collapsible More group */}
            <details className="py-2">
              <summary className="cursor-pointer text-kc-navy">More</summary>
              <div className="pl-3 mt-2 flex flex-col gap-2">
                <Link href="/privacy" onClick={() => setOpen(false)} className="text-sm text-gray-700">
                  Privacy &amp; Disclaimers
                </Link>
                <Link href="/resources" onClick={() => setOpen(false)} className="text-sm text-gray-700">
                  Resources (full page)
                </Link>
                <Link href="/services" onClick={() => setOpen(false)} className="text-sm text-gray-700">
                  Services (full page)
                </Link>
                <Link href="/about" onClick={() => setOpen(false)} className="text-sm text-gray-700">
                  About (full page)
                </Link>
              </div>
            </details>

            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-kc-navy text-white px-4 py-2 text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
