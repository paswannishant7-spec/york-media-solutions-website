import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import RelaxingHero from "../components/RelaxingHero";

import officeEntrance from "../assets/office/office-entrance.jpeg";
import officeTeam from "../assets/office/office-team.jpeg";

const offices = [
  {
    name: "Delhi Head Office",
    address: "FF-29, Omaxe Square, Jasola, New Delhi – 110025",
    map: "https://www.google.com/maps?q=FF-29+Omaxe+Square+Jasola+New+Delhi+110025&output=embed",
  },
  {
    name: "Corporate Office",
    address: "FF-29, Omaxe Square Building, Jasola Vihar, Mathura Road, New Delhi – 110025",
    map: "https://www.google.com/maps?q=Omaxe+Square+Building+Jasola+Vihar+Mathura+Road+New+Delhi+110025&output=embed",
  },
  {
    name: "Kolkata Branch Office",
    address: "12W2, 12th Floor, Main Casadona, New Town, Kolkata, West Bengal – 700161",
    map: "https://www.google.com/maps?q=Main+Casadona+New+Town+Kolkata+West+Bengal+700161&output=embed",
  },
  {
    name: "Jaipur Branch Office",
    address: "B-55, Alankar Plaza, Central Spine, Vidhyadhar Nagar, Jaipur – 302039",
    map: "https://www.google.com/maps?q=B-55+Alankar+Plaza+Central+Spine+Vidhyadhar+Nagar+Jaipur+302039&output=embed",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:nitin@yorkmediasolutions.in?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div>
      <RelaxingHero eyebrow="Contact us" title="Let’s get your brand moving." video="https://www.pexels.com/download/video/3493297/" />

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-14">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 bg-white rounded-3xl shadow-soft p-8 md:p-12"
          >
            {sent ? (
              <div className="text-center py-16">
                <CheckCircle2 className="mx-auto text-brand-red mb-5" size={48} />
                <h3 className="font-display font-semibold text-2xl mb-2">Thank you!</h3>
                <p className="text-charcoal-soft/70">
                  Your email client should have opened with your message.
                  We&rsquo;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-brand-red text-sm font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-charcoal-soft/60 mb-2 block">
                      Your Name
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border-b border-charcoal/15 focus:border-brand-red outline-none py-2.5 bg-transparent transition-colors"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-charcoal-soft/60 mb-2 block">
                      Phone
                    </label>
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border-b border-charcoal/15 focus:border-brand-red outline-none py-2.5 bg-transparent transition-colors"
                      placeholder="+91"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-charcoal-soft/60 mb-2 block">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border-b border-charcoal/15 focus:border-brand-red outline-none py-2.5 bg-transparent transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-charcoal-soft/60 mb-2 block">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border-b border-charcoal/15 focus:border-brand-red outline-none py-2.5 bg-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    {[
                      "Auto Hood Branding",
                      "Cab Branding",
                      "Bus Branding",
                      "Retail Branding",
                      "Wall Painting",
                      "BTL Activation",
                      "Other",
                    ].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-charcoal-soft/60 mb-2 block">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border-b border-charcoal/15 focus:border-brand-red outline-none py-2.5 bg-transparent transition-colors resize-none"
                    placeholder="Tell us about your campaign..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-rose to-brand-red text-white font-medium shadow-card hover:brightness-110 transition-all"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-ink rounded-3xl p-8 text-white">
              <h3 className="font-display font-semibold text-lg mb-6">Get in Touch</h3>
              <ul className="space-y-5 text-sm">
                <li className="flex gap-4">
                  <MapPin size={18} className="text-brand-rose shrink-0 mt-0.5" />
                  <div className="text-white/75 space-y-4">
                    {offices.map((office) => (
                      <address className="not-italic" key={office.name}>
                        <strong className="text-white block mb-1">{office.name}</strong>
                        {office.address}
                      </address>
                    ))}
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone size={18} className="text-brand-rose shrink-0 mt-0.5" />
                  <a href="tel:+919999878786" className="text-white/75 hover:text-white">
                    +91 99998 78786
                  </a>
                </li>
                <li className="flex gap-4">
                  <Mail size={18} className="text-brand-rose shrink-0 mt-0.5" />
                  <a
                    href="mailto:nitin@yorkmediasolutions.in"
                    className="text-white/75 hover:text-white"
                  >
                    nitin@yorkmediasolutions.in
                  </a>
                </li>
                <li className="flex gap-4">
                  <Clock size={18} className="text-brand-rose shrink-0 mt-0.5" />
                  <span className="text-white/75">Mon &ndash; Sat, 10:00 AM &ndash; 7:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              {offices.map((office) => (
                <div className="rounded-3xl overflow-hidden shadow-card bg-white" key={office.name}>
                  <div className="px-5 py-4">
                    <h4 className="font-display font-semibold text-charcoal">{office.name}</h4>
                    <p className="text-xs text-charcoal-soft/70 mt-1">{office.address}</p>
                  </div>
                  <iframe
                    title={`${office.name} location`}
                    src={office.map}
                    className="w-full h-56 border-0"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src={officeEntrance} alt="Office entrance" className="rounded-2xl aspect-square object-cover" />
              <img src={officeTeam} alt="Office team" className="rounded-2xl aspect-square object-cover" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
