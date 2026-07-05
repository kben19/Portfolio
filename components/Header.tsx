// components/Header.tsx
import Link from "next/link";

type HeaderLink = {
    href: string;
    label: string;
};

interface Props {
    links: HeaderLink[];
    sticky?: boolean; // floats the nav on scroll — opt-in per page, off by default
}

export default function Header({ links, sticky = false }: Props) {
  return (
    <div className={sticky ? "sticky top-0 z-40 w-full border-b border-black/5 bg-[#f3f3f3]/90 backdrop-blur-md" : undefined}>
      <header className="container-max py-4">
        <nav className="flex justify-center">
          <ul className="flex gap-8 text-base font-semibold text-gray-700">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="underline-offset-4 hover:underline focus:underline focus:outline-none"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
