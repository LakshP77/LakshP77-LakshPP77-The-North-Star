import { mockOpportunities } from "@/data/mockOpportunities";
import type { Opportunity } from "@/types/opportunity";

export function getOpportunities(): Opportunity[] {
  return mockOpportunities;
}

export function getOpportunityById(id: string): Opportunity | undefined {
  const index = Number(id) - 1;

  if (!Number.isInteger(index) || index < 0) {
    return undefined;
  }

  return mockOpportunities[index];
}

export function getOpportunityId(opportunity: Opportunity): string {
  return String(mockOpportunities.indexOf(opportunity) + 1);
}
