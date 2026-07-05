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
      className="max-w-column mx-auto px-6 py-20 border-t border-line"
    >
      <SectionHeading
        title="Projects"
        description="Things I've built and shipped, start to finish."
      />

      <div className="divide-y divide-line">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.04}>
            <article className="py-7 first:pt-0 last:pb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[16px] font-medium text-primary">
                  {project.name}
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
              <p className="mt-2 text-secondary leading-[1.7]">{project.description}</p>
              <p className="mt-2.5 font-mono text-[13px] text-tertiary">{project.meta}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
