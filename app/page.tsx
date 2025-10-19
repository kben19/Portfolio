// app/page.tsx
import Image from "next/image";
import Header from "../components/Header";
import SocialLinks from "../components/SocialLink"
import WorkCard from "../components/WorkCard"
import Contact from "../components/Contact"
import tokopediaLogo from "../public/Tokopedia_Logo.png";
import bytedanceLogo from "../public/ByteDance_Logo.png";
import {SiGithub, SiLinkedin, SiMedium} from "react-icons/si";

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
          <p className="text-lg font-semibold text-gray-700">
            Senior Software Engineer |{" "}
            <span className="text-emerald-500">Tokopedia</span>
          </p>

          <h1 className="text-6xl font-semibold leading-tight tracking-tight sm:text-6xl">
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
            <SocialLinks links={[
                {
                    url: "https://github.com/kben19",
                    label: "GitHub",
                    icon: <SiGithub size={22} />,
                },
                {
                    url: "https://www.linkedin.com/in/kelvin-benzali/",
                    label: "LinkedIn",
                    icon: <SiLinkedin size={22} />,
                },
                {
                    url: "https://medium.com/@kevinesia",
                    label: "Medium",
                    icon: <SiMedium size={22}/>,
                },
            ]} />
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative order-first aspect-[4/3] w-full overflow-hidden rounded-2xl border md:order-none md:aspect-[4/3]">
          <Image
            src="/me-hero.png"
            alt="Kelvin Benzali at his desk"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* === Work Section === */}
      <section id="work" aria-label="Work" className="py-20 md:py-32">
        {/* Big heading like the reference */}
        <div className="container-max">
          <h2 className="font-extrabold tracking-tight relative top-12 z-20 text-[14vw] sm:text-[12vw] md:text-[10vw]">
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
                      src={tokopediaLogo}
                      alt="Tokopedia Logo"
                      width={190}           // max width for desktop
                      height={40}
                      priority              // above-the-fold → preload for faster LCP
                      placeholder="blur"    // automatic blur from the import
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
          />
          <WorkCard
              href="#bytedance"
              title="ByteDance"
              titleLogo={
                  <Image
                      src={bytedanceLogo}
                      alt="ByteDance Logo"
                      width={220}
                      height={40}
                      priority              // above-the-fold → preload for faster LCP
                      placeholder="blur"    // automatic blur from the import
                      className="object-contain"
                  />
              }
              subtitle={
                <>"Early on at <strong>ByteDance</strong>, I led the migration of Tokopedia’s core services to the ByteDance Cloud platform, strengthening reliability and scalability."</>
              }
              bgClass="bg-sky-100"            // light blue
          />
        </div>
      </section>

        <Contact
            email="kevinesia@gmail.com"
            blurb={
                <>
                    I love solving complex problems and designing resilient systems. If you are interested to connect,
                    let’s chat — I’m open to collaborations and opportunities.
                </>
            }
            name="Kelvin Benzali"
            location="Jakarta, Indonesia"
            photoSrc="/contact-photo.jpeg"
        />

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
            <SocialLinks links={[
                {
                    url: "https://github.com/kben19",
                    label: "GitHub",
                    icon: <SiGithub size={22} />,
                },
                {
                    url: "https://www.linkedin.com/in/kelvin-benzali/",
                    label: "LinkedIn",
                    icon: <SiLinkedin size={22} />,
                },
                {
                    url: "https://medium.com/@kevinesia",
                    label: "Medium",
                    icon: <SiMedium size={22}/>,
                },
            ]} />
          </div>
        </div>
      </footer>
    </>
  );
}
