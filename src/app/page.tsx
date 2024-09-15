"use client"

import { Button } from "./components/ui/Button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Code, Github as Mail, Send, FileText } from "lucide-react";
import {Linkedin as LinkedinIcon } from "lucide-react";
import Link from "next/link"
import Contact from "./components/ui/Contact"
import { Card } from "./components/ui/card"
import { motion, useScroll, useTransform, useAnimation } from "framer-motion"
import { useEffect } from "react"

const StarryBackground = () => {

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#0a0b1e"/>
          {[...Array(100)].map((_, i) => (
            <circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r={Math.random() * 2}
              fill="#fff"
              fillOpacity={Math.random() * 0.5 + 0.25}
              
            >
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur={`${Math.random() * 3 + 2}s`}
                repeatCount="indefinite"
                begin={`${Math.random() * 3}s`}
                
              />
            </circle>
          ))}
        </svg>
      </div>
    </div>
  )
}

const ShootingStar = () => {
  const randomDelay = Math.random() * 15
  return (
    <div 
      className="absolute w-0.5 h-0.5 bg-white rounded-full"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `shootingStarAnimation 2s linear ${randomDelay}s infinite`
      }}
    />
  )
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    })
  }, [controls])

  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white overflow-hidden">
      <StarryBackground />
      {[...Array(5)].map((_, i) => (
        <ShootingStar key={i} />
      ))}
      <div className="relative">
        <motion.header 
          className="sticky top-0 z-10 backdrop-blur-sm bg-[#0a0b1e]/80 border-b border-white/10"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{opacity}}
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              HEY!
            </Link>
            <nav className="space-x-4">
              <Link href="#about" className="hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="#projects" className="hover:text-purple-400 transition-colors">
                Projects
              </Link>
              <Link href="#tech-stack" className="hover:text-purple-400 transition-colors">
                Tech-Stack
              </Link>
              <Link href="#resume" className="hover:text-purple-400 transition-colors">
                Resume
              </Link>
              <Link href="#contact" className="hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </motion.header>

        <main>
          <motion.section 
            className="py-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            style={{opacity}}
          >
            <motion.h1 
              className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Samisha
            </motion.h1>
            <motion.p 
              className="text-xl text-purple-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                <Link href="#projects">Explore My Universe</Link>
              </Button>
            </motion.div>
          </motion.section>

          <motion.section 
            id="about" 
            className="py-20 bg-[#0a0b1e]/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">About Me</h2>
              <p className="max-w-2xl mx-auto text-center text-purple-200">
                I am a cosmic code craftsman, adept at solving complex problems and embracing challenges. With a passion for web development as vast as the universe itself, I weave digital constellations with every line of code. My mission is to create seamless user experiences that are not only functional but truly out of this world. Driven by curiosity and a love for tackling tough problems, I thrive on pushing boundaries and innovating. Let us explore the infinite possibilities of technology together and make the digital cosmos shine even brighter.
              </p>
            </div>
          </motion.section>

          <motion.section 
            id="projects" 
            className="py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Stellar Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="University-Website"
                  description=" I embarked on a journey through the digital cosmos to create a University Website that bridges the gap between functionality and elegance. By harnessing the power of HTML and CSS, I designed a user-centric dashboard that caters to students, faculty, and administrators alike. This project seamlessly blends usability with visual appeal, ensuring that every interaction is both intuitive and aesthetically pleasing. The result is a comprehensive, engaging website that stands as a beacon of efficiency and style in the vast universe of web development."
                  link="https://university-website-nmit.vercel.app/"
                />
                <ProjectCard
                  title="Payment-Application"
                  description="In a stellar display of full-stack prowess, I crafted a Secure Payment Platform using React.js, Express.js, MongoDB, and Tailwind CSS. This interstellar application prioritizes security with robust user authentication and seamless transaction management. The user experience shines through an intuitive dashboard designed for effortless transaction processing, making each financial journey smooth and secure. From the ground up, every element is meticulously engineered to provide a stellar blend of functionality and elegance, ensuring that users traverse their financial tasks with cosmic ease and confidence."
                  link="https://github.com/Samisha68/PayPro/tree/main"
                />
                <ProjectCard
                  title="Muzer"
                  description="In the boundless expanse of my development universe, I crafted Muzer, a celestial music platform that harmoniously blends the MERN stack into a symphony of real-time song requests and curated playlists. As the maestro of secure authentication, I wielded next-auth to ensure role-based access, creating a secure galaxy for user interactions. The visual cosmos of *Muzer* shines through with Tailwind CSS, offering a responsive and seamless experience that adapts gracefully across every device. This project exemplifies my ability to conjure stellar solutions and navigate the digital stars with precision and creativity."
                  link="https://github.com/Samisha68/Muzer2"
                />
                <ProjectCard
                  title="Portfolio"
                  description="Dive into my portfolio website, crafted with the dynamic duo of Next.js and Tailwind CSS. This sleek and responsive digital showcase not only highlights my projects but also offers an immersive, user-friendly experience. With Next.js powering seamless navigation and Tailwind CSS adding a touch of modern design elegance, every interaction is smooth and visually captivating. Explore a universe of my work, where each click reveals a new facet of my skills and creativity, all wrapped in a beautifully cohesive design."
                  link=""
                />
                <ProjectCard
                  title="ASE-CLUB"
                  description="Embark on a journey through my full-stack project, where the MERN stack meets a sleek design crafted in Figma, HTML, and CSS. This web application is designed to revolutionize community engagement, fostering vibrant student interaction and streamlined activities. With JavaScript libraries ensuring a fluid and responsive user experience, the platform facilitates effortless event enrollment, intuitive member profile management, and lively community forum discussions. Dive into a space where technology enhances connectivity and participation, all wrapped in a user-centric and visually compelling interface."
                  link="Coming Sooon!!"
                />
              </div>
            </div>
          </motion.section>

          <motion.section 
            id="tech-stack" 
            className="py-20 bg-[#0a0b1e]/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-4 ">
              <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Galactic Tech Stack</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <TechBadge name="React" />
                <TechBadge name="Next.js" />
                <TechBadge name="TypeScript" />
                <TechBadge name="Node.js" />
                <TechBadge name="Express" />
                <TechBadge name="MongoDB" />
                <TechBadge name="PostgreSQL" />
                <TechBadge name="Tailwind CSS" />
                <TechBadge name="Git" />
                <TechBadge name="Java" />
                <TechBadge name="Python" />
                <TechBadge name="SQL" />
                <TechBadge name="Javascript" />
              </div>
            </div>
          </motion.section>

          <motion.section 
            id="resume" 
            className="py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">My Cosmic Resume</h2>
              <div className="flex justify-center">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  <FileText className="mr-2 h-4 w-4" />
                  <Link href="https://resume-samisha.tiiny.site" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
          </motion.section>

          <motion.section 
            id="contact" 
            className="py-20 bg-[#0a0b1e]/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-md mx-auto">
                <Contact/>
              </div>
              <div className="mt-8 flex justify-center space-x-4">
                <Button variant="outline" size="icon" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white" asChild>
                  <Link href="https://github.com/Samisha68">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white" asChild>
                  <Link href="https://www.linkedin.com/in/samisha-063b96223/">
                    <LinkedinIcon className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white" asChild>
                  <Link href="mailto:samishaofficial68@gmail.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.section>
        </main>

        <footer className="bg-[#0a0b1e] py-6 text-center border-t border-white/10">
          <p className="text-sm text-purple-200">
            © {new Date().getFullYear()} Samisha. All rights reserved across the universe.
          </p>
        </footer>
      </div>
    </div>
  )
}
function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="bg-[#1a1b3e] border-purple-500 hover:border-pink-500 transition-colors">
        <CardHeader>
          <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-purple-200">{description}</CardDescription>
          <Button variant="outline" className="mt-4 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white" asChild>
            <Link href={link}>
              Have a Look!
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function TechBadge({ name }: TechBadgeProps) {
  return (
    <motion.div
      className="group relative"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative bg-[#1a1b3e] text-purple-300 rounded-full px-3 py-1 text-sm font-medium border border-purple-500 transition-all duration-300 group-hover:border-pink-500 group-hover:text-white">
        <Code className="inline-block mr-1 h-4 w-4" />
        {name}
      </div>
      <motion.div
      className="group relative tech-badge" // Add tech-badge class here
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
    </motion.div>
    </motion.div>
  )
}

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

interface TechBadgeProps {
  name: string;
}
