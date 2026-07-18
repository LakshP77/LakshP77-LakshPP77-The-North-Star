import { TagList } from "@/components/shared/TagList";
import type { Experience } from "@/types/profile";

type ExperienceListProps = {
  experiences: Experience[];
};

export function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-2xl font-semibold">Experience</h2>

      <div className="mt-6 space-y-4">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className="rounded-xl border border-white/10 p-5"
          >
            <h3 className="text-lg font-semibold">{experience.title}</h3>

            <p className="text-gray-400">{experience.organization}</p>

            <p className="mt-3 text-sm text-gray-300">
              {experience.description}
            </p>

            <TagList
              tags={experience.skills}
              className="mt-4 flex flex-wrap gap-2"
              tagClassName="rounded-full bg-white/10 px-3 py-1 text-xs"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
