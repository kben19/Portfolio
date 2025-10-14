import Link from "next/link";
import {
    SiGithub,
    SiLinkedin,
    SiMedium,
} from "react-icons/si";

export default function SocialLinks() {
    const links = [
        {
            href: "https://github.com/kben19",
            label: "GitHub",
            icon: <SiGithub size={22} />,
        },
        {
            href: "https://www.linkedin.com/in/kelvin-benzali-41b32453/",
            label: "LinkedIn",
            icon: <SiLinkedin size={22} />,
        },
        {
            href: "https://medium.com/@kevinesia",
            label: "Medium",
            icon: <SiMedium size={22}/>,
        },
    ];

    return (
        <div className="flex items-center gap-5 text-gray-400">
            {links.map((l) => (
                <Link
                    key={l.href}
                    href={l.href}
                    aria-label={l.label}
                    target="_blank"
                    className="transition hover:text-emerald-400 hover:scale-110"
                >
                    {l.icon}
                </Link>
            ))}
        </div>
    );
}
