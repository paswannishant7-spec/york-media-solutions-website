import { motion } from "framer-motion";
import officeTeam from "../assets/office/office-team.jpeg";

export default function RelaxingHero({ eyebrow, title, video }) {
  return (
    <section className="page-film-hero">
      <video autoPlay muted loop playsInline poster={officeTeam} aria-hidden="true">
        <source src={video} type="video/mp4" />
      </video>
      <div className="page-film-veil" />
      <div className="page-film-orb" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="page-film-eyebrow">
          {eyebrow}
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
