export default function Experience() {
  return (
    <section id= "experience" className="max-w-4xl mx-auto p-10">
      <h2 className="text-3xl font-bold mb-6 text-white">Experience</h2>

      <div className="bg-slate-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-cyan-400">
          Backend Developer – <a href="https://www.linkedin.com/in/salman-khan-86327829/" target="_blank" rel="noopener noreferrer" className="hover:underline">E-S-Genius Tech Solutions</a>
        </h3>
        <p className="text-gray-400 mt-1">2025 – Present</p>
        <ul className="list-disc ml-5 mt-3 text-gray-300">
          <li>Built REST APIs using Node.js & Express</li>
          <li>Implemented JWT-based role authentication</li>
          <li>Deployed apps on AWS EC2 with Docker</li>
        </ul>
      </div>
    </section>
  );
}
