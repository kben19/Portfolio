'use client';

// components/ProjectImageGallery.tsx
// Stacked project screenshots that open in a full-screen lightbox on click —
// the timeline card's images render fairly small, so this lets a visitor
// inspect them at full size. Leaf client component (needs click/keyboard
// state); the rest of ProjectTimelineCard stays a server component.

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type GalleryImage = { src: string; alt: string; width: number; height: number };

interface Props {
    images: GalleryImage[];
}

export default function ProjectImageGallery({ images }: Props) {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    useEffect(() => {
        if (openIdx === null) return;
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setOpenIdx(null);
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [openIdx]);

    return (
        <div className="flex flex-col gap-3">
            {images.map((img, i) => (
                <button
                    key={i}
                    type="button"
                    onClick={() => setOpenIdx(i)}
                    aria-label={`View larger image: ${img.alt}`}
                    className="group overflow-hidden rounded-2xl border border-slate-500/[0.15] bg-gray-50 transition duration-300 hover:border-slate-500/30"
                >
                    <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        sizes="(min-width: 860px) 400px, 100vw"
                        className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                </button>
            ))}

            {openIdx !== null && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={images[openIdx].alt}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
                    onClick={() => setOpenIdx(null)}
                >
                    <button
                        type="button"
                        onClick={() => setOpenIdx(null)}
                        aria-label="Close"
                        className="absolute right-5 top-5 text-white/80 transition duration-300 hover:text-white"
                    >
                        <X className="h-7 w-7" />
                    </button>
                    <div onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={images[openIdx].src}
                            alt={images[openIdx].alt}
                            width={images[openIdx].width}
                            height={images[openIdx].height}
                            sizes="90vw"
                            className="h-auto max-h-[85vh] w-auto max-w-[90vw] rounded-lg object-contain"
                            priority
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
