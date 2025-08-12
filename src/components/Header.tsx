"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems: { label: string; href: string }[] = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Before & After", href: "#before-after" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Team", href: "#team" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="container-default flex h-16 items-center justify-between gap-4">
        <Link href="#" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="O.M. Design Group" width={180} height={48} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-accent transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary">Consultation</a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-black/10 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3 18H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open ? (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="container-default grid gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full text-center">Consultation</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}


