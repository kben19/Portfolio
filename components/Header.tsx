// components/Header.tsx
import Link from "next/link";

type HeaderLink = {
    href: string;
    label: string;
};

interface Props {
    links: HeaderLink[];
}

export default function Header({ links }: Props) {
  return (
    <header className="container-max py-4 pr-6">
      <nav className="flex justify-end">
        <ul className="flex gap-8 text-sm text-gray-700">
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
  );
}
