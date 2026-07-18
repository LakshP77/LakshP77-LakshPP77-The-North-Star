import Link from "next/link";

import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { ExperienceList } from "@/components/profile/ExperienceList";
import { ProfileOverview } from "@/components/profile/ProfileOverview";
import { ProjectGrid } from "@/components/profile/ProjectGrid";
import { SkillsSection } from "@/components/profile/SkillsSection";
import { TargetRoles } from "@/components/profile/TargetRoles";
import { ROUTES } from "@/lib/routes";
import { getProfile } from "@/services/profile/profileService";

export default function ProfilePage() {
  const profile = getProfile();

  return (
    <AppShell activeItem="profile" contentClassName="flex-1 px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <PageHeader
          variant="profile"
          eyebrow="Polaris"
          title="Career Knowledge Base"
          action={
            <Link
              href={ROUTES.dashboard}
              className="rounded-xl border border-white/20 px-5 py-3"
            >
              Back to Dashboard
            </Link>
          }
        />

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <ProfileOverview profile={profile} />
          <TargetRoles roles={profile.targetRoles} />
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <SkillsSection title="Skills" items={profile.skills} />
          <SkillsSection title="Interests" items={profile.interests} />
        </section>

        <ExperienceList experiences={profile.experiences} />
        <ProjectGrid projects={profile.projects} />
      </div>
    </AppShell>
  );
}
