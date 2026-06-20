"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
};

export default function Reveal({ children, className = "", once = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            if (once) io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    el.classList.add("fade-in");
    io.observe(el);

    return () => io.disconnect();
  }, [once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
