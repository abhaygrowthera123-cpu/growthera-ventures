"use client";

import Image from "next/image";

const channelPartners = [
  { name: "Axis Bank", logo: "/axisbank.png" },
  { name: "IDFC", logo: "/idfc.webp" },
  { name: "Cashfree", logo: "/cashfree.jpg" },
  { name: "IndiaMart", logo: "/india_mart.webp" },
  { name: "Airtel", logo: "/airtel.webp" },
  { name: "Tata Tele", logo: "/tata_tele.webp" },
  { name: "Razorpay", logo: "/razorpay.webp" },
];

export default function TrustedPartners() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
          Our Trusted Partners
        </h2>

        <div className="mt-16 relative w-full overflow-hidden">

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
                  className="object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
