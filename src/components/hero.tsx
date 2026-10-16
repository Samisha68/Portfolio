"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.05 + i * 0.08, ease: "easeOut" },
  }),
};

const links = [
  { label: "GitHub", href: siteConfig.github, external: true },
  { label: "Telegram", href: siteConfig.telegram, external: true },
  { label: "Email", href: `mailto:${siteConfig.email}`, external: false },
];

export function Hero() {
  return (
    <section id="home" className="max-w-column mx-auto px-6 pt-28 pb-16 sm:pt-32 md:pt-20">
      <motion.div custom={0} initial="hidden" animate="show" variants={fade}>
        <Image
          src="/avatar.jpg"
          alt="Samisha's avatar — a pixel-art monkey with a red bow"
          width={64}
          height={64}
          priority
          className="rounded-2xl border border-line shadow-card transition-transform duration-300 hover:-rotate-3"
        />
      </motion.div>

      <motion.h1
        custom={1}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-8 text-[3rem] leading-none font-semibold tracking-[-0.05em] text-primary sm:text-[3.5rem]"
      >
        {siteConfig.name}
      </motion.h1>

      <motion.p
        custom={2}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-6 font-mono text-[13px] text-tertiary"
      >
        {siteConfig.tags}
      </motion.p>

      <motion.p
        custom={3}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-8 max-w-[54ch] text-[16px] leading-7 text-secondary"
      >
        {siteConfig.intro}
      </motion.p>

      <motion.p
        custom={4}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-5 text-[15px] leading-7 text-secondary"
      >
        Member of{" "}
        <a
          href={siteConfig.superteam}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-[5px] decoration-line-strong hover:text-accent hover:decoration-accent transition-colors"
        >
          Superteam
        </a>
        {" "}and{" "}
        <a
          href={siteConfig.monkeDao}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-[5px] decoration-line-strong hover:text-accent hover:decoration-accent transition-colors"
        >
          MonkeDAO
        </a>
        .
      </motion.p>

      <motion.ul
        custom={5}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-8 flex items-center gap-7"
      >
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-sm text-primary underline underline-offset-[5px] decoration-line-strong hover:decoration-accent hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
