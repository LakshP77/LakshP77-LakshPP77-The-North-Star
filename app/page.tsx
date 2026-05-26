export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">North Star</h1>
          <button className="rounded-full border border-white/20 px-5 py-2 text-sm">
            Sign In
          </button>
        </nav>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="mb-5 rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300">
            Grammarly for job applications
          </p>

          <h2 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Apply smarter with every job you find.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            North Star is a browser extension and dashboard that helps students
            tailor resumes, cover letters, and application answers while browsing
            jobs and internships.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-white px-7 py-3 font-semibold text-black">
              Download Extension
            </button>
            <button className="rounded-xl border border-white/20 px-7 py-3 font-semibold">
              Open Dashboard
            </button>
          </div>

          <div className="mt-16 grid w-full gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
              <h3 className="text-xl font-semibold">Detect Jobs</h3>
              <p className="mt-3 text-gray-400">
                Reads job descriptions from job boards like LinkedIn, Handshake,
                Indeed, and Workday.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
              <h3 className="text-xl font-semibold">Tailor Applications</h3>
              <p className="mt-3 text-gray-400">
                Suggests resume keywords, bullet edits, cover letter content,
                and application responses.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
              <h3 className="text-xl font-semibold">Track Progress</h3>
              <p className="mt-3 text-gray-400">
                Saves jobs, match scores, tailored documents, and application
                statuses in one dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}