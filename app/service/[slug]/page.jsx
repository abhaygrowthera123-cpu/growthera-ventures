// import { serviceCategories } from "@/app/data/serviceData"
// import { notFound } from "next/navigation"

// export default async function ServiceDetailPage({ params }) {
//   const { slug } = (await params); // ✅ Await the params
//   // ...
//   const service = serviceCategories
//     .flatMap(category => category.services)
//     .find(item => item.slug === slug)

//   if (!service) {
//     notFound()
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <section className="py-16 bg-gradient-to-br from-[#191b47] to-[#8e1822] text-white">
//         <div className="max-w-5xl mx-auto px-6">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-4">
//             {service.title}
//           </h1>
//           <p className="text-lg opacity-90">
//             {service.description}
//           </p>
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="max-w-5xl mx-auto px-6 space-y-12">
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Overview</h2>
//             <p className="text-slate-700">{service.overview}</p>
//           </div>

//           <div>
//             <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
//             <ul className="grid sm:grid-cols-2 gap-3">
//               {service.highlights.map((item, i) => (
//                 <li key={i} className="p-3 bg-slate-50 border rounded-lg">
//                   ✅ {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-2xl font-bold mb-4">Our Process</h2>
//             <ol className="space-y-3">
//               {service.process.map((step, i) => (
//                 <li key={i} className="flex gap-3">
//                   <span className="font-bold text-[#8e1822]">
//                     {i + 1}.
//                   </span>
//                   {step}
//                 </li>
//               ))}
//             </ol>
//           </div>

//           <div>
//             <h2 className="text-2xl font-bold mb-4">Benefits</h2>
//             <ul className="list-disc pl-6 space-y-2">
//               {service.benefits.map((b, i) => (
//                 <li key={i}>{b}</li>
//               ))}
//             </ul>
//           </div>

//           {service.story && (
//             <div className="p-6 bg-orange-50 border-l-4 border-[#8e1822] rounded-lg">
//               ✨ {service.story}
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   )
// }

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceCategories } from '@/app/data/serviceData'; // Ensure this path points to your data file
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  TrendingUp, 
  ChevronRight, 
  Home,
  X
} from 'lucide-react';

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;

  // Find the service flatly from all categories
  const service = serviceCategories
    .flatMap(category => category.services)
    .find(item => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans animate-fade-in">
      
      {/* Hero Section */}
      {/* <section className="relative py-20 lg:py-28 bg-[#191b47] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#191b47] via-[#2a2d65] to-[#8e1822] opacity-90"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white opacity-5 skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#8e1822] blur-[120px] opacity-40"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <Link href="/services" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors text-sm font-medium group">
            <span className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 mr-2 transition-colors">
                <ChevronRight className="w-4 h-4 rotate-180" />
            </span>
            Back to All Services
          </Link>
          
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
                    {service.title}
                </h1>
                <p className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed border-l-4 border-[#8e1822] pl-6 py-1">
                    {service.description}
                </p>
            </div>
            <div className="hidden md:block">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 relative group">
                    <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[#191b47]/20"></div>
                </div>
            </div>
          </div>
        </div>
      </section>
       */}
       <section className="relative py-10 lg:py-12 min-h-[360px] lg:min-h-[400px] bg-[#191b47] text-white overflow-hidden">
  {/* Decorative Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#191b47] via-[#2a2d65] to-[#8e1822] opacity-90"></div>
  <div className="absolute top-0 right-0 w-1/4 h-full bg-white opacity-5 skew-x-12 translate-x-24"></div>
  <div className="absolute bottom-0 left-10 w-48 h-48 bg-[#8e1822] blur-[120px] opacity-30"></div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">
    {/* Back Link */}
    <Link
      href="/services"
      className="inline-flex items-center text-white/70 hover:text-white mb-5 transition-colors text-sm font-medium group"
    >
      <span className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 mr-2 transition-colors">
        <ChevronRight className="w-4 h-4 rotate-180" />
      </span>
      Back to All Services
    </Link>

    {/* Content Grid */}
    <div className="grid md:grid-cols-3 gap-8 items-center">
      {/* Text Content */}
      <div className="md:col-span-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight leading-snug">
          {service.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-200 max-w-xl leading-relaxed border-l-4 border-[#8e1822] pl-4 py-0.5">
          {service.description}
        </p>
      </div>

      {/* Hero Image */}
      <div className="hidden md:block">
        <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-[#191b47]/10"></div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Content Column */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Overview */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Home className="text-[#8e1822] w-6 h-6" />
                Overview
              </h2>
              <p className="text-slate-600 leading-8 text-lg">
                {service.overview}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 px-2">Key Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.highlights.map((item, i) => (
                  <div 
                    key={i} 
                    className="p-5 bg-white border border-slate-200 rounded-xl flex items-start gap-4 hover:shadow-md hover:border-[#8e1822]/30 transition-all duration-300 group"
                  >
                    <div className="mt-1 min-w-[24px] text-[#191b47] group-hover:text-[#8e1822] transition-colors">
                      <CheckCircle size={24} />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 px-2">Our Process</h2>
              <div className="relative space-y-8 pl-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:bg-slate-200">
                {service.process.map((step, i) => {
                   // Some process steps might just be a string, or split by colon.
                   const isComplex = step.includes(':');
                   const title = isComplex ? step.split(':')[0] : step;
                   const desc = isComplex ? step.split(':')[1] : '';

                  return (
                    <div key={i} className="relative">
                      <div className="absolute -left-[37px] top-1 w-6 h-6 rounded-full bg-[#8e1822] border-4 border-slate-50 text-white flex items-center justify-center text-xs font-bold z-10 shadow-sm">
                        {i + 1}
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-lg text-slate-900">{title}</h3>
                        {desc && <p className="text-slate-600 mt-2 text-sm">{desc}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Success Story */}
            {service.story && (
              <div className="bg-gradient-to-r from-[#191b47] to-[#2a2d65] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#8e1822] rounded-full blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                 <div className="relative z-10">
                    {/* <div className="flex items-center gap-2 text-[#8e1822] mb-4 font-bold uppercase tracking-wider text-xs bg-white/10 inline-block px-3 py-1 rounded-full">
                        <Star size={12} fill="currentColor" /> Success Story
                    </div> */}
                    <blockquote className="text-xl md:text-2xl font-medium leading-relaxed italic opacity-95">
                      "{service.story}"
                    </blockquote>
                    <div className="mt-6 flex items-center gap-3">
                        <div className="w-10 h-1 bg-[#8e1822] rounded-full"></div>
                        <span className="text-sm text-slate-300 font-medium">Real Results</span>
                    </div>
                 </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
             {/* Sticky Wrapper */}
            <div className="sticky top-24 space-y-8">
              
              {/* Benefits Card */}
              <div className="bg-white rounded-2xl shadow-lg border-t-4 border-[#8e1822] p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Zap className="text-[#8e1822]" size={20} />
                    Why Choose This?
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm text-slate-600">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8e1822] flex-shrink-0"></div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action */}
              <div className="bg-[#191b47] rounded-2xl p-6 text-center text-white shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10">
                    <h3 className="font-bold text-xl mb-2">Ready to Grow?</h3>
                    <p className="text-slate-300 text-sm mb-6">Let our experts help you navigate your journey to success.</p>
                   <Link href="/contact" className="block">
  <button className="w-full py-3.5 bg-[#8e1822] hover:bg-red-700 text-white rounded-lg font-bold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#8e1822]/30">
    Book Free Consultation
  </button>
</Link>
                    <p className="mt-4 text-xs text-slate-400">No commitment required.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}