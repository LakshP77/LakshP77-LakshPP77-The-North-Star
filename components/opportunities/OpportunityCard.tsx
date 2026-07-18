import type { Opportunity } from "@/types/opportunity";

type OpportunityCardProps = {
  opportunity: Opportunity;
  onSave?: () => void;
};

export function OpportunityCard({
  opportunity,
  onSave,
}: OpportunityCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-xl font-semibold">{opportunity.title}</h4>

            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300">
              {opportunity.type}
            </span>
          </div>

          <p className="mt-1 text-gray-400">
            {opportunity.company} · {opportunity.location}
          </p>

          <p className="mt-3 max-w-2xl text-sm text-gray-300">
            {opportunity.reason}
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:items-end">
          <p className="text-2xl font-bold text-green-400">
            {opportunity.match}% Match
          </p>

          <div className="flex flex-wrap gap-2">
            <a
              href={opportunity.link}
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
              onClick={onSave}
              className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
