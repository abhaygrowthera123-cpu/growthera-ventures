import Link from "next/link";
import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  AlertCircle,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-black text-white text-[15px] leading-relaxed">
      

      


      {/* 🔹 Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-24 lg:px-12">
        <div className="grid md:grid-cols-5 gap-y-12 gap-x-8 mb-16">
          {/* Logo + About */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <Image
                src="/gv.png"
                alt="Growthera Ventures Logo"
                width={180}
                height={60}
                className="object-contain h-12 w-auto"
                priority
              />
            </div>

            <p className="text-slate-300 text-[16px] mb-5 font-medium">
              Strategic business advisory for founders,
              <br />
              startups & enterprises.
            </p>
            <p className="text-slate-400 text-[14px]">
              We assist with funding readiness, compliance,
              <br />
              registrations, execution roadmaps, and growth enablement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[15px] uppercase font-semibold tracking-widest text-slate-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-[13px]">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Sector", href: "/sector" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={`${link.name}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#e5a4aa] transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[15px] uppercase font-semibold tracking-widest text-slate-400 mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-[13px]">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Term of Service", href: "/terms" },
                { name: "Refund Policy", href: "/disclaimer" },
              ].map((link) => (
                <li key={`${link.name}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#e5a4aa] transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}

              <div>
            <h4 className="text-[15px] uppercase font-semibold tracking-widest text-slate-400 mb-4">
              Contact
            </h4>

            <div className="space-y-4 text-[13px]">
              
              <a
                href="tel:+919810924009"
                className="flex items-center gap-2 text-slate-300 hover:text-[#e5a4aa] transition-colors font-semibold"
              >
                <Phone size={16} /> +91 98109 24009
              </a>

              <a
                href="mailto:support@growtheraventures.com"
                className="flex items-center gap-2 text-slate-300 hover:text-[#e5a4aa] transition-colors font-semibold"
              >
                <Mail size={16} className="shrink-0" />
                support@growtheraventures.com
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <MapPin size={30} />
                <span className="text-[13px] leading-5">
                  H-28 ARV Park, G-03, Sector 63, Noida, UP — 201301
                </span>
              </div>
            </div>
          </div>

        </div>
          {/* Disclaimer Card */}
<div className="w-full flex justify-center mt-16 px-4">  {/* Increased top margin */}
  <div className="bg-slate-800/40 border border-slate-700 rounded-xl 
                  p-6 md:p-8 max-w-4xl shadow-lg w-full">  {/* Increased width */}

    <h3 className="text-center text-[#daabae] font-semibold text-lg mb-3 tracking-wide">
      Important Disclaimer
    </h3>

    <p className="text-[#c9d2d2] text-justify leading-7 text-sm md:text-[13px]">
      Growthera Ventures operates as an independent consulting firm and is 
      not directly affiliated with any government body, official department, 
      or regulatory authority. All services provided are strictly based on 
      consultancy, documentation support, application guidance, and business 
      advisory. Government fees, processing charges, or statutory costs (if 
      applicable) are separate and are paid directly to the respective 
      authorities by the client.
    </p>

  </div>
</div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-[14px] text-center">
            © {currentYear} Growthera Ventures Pvt. Ltd. — All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              {
                icon: Linkedin,
                url: "https://www.linkedin.com/company/growthera-ventures-pvt-ltd/?viewAsMember=true",
              },
              {
                icon: Instagram,
                url: "https://www.instagram.com/growthera_ventures/",
              },
              {
                icon: Facebook,
                url: "https://www.facebook.com/profile.php?id=61584163224418",
              },
              { icon: Twitter, url: "https://twitter.com/your-profile" },
            ].map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-slate-700 bg-slate-900/40 hover:bg-[#df5964] hover:border-emerald-500 transition-all hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}