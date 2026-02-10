import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-16">
      <h2 className="text-4xl font-bold mb-14 text-white">
        My <span className="text-cyan-400">Skills</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Technical Skills */}
        <div>
          <h3 className="mb-6 text-xl text-white">Technical Skills</h3>
          {[
            ["Node.js", 90],
            ["Express.js", 85],
            ["MySQL", 80],
            ["MongoDB", 75],
          ].map(([skill, percent]) => (
            <div key={skill} className="mb-4">
              <div className="flex justify-between text-sm mb-1 text-white">
                <span>{skill}</span>
                <span>{percent}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded">
                <div
                  className="h-2 bg-cyan-400 rounded"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

       {/* Professional Skills */}
<div>
  <h3 className="mb-6 text-xl text-white">Professional Skills</h3>

  <div className="grid grid-cols-2 gap-10">
    {[
      { label: "Problem Solving", percent: 85 },
      { label: "Communication", percent: 75 },
      { label: "Teamwork", percent: 80 },
      { label: "Creativity", percent: 70 },
    ].map((skill) => {
      const radius = 50;
      const stroke = 8;
      const normalizedRadius = radius - stroke * 2;
      const circumference = normalizedRadius * 2 * Math.PI;
      const strokeDashoffset =
        circumference - (skill.percent / 100) * circumference;

      return (
        <div
          key={skill.label}
          className="flex flex-col items-center gap-3 relative"
        >
          <svg height={radius * 2} width={radius * 2}>
            <circle
              stroke="rgba(255,255,255,0.15)"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />

            <motion.circle
              stroke="#22d3ee"
              fill="transparent"
              strokeWidth={stroke}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </svg>

          {/* Percentage text */}
          <div className="absolute top-[38px] text-cyan-400 font-bold text-xl">
            {skill.percent}%
          </div>

          <p className="text-sm text-gray-300">{skill.label}</p>
        </div>
      );
    })}
  </div>
</div>

      </div>
    </section>
  );
}
