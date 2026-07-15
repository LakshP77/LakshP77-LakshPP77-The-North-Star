import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Polaris</h1>

          <Link
            href="/dashboard"
            className="rounded-full border border-white/20 px-5 py-2 text-sm transition hover:bg-white/10"
          >
            Open Dashboard
          </Link>
        </nav>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="mb-5 rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300">
            Your career operating system
          </p>

          <h2 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Find the right opportunities. Tailor every application.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Polaris turns your master resume into a career knowledge base, finds
            relevant jobs and research opportunities, then helps you tailor and
            track every application.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/dashboard"
              className="rounded-xl bg-white px-7 py-3 font-semibold text-black"
            >
              Start with Resume
            </Link>

            <button className="rounded-xl border border-white/20 px-7 py-3 font-semibold">
              Download Extension
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}