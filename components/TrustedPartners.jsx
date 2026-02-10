"use client";

import { useState } from "react";
import Image from "next/image";

const associatePartners = [
  { name: "syal Motor", logo: "/syal_finance.png" },
  { name: "Venture Nest", logo: "/ventureNest.jpeg" },
 
];

const channelPartners = [
  { name: "Axis Bank", logo: "/axisbank.png" },
  { name: "IDFC", logo: "/idfc.webp" },
  { name: "Cashfree", logo: "/cashfree.jpg" },
  { name: "IndiaMart", logo: "/india_mart.webp" },
  { name: "Airtel", logo: "/airtel.webp" },
  { name: "Tata Tele", logo: "/tata_tele.webp" },
//   { name: "HDFC", logo: "/partners/hdfc.png" },
  { name: "Razorpay", logo: "/razorpay.webp" },
];

export default function TrustedPartners() {
  const [activeTab, setActiveTab] = useState("associate");

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
          Our Trusted Partners
        </h2>

        {/* Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* LEFT TABS */}
          <div className="flex lg:flex-col gap-4">
            <button
              onClick={() => setActiveTab("associate")}
              className={`px-6 py-3 rounded-lg border font-semibold transition
                ${
                  activeTab === "associate"
                    ? "bg-indigo-900 text-white border-indigo-900"
                    : "bg-white text-slate-800 border-slate-300 hover:bg-slate-100"
                }`}
            >
              Associate Partners
            </button>

            <button
              onClick={() => setActiveTab("channel")}
              className={`px-6 py-3 rounded-lg border font-semibold transition
                ${
                  activeTab === "channel"
                    ? "bg-indigo-900 text-white border-indigo-900"
                    : "bg-white text-slate-800 border-slate-300 hover:bg-slate-100"
                }`}
            >
              Channel Partners
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-4">

            {/* ASSOCIATE PARTNERS (STATIC GRID) */}
            {activeTab === "associate" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {associatePartners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center bg-white rounded-2xl shadow-md border border-slate-100 p-8 hover:shadow-lg transition"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={140}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* CHANNEL PARTNERS (CONTINUOUS SCROLL) */}
            {activeTab === "channel" && (
              <div className="relative w-full overflow-hidden">

                {/* Gradient fade edges */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

                <div className="flex gap-10 animate-marquee hover:[animation-play-state:paused]">
                  {[...channelPartners, ...channelPartners].map((partner, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center min-w-[220px] bg-white rounded-2xl shadow-md border border-slate-100 p-8"
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={140}
                        height={70}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
