import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Academics() {
  const [active, setActive] = useState("certifications");
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <section
      id="academics"
      className="py-24 px-6 md:px-16 relative overflow-hidden"
    >
      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h2 className="text-5xl font-extrabold text-white">
          Academic & <span className="text-cyan-400">Achievements</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
          My complete academic background, certifications, awards, research work,
          and academic projects that shaped my technical foundation.
        </p>
      </motion.div>

      {/* ================= EDUCATION TIMELINE ================= */}
      <div className="max-w-5xl mx-auto mb-24 space-y-10 relative">
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-cyan-400/20" />

        {[
          {
            title: "Master of Computer Applications (MCA)",
            place: "Nagarjuna Degree College, Bengaluru",
            year: "2023 – 2025",
            score: "82%",
          },
          {
            title: "Bachelor of Computer Applications (BCA)",
            place: "Shree Akshaya College of Commerce & Management, Vijayanagara",
            year: "2020 – 2023",
            score: "85%",
          },
          {
            title: "Pre-University Course (PUC)",
            place: "Department of Pre-University Education, Vijayanagara",
            year: "2019 – 2020",
            score: "78%",
          },
          {
            title: "Secondary School Leaving Certificate (SSLC)",
            place: "Government Girls High School, Vijayanagara",
            year: "2017 – 2018",
            score: "87%",
          },
        ].map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative pl-12"
          >
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl text-cyan-400 font-semibold">
                {edu.title}
              </h3>
              <p className="text-gray-300">{edu.place}</p>
              <p className="text-gray-400 text-sm">
                {edu.year} • Score: {edu.score}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= ACADEMIC PROJECTS ================= */}
      <div className="max-w-5xl mx-auto mb-24">
        <h3 className="text-3xl font-bold text-white mb-8">
          Academic <span className="text-cyan-400">Projects</span>
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "AI Chatbot for Personalized Healthcare",
              year: "2025",
              desc: "Designed and developed an AI-powered chatbot that analyzes user input to provide personalized healthcare guidance and recommendations.",
              img: "/AI%20chatbot%20interface.png",
            },
            {
              title: "Online Furniture Shopping with User Behavior Prediction",
              year: "2023",
              desc: "Built an intelligent e-commerce system that predicts user preferences using analytics and recommendation techniques.",
            },
          ].map((proj, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-xl border border-white/10"
            >
              {proj.img && (
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                  onClick={() => setZoomedImage(proj.img)}
                />
              )}
              <h4 className="text-lg font-semibold text-cyan-400">
                {proj.title}
              </h4>
              <p className="text-gray-400 text-sm">{proj.year}</p>
              <p className="text-gray-300 text-sm mt-2">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="flex justify-center gap-6 mb-14">
        {["certifications", "awards", "publications"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-6 py-2 rounded-full font-medium transition
              ${
                active === tab
                  ? "bg-cyan-400 text-black"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* ================= TAB CONTENT ================= */}
      <AnimatePresence mode="wait">
        {active === "certifications" && (
          <HorizontalGallery
            onImageClick={setZoomedImage}
            items={[
              {
                img: "/certificates/Programming%20in%20Java.png",
                title: "Programming in Java",
                desc: "Certified in Java programming, demonstrating proficiency in object-oriented programming concepts and Java development.",
              },
              {
                img: "/certificates/Computing%20using%20Python.png",
                title: "The Joy of Computing using Python",
                desc: "Completed Python programming course, gaining expertise in computational thinking and Python application development.",
              },
              {
                img: "/certificates/Data%20Analyst.png",
                title: "Data Analytics Certification",
                desc: "Completed comprehensive training in data analytics, covering data processing, visualization, and analytical techniques.",
              },
              {
                img: "/certificates/Aprameya.jpeg",
                title: "APRAMEYA 2025 – National Level Technical Fest",
                desc: "Participated in APRAMEYA 2025, a National Level Technical Fest organized by Nitte Meenakshi Institute of Technology, Bengaluru. Represented Nagarjuna Degree College and actively participated in the Brahma Gyann event held on 7th & 8th February 2025.",
              },
              {
                img: "/certificates/Technix.jpeg",
                title: "TECHNIX 6.0 – IT Manager Event",
                desc: "Participated in the IT Manager event at TECHNIX 6.0, organized by the Department of MCA, BMS Institute of Technology & Management on 18th & 19th February 2025. Enhanced leadership, IT strategy, and decision-making skills.",
              },
            ]}
          />
        )}

        {active === "awards" && (
          <HorizontalGallery
            onImageClick={setZoomedImage}
            items={[
              {
                img: "/awards/awards.jpg",
                title: "Best Outgoing Student Award",
                desc: "Awarded by Nagarjuna Degree College for consistent academic excellence and overall performance.",
              },
              {
                img: "/awards/winner%20web%20development.jpeg",
                title: "Winner – Web Development Competition",
                desc: "Secured first place for building an innovative and scalable web application.",
              },
            ]}
          />
        )}

        {active === "publications" && (
          <HorizontalGallery
            onImageClick={setZoomedImage}
            items={[
              {
                type: "image",
                img: "/publications/publication.jpeg",
                title: "AI in Autonomous Vehicles using Neural networks and v4 technology – Research Paper",
                desc: "Presented a research paper on AI in Autonomous Vehicles using CNN and YOLOv4 techniques, certified by ERCMET.",
                pdf: "/publications/AUTONOMOUS%20VEHICLES%20Using%20Convolution%20Neural%20Network%20And%20Yolo%20V4%20Techniques.pdf",
              },
              {
                type: "video",
                video: "/publications/video.mp4",
                title: "AI in Autonomous Vehicles – Research Presentation",
                desc: "Presented at the National Conference on “Exploration and Adaptation of Emerging AI Technologies in Business” organized by Nagarjuna College of Management Studies in collaboration with ERGNET, ICT Academy, and ICDE India.",
                pdf: "/publications/AUTONOMOUS%20VEHICLES%20Using%20Convolution%20Neural%20Network%20And%20Yolo%20V4%20Techniques.pdf",
              },
            ]}
          />
        )}
      </AnimatePresence>

      {zoomedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setZoomedImage(null)}>
          <img src={zoomedImage} alt="Zoomed" className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </section>
  );
}

/* ================= HORIZONTAL GALLERY ================= */
function HorizontalGallery({ items, onImageClick }) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      className="max-w-6xl mx-auto"
    >
      <div className="flex gap-8 overflow-x-auto pb-4">
        {visibleItems.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="min-w-[360px] bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col"
          >
            {/* VIDEO */}
            {item.type === "video" ? (
              <video
                src={item.video}
                controls
                muted
                playsInline
                preload="metadata"
                className="w-full max-h-[260px] rounded-lg mb-4 border border-white/10 bg-black"
              />
            ) : (
              /* IMAGE */
              <img
                src={item.img}
                alt={item.title}
                className="w-full max-h-[260px] object-contain bg-black/20 rounded-lg p-4 mb-4 cursor-pointer"
                onClick={() => onImageClick(item.img)}
              />
            )}

            {/* TEXT */}
            <h4 className="text-lg font-semibold text-cyan-400">
              {item.title}
            </h4>

            <p className="text-gray-300 text-sm mt-2 flex-grow">
              {item.desc}
            </p>

            {item.bullets && (
              <ul className="list-disc ml-5 mt-2 text-gray-300 text-sm space-y-1">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            )}

            {/* ✅ BUTTONS ONLY FOR IMAGES */}
            {item.type !== "video" && item.pdf && (
              <div className="mt-4 flex gap-4">
                {/* VIEW */}
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-full
                             border border-cyan-400 text-cyan-400
                             font-semibold hover:bg-cyan-400 hover:text-black
                             transition"
                >
                  👁️ View
                </a>

                {/* DOWNLOAD */}
                <a
                  href={item.pdf}
                  download
                  className="flex-1 text-center px-4 py-2 rounded-full
                             bg-cyan-500 text-black font-semibold
                             hover:scale-105 hover:shadow-cyan-400/40
                             transition"
                >
                  📄 Download
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* VIEW MORE */}
      {items.length > 2 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-cyan-400 hover:underline"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </motion.div>
  );
}
