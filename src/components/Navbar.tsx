import Link from "next/link";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="text-sm font-semibold text-white/70 hover:text-white transition-colors">
    {label}
  </Link>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-300 shadow-[0_18px_55px_rgba(124,92,255,0.30)]" />
          <span>clarixai</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="/services" label="Services" />
          <NavLink href="/agentic-ai" label="Agentic AI" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-br from-violet-500 to-cyan-300 px-4 py-2 text-sm font-extrabold text-black"
          >
            Talk to experts
          </Link>
        </div>
      </div>
    </header>
  );
}
