import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import RelaxingHero from "../components/RelaxingHero";

import officeEntrance from "../assets/office/office-entrance.jpeg";
import officeTeam from "../assets/office/office-team.jpeg";
import nitinVashist from "../assets/leadership/nitin-vashist-founder.jpeg";

const process = [
  { step: "Discover", desc: "Understand the brand and campaign goals." },
  { step: "Research", desc: "Map routes, audiences and high-footfall zones." },
  { step: "Planning", desc: "Build a media plan around real movement patterns." },
  { step: "Creative", desc: "Design branding that gets noticed in seconds." },
  { step: "Execution", desc: "Install and deploy across the chosen fleet." },
  { step: "Reporting", desc: "Track visibility and share campaign outcomes." },
];

export default function About() {
  return (
    <div>
      <RelaxingHero eyebrow="About us" title="Brands should move with people." video="https://www.pexels.com/download/video/6813908/" />

      {/* STORY */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading eyebrow="Our Story" title="Founded in 2007, built on visibility" />
            <p className="text-charcoal-soft/90 leading-relaxed mb-4">
              York Media Solutions is a leading Outdoor Advertising, Transit
              Media, Retail Branding and Brand Activation company based in
              New Delhi. Since 2007, we have specialised in innovative
              outdoor advertising through transit branding, vehicle branding,
              BTL campaigns, experiential marketing, promotional activities
              and retail branding.
            </p>
            <p className="text-charcoal-soft/90 leading-relaxed">
              Every road should become a marketing opportunity. Every vehicle
              should become a moving billboard. Every campaign should create
              visibility, trust and recall &mdash; that is the philosophy
              that has guided York Media Solutions from day one.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="rounded-2xl overflow-hidden shadow-soft aspect-[4/5]"
          >
            <img src={officeTeam} alt="York Media Solutions team at work" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-24 bg-mist">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "To deliver creative advertising solutions that move with people instead of waiting for people to notice them, giving every brand nonstop visibility, trust and recall.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              desc: "To turn every road into a marketing opportunity and every vehicle into a moving billboard, redefining how outdoor media reaches audiences across India.",
            },
          ].map((v) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-10 shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-charcoal flex items-center justify-center mb-6">
                <v.icon className="text-brand-rose" size={24} />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">{v.title}</h3>
              <p className="text-sm text-charcoal-soft/80 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Leadership" title="The people behind the brand" align="center" />
          <div className="grid sm:grid-cols-2 max-w-2xl mx-auto gap-6">
            {[
              { name: "Nitin Vashist", role: "Founder", image: nitinVashist },
              { name: "Dimcy Vashist", role: "Director" },
            ].map((p) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-10 text-center shadow-card border border-charcoal/5"
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.name}, ${p.role} of York Media Solutions`}
                    className="w-32 h-32 mx-auto rounded-full object-cover object-top shadow-card mb-5 ring-4 ring-[#edf0e8]"
                  />
                ) : (
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-brand-rose to-brand-red flex items-center justify-center text-white font-display text-3xl font-semibold mb-5">
                    {p.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                )}
                <h3 className="font-display font-semibold text-lg">{p.name}</h3>
                <p className="text-brand-red text-sm mt-1">{p.role}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="director-profile"
          >
            <div className="director-monogram">DV</div>
            <div>
              <span>Director profile</span>
              <h3>Dimcy Vashist</h3>
              <p>
                As Director of York Media Solutions, Dimcy Vashist helps guide
                the company&rsquo;s client relationships, campaign coordination
                and day-to-day delivery. Her focus on thoughtful communication,
                dependable execution and long-term partnerships supports every
                project from its first conversation through final rollout.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-mist">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="How We Work" title="Our process" align="center" />
          <div className="grid md:grid-cols-6 gap-8 md:gap-4">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-white border-2 border-brand-red flex items-center justify-center font-display font-semibold text-brand-red mb-4">
                  {i + 1}
                </div>
                <h4 className="font-display font-semibold text-sm mb-1">{p.step}</h4>
                <p className="text-xs text-charcoal-soft/70 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICE GALLERY */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Our Offices" title="Delhi · Kolkata · Jaipur" align="center" />
          <div className="grid md:grid-cols-2 gap-6">
            {[officeTeam, officeEntrance].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-2xl overflow-hidden aspect-[4/3] group"
              >
                <img
                  src={img}
                  alt="York Media Solutions office"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ink text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-white font-display font-semibold text-3xl md:text-4xl mb-6">
            Want to know more about how we work?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-rose to-brand-red text-white font-medium shadow-soft hover:brightness-110 transition-all"
          >
            Get in Touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
