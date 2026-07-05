import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { OpenSource } from "@/components/open-source";
import { Projects } from "@/components/projects";
import { Hackathons } from "@/components/hackathons";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <OpenSource />
        <Projects />
        <Hackathons />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
