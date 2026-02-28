import Link from "next/link";

const socials = [
  { id: "01", label: "GITHUB", href: "https://github.com", color: "text-cyan-400" },
  { id: "02", label: "LINKEDIN", href: "https://linkedin.com", color: "text-green-400" },
  { id: "03", label: "INSTAGRAM", href: "https://instagram.com", color: "text-yellow-400" },
  { id: "04", label: "X", href: "https://x.com", color: "text-red-400" },
];

export default function Footer() {
  return (
    <footer className="mt-20 w-full border-t border-white/10 backdrop-blur-md font-mono">
      <div className="flex w-full flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:gap-6 md:px-10 md:py-4">
        <p className="text-sm text-white font-semibold tracking-wide md:text-base">IEEE CS</p>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-x-8">
          {socials.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-white text-xs font-semibold tracking-widest transition hover:opacity-80 md:text-sm"
            >
              <span className={`text-xs ${item.color}`}>{item.id}/</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
