import Link from "next/link";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium">
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <main className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm text-gray-500">Hello, I’m</p>
        <h1 className="text-4xl font-bold tracking-tight">Kelvin Benzali</h1>
        <p className="text-gray-600 max-w-2xl">
          Senior Software Engineer specializing in distributed systems (Go, MongoDB, Redis, MySQL).
          Building resilient services, improving reliability, and empowering developer velocity.
        </p>
        <div className="flex gap-2">
          <Tag>Go</Tag>
          <Tag>Microservices</Tag>
          <Tag>Cloud</Tag>
          <Tag>CI/CD</Tag>
        </div>
        <div className="flex gap-3">
          <Link href="mailto:kelvin@example.com" className="underline">Email</Link>
          <Link href="https://github.com/kelvinbenzali" className="underline" target="_blank">GitHub</Link>
          <Link href="https://www.linkedin.com/in/kelvinbenzali" className="underline" target="_blank">LinkedIn</Link>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Featured Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Toko Sandbox",
              desc: "Self-service test environment integrated with CI/CD gates; cut integration time by ~40–50%.",
              link: "#"
            },
            {
              title: "Payment Reliability",
              desc: "Improved SLOs with alert hygiene, idempotency patterns, and robust runbooks.",
              link: "#"
            }
          ].map((p) => (
            <Link
              key={p.title}
              href={p.link}
              className="block rounded-2xl border p-4 transition hover:shadow"
            >
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="space-y-3">
          <div className="rounded-2xl border p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Tokopedia — Senior Software Engineer</h3>
              <span className="text-sm text-gray-500">2019 → Present</span>
            </div>
            <ul className="mt-2 list-disc pl-6 text-sm text-gray-700">
              <li>Migrated core services to new cloud while meeting SLOs.</li>
              <li>Led design/code reviews; mentored engineers; championed blameless postmortems.</li>
              <li>Built Toko Sandbox; boosted coverage and reduced test time significantly.</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="pt-6 text-sm text-gray-500">
        Built with <span className="font-medium">Next.js</span> &amp; <span className="font-medium">Tailwind CSS</span>.
      </footer>
    </main>
  );
}
