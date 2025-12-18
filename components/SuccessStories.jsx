// // import React from 'react';
// // import { ArrowRight } from 'lucide-react';

// // const successStories = [
// //   {
// //     title: "SaaS Startup",
// //     achievement: "Secured $2M seed funding",
// //     description: "From idea to investment in 6 months. We helped structure their pitch, financials, and connected them with top-tier VCs.",
// //     image: "/startup-certification.jpg",
// //     badge: "Funding"
// //   },
// //   {
// //     title: "E-Commerce MSME",
// //     achievement: "Achieved 300% growth",
// //     description: "Optimized supply chain and unlocked government subsidies that fueled a massive marketing campaign.",
// //     image: "https://picsum.photos/id/180/800/600",
// //     badge: "Growth"
// //   },
// //   {
// //     title: "Tech Company",
// //     achievement: "Expanded into 3 global markets",
// //     description: "Navigated complex international regulations to launch in UAE, Singapore, and UK simultaneously.",
// //     image: "/business-registration.png",
// //     badge: "Expansion"
// //   },
// // ];

// // export default function SuccessStories() {
// //   return (
// //     <section className="py-20 bg-[#191b47] text-white relative overflow-hidden">
// //         {/* Decorative background elements */}
// //         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
// //             <div className="absolute top-10 left-10 w-96 h-96 bg-[#8e1822] rounded-full mix-blend-screen filter blur-[100px]" />
// //             <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px]" />
// //         </div>

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// //         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
// //             <div className="max-w-2xl">
// //                 <h2 className="text-orange-500 font-semibold tracking-wider uppercase mb-2">Real Results</h2>
// //                 <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
// //                     Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Excellence</span>
// //                 </h3>
// //             </div>
// //             {/* <button className="hidden md:inline-flex items-center px-6 py-3 border border-slate-700 hover:border-orange-500 rounded-full text-slate-300 hover:text-white transition-colors duration-300">
// //                 View all case studies <ArrowRight className="ml-2 w-4 h-4" />
// //             </button> */}
// //         </div>

// //         <div className="grid md:grid-cols-3 gap-8">
// //           {successStories.map((story, i) => (
// //             <div
// //               key={i}
// //               className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer"
// //             >
// //               {/* Background Image with Zoom Effect */}
// //               <div className="absolute inset-0">
// //                 <img
// //                   src={story.image}
// //                   alt={story.title}
// //                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-[#191b47] via-[#191b47] to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
// //               </div>

// //               {/* Content Overlay */}
// //               <div className="absolute inset-0 p-8 flex flex-col justify-end">
// //                 {/* Floating Badge */}
// //                 <div className="absolute top-6 right-6 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
// //                     <span className="bg-[#8e1822] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
// //                         {story.badge}
// //                     </span>
// //                 </div>

// //                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
// //                     <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
// //                         {story.title}
// //                     </h4>
// //                     <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8e1822] to-red-500 mb-4">
// //                         {story.achievement}
// //                     </p>
                    
// //                     <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
// //                         <p className="text-slate-300 text-sm leading-relaxed mb-6 border-l-2 border-[#8e1822] pl-4">
// //                             {story.description}
// //                         </p>
// //                         <span className="inline-flex items-center text-sm font-semibold text-white hover:text-orange-400 transition-colors">
// //                             {/* Read Full Story <ArrowRight className="ml-1 w-4 h-4" /> */}
// //                         </span>
// //                     </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="mt-8 text-center md:hidden">
// //             <button className="inline-flex items-center px-6 py-3 border border-[#191b47] hover:border-[#8e1822] rounded-full text-slate-300 hover:text-white transition-colors duration-300">
// //                 View all case studies <ArrowRight className="ml-2 w-4 h-4" />
// //             </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// // import React from "react";
// // import { ArrowRight } from "lucide-react";

// // const successStories = [
// //   {
// //     title: "SaaS Startup",
// //     achievement: "Secured $2M Seed Funding",
// //     description:
// //       "From concept to capital in just 6 months. We structured their pitch, optimized financial projections, and connected them with leading venture capital firms.",
// //     image: "/startup-certification.jpg",
// //     badge: "Funding",
// //   },
// //   {
// //     title: "E-Commerce MSME",
// //     achievement: "300% Business Growth",
// //     description:
// //       "Streamlined operations and unlocked government incentives that powered rapid expansion and customer acquisition.",
// //     image: "https://picsum.photos/id/180/800/600",
// //     badge: "Growth",
// //   },
// //   {
// //     title: "Tech Company",
// //     achievement: "Global Market Expansion",
// //     description:
// //       "Successfully entered UAE, Singapore, and the UK by navigating regulatory frameworks and market-entry compliance.",
// //     image: "/business-registration.png",
// //     badge: "Expansion",
// //   },
// // ];

// // export default function SuccessStories() {
// //   return (
// //     <section className="relative py-24 bg-[#191b47] text-white overflow-hidden">
// //       {/* Subtle Background Glow */}
// //       <div className="absolute inset-0 pointer-events-none opacity-25">
// //         <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-[#8e1822] rounded-full blur-[120px]" />
// //         <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-white rounded-full blur-[140px] opacity-10" />
// //       </div>

// //       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
// //         {/* Section Header */}
// //         <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
// //           <div className="max-w-2xl">
// //             <p className="text-sm font-semibold tracking-widest uppercase text-[#8e1822] mb-3">
// //               Proven Impact
// //             </p>
// //             <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
// //               Success Stories That{" "}
// //               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
// //                 Drive Confidence
// //               </span>
// //             </h2>
// //           </div>
// //         </div>

// //         {/* Cards Grid */}
// //         <div className="grid gap-8 md:grid-cols-3">
// //           {successStories.map((story, index) => (
// //             <div
// //               key={index}
// //               className="group relative h-[440px] rounded-3xl overflow-hidden bg-[#191b47] shadow-lg transition-transform duration-500 hover:-translate-y-2"
// //             >
// //               {/* Image */}
// //               <div className="absolute inset-0">
// //                 <img
// //                   src={story.image}
// //                   alt={story.title}
// //                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-[#191b47] via-[#191b47]/90 to-transparent" />
// //               </div>

// //               {/* Badge */}
// //               <div className="absolute top-6 right-6 opacity-0 translate-y-[-8px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
// //                 <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-[#8e1822] text-white">
// //                   {story.badge}
// //                 </span>
// //               </div>

// //               {/* Content */}
// //               <div className="relative z-10 h-full p-8 flex flex-col justify-end">
// //                 <div className="transition-transform duration-500 group-hover:translate-y-0 translate-y-6">
// //                   <h3 className="text-2xl font-bold mb-2">{story.title}</h3>

// //                   <p className="text-3xl font-extrabold text-[#8e1822] mb-4">
// //                     {story.achievement}
// //                   </p>

// //                   <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
// //                     <p className="text-sm leading-relaxed text-white/80 border-l-2 border-[#8e1822] pl-4 mb-5">
// //                       {story.description}
// //                     </p>

// //                     <span className="inline-flex items-center text-sm font-semibold text-white group-hover:text-[#8e1822] transition-colors">
// //                       View Case Study
// //                       <ArrowRight className="ml-2 w-4 h-4" />
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Mobile CTA */}
// //         <div className="mt-12 text-center md:hidden">
// //           <button className="inline-flex items-center px-8 py-3 rounded-full border border-white/20 text-white hover:border-[#8e1822] transition-colors">
// //             View All Case Studies
// //             <ArrowRight className="ml-2 w-4 h-4" />
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import React from "react";
// import { ArrowRight } from "lucide-react";

// const successStories = [
//   {
//     title: "SaaS Startup",
//     achievement: "Secured $2M Seed Funding",
//     description:
//       "From concept to capital in just 6 months. We structured their pitch, optimized financial projections, and connected them with leading venture capital firms.",
//     image: "/startup-certification.jpg",
//     badge: "Funding",
//   },
//   {
//     title: "E-Commerce MSME",
//     achievement: "300% Business Growth",
//     description:
//       "Streamlined operations and unlocked government incentives that powered rapid expansion and customer acquisition.",
//     image: "https://picsum.photos/id/180/800/600",
//     badge: "Growth",
//   },
//   {
//     title: "Tech Company",
//     achievement: "Global Market Expansion",
//     description:
//       "Successfully entered UAE, Singapore, and the UK by navigating regulatory frameworks and market-entry compliance.",
//     image: "/business-registration.png",
//     badge: "Expansion",
//   },
// ];

// export default function SuccessStories() {
//   return (
//     <section className="relative py-16 bg-[#191b47] text-white overflow-hidden">
//       {/* Subtle Background Glow */}
//       <div className="absolute inset-0 pointer-events-none opacity-20">
//         <div className="absolute top-0 left-0 w-[360px] h-[360px] bg-[#8e1822] rounded-full blur-[120px]" />
//         <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-white rounded-full blur-[140px] opacity-10" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="mb-16 max-w-2xl">
//           <p className="text-sm font-semibold tracking-widest uppercase text-[#8e1822] mb-3">
//             Proven Impact
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//             Success Stories That{" "}
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
//               Drive Confidence
//             </span>
//           </h2>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid gap-6 md:grid-cols-3">
//           {successStories.map((story, index) => (
//             <div
//               key={index}
//               className="group relative h-[360px] rounded-2xl overflow-hidden bg-[#191b47] shadow-md transition-all duration-300 hover:-translate-y-1"
//             >
//               {/* Image */}
//               <div className="absolute inset-0">
//                 <img
//                   src={story.image}
//                   alt={story.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#191b47] via-[#191b47]/85 to-transparent" />
//               </div>

//               {/* Badge */}
//               <div className="absolute top-5 right-5">
//                 <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wide rounded-full bg-[#8e1822] text-white">
//                   {story.badge}
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="relative z-10 h-full p-6 flex flex-col justify-end">
//                 <h3 className="text-xl font-semibold mb-1">
//                   {story.title}
//                 </h3>

//                 <p className="text-2xl font-bold text-[#8e1822] mb-3">
//                   {story.achievement}
//                 </p>

//                 <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <p className="text-sm leading-relaxed text-white/75 border-l-2 border-[#8e1822] pl-3 mb-4">
//                     {story.description}
//                   </p>

//                   <span className="inline-flex items-center text-sm font-medium text-white hover:text-[#8e1822] transition-colors cursor-pointer">
//                     View Case Study
//                     <ArrowRight className="ml-2 w-4 h-4" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Mobile CTA */}
//         <div className="mt-10 text-center md:hidden">
//           <button className="inline-flex items-center px-8 py-3 rounded-full border border-white/20 text-white hover:border-[#8e1822] transition-colors">
//             View All Case Studies
//             <ArrowRight className="ml-2 w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


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

                  <span className="inline-flex items-center text-sm font-medium text-white hover:text-[#ff4d4f] transition-colors cursor-pointer">
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
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
