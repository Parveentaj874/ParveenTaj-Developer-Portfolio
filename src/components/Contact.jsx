export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-16 min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/contact.jpg')" }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-14 text-white">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT INFO */}
          <div className="text-gray-300 space-y-4">
            <p>
              Let's work together on backend systems and scalable solutions.
            </p>

            <p>📧 <span className="text-white">ptaj21967@gmail.com</span></p>
            <p>📍 <span className="text-white">Bengaluru, India</span></p>

            {/* SOCIAL LINKS */}
            <div className="pt-6">
              <h3 className="text-white font-semibold mb-4">Connect with me</h3>

              <div className="flex gap-6 items-center">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/parveen-taj-872840246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition text-cyan-400"
                  aria-label="LinkedIn"
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24V7.98h5V24H0zm7.98-16.02h4.78v2.19h.07c.66-1.25 2.28-2.57 4.69-2.57 5.02 0 5.95 3.31 5.95 7.62V24h-5v-6.89c0-1.64-.03-3.75-2.29-3.75-2.29 0-2.64 1.79-2.64 3.63V24h-5V7.98z"/>
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Parveentaj874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition text-cyan-400"
                  aria-label="GitHub"
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56 4.56-1.53 7.85-5.86 7.85-10.97C23.5 5.74 18.27.5 12 .5z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ladyboss64489/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition text-cyan-400"
                  aria-label="Instagram"
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.51 4.51 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9zM17.75 6.25a1.05 1.05 0 1 0 1.05 1.05 1.05 1.05 0 0 0-1.05-1.05z"/>
                  </svg>
                </a>

                {/* LeetCode */}
                <a
                  href="https://leetcode.com/u/Parveen_Taj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition text-cyan-400"
                  aria-label="LeetCode"
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}