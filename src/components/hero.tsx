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
    <section id="home" className="max-w-column mx-auto px-6 pt-32 sm:pt-40 pb-20">
      <motion.div custom={0} initial="hidden" animate="show" variants={fade}>
        <Image
          src="/avatar.jpg"
          alt="Samisha's avatar — a pixel-art monkey with a red bow"
          width={56}
          height={56}
          priority
          className="rounded-xl border border-line transition-transform duration-300 hover:-rotate-3"
        />
      </motion.div>

      <motion.h1
        custom={1}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-8 text-[2.5rem] leading-tight font-semibold tracking-tight text-primary"
      >
        {siteConfig.name}
      </motion.h1>

      <motion.p
        custom={2}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-1 text-lg text-secondary"
      >
        {siteConfig.identity}
      </motion.p>

      <motion.p
        custom={2}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-3 font-mono text-[13px] text-tertiary"
      >
        {siteConfig.tags}
      </motion.p>

      <motion.p
        custom={3}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-6 text-[17px] text-secondary leading-[1.7] max-w-[62ch]"
      >
        {siteConfig.intro} Member of{" "}
        <a
          href={siteConfig.superteam}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-[5px] decoration-line-strong hover:text-accent hover:decoration-accent transition-colors"
        >
          Superteam
        </a>
        .
      </motion.p>

      <motion.ul
        custom={4}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-8 flex items-center gap-6"
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
