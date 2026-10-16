export function Footer() {
  return (
    <footer className="border-t border-line md:pl-60">
      <div className="max-w-column mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[13px] text-tertiary">© {new Date().getFullYear()} Samisha</p>
      </div>
    </footer>
  );
}
