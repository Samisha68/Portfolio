import { pullRequests, siteConfig } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function OpenSource() {
  return (
    <section
      id="open-source"
      className="max-w-column mx-auto px-6 py-20 border-t border-line"
    >
      <SectionHeading
        title="Open source"
        description="Contributions to Solana ecosystem tooling."
      />

      <div className="divide-y divide-line">
        {pullRequests.map((pr, i) => (
          <Reveal key={pr.url} delay={i * 0.05}>
            <a
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-7 first:pt-0 last:pb-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[16px] font-medium text-primary group-hover:text-accent transition-colors">
                  {pr.title}
                  <span className="inline-block ml-1.5 text-tertiary opacity-0 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    ↗
                  </span>
                </h3>
                <span className="font-mono text-xs text-accent border border-accent/25 rounded-full px-2.5 py-0.5">
                  pending merge
                </span>
              </div>

              <p className="mt-1.5 font-mono text-[13px] text-tertiary">
                {pr.repo} #{pr.number} · +{pr.additions} −{pr.deletions} ·{" "}
                {pr.language}
              </p>

              <p className="mt-2.5 text-secondary leading-[1.7]">{pr.description}</p>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <p className="mt-8 text-sm text-tertiary">
          More on{" "}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary underline underline-offset-[5px] decoration-line-strong hover:text-accent hover:decoration-accent transition-colors"
          >
            GitHub
          </a>
          .
        </p>
      </Reveal>
    </section>
  );
}
