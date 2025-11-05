"use client";
import React from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#0a1020] text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-16">
          <nav className="flex items-center justify-between mb-8">
            <div className="flex gap-6 text-sm">
              <a href="#home" className="text-gray-400 hover:text-[#00fff7] transition-colors">
                [h] home
              </a>
              <a href="#work" className="text-gray-400 hover:text-[#00fff7] transition-colors">
                [w] work
              </a>
              <a href="#tech-stack" className="text-gray-400 hover:text-[#00fff7] transition-colors">
                [t] tech stack
              </a>
              <a href="#projects" className="text-gray-400 hover:text-[#00fff7] transition-colors">
                [p] projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-[#00fff7] transition-colors">
                [c] contact
              </a>
            </div>
          </nav>
        </header>

        {/* Home / Hero */}
        <section id="home" className="mb-20">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-[#00fff7]">Samisha</span>
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            My journey with development began in 2023 when I first fell in love with code. I started by learning the basics, but since then, I&apos;ve constantly challenged myself to build, experiment, and grow as a developer. Now, any day without coding feels incomplete and just a little bit boring! I thrive on tackling new challenges, exploring fresh technologies, and bringing ideas to life—my passion for learning and building only keeps growing.
          </p>
          
        </section>

        {/* Work */}
        <section id="work" className="mb-20">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-[#00fff7]">*</span> work
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="text-lg font-medium">Lead Developer</h3>
                <span className="text-gray-500 text-sm">May 2025 - Present</span>
              </div>
              <p className="text-[#00ff95] mb-2">
                <a
                  href="https://x.com/GreenKWh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00fff7] transition-colors"
                >
                  GreenKWh
                </a>
              </p>
              <p className="text-gray-400">
                Leading backend and blockchain infrastructure development, architecting and implementing smart contract solutions. Responsible for designing and managing on-chain data transmission protocols, ensuring secure and efficient blockchain interactions. Spearheading the technical implementation of decentralized systems with a focus on reliability and scalability.
              </p>
            </div>
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="text-lg font-medium">Junior Developer</h3>
                <span className="text-gray-500 text-sm">October 2024 - December 2024</span>
              </div>
              <p className="text-[#00ff95] mb-2">
                <a
                  href="https://x.com/upsurgelabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00fff7] transition-colors"
                >
                  UpsurgeLabs Pvt. Ltd.
                </a>
              </p>
              <p className="text-gray-400">
                Collaborated on the development of an innovative browser task automation tool named Cosmo AI ( which is now Bhindi.io ), designed to simplify and streamline repetitive tasks with advanced AI capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="mb-20">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-[#00fff7]">*</span> tech stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "Rust",
              "React",
              "Next.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "PostgreSQL",
              "Tailwind CSS",
              "Git/GitHub",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#1e2a4a] border border-[#2a3a6a] rounded text-gray-300 hover:border-[#00fff7] hover:text-[#00fff7] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-20">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-[#00fff7]">*</span> projects
          </h2>
          <div className="space-y-8">
            <div>
              <div className="flex items-start justify-between mb-2">
                <a
                  href="https://evoracharge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-300 hover:text-[#00fff7] transition-colors cursor-pointer"
                >
                  Evoracharge
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://evoracharge.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#00fff7] transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-gray-400">
                Built from scratch—from UI to everything. A decentralized mobile EV charging platform that&apos;s affordable, accessible, and community-owned.
              </p>
            </div>
            <div>
              <div className="flex items-start justify-between mb-2">
                <a
                  href="https://energypro.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-300 hover:text-[#00fff7] transition-colors cursor-pointer"
                >
                  EnergyPro
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Samisha68/Energypro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#00fff7] transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://energypro.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#00fff7] transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-gray-400">
                Built EnergyPro—a platform that makes trading solar power as simple as a few clicks! Using $Bijlee Tokens, users can sell and buy solar energy seamlessly. Integrated with Solana wallet, it&apos;s fast, secure, and live with a stunning, responsive design.
              </p>
            </div>

            <div>
              <div className="flex items-start justify-between mb-2">
                <a
                  href="https://web.telegram.org/a/#8173959167"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-300 hover:text-[#00fff7] transition-colors cursor-pointer"
                >
                  CryptoCustodian Chatbot
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Samisha68/CryptoCustodian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#00fff7] transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://web.telegram.org/a/#8173959167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#00fff7] transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-gray-400">
                CryptoCustodian is an innovative Telegram bot developed using Python, Solana API, and Telegram Bot API. This project integrates speech-to-text functionality, enabling users to perform blockchain transactions like Solana token minting and balance checking through voice commands.
              </p>
            </div>

            <div>
              <div className="flex items-start justify-between mb-2">
                <a
                  href="https://driftdeck.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-300 hover:text-[#00fff7] transition-colors cursor-pointer"
                >
                  Drift UI
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Samisha68/driftui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#00fff7] transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://driftdeck.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#00fff7] transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-gray-400">
                A feature-rich frontend built with Next.js and TailwindCSS simulating a perpetuals trading dashboard experience on Solana using the Drift SDK. View subaccounts, balances, positions, and orders.
              </p>
            </div>

            <div>
              <div className="flex items-start justify-between mb-2">
                <a
                  href="https://gocab-weld.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-300 hover:text-[#00fff7] transition-colors cursor-pointer"
                >
                  Go-Cabs
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://gocab-weld.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#00fff7] transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-gray-400">
                A ride booking application similar to Uber, enabling users to book rides seamlessly. Features comprehensive carbon emissions tracking, allowing users to monitor and view their environmental impact through saved emissions from rides taken.
              </p>
            </div>

            <div>
              <div className="flex items-start justify-between mb-2">
                <a
                  href="https://tvdao.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-300 hover:text-[#00fff7] transition-colors cursor-pointer"
                >
                  TVDAO
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://tvdao.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#00fff7] transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-gray-400">
                A decentralized platform designed for creators and viewers, addressing the fundamental question: why can&apos;t viewers get paid for watching content? Enables a new economic model where viewers are rewarded for their engagement and attention.
              </p>
            </div>

            <div>
              <div className="flex items-start justify-between mb-2">
                <a
                  href="https://t.me/whalevybesbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-300 hover:text-[#00fff7] transition-colors cursor-pointer"
                >
                  Whalevybebot
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://t.me/whalevybesbot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#00fff7] transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-gray-400">
                A Telegram bot for managing Solana wallets with custom nicknames, viewing holdings and transfers. Provides comprehensive token analysis including supply, decimals, authorities, and recent transfer history. Features intuitive navigation and Solana instruction insights.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-20">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-[#00fff7]">*</span> links
          </h2>
          <div className="space-y-3">
            <a
              href="mailto:samishaofficial68@gmail.com"
              className="flex items-center gap-3 text-gray-400 hover:text-[#00fff7] transition-colors"
            >
              <Mail size={16} />
              <span>samishaofficial68@gmail.com</span>
            </a>
            <a
              href="https://github.com/Samisha68"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-[#00fff7] transition-colors"
            >
              <Github size={16} />
              <span>github.com/Samisha68</span>
            </a>
            <a
              href="https://www.linkedin.com/in/samisha-063b96223/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-[#00fff7] transition-colors"
            >
              <Linkedin size={16} />
              <span>linkedin.com/in/samisha-063b96223</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-[#1e2a4a]">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Built by Samisha
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
