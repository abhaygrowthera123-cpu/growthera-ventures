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

      {/* 🔹 Disclaimer Section */}
      <div className="border-b border-slate-800 bg-emerald-500/10 backdrop-blur-md px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-3 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-2">
            <AlertCircle className="text-emerald-400" size={22} />
            <span className="text-[15px] font-semibold text-emerald-300 tracking-wide">
              Important Disclaimer
            </span>
          </div>

          <p className="text-[14px] text-slate-300 leading-relaxed max-w-4xl mx-auto md:mx-0">
            Growthera Ventures is an independent consulting organization and
            does not represent any government entity. Funding programs,
            subsidies, and approvals are subject to documentation, eligibility,
            and third-party authority approvals. Information may change based on
            regulatory updates. Clients are encouraged to verify key information
            through official government channels.
          </p>
        </div>
      </div>

      {/* 🔹 Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-5 gap-12 mb-16">

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
              Strategic business advisory for founders, startups & enterprises.
            </p>
            <p className="text-slate-400 text-[14px]">
              We assist with funding readiness, compliance, registrations,
              execution roadmaps, and growth enablement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[13px] uppercase font-semibold tracking-widest text-slate-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-[15px]">
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
                    className="text-slate-400 hover:text-emerald-400 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[13px] uppercase font-semibold tracking-widest text-slate-400 mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-[15px]">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Term of Service", href: "/terms" },
                { name: "Refund Policy", href: "/disclaimer" },
              ].map((link) => (
                <li key={`${link.name}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[13px] uppercase font-semibold tracking-widest text-slate-400 mb-4">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+919810924009"
                className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors font-semibold"
              >
                <Phone size={20} /> +91 98109 24009
              </a>

              {/* <a
                href="mailto:support@growtheraventures.com"
                className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors font-semibold"
              >
                <Mail size={20} /> support@growtheraventures.com
              </a> */}


                <a
  href="mailto:support@growtheraventures.com"
  className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors font-semibold"
>
  <Mail
    size={24}
    className="shrink-0 white bg-black rounded-full p-[2px]"
  />
  <span>support@growtheraventures.com</span>
</a>

              <div className="flex items-start gap-3 text-slate-300">
                <MapPin size={50} />
                <span>H-28 ARV Park, G-03, Sector 63, Noida, UP — 201301</span>
              </div>
            </div>
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
              { icon: Linkedin, url: "https://www.linkedin.com/company/growthera-ventures-pvt-ltd/?viewAsMember=true" },
              { icon: Instagram, url: "https://www.instagram.com/growthera_ventures/" },
              { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61584163224418" },
              { icon: Twitter, url: "https://twitter.com/your-profile" },
            ].map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-slate-700 bg-slate-900/40 hover:bg-emerald-500 hover:border-emerald-500 transition-all hover:scale-110"
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
