import React from "react";

export default function Projects() {
  const [esgImageIndex, setEsgImageIndex] = React.useState(0);
  const [tptImageIndex, setTptImageIndex] = React.useState(0);
  const [showZoom, setShowZoom] = React.useState(false);
  const [zoomedImage, setZoomedImage] = React.useState("");
  const esgImages = ["/login%20page.png", "/dashboard.png"];
  const tptImages = ["/EPT.png", "/TPT%20dashboard.png"];

  return (
    <section id="projects" className="py-24 px-16">
      <h2 className="text-4xl font-bold mb-14 text-white">
        Industry <span className="text-cyan-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white/5 p-6 rounded-xl">
          <div className="relative mb-4">
            <img src={tptImages[tptImageIndex]} alt="Travel Policy Tool" className="w-full h-48 object-contain rounded-lg bg-black/20 cursor-pointer" onClick={() => { setZoomedImage(tptImages[tptImageIndex]); setShowZoom(true); }} />
            <button onClick={() => setTptImageIndex((tptImageIndex + 1) % 2)} className="absolute bottom-2 right-2 bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-semibold">Next</button>
          </div>
          <h3 className="text-lg font-semibold text-white">Corporate Travel Policy Tool</h3>
          <p className="text-gray-300 text-sm mt-2">Node.js, Express, MySQL</p>
          <a href="https://www.linkedin.com/in/salman-khan-86327829/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-sm hover:underline">E-S-Genius Tech Solution</a>
          <p className="text-gray-400 text-xs">10/2025 – Present</p>
          <ul className="text-gray-300 text-sm mt-2 space-y-1 list-disc list-inside">
            <li>Developed RESTful APIs for managing employee travel policies and approvals</li>
            <li>Implemented JWT-based role authentication for Admin and Employee access</li>
            <li>Designed MySQL schemas for users, policies, and approval workflows</li>
            <li>Tested APIs using Postman and deployed services on Linux environment</li>
          </ul>
        </div>

        <div className="bg-white/5 p-6 rounded-xl">
          <div className="relative mb-4">
            <img src={esgImages[esgImageIndex]} alt="ESG Dashboard" className="w-full h-48 object-contain rounded-lg bg-black/20 cursor-pointer" onClick={() => { setZoomedImage(esgImages[esgImageIndex]); setShowZoom(true); }} />
            <button onClick={() => setEsgImageIndex((esgImageIndex + 1) % 2)} className="absolute bottom-2 right-2 bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-semibold">Next</button>
          </div>
          <h3 className="text-lg font-semibold text-white">ESG Dashboard</h3>
          <p className="text-gray-300 text-sm mt-2">Node.js, Express, React</p>
          <a href="https://www.linkedin.com/in/salman-khan-86327829/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-sm hover:underline">E-S-Genius Tech Solution</a>
          <p className="text-gray-400 text-xs">06/2025 – 10/2025</p>
          <ul className="text-gray-300 text-sm mt-2 space-y-1 list-disc list-inside">
            <li>Built backend APIs to process ESG metrics such as ESG Score, Compliance Rate, and CO₂ Reduction</li>
            <li>Integrated backend services with React frontend for real-time dashboards</li>
            <li>Used Git for version control and followed modular backend architecture</li>
          </ul>
        </div>
      </div>

      {showZoom && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setShowZoom(false)}>
          <img src={zoomedImage} alt="Zoomed" className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </section>
  );
}
