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
        <div
            className={[
                "group relative block overflow-hidden",
                bgClass,
            ].join(" ")}
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
                        <p className="mt-2 text-gray-700/80 transition-transform duration-300 ease-out group-hover:translate-y-1.5">{subtitle}</p>
                    )}
                </div>
            </div>
            {/* === Reveal bar (full width) === */}
            <Link
                href={href}
                aria-label={`${title} — View project`}
                className="
                    absolute inset-x-0 bottom-0
                    z-20                               /* bring it above inner content */
                    flex items-center justify-center
                    h-[15%] min-h-[44px]
                    bg-slate-900 text-white
                    text-xl font-bold tracking-wide
                    opacity-0 translate-y-full pointer-events-none
                    transition-all duration-300 ease-out
                    group-hover:opacity-80 group-hover:translate-y-0 group-hover:pointer-events-auto

                    hover:text-white hover:bg-slate-900/95
                    hover:[text-shadow:0_0_10px_rgba(255,255,255,0.35)]
                    hover:brightness-110
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60
                "
            >
                View Project
            </Link>
        </div>
    );
}
