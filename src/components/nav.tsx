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
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-bg/85 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="max-w-column mx-auto px-6 h-14 flex items-center justify-between gap-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-medium text-primary hover:text-accent transition-colors shrink-0"
          aria-label="Scroll to top"
        >
          Samisha
        </button>

        <div className="flex items-center gap-3 sm:gap-5 min-w-0">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[13px] whitespace-nowrap transition-colors underline-offset-[6px] decoration-line-strong ${
                active === item.id
                  ? "text-primary underline"
                  : "text-secondary hover:text-primary"
              }`}
            >
              <span className="sm:hidden">{item.short}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
