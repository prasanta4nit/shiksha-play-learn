"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/nav";
import { school } from "@/data/school";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-soft backdrop-blur-md"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <Container className="flex items-center justify-between py-3">
        <Link href="#home" className="flex items-center gap-2">
          <Image
            src={school.logo.image}
            alt={school.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover shadow-soft"
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold text-tangerine-700">
              {school.logo.line1}
            </span>
            <span className="block text-[11px] font-bold tracking-widest text-sky-700">
              {school.logo.line2} {school.logo.line3}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-tangerine-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#admissions" variant="primary">
            Enquire Now
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 lg:hidden"
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-sky-100 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-ink-soft hover:bg-sky-50 hover:text-tangerine-500"
              >
                {link.label}
              </Link>
            ))}
            <Button href="#admissions" variant="primary" className="mt-2 w-full">
              Enquire Now
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
