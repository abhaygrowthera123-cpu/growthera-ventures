
"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function AnnouncementBanner() {
  const [show, setShow] = useState(true)

  const announcements = [
    "🎉 Startup India Certification - Get ₹10Cr funding access!",
    "📢 Women Entrepreneur Fund up to ₹40L - Limited slots",
    "✨ Tech Acceleration Program - Scale in 6 months",
    "🚀 MUDRA Loan up to ₹10L - Fast processing",
    "💼 MSME Registration - Unlock subsidies & schemes",
    "🌟 100% Compliance Guaranteed - Expert team ready",
  ]

  if (!show) return null

  return (
    // <div className="relative overflow-hidden text-sm border-b border-orange-400 shadow-lg 
    //   bg-gradient-to-r from-slate-950 via-sky-900 to-orange-600 text-white">

    <div className="relative overflow-hidden text-sm border-b border-[#b52a34] shadow-lg 
      bg-gradient-to-r from-[#191b47] via-[#2d2f5a] to-[#8e1822] text-white">

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">

        {/* Radial Light Blend */}
        <div className="absolute inset-0 opacity-60 
        bg-[radial-gradient(circle_at_left,_rgba(248,250,252,0.25),_transparent_55%),radial-gradient(circle_at_right,_rgba(249,115,22,0.4),_transparent_60%)]" />

        {/* Small glow blobs (scaled down for banner) */}
        <div className="absolute -top-10 left-0 w-40 h-40 bg-orange-400/50 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 right-0 w-52 h-52 bg-cyan-400/40 rounded-full blur-2xl" />

        {/* Textured Grid Overlay */}
        <div className="absolute inset-0 opacity-15 
        bg-[linear-gradient(135deg,_rgba(148,163,184,0.4)_1px,_transparent_1px)] bg-[length:18px_18px]" />
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-20 flex items-center h-12 overflow-hidden px-4">
        
        {/* Title */}
        <span className="font-bold mr-8 shrink-0 text-white opacity-90 text-xs sm:text-sm">
          📣 Announcements
        </span>

        {/* Marquee */}
        <div className="flex-1 overflow-hidden relative">
          <div className="flex gap-8 animate-marquee w-max">
            {[...announcements, ...announcements].map((announcement, i) => (
              <div key={i} className="flex items-center gap-8 shrink-0">
                <a
                  href="/services"
                  className="text-white hover:text-yellow-300 transition-colors duration-300 whitespace-nowrap font-medium cursor-pointer"
                >
                  {announcement}
                </a>
                <span className="text-white/40">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={() => setShow(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hover:bg-white/20 p-1 rounded transition-all"
        title="Close announcement bar"
      >
        <X size={18} className="text-white hover:text-yellow-300 transition-colors duration-300" />
      </button>
    </div>
  )
}
