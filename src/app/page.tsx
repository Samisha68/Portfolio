import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { OpenSource } from "@/components/open-source";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="md:pl-60">
        <Hero />
        <Experience />
        <OpenSource />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
