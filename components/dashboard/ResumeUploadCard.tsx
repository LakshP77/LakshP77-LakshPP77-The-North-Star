import type { ChangeEventHandler } from "react";

type ResumeUploadCardProps = {
  onUpload: ChangeEventHandler<HTMLInputElement>;
};

export function ResumeUploadCard({ onUpload }: ResumeUploadCardProps) {
  return (
    <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-8">
      <h3 className="text-2xl font-semibold">Master Resume</h3>

      <p className="mt-2 text-gray-400">Upload your career source-of-truth.</p>

      <label className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/30 p-10 text-center transition hover:bg-white/10">
        <span className="text-5xl">📄</span>

        <span className="mt-4 text-lg font-semibold">Upload Resume</span>

        <span className="mt-2 text-sm text-gray-400">PDF, DOCX, TXT</span>

        <input type="file" className="hidden" onChange={onUpload} />
      </label>
    </div>
  );
}
