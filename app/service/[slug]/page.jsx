// // import Link from "next/link"
// // import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"

// // const serviceData = {
// //   "startup-certification": {
// //     title: "Startup India Certificate",
// //     description: "Get government recognition and unlock funding opportunities",
// //     image: "/startup-certification-document.jpg",
// //     story: "SaaS Startup secured $2M seed funding after Startup India certification in just 45 days",
// //     benefits: [
// //       "Government Recognition",
// //       "Tax Exemption for 5 Years",
// //       "Priority Loan Support",
// //       "Funding Access - Up to ₹10 Crore",
// //       "Fast-Track Patent Filing",
// //       "Business Incubation Benefits",
// //     ],
// //     process: ["Fill Application Form", "Submit Documents", "Government Review", "Certificate Issued"],
// //     timeline: "15-30 Days",
// //     eligibility: "Startups with < ₹25 Cr revenue, < 5 years old, innovation-driven",
// //   },
// //   "pitch-deck": {
// //     title: "Pitch Deck Creation",
// //     description: "Professional investor-ready pitch presentations",
// //     image: "/pitch-deck-presentation-slides.jpg",
// //     story: "Tech Company impressed 50+ investors and secured Series A with our pitch deck design",
// //     benefits: [
// //       "Professional Design",
// //       "Investor Psychology Insights",
// //       "Data Visualization",
// //       "Market Analysis Charts",
// //       "Financial Projections",
// //       "Unlimited Revisions",
// //     ],
// //     process: ["Discovery Call", "Content Creation", "Design & Mockup", "Final Delivery"],
// //     timeline: "10-14 Days",
// //     eligibility: "Startups, scale-ups, or companies seeking funding",
// //   },
// //   "msme-registration": {
// //     title: "MSME Registration",
// //     description: "Unlock government schemes and subsidies",
// //     image: "/msme-business-registration.jpg",
// //     story: "E-Commerce MSME achieved 300% growth in 12 months after registration and subsidy access",
// //     benefits: [
// //       "Subsidy & Grant Access",
// //       "Collateral-Free Loans",
// //       "Tax Benefits",
// //       "Export Promotion",
// //       "Credit Line Enhancement",
// //       "Government Tender Participation",
// //     ],
// //     process: ["Business Assessment", "Document Collection", "Portal Registration", "Approval"],
// //     timeline: "7-10 Days",
// //     eligibility: "Investment < ₹10 Cr (Manufacturing) or < ₹5 Cr (Services)",
// //   },
// //   "iso-certification": {
// //     title: "ISO Certification",
// //     description: "Boost credibility and expand global reach",
// //     image: "/iso-certification-quality-standard.jpg",
// //     story: "Manufacturing company expanded to 15 countries after ISO 9001 certification",
// //     benefits: [
// //       "Quality Management Recognition",
// //       "Global Market Access",
// //       "Customer Confidence",
// //       "Competitive Advantage",
// //       "Process Efficiency",
// //       "Risk Reduction",
// //     ],
// //     process: ["Gap Assessment", "Documentation", "Audit", "Certification"],
// //     timeline: "30-45 Days",
// //     eligibility: "Registered companies with operational processes",
// //   },
// // }

// // const allServices = [
// //   { slug: "startup-certification", title: "Startup India Certificate", category: "Certifications & IP" },
// //   { slug: "pitch-deck", title: "Pitch Deck Creation", category: "Funding & Finance" },
// //   { slug: "msme-registration", title: "MSME Registration", category: "Business Registration" },
// //   { slug: "iso-certification", title: "ISO Certification", category: "Certifications & IP" },
// // ]

// // export default function ServicePage({ params }) {
// //   const service = serviceData[params.slug]

// //   if (!service) {
// //     return (
// //       <div className="min-h-screen bg-white">
// //         {/* Back Button */}
// //         <div className="bg-slate-50 border-b border-slate-200">
// //           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
// //             <Link
// //               href="/services"
// //               className="flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
// //             >
// //               <ArrowLeft size={20} />
// //               Back to Services
// //             </Link>
// //           </div>
// //         </div>

// //         <section className="py-16 sm:py-24 lg:py-32">
// //           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //             {/* <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Service Not Found</h1>
// //             <p className="text-lg text-slate-600 mb-8">
// //               We couldn't find the service you're looking for. But we have plenty of solutions to help your business
// //               grow!
// //             </p> */}

// //             {/* Popular Services Grid */}
// //             <div className="mb-12">
// //               <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Popular Services</h2>
// //               <div className="grid md:grid-cols-2 gap-6">
// //                 {allServices.map((svc) => (
// //                   <Link
// //                     key={svc.slug}
// //                     href={`/service/${svc.slug}`}
// //                     className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 text-left border border-slate-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300"
// //                   >
// //                     <div className="flex items-start justify-between">
// //                       <div>
// //                         <p className="text-sm font-semibold text-orange-600 mb-2">{svc.category}</p>
// //                         <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
// //                           {svc.title}
// //                         </h3>
// //                       </div>
// //                       <ArrowRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
// //                     </div>
// //                   </Link>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Quick Links */}
// //             <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 mb-8 border border-orange-200">
// //               <h3 className="text-xl font-bold text-slate-900 mb-6">Need Help Choosing?</h3>
// //               <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //                 <Link
// //                   href="/contact"
// //                   className="inline-block px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-all transform hover:scale-105"
// //                 >
// //                   Book Free Consultation
// //                 </Link>
// //                 <a
// //                   href="tel:+919810924009"
// //                   className="inline-block px-6 py-3 border-2 border-orange-600 text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-all"
// //                 >
// //                   Call Us: +91 9810924009
// //                 </a>
// //               </div>
// //             </div>

// //             {/* Why Choose Us */}
// //             <div>
// //               <h3 className="text-lg font-bold text-slate-900 mb-6">Why Choose Growthera Ventures?</h3>
// //               <div className="grid sm:grid-cols-3 gap-4">
// //                 {[
// //                   { icon: "✓", text: "100% Compliance Guaranteed" },
// //                   { icon: "⚡", text: "Fast Turnaround (7-15 Days)" },
// //                   { icon: "👥", text: "500+ Satisfied Clients" },
// //                 ].map((item, i) => (
// //                   <div key={i} className="flex flex-col items-center gap-2">
// //                     <span className="text-3xl font-bold text-orange-600">{item.icon}</span>
// //                     <p className="text-sm font-semibold text-slate-700">{item.text}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="min-h-screen bg-white">
// //       {/* Back Button */}
// //       <div className="bg-slate-50 border-b border-slate-200">
// //         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
// //           <Link
// //             href="/services"
// //             className="flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
// //           >
// //             <ArrowLeft size={20} />
// //             Back to Services
// //           </Link>
// //         </div>
// //       </div>

// //       {/* Hero */}
// //       <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-orange-700 text-white">
// //         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">{service.title}</h1>
// //           <p className="text-xl text-orange-50 mb-8">{service.description}</p>

// //           <div className="bg-white/10 backdrop-blur rounded-xl p-6 sm:p-8 border border-white/20">
// //             <p className="text-lg italic text-orange-100">💡 {service.story}</p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Image */}
// //       <section className="py-8 sm:py-12">
// //         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full rounded-xl shadow-lg" />
// //         </div>
// //       </section>

// //       {/* Content */}
// //       <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
// //         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid md:grid-cols-3 gap-8 mb-12">
// //             <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-orange-500 transition-all">
// //               <h3 className="font-bold text-orange-600 mb-2">Timeline</h3>
// //               <p className="text-2xl font-bold text-slate-900">{service.timeline}</p>
// //             </div>
// //             <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-orange-500 transition-all">
// //               <h3 className="font-bold text-orange-600 mb-2">Eligibility</h3>
// //               <p className="text-sm text-slate-700">{service.eligibility}</p>
// //             </div>
// //             <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-orange-500 transition-all">
// //               <h3 className="font-bold text-orange-600 mb-2">Steps</h3>
// //               <p className="text-2xl font-bold text-slate-900">{service.process.length} Steps</p>
// //             </div>
// //           </div>

// //           {/* Benefits */}
// //           <div className="mb-12">
// //             <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Benefits</h2>
// //             <div className="grid md:grid-cols-2 gap-4">
// //               {service.benefits.map((benefit, i) => (
// //                 <div
// //                   key={i}
// //                   className="flex gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-orange-500 transition-all"
// //                 >
// //                   <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
// //                   <span className="text-slate-700">{benefit}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Process */}
// //           <div className="mb-12">
// //             <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Process</h2>
// //             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
// //               {service.process.map((step, i) => (
// //                 <div key={i} className="relative">
// //                   <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 text-center">
// //                     <div className="text-3xl font-bold mb-2">{i + 1}</div>
// //                     <p className="font-semibold">{step}</p>
// //                   </div>
// //                   {i < service.process.length - 1 && (
// //                     <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-orange-400" />
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
// //         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
// //           <p className="text-lg mb-8 text-orange-50">Book a free consultation with our experts today</p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <Link
// //               href="/contact"
// //               className="inline-block px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-all transform hover:scale-105"
// //             >
// //               Book Consultation
// //             </Link>
// //             <a
// //               href="tel:+919810924009"
// //               className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
// //             >
// //               Call Now
// //             </a>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   )
// // }


// import Link from "next/link"
// import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"

// const serviceData = {
//   "startup-certification": {
//     title: "Startup India Certificate",
//     description: "Get government recognition and unlock funding opportunities",
//     image: "/startup-certification-document.jpg",
//     story: "SaaS Startup secured $2M seed funding after Startup India certification in just 45 days",
//     benefits: [
//       "Government Recognition",
//       "Tax Exemption for 5 Years",
//       "Priority Loan Support",
//       "Funding Access - Up to ₹10 Crore",
//       "Fast-Track Patent Filing",
//       "Business Incubation Benefits",
//     ],
//     process: ["Fill Application Form", "Submit Documents", "Government Review", "Certificate Issued"],
//     timeline: "15-30 Days",
//     eligibility: "Startups with < ₹25 Cr revenue, < 5 years old, innovation-driven",
//   },
//   "pitch-deck": {
//     title: "Pitch Deck Creation",
//     description: "Professional investor-ready pitch presentations",
//     image: "/pitch-deck-presentation-slides.jpg",
//     story: "Tech Company impressed 50+ investors and secured Series A with our pitch deck design",
//     benefits: [
//       "Professional Design",
//       "Investor Psychology Insights",
//       "Data Visualization",
//       "Market Analysis Charts",
//       "Financial Projections",
//       "Unlimited Revisions",
//     ],
//     process: ["Discovery Call", "Content Creation", "Design & Mockup", "Final Delivery"],
//     timeline: "10-14 Days",
//     eligibility: "Startups, scale-ups, or companies seeking funding",
//   },
//   "msme-registration": {
//     title: "MSME Registration",
//     description: "Unlock government schemes and subsidies",
//     image: "/msme-business-registration.jpg",
//     story: "E-Commerce MSME achieved 300% growth in 12 months after registration and subsidy access",
//     benefits: [
//       "Subsidy & Grant Access",
//       "Collateral-Free Loans",
//       "Tax Benefits",
//       "Export Promotion",
//       "Credit Line Enhancement",
//       "Government Tender Participation",
//     ],
//     process: ["Business Assessment", "Document Collection", "Portal Registration", "Approval"],
//     timeline: "7-10 Days",
//     eligibility: "Investment < ₹10 Cr (Manufacturing) or < ₹5 Cr (Services)",
//   },
//   "iso-certification": {
//     title: "ISO Certification",
//     description: "Boost credibility and expand global reach",
//     image: "/iso-certification-quality-standard.jpg",
//     story: "Manufacturing company expanded to 15 countries after ISO 9001 certification",
//     benefits: [
//       "Quality Management Recognition",
//       "Global Market Access",
//       "Customer Confidence",
//       "Competitive Advantage",
//       "Process Efficiency",
//       "Risk Reduction",
//     ],
//     process: ["Gap Assessment", "Documentation", "Audit", "Certification"],
//     timeline: "30-45 Days",
//     eligibility: "Registered companies with operational processes",
//   },
// }

// // 👉 New 4-step process data (replaces “Our Popular Services” cards)
// const steps = [
//   {
//     step: "Step 1",
//     title: "Share Your Requirement",
//     desc: "Tell us about your business and the service you need in a quick call or form.",
//     icon: "📝",
//   },
//   {
//     step: "Step 2",
//     title: "Get Plan & Pricing",
//     desc: "We analyse eligibility, suggest the right scheme/registration and share timelines & fees.",
//     icon: "📊",
//   },
//   {
//     step: "Step 3",
//     title: "Documents & Filing",
//     desc: "Upload documents securely. We prepare drafts, file with authorities and track the status.",
//     icon: "📂",
//   },
//   {
//     step: "Step 4",
//     title: "Approval & Support",
//     desc: "Receive certificate/approval and get ongoing support for renewals and compliances.",
//     icon: "✅",
//   },
// ]

// export default function ServicePage({ params }) {
//   const service = serviceData[params.slug]

//   if (!service) {
//     return (
//       <div className="min-h-screen bg-white">
//         {/* Back Button */}
//         <div className="bg-slate-50 border-b border-slate-200">
//           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//             <Link
//               href="/services"
//               className="flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
//             >
//               <ArrowLeft size={20} />
//               Back to Services
//             </Link>
//           </div>
//         </div>

//         <section className="py-16 sm:py-24 lg:py-32">
//           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             {/* ----- REPLACED “Our Popular Services” WITH 4-STEP PROCESS ----- */}
//             <div className="mb-12">
//               <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 px-4 py-1 rounded-full mb-4">
//                 Simple 4-Step Journey
//                 <span className="inline-block h-[1px] w-6 bg-orange-400" />
//               </p>
//               <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
//                 How We <span className="text-orange-600">Complete Your Service</span>
//               </h2>
//               <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto">
//                 Every registration, funding or certification with Growthera follows this smooth, guided process.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6 mb-12">
//               {steps.map((item, index) => (
//                 <Link key={index} href="/contact" className="block h-full">
//                   <article className="relative h-full p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all duration-300 overflow-hidden text-left transform hover:-translate-y-1 hover:scale-[1.01]">
//                     {/* Icon + Step */}
//                     <div className="flex items-start justify-between mb-4">
//                       <div>
//                         <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full bg-orange-50 text-orange-700">
//                           {item.step}
//                         </span>
//                         <h3 className="mt-2 text-base md:text-lg font-semibold text-slate-900">
//                           {item.title}
//                         </h3>
//                       </div>
//                       <span className="text-3xl md:text-4xl ml-3">
//                         {item.icon}
//                       </span>
//                     </div>

//                     <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
//                       {item.desc}
//                     </p>

//                     <div className="mt-5 flex items-center justify-between text-[11px] text-slate-500">
//                       <span className="flex items-center gap-1">
//                         <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
//                         Click to start this step
//                       </span>
//                       <span className="inline-flex items-center gap-1 text-orange-600">
//                         Continue
//                         <ArrowRight className="w-3 h-3" />
//                       </span>
//                     </div>
//                   </article>
//                 </Link>
//               ))}
//             </div>
//             {/* ----- END OF REPLACED BLOCK ----- */}

//             {/* Quick Links */}
//             <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 mb-8 border border-orange-200">
//               <h3 className="text-xl font-bold text-slate-900 mb-6">Need Help Choosing?</h3>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link
//                   href="/contact"
//                   className="inline-block px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-all transform hover:scale-105"
//                 >
//                   Book Free Consultation
//                 </Link>
//                 <a
//                   href="tel:+919810924009"
//                   className="inline-block px-6 py-3 border-2 border-orange-600 text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-all"
//                 >
//                   Call Us: +91 9810924009
//                 </a>
//               </div>
//             </div>

//             {/* Why Choose Us */}
//             <div>
//               <h3 className="text-lg font-bold text-slate-900 mb-6">Why Choose Growthera Ventures?</h3>
//               <div className="grid sm:grid-cols-3 gap-4">
//                 {[
//                   { icon: "✓", text: "100% Compliance Guaranteed" },
//                   { icon: "⚡", text: "Fast Turnaround (7-15 Days)" },
//                   { icon: "👥", text: "500+ Satisfied Clients" },
//                 ].map((item, i) => (
//                   <div key={i} className="flex flex-col items-center gap-2">
//                     <span className="text-3xl font-bold text-orange-600">{item.icon}</span>
//                     <p className="text-sm font-semibold text-slate-700">{item.text}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Back Button */}
//       <div className="bg-slate-50 border-b border-slate-200">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <Link
//             href="/services"
//             className="flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
//           >
//             <ArrowLeft size={20} />
//             Back to Services
//           </Link>
//         </div>
//       </div>

//       {/* Hero */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-orange-700 text-white">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">{service.title}</h1>
//           <p className="text-xl text-orange-50 mb-8">{service.description}</p>

//           <div className="bg-white/10 backdrop-blur rounded-xl p-6 sm:p-8 border border-white/20">
//             <p className="text-lg italic text-orange-100">💡 {service.story}</p>
//           </div>
//         </div>
//       </section>

//       {/* Image */}
//       <section className="py-8 sm:py-12">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full rounded-xl shadow-lg" />
//         </div>
//       </section>

//       {/* Content */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-orange-500 transition-all">
//               <h3 className="font-bold text-orange-600 mb-2">Timeline</h3>
//               <p className="text-2xl font-bold text-slate-900">{service.timeline}</p>
//             </div>
//             <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-orange-500 transition-all">
//               <h3 className="font-bold text-orange-600 mb-2">Eligibility</h3>
//               <p className="text-sm text-slate-700">{service.eligibility}</p>
//             </div>
//             <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-orange-500 transition-all">
//               <h3 className="font-bold text-orange-600 mb-2">Steps</h3>
//               <p className="text-2xl font-bold text-slate-900">{service.process.length} Steps</p>
//             </div>
//           </div>

//           {/* Benefits */}
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Benefits</h2>
//             <div className="grid md:grid-cols-2 gap-4">
//               {service.benefits.map((benefit, i) => (
//                 <div
//                   key={i}
//                   className="flex gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-orange-500 transition-all"
//                 >
//                   <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
//                   <span className="text-slate-700">{benefit}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Process */}
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Process</h2>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {service.process.map((step, i) => (
//                 <div key={i} className="relative">
//                   <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 text-center">
//                     <div className="text-3xl font-bold mb-2">{i + 1}</div>
//                     <p className="font-semibold">{step}</p>
//                   </div>
//                   {i < service.process.length - 1 && (
//                     <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-orange-400" />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
//           <p className="text-lg mb-8 text-orange-50">Book a free consultation with our experts today</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/contact"
//               className="inline-block px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-all transform hover:scale-105"
//             >
//               Book Consultation
//             </Link>
//             <a
//               href="tel:+919810924009"
//               className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
//             >
//               Call Now
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


import Link from "next/link"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"

const serviceData = {
  "startup-certification": {
    title: "Startup India Certificate",
    description: "Get government recognition and unlock funding opportunities",
    image: "/startup-certification-document.jpg",
    story: "SaaS Startup secured $2M seed funding after Startup India certification in just 45 days",
    benefits: [
      "Government Recognition",
      "Tax Exemption for 5 Years",
      "Priority Loan Support",
      "Funding Access - Up to ₹10 Crore",
      "Fast-Track Patent Filing",
      "Business Incubation Benefits",
    ],
    process: ["Fill Application Form", "Submit Documents", "Government Review", "Certificate Issued"],
    timeline: "15-30 Days",
    eligibility: "Startups with < ₹25 Cr revenue, < 5 years old, innovation-driven",
  },
  "pitch-deck": {
    title: "Pitch Deck Creation",
    description: "Professional investor-ready pitch presentations",
    image: "/pitch-deck-presentation-slides.jpg",
    story: "Tech Company impressed 50+ investors and secured Series A with our pitch deck design",
    benefits: [
      "Professional Design",
      "Investor Psychology Insights",
      "Data Visualization",
      "Market Analysis Charts",
      "Financial Projections",
      "Unlimited Revisions",
    ],
    process: ["Discovery Call", "Content Creation", "Design & Mockup", "Final Delivery"],
    timeline: "10-14 Days",
    eligibility: "Startups, scale-ups, or companies seeking funding",
  },
  "msme-registration": {
    title: "MSME Registration",
    description: "Unlock government schemes and subsidies",
    image: "/msme-business-registration.jpg",
    story: "E-Commerce MSME achieved 300% growth in 12 months after registration and subsidy access",
    benefits: [
      "Subsidy & Grant Access",
      "Collateral-Free Loans",
      "Tax Benefits",
      "Export Promotion",
      "Credit Line Enhancement",
      "Government Tender Participation",
    ],
    process: ["Business Assessment", "Document Collection", "Portal Registration", "Approval"],
    timeline: "7-10 Days",
    eligibility: "Investment < ₹10 Cr (Manufacturing) or < ₹5 Cr (Services)",
  },
  "iso-certification": {
    title: "ISO Certification",
    description: "Boost credibility and expand global reach",
    image: "/iso-certification-quality-standard.jpg",
    story: "Manufacturing company expanded to 15 countries after ISO 9001 certification",
    benefits: [
      "Quality Management Recognition",
      "Global Market Access",
      "Customer Confidence",
      "Competitive Advantage",
      "Process Efficiency",
      "Risk Reduction",
    ],
    process: ["Gap Assessment", "Documentation", "Audit", "Certification"],
    timeline: "30-45 Days",
    eligibility: "Registered companies with operational processes",
  },
}

// 4-step process data
const steps = [
  {
    step: "Step 1",
    title: "Share Your Requirement",
    desc: "Tell us about your business and the service you need in a quick call or form.",
    icon: "📝",
  },
  {
    step: "Step 2",
    title: "Get Plan & Pricing",
    desc: "We analyse eligibility, suggest the right scheme/registration and share timelines & fees.",
    icon: "📊",
  },
  {
    step: "Step 3",
    title: "Documents & Filing",
    desc: "Upload documents securely. We prepare drafts, file with authorities and track the status.",
    icon: "📂",
  },
  {
    step: "Step 4",
    title: "Approval & Support",
    desc: "Receive certificate/approval and get ongoing support for renewals and compliances.",
    icon: "✅",
  },
]

export default function ServicePage({ params }) {
  const service = serviceData[params.slug]

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        {/* Back Button */}
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/services"
              className="flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft size={20} />
              Back to Services
            </Link>
          </div>
        </div>

        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* ------- BIGGER “How We Complete Your Service” ------- */}
            <div className="mb-12">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 px-5 py-1.5 rounded-full mb-4">
                Simple 4-Step Journey
                <span className="inline-block h-[1px] w-6 bg-orange-400" />
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                How We <span className="text-orange-600">Complete Your Service</span>
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto">
                Every registration, funding or certification with Growthera follows this smooth, guided process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-7 mb-14">
              {steps.map((item, index) => (
                <Link key={index} href="/contact" className="block h-full">
                  <article className="relative h-full p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all duration-300 overflow-hidden text-left transform hover:-translate-y-1 hover:scale-[1.01]">
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full bg-orange-50 text-orange-700">
                          {item.step}
                        </span>
                        <h3 className="mt-3 text-lg md:text-xl font-semibold text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-4xl md:text-5xl ml-3">
                        {item.icon}
                      </span>
                    </div>

                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                        Click to start this step
                      </span>
                      <span className="inline-flex items-center gap-1 text-orange-600">
                        Continue
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            {/* ------- END BIGGER SECTION ------- */}

            {/* Quick Links */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 mb-8 border border-orange-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Need Help Choosing?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-all transform hover:scale-105"
                >
                  Book Free Consultation
                </Link>
                <a
                  href="tel:+919810924009"
                  className="inline-block px-6 py-3 border-2 border-orange-600 text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-all"
                >
                  Call Us: +91 9810924009
                </a>
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6">Why Choose Growthera Ventures?</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: "✓", text: "100% Compliance Guaranteed" },
                  { icon: "⚡", text: "Fast Turnaround (7-15 Days)" },
                  { icon: "👥", text: "500+ Satisfied Clients" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <span className="text-3xl font-bold text-orange-600">{item.icon}</span>
                    <p className="text-sm font-semibold text-slate-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/services"
            className="flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-orange-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">{service.title}</h1>
          <p className="text-xl text-orange-50 mb-8">{service.description}</p>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 sm:p-8 border border-white/20">
            <p className="text-lg italic text-orange-100">💡 {service.story}</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-orange-500 transition-all">
              <h3 className="font-bold text-orange-600 mb-2">Timeline</h3>
              <p className="text-2xl font-bold text-slate-900">{service.timeline}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-orange-500 transition-all">
              <h3 className="font-bold text-orange-600 mb-2">Eligibility</h3>
              <p className="text-sm text-slate-700">{service.eligibility}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-orange-500 transition-all">
              <h3 className="font-bold text-orange-600 mb-2">Steps</h3>
              <p className="text-2xl font-bold text-slate-900">{service.process.length} Steps</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-orange-500 transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Process</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.process.map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold mb-2">{i + 1}</div>
                    <p className="font-semibold">{step}</p>
                  </div>
                  {i < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-orange-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-orange-50">Book a free consultation with our experts today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-all transform hover:scale-105"
            >
              Book Consultation
            </Link>
            <a
              href="tel:+919810924009"
              className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
