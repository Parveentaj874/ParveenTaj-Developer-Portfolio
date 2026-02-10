import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "academics", label: "Academics" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function Hero() {
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  /* ================= SCROLL SPY + PROGRESS ================= */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((scrollTop / docHeight) * 100);

      let currentSection = "home";
      
      // Check each section from top to bottom
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // If section top is above the middle of viewport, it's the current section
        if (rect.top <= window.innerHeight / 2) {
          currentSection = id;
        }
      });
      
      setActive(currentSection);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= PROGRESS BAR ================= */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-black">
        <div
          className="h-full bg-cyan-400 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-white font-bold text-lg tracking-wide">
            Parveen <span className="text-cyan-400">Taj</span>
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative text-sm transition ${
                  active === id
                    ? "text-cyan-400 font-semibold"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {label}
                {active === id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-32 px-6 md:px-16 overflow-hidden"
      >
        {/* 🔥 HD BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/sunset-beach.jpg')",
          }}
        />

        {/* 🔥 DARK CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        {/* FLOATING PARTICLES */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(14)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyan-400/30"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 7 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center relative z-10">
          {/* LEFT */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-300 mb-2"
            >
             Hello, I’m
            </motion.h4>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
            >
              Parveen Taj
            </motion.h1>

            <p className="text-cyan-400 mt-4 text-lg">
              Backend Developer • Node.js • Cloud & DevOps
            </p>

            <p className="text-gray-200 mt-6 max-w-xl leading-relaxed">
              Designing scalable backend systems, secure APIs, and cloud-ready
              applications with performance, reliability, and clean
              architecture.
            </p>

            <a
              href="/PARVEEN_TAJ-Resume.pdf"
              download
              className="inline-block mt-8 px-8 py-3 rounded-full bg-cyan-500 text-black font-semibold
                         hover:scale-105 hover:shadow-cyan-400/40 transition"
            >
              Download Resume
            </a>
          </div>

          {/* RIGHT – INTERACTIVE IMAGE */}
          <motion.div
            whileHover={{ rotateY: 12, rotateX: -12 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl" />
              <img
                src="/parveen.jpeg"
                alt="Parveen Taj"
                loading="lazy"
                className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full
                           border-4 border-cyan-400 object-cover shadow-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-200 text-sm animate-bounce">
          Scroll ↓
        </div>
      </section>
    </>
  );
}
