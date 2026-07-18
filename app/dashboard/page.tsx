import { DashboardClient } from "@/components/dashboard/DashboardClient";
import { getOpportunities } from "@/services/opportunities/opportunityService";

export default function Dashboard() {
  return <DashboardClient opportunities={getOpportunities()} />;
}
