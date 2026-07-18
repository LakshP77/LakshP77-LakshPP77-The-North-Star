import { TagList } from "@/components/shared/TagList";
import type { Project } from "@/types/profile";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-xl border border-white/10 p-5"
          >
            <h3 className="text-lg font-semibold">{project.name}</h3>

            <p className="mt-3 text-sm text-gray-300">
              {project.description}
            </p>

            <TagList
              tags={project.skills}
              className="mt-4 flex flex-wrap gap-2"
              tagClassName="rounded-full bg-white/10 px-3 py-1 text-xs"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
