type DashboardStatsProps = {
  opportunitiesFound: number;
  savedJobs: number;
  resumeUploaded: boolean;
};

export function DashboardStats({
  opportunitiesFound,
  savedJobs,
  resumeUploaded,
}: DashboardStatsProps) {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold">Opportunities Found</h3>

        <p className="mt-4 text-4xl font-bold">{opportunitiesFound}</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold">Saved Jobs</h3>

        <p className="mt-4 text-4xl font-bold">{savedJobs}</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold">Profile Status</h3>

        <p className="mt-4 text-lg font-bold">
          {resumeUploaded ? "Discovery Enabled" : "Incomplete"}
        </p>
      </div>
    </div>
  );
}
