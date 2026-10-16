"use client";
import React, { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      // The contact section is too short to reach the scrollspy band,
      // so highlight it explicitly once the page is scrolled to the end.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;
      if (atBottom) setActive("contact");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: underline the section currently in view
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation: h → top, w/o/p/e/c → sections
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;

      if (e.key === "h") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const item = navItems.find((n) => n.key === e.key);
      if (item) {
        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-bg/90 backdrop-blur-xl transition-shadow duration-300 md:bottom-0 md:right-auto md:w-60 md:border-r md:border-line ${
          scrolled ? "border-b border-line" : "border-b border-transparent md:border-b-0"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-wide items-center justify-between gap-3 px-6 md:h-full md:flex-col md:items-stretch md:justify-start md:px-7 md:py-10">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="shrink-0 text-left text-sm font-semibold text-primary transition-colors hover:text-accent md:text-base"
          aria-label="Scroll to top"
        >
          Samisha
        </button>

        <div className="flex min-w-0 items-center gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5 md:mt-12 md:flex-col md:items-stretch md:gap-1 md:overflow-visible">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`whitespace-nowrap text-[13px] transition-colors md:rounded-md md:px-3 md:py-2.5 ${
                item.id === "contact"
                  ? active === item.id
                    ? "rounded-full bg-primary px-3 py-1.5 text-bg md:rounded-md"
                    : "rounded-full border border-line-strong px-3 py-1.5 text-primary hover:border-primary md:rounded-md md:border-transparent md:hover:bg-surface"
                  : active === item.id
                    ? "text-primary underline underline-offset-[6px] decoration-line-strong md:bg-surface md:no-underline"
                    : "text-secondary hover:text-primary md:hover:bg-surface"
              }`}
            >
              <span className="sm:hidden">{item.short}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </a>
          ))}
        </div>
        </nav>
      </header>

      <p className="fixed right-6 top-6 z-40 hidden font-mono text-[11px] text-tertiary md:block">
        press <kbd className="text-secondary">w</kbd> · <kbd className="text-secondary">p</kbd> ·{" "}
        <kbd className="text-secondary">c</kbd> to jump around
      </p>
    </>
  );
}
