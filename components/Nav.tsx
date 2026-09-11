import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/exercises", label: "Exercises" },
  { href: "/stats", label: "Stats" },
  { href: "/quests", label: "Quests" },
  { href: "/character", label: "Character" },
];

export function Nav() {
  return (
    <nav className="flex gap-4 text-sm">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-zinc-400 transition-colors hover:text-amber-400"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
