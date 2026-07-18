type ProfileStatusCardProps = {
  resumeUploaded: boolean;
  resumeName: string;
  profileStatus: string;
};

export function ProfileStatusCard({
  resumeUploaded,
  resumeName,
  profileStatus,
}: ProfileStatusCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <h3 className="text-2xl font-semibold">Career Knowledge Base</h3>

      <div className="mt-6 space-y-5">
        <div>
          <p className="text-sm text-gray-400">Resume</p>

          <p className="mt-1 font-semibold">{resumeName}</p>
        </div>

        <div>
          <p className="text-sm text-gray-400">Profile Status</p>

          <p className="mt-1 font-semibold text-green-400">{profileStatus}</p>
        </div>

        <div>
          <p className="text-sm text-gray-400">Polaris State</p>

          <p className="mt-1 font-semibold">
            {resumeUploaded ? "Ready for job discovery" : "Awaiting upload"}
          </p>
        </div>
      </div>
    </div>
  );
}
