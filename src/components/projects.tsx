import { projects } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function ProjectLinks({
  live,
  github,
  name,
}: {
  live?: string;
  github?: string;
  name: string;
}) {
  return (
    <span className="flex items-center gap-4 shrink-0">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} — live site`}
          className="text-sm text-secondary underline underline-offset-[5px] decoration-line-strong hover:text-accent hover:decoration-accent transition-colors"
        >
          Live
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} — source code`}
          className="text-sm text-secondary underline underline-offset-[5px] decoration-line-strong hover:text-accent hover:decoration-accent transition-colors"
        >
          Code
        </a>
      )}
    </span>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="max-w-column mx-auto px-6 py-14 border-t border-line"
    >
      <SectionHeading
        title="Projects"
        description="Things I've built and shipped, start to finish."
      />

      <div>
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.04}>
            <article className="border-b border-line py-8">
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                <h3 className="text-lg font-medium leading-7 text-primary">
                  {project.name}
                  {project.current && (
                    <span className="ml-3 rounded-full border border-accent/20 bg-accent/[0.06] px-2 py-0.5 font-mono text-[10px] font-normal uppercase tracking-wider text-accent">
                      Building now
                    </span>
                  )}
                  <span className="ml-3 font-mono text-[13px] font-normal text-tertiary">
                    {project.year}
                  </span>
                </h3>
                <ProjectLinks
                  live={project.live}
                  github={project.github}
                  name={project.name}
                />
              </div>
              <p className="mt-4 max-w-[58ch] text-[15px] leading-7 text-secondary">
                {project.description}
              </p>
              <p className="mt-4 font-mono text-[12px] leading-5 text-tertiary">
                {project.meta}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
