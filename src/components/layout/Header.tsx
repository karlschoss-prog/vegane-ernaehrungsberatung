"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { drawerSlideIn } from "@/lib/animations";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [programmeExpanded, setProgrammeExpanded] = useState(false);
  const pathname = usePathname();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const programmeLink = NAV_LINKS.find((l) => l.children);
  const regularLinks = NAV_LINKS.filter((l) => !l.children);
  const isProgrammeActive = programmeLink?.children?.some((c) => pathname === c.href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-cream/95 backdrop-blur-sm shadow-sm" : "bg-cream/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-tight group"
              aria-label="Christin Schoß – Startseite"
            >
              <span className="font-serif text-xl font-semibold text-sage-dark tracking-wide group-hover:text-sage transition-colors">
                Christin Schoß
              </span>
              <span className="text-xs text-soft-gray font-sans tracking-widest uppercase">
                Zertifizierte vegane Ernährungsberatung
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {/* Leistungen Dropdown */}
              {programmeLink && (
                <div
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href="/#programme"
                    className={`text-sm font-medium transition-colors hover:text-sage-dark flex items-center gap-1 relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-sage after:transition-all after:w-0 hover:after:w-full ${
                      isProgrammeActive ? "text-sage-dark" : "text-charcoal"
                    }`}
                  >
                    {programmeLink.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </Link>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-cream rounded-card-lg shadow-xl border border-sage-light overflow-hidden"
                      >
                        {programmeLink.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-3 text-sm transition-colors hover:bg-sage-light/60 hover:text-sage-dark border-b border-sage-light/40 last:border-0 ${
                              pathname === child.href
                                ? "text-sage-dark font-semibold bg-sage-light/30"
                                : "text-charcoal"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Regular links */}
              {regularLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-sage-dark relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-sage after:transition-all ${
                    pathname === link.href
                      ? "text-sage-dark after:w-full"
                      : "text-charcoal after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Burger */}
            <div className="flex items-center gap-3">
              <Link
                href="/kontakt"
                className="hidden md:inline-flex items-center px-5 py-2.5 bg-sage text-white text-sm font-semibold rounded-card hover:bg-sage-dark transition-colors duration-200 shadow-sm"
              >
                Termin buchen
              </Link>
              <button
                className="lg:hidden p-2 text-charcoal hover:text-sage-dark transition-colors"
                onClick={() => setMenuOpen(true)}
                aria-label="Menü öffnen"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-sm bg-cream flex flex-col shadow-2xl"
              variants={drawerSlideIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-sage-light">
                <span className="font-serif text-lg font-semibold text-sage-dark">
                  Christin Schoß
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1 text-charcoal hover:text-sage-dark transition-colors"
                  aria-label="Menü schließen"
                >
                  <X size={22} />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-1 flex-1 overflow-y-auto">
                <Link
                  href="/"
                  className="py-3 px-2 text-base font-medium text-charcoal hover:text-sage-dark border-b border-sage-light/50 transition-colors"
                >
                  Startseite
                </Link>

                {/* Leistungen expandable */}
                {programmeLink && (
                  <>
                    <div className={`flex items-center justify-between border-b border-sage-light/50 ${isProgrammeActive ? "text-sage-dark" : "text-charcoal"}`}>
                      <Link
                        href="/#programme"
                        className="flex-1 py-3 px-2 text-base font-medium hover:text-sage-dark transition-colors"
                      >
                        {programmeLink.label}
                      </Link>
                      <button
                        onClick={() => setProgrammeExpanded((v) => !v)}
                        className="p-3 hover:text-sage-dark transition-colors"
                        aria-label="Programme aufklappen"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${programmeExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    <AnimatePresence initial={false}>
                      {programmeExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {programmeLink.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block py-2.5 pl-6 pr-2 text-sm border-b border-sage-light/30 transition-colors ${
                                pathname === child.href
                                  ? "text-sage-dark font-semibold"
                                  : "text-soft-gray hover:text-sage-dark"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}

                {/* Regular links */}
                {regularLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-3 px-2 text-base font-medium border-b border-sage-light/50 transition-colors ${
                      pathname === link.href
                        ? "text-sage-dark font-semibold"
                        : "text-charcoal hover:text-sage-dark"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="p-6 border-t border-sage-light">
                <Link
                  href="/kontakt"
                  className="block w-full text-center px-5 py-3 bg-sage text-white font-semibold rounded-card hover:bg-sage-dark transition-colors"
                >
                  Kostenloses Erstgespräch buchen
                </Link>
                <p className="mt-3 text-center text-sm text-soft-gray">
                  <a href={`mailto:${SITE.email}`} className="hover:text-sage transition-colors">
                    {SITE.email}
                  </a>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to offset fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
}
