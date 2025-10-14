// app/page.tsx
import Image from "next/image";
import Header from "../components/Header";
import SocialLinks from "../components/SocialLink"

export default function HomePage() {
  return (
    <>
      <Header />
      <section
        aria-label="Hero"
        className="container-max grid items-center gap-10 pb-16 pt-6 md:grid-cols-2 md:gap-12"
      >
        {/* Left: text */}
        <div className="space-y-6">
          <p className="text-base font-semibold text-gray-700">
            Senior Software Engineer |{" "}
            <span className="text-emerald-500">Tokopedia</span>
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Kelvin Benzali
          </h1>

          <div className="space-y-3 text-gray-600">
            <p>
              Building biggest Indonesia e-commerce industry for over 6 years.
            </p>
            <p>
              Specializing in scalable microservices serving millions of users.
            </p>
          </div>
          <div className="pt-4">
            <SocialLinks />
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative order-first aspect-[4/3] w-full overflow-hidden rounded-2xl border md:order-none md:aspect-[4/3]">
          <Image
            src="/me-hero.png"   // put your photo in /public as kelvin-hero.jpg
            alt="Kelvin Benzali at his desk"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* === Footer Section === */}
      <footer className="border-t bg-gray-50 py-8">
        <div className="container-max flex justify-center">
          <div className="pt-4">
            <SocialLinks />
          </div>
        </div>
      </footer>
    </>
  );
}
