import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";

const socialIcons = {
  Instagram: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  YouTube: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </svg>
  ),
  Linkedin: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <circle cx="7.5" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-4.5a2.3 2.3 0 0 1 4.5 0V17" />
    </svg>
  ),
};

const socialLinks = {
  Instagram: "https://www.instagram.com/yorkmediasolutions/",
  YouTube: "https://www.youtube.com/@yorkmediasolutions",
  Linkedin: "https://www.linkedin.com/company/york-media-solutions/posts/?feedView=all",
};

const services = [
  "Auto Hood Branding",
  "Cab Branding",
  "Bus Branding",
  "Retail Branding",
  "Wall Painting",
  "BTL Activation",
];

export default function Footer() {
  return (
    <footer className="bg-[#0d241d] text-white/65 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span className="nav-logo-mark"><img src="/logo-mark.png" alt="" /></span>
            <span className="font-display font-semibold text-white text-lg">York Media</span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Outdoor advertising, transit branding and brand activation, since 2007.
            Thoughtful media that moves naturally through the world.
          </p>
          <div className="flex gap-3 mt-6">
            {Object.entries(socialIcons).map(([name, Icon]) => (
              <a
                key={name}
                aria-label={name}
                href={socialLinks[name]}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-[#dfe8cf] hover:text-[#dfe8cf] transition-colors cursor-pointer"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display text-sm tracking-wider uppercase mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Services", "Work", "Campaigns", "Contact"].map((l) => (
              <li key={l}>
                <Link
                  to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                  className="hover:text-[#dfe8cf] transition-colors"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-sm tracking-wider uppercase mb-5">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-sm tracking-wider uppercase mb-5">
            Get In Touch
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-[#a9b9a6]" />
              <span>
                FF-29, Omaxe Square Building, Jasola Vihar, Mathura Road,
                New Delhi – 110025
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-[#a9b9a6]" />
              <a href="tel:+919999878786" className="hover:text-white">
                +91 99998 78786
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-[#a9b9a6]" />
              <a href="mailto:nitin@yorkmediasolutions.in" className="hover:text-white">
                nitin@yorkmediasolutions.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} York Media Solutions. All rights reserved.</p>
          <p>Founder: Nitin Vashist &nbsp;·&nbsp; Director: Dimcy Vashist</p>
        </div>
      </div>
    </footer>
  );
}
