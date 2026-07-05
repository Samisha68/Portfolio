import { siteConfig } from "@/lib/data";
import { Reveal } from "./reveal";

const links = [
  { label: siteConfig.email, href: `mailto:${siteConfig.email}`, external: false },
  { label: "Telegram", href: siteConfig.telegram, external: true },
  { label: "GitHub", href: siteConfig.github, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="max-w-column mx-auto px-6 py-20 border-t border-line">
      <Reveal>
        <h2 className="text-xl font-medium tracking-tight text-primary">Get in touch</h2>
        <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-[15px] text-primary underline underline-offset-[5px] decoration-line-strong hover:text-accent hover:decoration-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
