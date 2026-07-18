import { TagList } from "@/components/shared/TagList";

type TargetRolesProps = {
  roles: string[];
};

export function TargetRoles({ roles }: TargetRolesProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-semibold">Target Roles</h2>

      <TagList
        tags={roles}
        className="mt-4 flex flex-wrap gap-2"
        tagClassName="rounded-full border border-white/10 px-3 py-2 text-sm"
      />
    </div>
  );
}
