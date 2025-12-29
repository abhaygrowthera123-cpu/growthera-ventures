
"use client"

import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#191b47] via-[#2d2f5a] to-[#8e1822] text-white pt-28 pb-32 px-4">
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 -z-10">
        {/* stronger radial lights */}
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.4),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(249,115,22,0.5),_transparent_60%)]" />

        {/* glowing blobs */}
        <div className="absolute -top-24 -left-8 w-72 h-72 bg-[#B52A34] rounded-full blur-3xl" />
        <div className="absolute -bottom-28 right-0 w-96 h-96 bg-cyan-400/45 rounded-full blur-3xl" />

        {/* diagonal pattern */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,_rgba(148,163,184,0.7)_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-[#0c0e3e] rounded-full backdrop-blur-sm">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-100">
                🚀 Transform Your Business
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-pretty">
              Fueling Ambitions That Drive the Future of Business
            </h1>

            <p className="text-lg sm:text-xl text-orange-50/90 max-w-xl">
              Transform complex data into actionable insights. Stop guessing and start growing faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-[#8e1822] rounded-lg font-semibold hover:bg-orange-50 transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+919810924009"
                className="px-8 py-4 bg-white/10 border-2 border-[#191b47] text-orange-50 rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm transform hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <p className="text-sm text-orange-100/90">
              📞 Mon–Sat • 10:00 AM – 6:00 PM IST | +91 9810924009
            </p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative hidden md:block">
            <div className="relative">
              {/* glow behind card */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#963339] via-amber-[#B36267] to-white/20 blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-orange-200/70 bg-slate-900/40 backdrop-blur-sm">
                <img
                  src="/business-consultation-team-meeting-professional.jpg"
                  alt="Business consultation team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM WAVE DESIGN */}
      {/* <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[200%] h-[90px] sm:w-full sm:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F8FAFC" 
            d="M0,224L48,197.3C96,171,192,117,288,106.7C384,96,480,128,576,154.7C672,181,768,203,864,197.3C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L0,320Z"
          />
        </svg>
      </div> */}
    </section>
  )
}
