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

        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-slate-600">
            Trusted by businesses, institutions, and organizations across India
          </p>
        </div>

        <div className="relative overflow-hidden">

          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

          <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">

            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="min-w-[380px] max-w-[380px] bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-indigo-900">
                    {item.firm}
                  </h3>

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
