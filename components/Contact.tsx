// components/Contact.tsx
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLink"
import {SiX, SiLinkedin, SiInstagram} from "react-icons/si";

type Props = {
    email: string;
    blurb: React.ReactNode;
    name: string;
    location: string;
    photoSrc: string;   // e.g. "/contact-photo.jpg"
};

export default function ContactSection({ email, blurb, name, location, photoSrc }: Props) {
    return (
        <section id="contact" className="relative py-20 md:py-32 lg:py-40">
            {/* Oversized heading */}
            <h2
                aria-hidden
                className="pointer-events-none select-none relative top-4 left-6 z-20 leading-none font-extrabold text-black text-[14vw] sm:text-[12vw] md:text-[10vw]"
            >
                Say hi.
            </h2>

            <div className="relative z-10 grid md:grid-cols-2 items-stretch">
                {/* Left panel */}
                <div className="h-full bg-slate-800 p-10 text-slate-100 sm:p-12 md:p-14 lg:p-20 flex flex-col">
                    <div className="space-y-6">
                        <div>
                            <Link
                                href={`mailto:${email}`}
                                className="break-words text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl hover:opacity-80 hover:underline"
                            >
                                {email}
                            </Link>
                        </div>

                        <div className="h-px w-12 bg-slate-300/40" />

                        <p className="max-w-prose text-slate-200/90">{blurb}</p>

                        <div className="pt-4 text-slate-300">
                            <p className="font-medium">{name}</p>
                            <p className="text-sm opacity-80">{location}</p>
                        </div>

                        <div className="pt-4">
                            <SocialLinks links={[
                                {
                                    url: "https://www.linkedin.com/in/kelvin-benzali/",
                                    label: "LinkedIn",
                                    icon: <SiLinkedin size={22} />,
                                },
                                {
                                    url: "https://x.com/benzali",
                                    label: "X",
                                    icon: <SiX size={22}/>,
                                },
                                {
                                    url: "https://www.instagram.com/kelvinbenzali/",
                                    label: "Instagram",
                                    icon: <SiInstagram size={22}/>,
                                }
                            ]} />
                        </div>
                    </div>
                </div>

                {/* Right photo */}
                <div className="relative h-full w-full overflow-hidden min-h-[22rem] md:min-h-[26rem] lg:min-h-[28rem]">
                    <Image
                        src={photoSrc}
                        alt="Contact / profile"
                        fill
                        className="object-cover object-[50%_65%] md:object-[50%_60%] brightness-110 contrast-110 saturate-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        placeholder="empty"
                    />
                </div>
            </div>
        </section>
    );
}
