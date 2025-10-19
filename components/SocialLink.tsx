import Link from "next/link";

type SocialLink = {
    icon: React.ReactNode;
    url: string;
    label?: string; // optional for accessibility
};

interface Props {
    links: SocialLink[];
    className?: string;
}

export default function SocialLinks({ links, className = "" }: Props) {
    return (
        <div className="flex items-center gap-5 text-gray-400">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label || "social link"}
                    className="text-gray-400 hover:text-emerald-400 transition-transform duration-300 hover:scale-110"
                >
                    {link.icon}
                </Link>
            ))}
        </div>
    );
}
