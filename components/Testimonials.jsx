// // "use client";

// // const testimonials = [
// //   {
// //     name: "Vikash Construction",
// //     rating: 5,
// //     review:
// //       "Growthera Ventures helped us secure PMEGP funding and structured our compliance end-to-end. Their guidance made bank approvals smooth and stress-free.",
// //     service: "PMEGP Funding & Compliance",
// //   },
// //   {
// //     name: "New Hungry Hope",
// //     rating: 4,
// //     review:
// //       "From business incorporation to MUDRA loan support, their consulting team was extremely professional and supportive throughout the process.",
// //     service: "MUDRA Loan & Business Setup",
// //   },
// //   {
// //     name: "Vidisha Construction",
// //     rating: 5,
// //     review:
// //       "We received CGTMSE-backed loan assistance and financial structuring advice that helped us scale our construction projects confidently.",
// //     service: "CGTMSE & Financial Consulting",
// //   },
// //   {
// //     name: "Happy Real Estate",
// //     rating: 5,
// //     review:
// //       "Their VC advisory and investor readiness services helped us pitch confidently and improve our valuation strategy.",
// //     service: "VC Advisory & Growth Strategy",
// //   },
// //   {
// //     name: "Gupta Grocery Mart",
// //     rating: 4,
// //     review:
// //       "Growthera simplified our licensing, GST registration, and working capital planning. Highly recommended for MSMEs.",
// //     service: "MSME Compliance & GST",
// //   },
// //   {
// //     name: "Paramhans Public School",
// //     rating: 5,
// //     review:
// //       "They assisted us in NGO elevation, trust compliance, and funding documentation with complete transparency and professionalism.",
// //     service: "NGO Elevation & Trust Consulting",
// //   },
// //   {
// //     name: "RK Education Trust",
// //     rating: 5,
// //     review:
// //       "Excellent support in legal structuring, compliance management, and funding advisory for our educational trust.",
// //     service: "Trust Registration & Funding",
// //   },
// //   {
// //     name: "Abhay Traders",
// //     rating: 4,
// //     review:
// //       "Their team helped us optimize working capital and guided us through government-linked financial schemes efficiently.",
// //     service: "Working Capital & Govt Schemes",
// //   },
// //   {
// //     name: "KR Agencies",
// //     rating: 5,
// //     review:
// //       "Growthera Ventures played a key role in our business restructuring and funding roadmap. A reliable consulting partner.",
// //     service: "Business Restructuring & Funding",
// //   },
// // ];

// // export default function Testimonials() {
// //   return (
// //     <section className="py-20 bg-slate-50">
// //       <div className="max-w-7xl mx-auto px-6">

// //         {/* Header */}
// //         <div className="text-center max-w-3xl mx-auto">
// //           <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
// //             What Our Clients Say
// //           </h2>
// //           <p className="mt-4 text-slate-600">
// //             Trusted by businesses, institutions, and organizations across India
// //           </p>
// //         </div>

// //         {/* Testimonials Grid */}
// //         <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {testimonials.map((item, index) => (
// //             <div
// //               key={index}
// //               className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 hover:shadow-lg transition"
// //             >
// //               {/* Rating */}
// //               <div className="flex items-center gap-1 mb-4">
// //                 {Array.from({ length: 5 }).map((_, i) => (
// //                   <span
// //                     key={i}
// //                     className={`text-lg ${
// //                       i < item.rating ? "text-yellow-400" : "text-slate-300"
// //                     }`}
// //                   >
// //                     ★
// //                   </span>
// //                 ))}
// //               </div>

// //               {/* Review */}
// //               <p className="text-slate-700 leading-relaxed mb-6">
// //                 “{item.review}”
// //               </p>

// //               {/* Client Info */}
// //               <div className="border-t pt-4">
// //                 <p className="font-semibold text-slate-900">
// //                   {item.name}
// //                 </p>
// //                 <p className="text-sm text-indigo-700">
// //                   {item.service}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// const testimonials = [
//   {
//     firm: "Vikash Construction",
//     owner: "Mr. Vikash",
//     rating: 5,
//     service: "PMEGP Funding & Compliance",
//     review:
//       "Growthera Ventures helped us secure PMEGP funding and structured our compliance end-to-end. Their guidance made bank approvals smooth and stress-free.",
//   },
//   {
//     firm: "New Hungry Hope",
//     owner: "Ms. Ankit",
//     rating: 4,
//     service: "MUDRA Loan & Business Setup",
//     review:
//       "From business incorporation to MUDRA loan support, their consulting team was extremely professional and supportive throughout the process.",
//   },
//   {
//     firm: "Vidisha Construction",
//     owner: "Mr. Devendra",
//     rating: 5,
//     service: "CGTMSE & Financial Consulting",
//     review:
//       "We received CGTMSE-backed loan assistance and financial structuring advice that helped us scale our construction projects confidently.",
//   },
//   {
//     firm: "Happy Real Estate",
//     owner: "Mr. Bharat",
//     rating: 5,
//     service: "VC Advisory & Growth Strategy",
//     review:
//       "Their VC advisory and investor readiness services helped us pitch confidently and improve our valuation strategy.",
//   },
//   {
//     firm: "Gupta Grocery Mart",
//     owner: "Mr. Sarvesh Gupta",
//     rating: 4,
//     service: "MSME Compliance & GST Registration",
//     review:
//       "Growthera simplified our licensing, GST registration, and working capital planning. Highly recommended for MSMEs.",
//   },
//   {
//     firm: "Paramhans Public School",
//     owner: "Mr Paramhans ji",
//     rating: 5,
//     service: "NGO Elevation & Trust Consulting",
//     review:
//       "They assisted us in NGO elevation, trust compliance, and funding documentation with complete transparency and professionalism.",
//   },
//   {
//     firm: "RK Education Trust",
//     owner: "Mr. Rajesh Kumar",
//     rating: 5,
//     service: "Trust Registration & Funding",
//     review:
//       "Excellent support in legal structuring, compliance management, and funding advisory for our educational trust.",
//   },
//   {
//     firm: "Abhay Traders",
//     owner: "Mr. Sanjay Agrahari",
//     rating: 4,
//     service: "Working Capital & Govt Schemes",
//     review:
//       "Their team helped us optimize working capital and guided us through government-linked financial schemes efficiently.",
//   },
//   {
//     firm: "KR Agencies",
//     owner: "Mr. Kapil Gupta",
//     rating: 5,
//     service: "Business Restructuring & Funding",
//     review:
//       "Growthera Ventures played a key role in our business restructuring and funding roadmap. A reliable consulting partner.",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
//             What Our Clients Say
//           </h2>
//           <p className="mt-4 text-slate-600">
//             Trusted by businesses, institutions, and organizations across India
//           </p>
//         </div>

//         {/* Testimonials */}
//         <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 hover:shadow-lg transition flex flex-col justify-between"
//             >
//               {/* TOP: Firm Name */}
//               <div>
//                 <h3 className="text-lg font-bold text-indigo-900">
//                   {item.firm}
//                 </h3>

//                 {/* Rating */}
//                 <div className="flex items-center gap-1 mt-2 mb-4">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <span
//                       key={i}
//                       className={`text-lg ${
//                         i < item.rating ? "text-yellow-400" : "text-slate-300"
//                       }`}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>

//                 {/* Review */}
//                 <p className="text-slate-700 leading-relaxed mb-6">
//                   “{item.review}”
//                 </p>
//               </div>

//               {/* BOTTOM: Owner & Service */}
//               <div className="border-t pt-4">
//                 <p className="font-semibold text-slate-900">
//                   {item.owner}
//                 </p>
//                 <p className="text-sm text-indigo-700">
//                   {item.service}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

const testimonials = [
  {
    firm: "Vikash Construction",
    owner: "Mr. Vikash",
    rating: 5,
    service: "PMEGP Funding & Compliance",
    review:
      "Growthera Ventures helped us secure PMEGP funding and structured our compliance end-to-end. Their guidance made bank approvals smooth and stress-free.",
  },
  {
    firm: "New Hungry Hope",
    owner: "Ms. Ankit",
    rating: 4,
    service: "MUDRA Loan & Business Setup",
    review:
      "From business incorporation to MUDRA loan support, their consulting team was extremely professional and supportive throughout the process.",
  },
  {
    firm: "Vidisha Construction",
    owner: "Mr. Devendra",
    rating: 5,
    service: "CGTMSE & Financial Consulting",
    review:
      "We received CGTMSE-backed loan assistance and financial structuring advice that helped us scale our construction projects confidently.",
  },
  {
    firm: "Happy Real Estate",
    owner: "Mr. Bharat",
    rating: 5,
    service: "VC Advisory & Growth Strategy",
    review:
      "Their VC advisory and investor readiness services helped us pitch confidently and improve our valuation strategy.",
  },
  {
    firm: "Gupta Grocery Mart",
    owner: "Mr. Sarvesh Gupta",
    rating: 4,
    service: "MSME Compliance & GST Registration",
    review:
      "Growthera simplified our licensing, GST registration, and working capital planning. Highly recommended for MSMEs.",
  },
  {
    firm: "Paramhans Public School",
    owner: "Mr Paramhans ji",
    rating: 5,
    service: "NGO Elevation & Trust Consulting",
    review:
      "They assisted us in NGO elevation, trust compliance, and funding documentation with complete transparency and professionalism.",
  },
  {
    firm: "RK Education Trust",
    owner: "Mr. Rajesh Kumar",
    rating: 5,
    service: "Trust Registration & Funding",
    review:
      "Excellent support in legal structuring, compliance management, and funding advisory for our educational trust.",
  },
  {
    firm: "Abhay Traders",
    owner: "Mr. Sanjay Agrahari",
    rating: 4,
    service: "Working Capital & Govt Schemes",
    review:
      "Their team helped us optimize working capital and guided us through government-linked financial schemes efficiently.",
  },
  {
    firm: "KR Agencies",
    owner: "Mr. Kapil Gupta",
    rating: 5,
    service: "Business Restructuring & Funding",
    review:
      "Growthera Ventures played a key role in our business restructuring and funding roadmap. A reliable consulting partner.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-slate-600">
            Trusted by businesses, institutions, and organizations across India
          </p>
        </div>

        {/* MARQUEE WRAPPER */}
        <div className="relative overflow-hidden">

          {/* Fade edges (same as channel partner) */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

          {/* MARQUEE TRACK */}
          <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">

            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="min-w-[380px] max-w-[380px] bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col justify-between"
              >
                {/* TOP */}
                <div>
                  <h3 className="text-lg font-bold text-indigo-900">
                    {item.firm}
                  </h3>

                  {/* Rating */}
                  <div className="flex gap-1 mt-2 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < item.rating ? "text-yellow-400" : "text-slate-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-700 leading-relaxed">
                    “{item.review}”
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="border-t pt-4 mt-6">
                  <p className="font-semibold text-slate-900">
                    {item.owner}
                  </p>
                  <p className="text-sm text-indigo-700">
                    {item.service}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
