import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceCategories } from '@/app/data/serviceData';
import {
  CheckCircle,
  Zap,
  ChevronRight,
  Home,
} from 'lucide-react';

export async function generateStaticParams() {
  return serviceCategories
    .flatMap(category => category.services)
    .map(service => ({
      slug: service.slug,
    }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;

  const service = serviceCategories
    .flatMap(category => category.services)
    .find(item => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans">

      <section className="relative py-10 bg-[#191b47] text-white">
        <div className="max-w-6xl mx-auto px-6">

          <Link
            href="/services"
            className="inline-flex items-center text-white/70 hover:text-white mb-4 text-sm"
          >
            <ChevronRight className="rotate-180 mr-2 w-4 h-4" />
            Back to All Services
          </Link>

          <h1 className="text-4xl font-bold mb-3">
            {service.title}
          </h1>

          <p className="max-w-xl border-l-4 border-[#8e1822] pl-4 text-slate-200">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12">

          <div className="lg:col-span-8 space-y-10">
            <div className="bg-white p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Home className="text-[#8e1822]" /> Overview
              </h2>
              <p className="text-slate-600">
                {service.overview}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">
                Key Highlights
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.highlights.map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg flex gap-3">
                    <CheckCircle className="text-[#191b47]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">

              <div className="bg-white p-6 rounded-xl border-t-4 border-[#8e1822]">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Zap className="text-[#8e1822]" /> Why Choose This?
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {service.benefits.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#191b47] p-6 rounded-xl text-white text-center">
                <h3 className="font-bold mb-2">Ready to Grow?</h3>
                <Link href="/contact">
                  <button className="w-full py-3 bg-[#8e1822] rounded-lg font-bold">
                    Book Free Consultation
                  </button>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
