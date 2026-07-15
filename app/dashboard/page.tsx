"use client";

import { useState } from "react";

const starterJobs = [
  {
    title: "Product Management Intern",
    company: "Microsoft",
    type: "Internship",
    location: "Redmond, WA",
    match: 92,
    reason:
      "Strong match with leadership, technical project work, and product thinking.",
    link: "https://careers.microsoft.com/",
  },
  {
    title: "Software Engineer Intern",
    company: "Amazon",
    type: "Internship",
    location: "Seattle, WA",
    match: 84,
    reason:
      "Good match with Python, JavaScript, and web app experience.",
    link: "https://www.amazon.jobs/",
  },
  {
    title: "HCI Research Assistant",
    company: "University Lab",
    type: "Research",
    location: "Seattle, WA",
    match: 88,
    reason:
      "Strong fit with accessibility, information systems, and user-centered design.",
    link: "https://ischool.uw.edu/research",
  },
];

export default function Dashboard() {
  const [resumeUploaded, setResumeUploaded] = useState(false);

  const [resumeName, setResumeName] = useState(
    "No resume uploaded"
  );

  const [profileStatus, setProfileStatus] = useState(
    "Waiting for resume upload"
  );

  const [jobs, setJobs] = useState<typeof starterJobs>([]);

  const [savedJobs, setSavedJobs] = useState<number>(0);

  function handleResumeUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    setResumeUploaded(true);

    setResumeName(file.name);

    setProfileStatus("Career profile generated");

    setJobs(starterJobs);
  }

  function handleSaveJob() {
    setSavedJobs(savedJobs + 1);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 border-r border-white/10 p-6 md:block">
          <h1 className="text-2xl font-bold">Polaris</h1>

          <nav className="mt-10 flex flex-col gap-4 text-sm text-gray-400">
            <button className="text-left text-white">
              Command Center
            </button>

            <button className="text-left hover:text-white">
              Career Profile
            </button>

            <button className="text-left hover:text-white">
              Recommended Jobs
            </button>

            <button className="text-left hover:text-white">
              Tailored Materials
            </button>

            <button className="text-left hover:text-white">
              Application Tracker
            </button>
          </nav>
        </aside>

        {/* Main */}
        <section className="flex-1 p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm text-gray-400">
                Career operating system
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                Command Center
              </h2>

              <p className="mt-2 max-w-2xl text-gray-400">
                Upload your master resume and let Polaris discover
                opportunities automatically.
              </p>
            </div>

            <button className="rounded-xl bg-white px-5 py-3 font-semibold text-black">
              Run Job Search
            </button>
          </div>

          {/* Workflow */}
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-gray-400">Step 1</p>

              <h3 className="mt-2 text-lg font-semibold">
                Master Resume
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Upload your source resume.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-gray-400">Step 2</p>

              <h3 className="mt-2 text-lg font-semibold">
                Career Profile
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Polaris structures your experiences and skills.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-gray-400">Step 3</p>

              <h3 className="mt-2 text-lg font-semibold">
                Job Discovery
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Relevant opportunities appear automatically.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-gray-400">Step 4</p>

              <h3 className="mt-2 text-lg font-semibold">
                Tailor + Track
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Generate tailored application materials.
              </p>
            </div>
          </div>

          {/* Resume Section */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Upload */}
            <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">
                Master Resume
              </h3>

              <p className="mt-2 text-gray-400">
                Upload your career source-of-truth.
              </p>

              <label className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/30 p-10 text-center transition hover:bg-white/10">
                <span className="text-5xl">📄</span>

                <span className="mt-4 text-lg font-semibold">
                  Upload Resume
                </span>

                <span className="mt-2 text-sm text-gray-400">
                  PDF, DOCX, TXT
                </span>

                <input
                  type="file"
                  className="hidden"
                  onChange={handleResumeUpload}
                />
              </label>
            </div>

            {/* Status */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">
                Career Knowledge Base
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-gray-400">
                    Resume
                  </p>

                  <p className="mt-1 font-semibold">
                    {resumeName}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Profile Status
                  </p>

                  <p className="mt-1 font-semibold text-green-400">
                    {profileStatus}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Polaris State
                  </p>

                  <p className="mt-1 font-semibold">
                    {resumeUploaded
                      ? "Ready for job discovery"
                      : "Awaiting upload"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Jobs */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold">
                  Recommended Opportunities
                </h3>

                <p className="mt-2 text-gray-400">
                  Polaris discovers opportunities from your profile.
                </p>
              </div>

              <button className="rounded-xl border border-white/20 px-5 py-3 font-semibold">
                Refresh
              </button>
            </div>

            {!resumeUploaded ? (
              <div className="mt-10 rounded-2xl border border-dashed border-white/10 p-10 text-center text-gray-400">
                Upload a resume to begin job discovery.
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                {jobs.map((job) => (
                  <div
                    key={`${job.company}-${job.title}`}
                    className="rounded-2xl border border-white/10 bg-black/30 p-5"
                  >
                    <div className="flex flex-col justify-between gap-4 lg:flex-row">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-xl font-semibold">
                            {job.title}
                          </h4>

                          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300">
                            {job.type}
                          </span>
                        </div>

                        <p className="mt-1 text-gray-400">
                          {job.company} · {job.location}
                        </p>

                        <p className="mt-3 max-w-2xl text-sm text-gray-300">
                          {job.reason}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 lg:items-end">
                        <p className="text-2xl font-bold text-green-400">
                          {job.match}% Match
                        </p>

                        <div className="flex flex-wrap gap-2">
                          <a
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black"
                          >
                            View
                          </a>

                          <button className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold">
                            Tailor
                          </button>

                          <button
                            onClick={handleSaveJob}
                            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tracker */}
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">
                Opportunities Found
              </h3>

              <p className="mt-4 text-4xl font-bold">
                {jobs.length}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">
                Saved Jobs
              </h3>

              <p className="mt-4 text-4xl font-bold">
                {savedJobs}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">
                Profile Status
              </h3>

              <p className="mt-4 text-lg font-bold">
                {resumeUploaded
                  ? "Discovery Enabled"
                  : "Incomplete"}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}