import { notFound } from "next/navigation";

import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import {
  getOpportunities,
  getOpportunityById,
  getOpportunityId,
} from "@/services/opportunities/opportunityService";

export function generateStaticParams() {
  return getOpportunities().map((opportunity) => ({
    id: getOpportunityId(opportunity),
  }));
}

export default async function OpportunityDetailPage(
  props: PageProps<"/opportunities/[id]">,
) {
  const { id } = await props.params;
  const opportunity = getOpportunityById(id);

  if (!opportunity) {
    notFound();
  }

  return (
    <AppShell activeItem="opportunities">
      <PageHeader
        eyebrow="Career operating system"
        title="Recommended Opportunities"
        description="Polaris discovers opportunities from your profile."
      />

      <div className="mt-6">
        <OpportunityCard opportunity={opportunity} />
      </div>
    </AppShell>
  );
}
