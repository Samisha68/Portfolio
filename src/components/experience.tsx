import { experience } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="work" className="max-w-column mx-auto px-6 py-20 border-t border-line">
      <SectionHeading title="Work" />

      <div className="divide-y divide-line">
        {experience.map((job, i) => (
          <Reveal key={`${job.role}-${job.period}`} delay={i * 0.05}>
            <article className="py-7 first:pt-0 last:pb-0 sm:grid sm:grid-cols-[9.5rem_1fr] sm:gap-6">
              <p className="font-mono text-[13px] text-tertiary pt-0.5 mb-2 sm:mb-0">
                {job.current && (
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full bg-accent mr-2 align-middle"
                    aria-hidden
                  />
                )}
                {job.period}
              </p>
              <div>
                <h3 className="text-[17px] font-medium text-primary">
                  {job.role}
                  {job.company && (
                    <>
                      <span className="text-tertiary font-normal"> · </span>
                      {job.url ? (
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-normal text-secondary hover:text-accent transition-colors"
                        >
                          {job.company}
                        </a>
                      ) : (
                        <span className="font-normal text-secondary">{job.company}</span>
                      )}
                    </>
                  )}
                </h3>
                <p className="mt-2 text-secondary leading-[1.7]">{job.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
