import { motion } from "framer-motion";

export default function IntroLoader({ onFinish }) {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      onAnimationComplete={() => {
        setTimeout(onFinish, 1900);
      }}
    >
      <div className="text-center">

        {/* WELCOME TEXT */}
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.35em] text-gray-400 uppercase mb-4"
        >
          Welcome to My Digital Workspace
        </motion.p>

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Parveen <span className="text-cyan-400">Taj</span>
        </motion.h1>

        {/* ROLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mt-3 text-sm md:text-base"
        >
          Backend Developer • Node.js • Cloud & DevOps
        </motion.p>

        {/* LOADING BAR */}
        <div className="mt-8 w-56 h-[3px] bg-white/10 overflow-hidden rounded mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
          />
        </div>

      </div>
    </motion.div>
  );
}
