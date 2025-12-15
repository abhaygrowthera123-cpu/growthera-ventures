"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Sectors", href: "/sectors" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 ">
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "px-3 pt-3 pb-2" : ""
        }`}
      >
        <nav
          className={`flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 transition-all duration-300 
          ${
            isScrolled
              ? "mx-auto max-w-7xl rounded-2xl border bg-white shadow-lg border-slate-200"
              : "w-full bg-white shadow-md border-b border-slate-200"
          }`}
        >
          {/* Logo
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="hidden sm:inline font-bold text-lg text-slate-900">Growthera</span>
          </Link> */}

          {/* Logo */}
          {/* <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/logo.png" // put your file inside /public folder
              alt="Growthera Logo"
              width={175} // adjust size as needed
              height={40}
              className="object-contain"
              priority
            />
          </Link> */}



          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
  <Image
    src="/logo.png"
    alt="Growthera Logo"
    width={175}
    height={40}
    className="object-contain h-12 w-auto" // controls size
    priority
  />
</Link>


          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-[#8e1822] transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:+919810924009"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-800 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">Call</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#B52A34] to-[#8e1822] text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-0 pb-2 animate-in fade-in slide-in-from-top-2">
          <div className="mx-auto bg-white border border-slate-200 shadow-md rounded-xl px-3">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-slate-700 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2 border-t border-slate-200">
                <a
                  href="tel:+919810924009"
                  className="block w-full px-4 py-2 text-center rounded-lg bg-slate-100 text-slate-800 font-medium"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
