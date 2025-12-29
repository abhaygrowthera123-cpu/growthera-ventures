
import React from "react";
import { ArrowRight } from "lucide-react";

const successStories = [
  {
    title: "SaaS Startup",
    achievement: "Secured $2M Seed Funding",
    description:
      "From concept to capital in just 6 months. We structured their pitch, optimized financial projections, and connected them with leading venture capital firms.",
    image: "/startup-certification.jpg",
    badge: "Funding",
  },
  {
    title: "E-Commerce MSME",
    achievement: "300% Business Growth",
    description:
      "Streamlined operations and unlocked government incentives that powered rapid expansion and customer acquisition.",
    image: "https://picsum.photos/id/180/800/600",
    badge: "Growth",
  },
  {
    title: "Tech Company",
    achievement: "Global Market Expansion",
    description:
      "Successfully entered UAE, Singapore, and the UK by navigating regulatory frameworks and market-entry compliance.",
    image: "/business-registration.png",
    badge: "Expansion",
  },
];

export default function SuccessStories() {
  return (
    <section className="relative py-16 bg-[#b9b9b9] text-white overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-[360px] h-[360px] bg-[#8e1822] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-white rounded-full blur-[140px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          {/* <p className="text-sm font-semibold tracking-widest uppercase text-[#ff4d4f] mb-3">
            Proven Impact
          </p> */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Success Stories That{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              Drive Confidence
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="group relative h-[340px] rounded-2xl overflow-hidden bg-[#191b47] shadow-md hover:shadow-xl hover:shadow-black/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Lighter Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#191b47]/80 via-[#191b47]/40 to-transparent" />
              </div>

              {/* Badge */}
              <div className="absolute top-5 right-5 z-20">
                <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wide rounded-full bg-[#ff4d4f] text-white">
                  {story.badge}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                {/* Glass Content Box */}
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {story.title}
                  </h3>

                  <p className="text-xl font-bold text-[#ff4d4f] mb-2">
                    {story.achievement}
                  </p>

                  <p className="text-sm leading-relaxed text-white/85 border-l-2 border-[#ff4d4f] pl-3 mb-3">
                    {story.description}
                  </p>

                  {/* <span className="inline-flex items-center text-sm font-medium text-white hover:text-[#ff4d4f] transition-colors cursor-pointer">
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center md:hidden">
          <button className="inline-flex items-center px-8 py-3 rounded-full border border-white/30 text-white hover:border-[#ff4d4f] transition-colors">
            View All Case Studies
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
