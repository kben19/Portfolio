import Image from "next/image";
import Link from "next/link";

type WorkCardProps = {
    href: string;
    title: string;
    titleLogo: React.ReactNode;
    subtitle?: React.ReactNode;
    bgClass: string;
    icon?: React.ReactNode;
    spriteSrc?: string;
};

export default function WorkCard({
    href,
    title,
    titleLogo,
    subtitle,
    bgClass,
    icon,
    spriteSrc
}: WorkCardProps) {
    return (
        <Link
            href={href}
            className={[
                "group relative block overflow-hidden",
                bgClass,
            ].join(" ")}
            aria-label={`${title} — View projects`}
        >
            {/* Background sprite (optional) */}
            {spriteSrc && (
                <Image
                    src={spriteSrc}
                    alt=""
                    fill
                    className="pointer-events-none object-cover opacity-40 transition duration-700 group-hover:scale-105"
                />
            )}

            {/* Overlay gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 to-black/15" />

            {/* Content */}
            <div className="relative z-10 flex h-[18rem] items-center justify-center p-8 md:h-[22rem] lg:h-[26rem]">
                <div className="text-center">
                    {/* ===== ICON ===== */}
                    <div className="mb-4 gap-2 flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.15]">
                        {icon && (
                            <div className="relative h-10 w-10"> {/* ≈ size=40 */}
                                {icon}
                            </div>
                        )}
                        {titleLogo && (
                            <div className="relative">
                                {titleLogo}
                            </div>
                        )}
                    </div>

                    {subtitle && (
                        <p className="mt-2 text-sm text-gray-700/80 transition-transform duration-300 ease-out group-hover:translate-y-1.5">{subtitle}</p>
                    )}

                    {/* ===== CTA: “View Projects” ===== */}
                    <div className="relative mt-6 h-0 overflow-visible">
            <span
                className="
                inline-flex translate-y-[-8px] opacity-0
                rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white
                shadow-sm ring-1 ring-black/5
                transition-all duration-300 ease-out
                group-hover:translate-y-0 group-hover:opacity-100
              "
            >
              View projects
            </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
