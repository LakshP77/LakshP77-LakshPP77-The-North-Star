import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { OpportunityList } from "@/components/opportunities/OpportunityList";
import { getOpportunities } from "@/services/opportunities/opportunityService";

export default function OpportunitiesPage() {
  const opportunities = getOpportunities();

  return (
    <AppShell activeItem="opportunities">
      <PageHeader
        eyebrow="Career operating system"
        title="Recommended Opportunities"
        description="Polaris discovers opportunities from your profile."
        action={
          <button className="rounded-xl border border-white/20 px-5 py-3 font-semibold">
            Refresh
          </button>
        }
      />

      <OpportunityList opportunities={opportunities} />
    </AppShell>
  );
}
