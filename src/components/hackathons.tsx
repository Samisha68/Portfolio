import { hackathons } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Hackathons() {
  return (
    <section
      id="hackathons"
      className="max-w-column mx-auto px-6 py-20 border-t border-line"
    >
      <SectionHeading title="Hackathons" />

      <div className="divide-y divide-line">
        {hackathons.map((hack, i) => (
          <Reveal key={hack.name} delay={i * 0.05}>
            <article className="py-7 first:pt-0 last:pb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[16px] font-medium text-primary">
                  <a
                    href={hack.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {hack.name}
                  </a>
                </h3>
                <p className="font-mono text-[13px] text-tertiary">{hack.event}</p>
              </div>
              <p className="mt-2 text-secondary leading-[1.7]">{hack.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
