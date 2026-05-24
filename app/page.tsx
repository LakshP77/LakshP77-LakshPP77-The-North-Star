export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300">
          Grammarly for job applications
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
          North Star helps you apply smarter.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          A browser extension and dashboard that helps students tailor resumes,
          cover letters, and application answers while browsing jobs and internships.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black">
            Download Extension
          </button>
          <button className="rounded-xl border border-white/20 px-6 py-3 font-semibold">
            View Dashboard
          </button>
        </div>

        <div className="mt-16 grid w-full gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
            <h2 className="text-xl font-semibold">Detect Jobs</h2>
            <p className="mt-3 text-gray-400">
              Reads job descriptions from LinkedIn, Handshake, Indeed, and more.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
            <h2 className="text-xl font-semibold">Tailor Content</h2>
            <p className="mt-3 text-gray-400">
              Suggests resume bullets, keywords, and cover letter sections.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
            <h2 className="text-xl font-semibold">Track Progress</h2>
            <p className="mt-3 text-gray-400">
              Saves jobs, match scores, applications, and generated materials.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}