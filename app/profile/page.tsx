import Link from "next/link";
import { mockCareerProfile } from "../data/profile";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black px-6 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Polaris</p>
            <h1 className="mt-2 text-4xl font-bold">
              Career Knowledge Base
            </h1>
          </div>

          <Link
            href="/dashboard"
            className="rounded-xl border border-white/20 px-5 py-3"
          >
            Back to Dashboard
          </Link>
        </header>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">
              {mockCareerProfile.name}
            </h2>

            <p className="mt-2 text-gray-400">
              {mockCareerProfile.education}
            </p>

            <p className="mt-1 text-gray-400">
              Expected graduation: {mockCareerProfile.graduationYear}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Target Roles</h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {mockCareerProfile.targetRoles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-white/10 px-3 py-2 text-sm"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Skills</h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {mockCareerProfile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white/10 px-3 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Interests</h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {mockCareerProfile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-white/10 px-3 py-2 text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Experience</h2>

          <div className="mt-6 space-y-4">
            {mockCareerProfile.experiences.map((experience) => (
              <article
                key={experience.id}
                className="rounded-xl border border-white/10 p-5"
              >
                <h3 className="text-lg font-semibold">
                  {experience.title}
                </h3>

                <p className="text-gray-400">
                  {experience.organization}
                </p>

                <p className="mt-3 text-sm text-gray-300">
                  {experience.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Projects</h2>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {mockCareerProfile.projects.map((project) => (
              <article
                key={project.id}
                className="rounded-xl border border-white/10 p-5"
              >
                <h3 className="text-lg font-semibold">{project.name}</h3>

                <p className="mt-3 text-sm text-gray-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}