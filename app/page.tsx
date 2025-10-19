// app/page.tsx
import Image from "next/image";
import Header from "../components/Header";
import SocialLinks from "../components/SocialLink"
import WorkCard from "../components/WorkCard"

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

      {/* === Work Section === */}
      <section id="work" aria-label="Work" className="py-12 md:py-32">
        {/* Big heading like the reference */}
        <div className="container-max">
          <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Work<span className="text-black">.</span>
          </h2>
        </div>

        {/* Full-bleed two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <WorkCard
              href="#tokopedia"               // replace with real route later
              title="Tokopedia"
              titleLogo={
                  <Image
                      src="/Tokopedia_Logo.png"
                      alt="Tokopedia Logo"
                      width={190}
                      height={40}
                      className="object-contain"
                  />
              }
              subtitle={
                <>"As a <strong>Senior Software Engineer</strong>, I worked with Tokopedia’s <strong>Digital</strong> Team to deliver impactful digital products that drive business growth."</>
              }
              bgClass="bg-emerald-100"        // light green
              icon={
                <Image
                    src="/Tokopedia_Mascot.png"
                    alt="Tokopedia Mascot"
                    fill
                    className="object-contain"
                    sizes="40px"
                />
              }
              // spriteSrc="/tokopedia-sprite.png" // put your sprite under /public (optional)
          />
          <WorkCard
              href="#bytedance"
              title="ByteDance"
              titleLogo={
                  <Image
                      src="/ByteDance_Logo.png"
                      alt="ByteDance Logo"
                      width={220}
                      height={40}
                      className="object-contain"
                  />
              }
              subtitle={
                <>"Early on at <strong>ByteDance</strong>, I led the migration of Tokopedia’s core services to the ByteDance Cloud platform, strengthening reliability and scalability."</>
              }
              bgClass="bg-sky-100"            // light blue
              // spriteSrc="/bytedance-sprite.png"
          />
        </div>
      </section>

      {/* === Footer Section === */}
      <footer className="border-t bg-gray-50 py-8">
        <div className="container-max flex flex-col items-center gap-6 text-center">
            {/* === Build Info Section === */}
            <p className="max-w-xl text-sm leading-relaxed text-gray-400">
                Loosely designed in <span className="transition hover:text-emerald-400"><strong>Figma</strong></span> and coded in
                <span className="transition hover:text-emerald-400"><strong> IntelliJ IDEA</strong></span>. Built with
                <span className="transition hover:text-emerald-400"><strong> Next.js</strong></span> and <span className="transition hover:text-emerald-400"><strong>Tailwind CSS</strong></span>, deployed with
                <span className="transition hover:text-emerald-400"><strong> Vercel</strong></span>. All text is set in the <span className="transition hover:text-emerald-400"><strong>Plus Jakarta Sans</strong></span> typeface.
            </p>
          <div className="pt-4">
            <SocialLinks />
          </div>
        </div>
      </footer>
    </>
  );
}
