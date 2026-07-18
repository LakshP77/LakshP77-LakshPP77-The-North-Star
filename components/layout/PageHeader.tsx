import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  variant?: "dashboard" | "profile";
};

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
  variant = "dashboard",
}: PageHeaderProps) {
  if (variant === "profile") {
    return (
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">{eyebrow}</p>
          <h1 className="mt-2 text-4xl font-bold">{title}</h1>
        </div>

        {action}
      </header>
    );
  }

  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
      <div>
        <p className="text-sm text-gray-400">{eyebrow}</p>

        <h2 className="mt-2 text-4xl font-bold">{title}</h2>

        {description ? (
          <p className="mt-2 max-w-2xl text-gray-400">{description}</p>
        ) : null}
      </div>

      {action}
    </div>
  );
}
