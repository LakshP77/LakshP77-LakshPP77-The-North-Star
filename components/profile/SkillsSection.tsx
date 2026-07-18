import { TagList } from "@/components/shared/TagList";

type SkillsSectionProps = {
  title: string;
  items: string[];
};

export function SkillsSection({ title, items }: SkillsSectionProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-semibold">{title}</h2>

      <TagList
        tags={items}
        className="mt-4 flex flex-wrap gap-2"
        tagClassName="rounded-full bg-white/10 px-3 py-2 text-sm"
      />
    </div>
  );
}
