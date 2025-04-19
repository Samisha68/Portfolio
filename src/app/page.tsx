"use client";
import React, { useState, useEffect } from "react";

import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SVG for particle animation background
  const ParticleBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 5 + 2 + "px",
              height: Math.random() * 5 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              background: "linear-gradient(45deg, #00fff7, #00ff95)",
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a1020] text-white relative">
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, 20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes slide-right {
          from { width: 0; }
          to { width: 6rem; }
        }

        @keyframes drop-bounce {
          0% { transform: translateY(-100vh); }
          75% { transform: translateY(10px); }
          90% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }

        @keyframes drop-text {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .animate-typing-1 {
          width: 0;
          border-right: 2px solid #00fff7;
          animation: typing 1s steps(20, end) forwards;
        }

        .animate-typing-2 {
          width: 0;
          border-right: 2px solid #00fff7;
          animation: typing 1.5s steps(40, end) 1s forwards;
        }

        .animate-slide-right {
          width: 0;
          animation: slide-right 0.8s ease-out 2.5s forwards;
        }

        .animate-drop-text-1 {
          opacity: 0;
          animation: drop-text 0.5s ease-out 3s forwards;
        }

        .animate-drop-text-2 {
          opacity: 0;
          animation: drop-text 0.5s ease-out 3.3s forwards;
        }

        .animate-drop-text-3 {
          opacity: 0;
          animation: drop-text 0.5s ease-out 3.6s forwards;
        }

        .animate-drop-bounce {
          animation: drop-bounce 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }

        .animate-drop-bounce-delay-1 {
          animation: drop-bounce 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s infinite;
        }

        .animate-drop-bounce-delay-2 {
          animation: drop-bounce 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      <ParticleBackground />

      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-[#0a1020]/80 backdrop-blur-sm border-b border-[#1e2a4a]">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-xl font-light tracking-wider">
            <span className="text-[#00fff7]">SAMISHA</span>
            <span className="text-[#00ff95]">.DEV</span>
          </h1>
          <div className="space-x-8">
            <a href="#experience" className="text-sm hover:text-[#00fff7] transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-sm hover:text-[#00fff7] transition-colors">
              Projects
            </a>
            <a href="#tech-stack" className="text-sm hover:text-[#00fff7] transition-colors">
              Tech Stack
            </a>
            <a href="#contact" className="text-sm hover:text-[#00fff7] transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="typewriter-container">
              <p className="text-[#00fff7] text-sm tracking-wider animate-typing-1 overflow-hidden whitespace-nowrap">$ whoami</p>
              <h2 className="text-6xl font-bold tracking-tight mt-4">
                <span className="inline-block animate-typing-2 overflow-hidden whitespace-nowrap">Samisha</span>
              </h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00fff7] to-[#00ff95] animate-slide-right mt-6"></div>
            <div className="space-y-3 mt-6">
              <p className="text-xl text-gray-400 max-w-2xl typing-text-container overflow-hidden">
                <span className="inline-block animate-drop-text-1">{">"} Just your friendly neighborhood code wizard 🧙‍♂️</span>
              </p>
              <p className="text-xl text-gray-400 max-w-2xl typing-text-container overflow-hidden">
                <span className="inline-block animate-drop-text-2">{">"} Turning chai into code since 2024 ☕️</span>
              </p>
              <p className="text-xl text-gray-400 max-w-2xl typing-text-container overflow-hidden">
                <span className="inline-block animate-drop-text-3">{">"} Building digital experiences that make people go &quot;Wow&quot; ✨</span>
              </p>
            </div>
            <div className="absolute right-0 top-0 w-1/3 h-full">
              <div className="relative h-full">
                <div className="absolute right-20 top-32 w-20 h-20 rounded-full bg-gradient-to-r from-[#00fff7] to-[#00ff95] opacity-20 animate-drop-bounce"></div>
                <div className="absolute right-40 top-48 w-16 h-16 rounded-full bg-gradient-to-r from-[#00fff7] to-[#00ff95] opacity-15 animate-drop-bounce-delay-1"></div>
                <div className="absolute right-16 top-64 w-12 h-12 rounded-full bg-gradient-to-r from-[#00fff7] to-[#00ff95] opacity-10 animate-drop-bounce-delay-2"></div>
                <div className="h-full w-1 bg-gradient-to-b from-[#00fff7] to-transparent absolute right-32 top-0 animate-pulse"></div>
              </div>
            </div>
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-[#00fff7] to-[#00ff95] text-black font-medium rounded hover:opacity-90 transition-opacity"
            >
              View Resume
            </button>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            <span className="text-[#00fff7]">Tech</span> Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              
              "JavaScript",
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "PostgreSQL",
              "Git/GitHub",
              "Tailwind CSS",
              "TypeScript",
              "Next.js",
            ].map((tech, index) => (
              <div
                key={index}
                className="p-6 bg-[#1e2a4a] rounded-lg border border-[#2a3a6a] hover:border-[#00fff7] transition-colors group"
              >
                <span className="text-gray-300 group-hover:text-[#00fff7] transition-colors">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            <span className="text-[#00fff7]">Work</span> Experience
          </h2>
          <div className="space-y-8">
            <div className="p-8 bg-[#1e2a4a] rounded-lg border border-[#2a3a6a] hover:border-[#00fff7] transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-medium group-hover:text-[#00fff7] transition-colors">Frontend Developer</h3>
                <p className="text-gray-400">October 2024- December 2024</p>
              </div>
              <p className="text-[#00fff7] mb-4">UpsurgeLabs Pvt. Ltd.</p>
              <p className="text-gray-300 leading-relaxed">
              Collaborated on the development of an innovative browser task automation tool named Cosmo AI, designed to simplify and streamline repetitive tasks with advanced AI capabilities.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            <span className="text-[#00fff7]">Featured</span> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group p-8 bg-[#1e2a4a] rounded-lg border border-[#2a3a6a] hover:border-[#00fff7] transition-all">
              <h3 className="text-xl font-medium mb-4 group-hover:text-[#00fff7] transition-colors">EnergyPro⚡</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
              Built EnergyPro🌞💡—a platform that makes trading solar power  as simple as a few clicks! Using $Bijlee Tokens, users can sell and buy solar energy seamlessly. Integrated with Solana 🔗 wallet, it&#34;s fast, secure, and live with a stunning, responsive design.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/Samisha68/Energypro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#00fff7] transition-colors"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                <a
                  href="https://energypro.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#00fff7] transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
            <div className="group p-8 bg-[#1e2a4a] rounded-lg border border-[#2a3a6a] hover:border-[#00fff7] transition-all">
              <h3 className="text-xl font-medium mb-4 group-hover:text-[#00fff7] transition-colors">CryptoCustodian Chatbot 🤖</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
              CryptoCustodian is an innovative Telegram bot developed using Python, Solana API, and Telegram Bot API. This project integrates speech-to-text functionality, enabling users to perform blockchain transactions like Solana token minting and balance checking through voice commands.🎤
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/Samisha68/CryptoCustodian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#00fff7] transition-colors"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                <a
                  href="https://web.telegram.org/a/#8173959167"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#00fff7] transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
            <div className="group p-8 bg-[#1e2a4a] rounded-lg border border-[#2a3a6a] hover:border-[#00fff7] transition-all">
              <h3 className="text-xl font-medium mb-4 group-hover:text-[#00fff7] transition-colors">PayPro 💸</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
              PayPro is a secure payment web application built using React.js, Express.js, MongoDB, and Tailwind CSS. It features robust user authentication, account management, and seamless transaction handling to ensure a safe and smooth user experience. The platform includes an intuitive, user-centric dashboard that simplifies transaction tracking and processing.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/Samisha68/PayPro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#00fff7] transition-colors"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>

              </div>
            </div>
            <div className="group p-8 bg-[#1e2a4a] rounded-lg border border-[#2a3a6a] hover:border-[#00fff7] transition-all">
              <h3 className="text-xl font-medium mb-4 group-hover:text-[#00fff7] transition-colors">University Website🎓 </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
              Designed and developed a comprehensive university website using HTML and CSS, focusing on user-friendly interfaces for students, faculty, and administrators. The project emphasized usability and aesthetics, delivering a visually appealing and fully functional dashboard that caters to diverse user needs.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/Samisha68/University-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#00fff7] transition-colors"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                <a
                  href="https://university-website-nmit.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#00fff7] transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
            {/* --- NEW PROJECT: driftui --- */}
            <div className="group p-8 bg-[#1e2a4a] rounded-lg border border-[#2a3a6a] hover:border-[#00fff7] transition-all">
              <h3 className="text-xl font-medium mb-4 group-hover:text-[#00fff7] transition-colors">Drift UI 📈</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A feature-rich frontend built with Next.js and TailwindCSS simulating a perpetuals trading dashboard experience on Solana using the Drift SDK. View subaccounts, balances, positions, and orders.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/Samisha68/driftui" // Assuming repo name
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#00fff7] transition-colors"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                <a
                  href="https://driftdeck.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#00fff7] transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
            {/* --- NEW PROJECT: Aptos Automation Workflow --- */}
            <div className="group p-8 bg-[#1e2a4a] rounded-lg border border-[#2a3a6a] hover:border-[#00fff7] transition-all">
              <h3 className="text-xl font-medium mb-4 group-hover:text-[#00fff7] transition-colors">Aptos Automation Workflow 🤖</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leverages AI to revolutionize Aptos blockchain workflow management. Features AI-driven creation, smart execution, adaptive analysis, and predictive recommendations for optimizing tasks.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/Samisha68/aptos-automation-workflow" // Assuming repo name
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#00fff7] transition-colors"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                <a
                  href="https://aptos-workflow-automation.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#00fff7] transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
            {/* --- NEW PROJECT: Hospital Bed Management --- */}
            <div className="group p-8 bg-[#1e2a4a] rounded-lg border border-[#2a3a6a] hover:border-[#00fff7] transition-all">
              <h3 className="text-xl font-medium mb-4 group-hover:text-[#00fff7] transition-colors">Hospital Bed Management 🏥</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                SwiftBed: Streamlines hospital bed utilization with real-time tracking of availability, patient assignments, and ward management. Features patient tracking, ward organization, and secure auth.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/Samisha68/Hospital-bed-management" // Assuming repo name
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#00fff7] transition-colors"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                <a
                  href="https://swiftbed.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#00fff7] transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
            
          </div>
        </div>
        
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            <span className="text-[#00fff7]">Get in</span> Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="samishaofficial68@gmail.com"
              className="p-8 bg-[#1e2a4a] rounded-lg border border-[#2a3a6a] hover:border-[#00fff7] transition-all group flex flex-col items-center justify-center text-center"
            >
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-[#00fff7]" />
                <span className="text-gray-400 hover:text-[#00fff7] transition-colors">samishaofficial68@gmail.com</span>
              </div>
            </a>
            <a
              href="https://github.com/Samisha68"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-[#1e2a4a] rounded-lg border border-[#2a3a6a] hover:border-[#00fff7] transition-all group flex items-center space-x-2"
            >
              <Github size={16} className="text-[#00fff7]" />
              <span className="text-gray-400 group-hover:text-[#00fff7] transition-colors">@Samisha68</span>
            </a>
            <a
              href="https://www.linkedin.com/in/samisha-063b96223/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-[#1e2a4a] rounded-lg border border-[#2a3a6a] hover:border-[#00fff7] transition-all group flex items-center space-x-2"
            >
              <Linkedin size={16} className="text-[#00fff7]" />
              <span className="text-gray-400 group-hover:text-[#00fff7] transition-colors">/in/Samisha</span>
            </a>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1e2a4a] rounded-lg max-w-2xl w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Resume</h3>
              <button
                onClick={() => setIsResumeModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="prose prose-invert max-w-none">
              <div className="mb-8">
                <h4 className="text-xl font-medium mb-4">Summary</h4>
                <p className="text-gray-300">
                  Full Stack Developer with an year of experience.
                </p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-medium mb-4">Skills</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
                  <li>Backend: Node.js, Express, Python</li>
                  <li>Database: PostgreSQL, MongoDB</li>
                  <li>DevOps: Docker,Git</li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-medium mb-4">Education</h4>
                <div className="text-gray-300">
                  <p className="font-medium">Bachelor of Engineering in Information Science and Engineering</p>
                  <p>Nitte Meenakshi Institute of Technology</p>
                  <p>2021-2025</p>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href="https://github.com/Samisha68/Resume/blob/main/Resume_SDE.pdf"
                  download
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#00fff7] to-[#00ff95] text-black font-medium rounded hover:opacity-90 transition-opacity"
                >
                  <Download size={20} />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 border-t border-[#1e2a4a]">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Built with Passion by Samisha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
