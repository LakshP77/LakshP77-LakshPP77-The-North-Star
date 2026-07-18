import type { CareerProfile } from "@/types/profile";

type ProfileOverviewProps = {
  profile: CareerProfile;
};

export function ProfileOverview({ profile }: ProfileOverviewProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-2xl font-semibold">{profile.name}</h2>

      <p className="mt-2 text-gray-400">{profile.education}</p>

      <p className="mt-1 text-gray-400">
        Expected graduation: {profile.graduationYear}
      </p>
    </div>
  );
}
