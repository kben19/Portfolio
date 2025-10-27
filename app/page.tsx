// app/page.tsx
import Image from "next/image";
import { cookies } from 'next/headers'
import Header from "../components/Header";
import SocialLinks from "../components/SocialLink";
import WorkCard from "../components/WorkCard";
import Contact from "../components/Contact";
import tokopediaLogo from "../public/Tokopedia_Logo.png";
import bytedanceLogo from "../public/ByteDance_Logo.png";
import { createServerComponentClient } from '../utils/supabase/server';
import { getUserAgent, getUserAgentPlatform, getCountry, getReferrer, getClientIP, getOrSetSessionId } from '../utils/lib/req';
import { sha256Hex } from '../utils/lib/encode';
import { isoDateKey } from '../utils/lib/date';
import { detectOS } from '../utils/lib/os';
import { SiGithub, SiLinkedin, SiMedium } from "react-icons/si";
import { InitSessionCookie } from "../components/InitSession";

export default async function HomePage() {
    const hasSid = cookies().has('sid') // server can read HttpOnly cookies
    const supabase = createServerComponentClient()
    const { data: events, error } = await supabase.from('traffic_events').select('*')
    if (error) console.error('Supabase query error:', error)

    const country = getCountry();
    const ua = getUserAgent() || 'unknown';
    const uaPlatform = getUserAgentPlatform(); // UA-CH
    const os = detectOS({ ua, uaPlatform });
    const ip = getClientIP()       // may be null on some proxies/bots
    const ip_hash = ip ? await sha256Hex(ip) : '';
    const session_id = await getOrSetSessionId();

    // Insert traffic metadata
    try {
        await supabase.from('traffic_events').insert([
            {
                path: '/',
                country,
                user_agent: ua,
                device_type: /mobile|android|iphone/i.test(ua) ? 'mobile' : 'desktop',
                os_type: os,
                meta: {visited_at: new Date().toISOString()},
                referrer: getReferrer(),
                ip_hash: ip_hash,
                session_id: session_id,
                date_key: isoDateKey(),
            },
        ])
    } catch (e) {
        console.error('Insert failed:', e)
    }
  return (
    <>
        {!hasSid && <InitSessionCookie />} {/* only render if missing */}
      <Header links={[
          { href: "#about", label: "About" },
          { href: "#work", label: "Work" },
          { href: "#contact", label: "Contact" },
      ]}/>
      <section
        aria-label="Hero"
        className="container-max grid items-center gap-10 pb-16 pt-6 md:grid-cols-2 md:gap-12"
      >
        {/* Left: text */}
        <div className="space-y-6">
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">
            Senior Software Engineer |{" "}
            <span className="text-emerald-500">Tokopedia</span>
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
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
        <div className="container-max grid md:grid-cols-2">
          <WorkCard
              href="/project#tokopedia"
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
              href="/project#bytedance"
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
