import { mockOpportunities } from "@/data/mockOpportunities";
import type { Opportunity } from "@/types/opportunity";

export function getMatchedOpportunities(): Opportunity[] {
  return mockOpportunities;
}
