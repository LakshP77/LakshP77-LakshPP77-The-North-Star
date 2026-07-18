"use client";

import { useState } from "react";

import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { ProfileStatusCard } from "@/components/dashboard/ProfileStatusCard";
import { ResumeUploadCard } from "@/components/dashboard/ResumeUploadCard";
import { WorkflowSteps } from "@/components/dashboard/WorkflowSteps";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { OpportunityList } from "@/components/opportunities/OpportunityList";
import type { Opportunity } from "@/types/opportunity";

type DashboardClientProps = {
  opportunities: Opportunity[];
};

export function DashboardClient({ opportunities }: DashboardClientProps) {
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [resumeName, setResumeName] = useState("No resume uploaded");
  const [profileStatus, setProfileStatus] = useState(
    "Waiting for resume upload",
  );
  const [jobs, setJobs] = useState<Opportunity[]>([]);
  const [savedJobs, setSavedJobs] = useState<number>(0);

  function handleResumeUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    setResumeUploaded(true);
    setResumeName(file.name);
    setProfileStatus("Career profile generated");
    setJobs(opportunities);
  }

  function handleSaveJob() {
    setSavedJobs(savedJobs + 1);
  }

  return (
    <AppShell activeItem="dashboard">
      <PageHeader
        eyebrow="Career operating system"
        title="Command Center"
        description="Upload your master resume and let Polaris discover opportunities automatically."
        action={
          <button className="rounded-xl bg-white px-5 py-3 font-semibold text-black">
            Run Job Search
          </button>
        }
      />

      <WorkflowSteps />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <ResumeUploadCard onUpload={handleResumeUpload} />
        <ProfileStatusCard
          resumeUploaded={resumeUploaded}
          resumeName={resumeName}
          profileStatus={profileStatus}
        />
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold">
              Recommended Opportunities
            </h3>

            <p className="mt-2 text-gray-400">
              Polaris discovers opportunities from your profile.
            </p>
          </div>

          <button className="rounded-xl border border-white/20 px-5 py-3 font-semibold">
            Refresh
          </button>
        </div>

        {!resumeUploaded ? (
          <div className="mt-10 rounded-2xl border border-dashed border-white/10 p-10 text-center text-gray-400">
            Upload a resume to begin job discovery.
          </div>
        ) : (
          <OpportunityList opportunities={jobs} onSave={handleSaveJob} />
        )}
      </div>

      <DashboardStats
        opportunitiesFound={jobs.length}
        savedJobs={savedJobs}
        resumeUploaded={resumeUploaded}
      />
    </AppShell>
  );
}
