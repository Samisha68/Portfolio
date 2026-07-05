export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-column mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[13px] text-tertiary">© {new Date().getFullYear()} Samisha</p>
        <p className="hidden sm:block font-mono text-xs text-tertiary">
          press <kbd className="text-secondary">w</kbd> · <kbd className="text-secondary">p</kbd> ·{" "}
          <kbd className="text-secondary">c</kbd> to jump around
        </p>
      </div>
    </footer>
  );
}
