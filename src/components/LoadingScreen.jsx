import { motion, AnimatePresence } from "framer-motion";

const loaders = {
  "/": { label: "Finding the rhythm", className: "loader-home", shape: "rings" },
  "/about": { label: "Our story is unfolding", className: "loader-about", shape: "leaf" },
  "/services": { label: "Preparing possibilities", className: "loader-services", shape: "lines" },
  "/work": { label: "Bringing journeys together", className: "loader-work", shape: "frames" },
  "/campaigns": { label: "Gathering campaign moments", className: "loader-campaigns", shape: "rings" },
  "/contact": { label: "Opening a conversation", className: "loader-contact", shape: "pulse" },
};

export default function LoadingScreen({ show, route }) {
  const current = loaders[route] || loaders["/"];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`route-loader ${current.className}`}
        >
          <div className={`loader-art loader-art-${current.shape}`}>
            <span /><span /><span />
            <img src="/logo-mark.png" alt="" />
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            {current.label}
          </motion.p>
          <div className="loader-progress"><i /></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
