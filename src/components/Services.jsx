const services = [
  {
    title: "Backend Development",
    desc: "REST APIs, Authentication, Business Logic using Node.js & Express"
  },
  {
    title: "Database Design",
    desc: "MySQL, MongoDB schema design and performance optimization"
  },
  {
    title: "Cloud & DevOps",
    desc: "AWS EC2, Docker, Linux deployment and CI basics"
  }
];

export default function Services() {
  return (
   <section id="services" className="py-24 px-16">
      <h2 className="text-4xl font-bold mb-14 text-white">
        My <span className="text-cyan-400">Services</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-cyan-400 transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-white" >{s.title}</h3>
            <p className="text-gray-300 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
