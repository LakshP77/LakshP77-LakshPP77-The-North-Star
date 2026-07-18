import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import type { Opportunity } from "@/types/opportunity";

type OpportunityListProps = {
  opportunities: Opportunity[];
  onSave?: () => void;
};

export function OpportunityList({
  opportunities,
  onSave,
}: OpportunityListProps) {
  return (
    <div className="mt-6 space-y-4">
      {opportunities.map((opportunity) => (
        <OpportunityCard
          key={`${opportunity.company}-${opportunity.title}`}
          opportunity={opportunity}
          onSave={onSave}
        />
      ))}
    </div>
  );
}
