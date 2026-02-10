import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 md:px-16 relative"
    >
      {/* ===== TITLE ===== */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-white"
      >
        About <span className="text-cyan-400">Me</span>
      </motion.h2>

      {/* ===== CONTENT ===== */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-4xl text-gray-300 leading-relaxed space-y-6"
      >
        <p>
          I am a <span className="text-white font-medium">Backend Developer</span>{" "}
          with hands-on experience in designing and building{" "}
          <span className="text-cyan-400">RESTful APIs</span> using{" "}
          <span className="text-white">Node.js</span> and{" "}
          <span className="text-white">Express.js</span>. I specialize in creating
          secure, scalable, and maintainable backend systems that power
          real-world applications.
        </p>

        <p>
          I have worked extensively with both{" "}
          <span className="text-white">relational</span> and{" "}
          <span className="text-white">NoSQL databases</span>, including MySQL
          and MongoDB, and I am comfortable designing schemas, optimizing queries,
          and managing data efficiently.
        </p>

        <p>
          My experience also includes deploying applications to cloud platforms
          such as <span className="text-white">AWS</span> and{" "}
          <span className="text-white">Azure</span>, using{" "}
          <span className="text-white">Docker</span> for containerization, and
          managing Linux-based deployment environments. I follow best practices
          for version control using <span className="text-white">Git</span> and
          understand modern backend architecture, authentication mechanisms, and
          scalable system design.
        </p>

        <p className="text-gray-400 italic">
          I enjoy solving complex backend problems, optimizing performance, and
          building reliable systems that scale as products grow.
        </p>
      </motion.div>
    </section>
  );
}
