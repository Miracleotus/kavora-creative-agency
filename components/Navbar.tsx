"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 shrink-0">
            <rect width="32" height="32" rx="6" fill="#0F172A"/>
            <path d="M4 24 L4 28 L28 28 L28 24 L22 13 L16 19 L10 13 Z" fill="#2DD4BF"/>
            <circle cx="10" cy="11" r="3" fill="#2DD4BF"/>
            <circle cx="16" cy="7" r="3" fill="#2DD4BF"/>
            <circle cx="22" cy="11" r="3" fill="#2DD4BF"/>
          </svg>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-black tracking-tight text-white">ATV KING</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-brand-gray hover:text-brand-teal transition-colors font-body text-sm tracking-widest uppercase"
            >
              {l.label}
            </Link>
          ))}

          {/* Cart Icon */}
          <Link href="/cart" className="relative text-brand-gray hover:text-brand-teal transition-colors">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-teal text-brand-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <Link
            href="/contact"
            className="bg-brand-teal text-brand-dark px-6 py-2.5 text-sm font-bold tracking-widest uppercase hover:bg-brand-teal-light transition-colors rounded-full"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Link href="/cart" className="relative text-brand-gray">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-teal text-brand-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="text-brand-gray"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-brand-dark border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-brand-gray hover:text-brand-teal transition-colors uppercase tracking-widest text-sm"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}