import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/campaigns", label: "Campaigns" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#102a22]/85 backdrop-blur-xl shadow-soft py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)} aria-label="York Media Solutions home">
          <span className="nav-logo-mark">
            <img src={`${import.meta.env.BASE_URL}logo-mark.png`} alt="" aria-hidden="true" />
          </span>
          <span className="font-display font-semibold text-lg tracking-tight text-white">
            York Media
            <span className="text-brand-rose"> Solutions</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative text-sm font-medium tracking-wide transition-colors py-1 ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                } group`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-[#dfe8cf] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919999878786"
            className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors"
          >
            <Phone size={15} />
            +91 99998 78786
          </a>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-[#edf0e8] text-[#17352c] text-sm font-medium shadow-card hover:bg-white transition-all"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#102a22]/95 backdrop-blur-xl mt-4 border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? "text-[#dfe8cf]" : "text-white/85"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a href="tel:+919999878786" className="text-white/70 text-sm">
              +91 99998 78786
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
