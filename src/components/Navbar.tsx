"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/book", label: "Book Santa" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-santa-red text-white shadow-lg sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-[family-name:var(--font-serif)] tracking-wide">
          🎅 Santa Clause
        </Link>
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
        <div className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-santa-gold transition-colors font-medium">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-santa-red border-t border-white/20 px-4 pb-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-2 hover:text-santa-gold transition-colors font-medium">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
