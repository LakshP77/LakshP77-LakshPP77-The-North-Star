export default function Dashboard() {
  return (
    <main className="flex min-h-screen bg-[#0a0a0a] text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 p-6">
        <h1 className="text-2xl font-bold">North Star</h1>

        <nav className="mt-10 flex flex-col gap-4 text-gray-400">
          <button className="text-left text-white">Dashboard</button>
          <button className="text-left">Saved Jobs</button>
          <button className="text-left">Applications</button>
          <button className="text-left">Resume Builder</button>
          <button className="text-left">Settings</button>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold">Dashboard</h2>
            <p className="mt-2 text-gray-400">
              Track jobs, resumes, and applications.
            </p>
          </div>

          <button className="rounded-xl bg-white px-5 py-3 font-semibold text-black">
            Upload Resume
          </button>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Saved Jobs</h3>
            <p className="mt-4 text-4xl font-bold">24</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Applications Sent</h3>
            <p className="mt-4 text-4xl font-bold">12</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Average Match Score</h3>
            <p className="mt-4 text-4xl font-bold">87%</p>
          </div>
        </div>

        {/* Recent Jobs */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-semibold">Recent Jobs</h3>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-white/10 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">
                    Product Management Intern
                  </h4>
                  <p className="text-gray-400">Microsoft</p>
                </div>

                <p className="font-bold text-green-400">92% Match</p>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Software Engineer Intern</h4>
                  <p className="text-gray-400">Amazon</p>
                </div>

                <p className="font-bold text-yellow-400">81% Match</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}