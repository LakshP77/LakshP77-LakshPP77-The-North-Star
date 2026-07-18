const steps = [
  {
    step: "Step 1",
    title: "Master Resume",
    description: "Upload your source resume.",
  },
  {
    step: "Step 2",
    title: "Career Profile",
    description: "Polaris structures your experiences and skills.",
  },
  {
    step: "Step 3",
    title: "Job Discovery",
    description: "Relevant opportunities appear automatically.",
  },
  {
    step: "Step 4",
    title: "Tailor + Track",
    description: "Generate tailored application materials.",
  },
];

export function WorkflowSteps() {
  return (
    <div className="mt-10 grid gap-5 lg:grid-cols-4">
      {steps.map((item) => (
        <div
          key={item.step}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <p className="text-sm text-gray-400">{item.step}</p>

          <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>

          <p className="mt-2 text-sm text-gray-400">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
