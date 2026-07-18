import Link from "next/link";

import { ROUTES } from "@/lib/routes";

export type SidebarItem = "dashboard" | "profile" | "opportunities";

type SidebarProps = {
  activeItem: SidebarItem;
};

export function Sidebar({ activeItem }: SidebarProps) {
  return (
    <aside className="hidden w-64 border-r border-white/10 p-6 md:block">
      <h1 className="text-2xl font-bold">Polaris</h1>

      <nav className="mt-10 flex flex-col gap-4 text-sm text-gray-400">
        <Link
          href={ROUTES.dashboard}
          className={
            activeItem === "dashboard"
              ? "text-left text-white"
              : "text-left hover:text-white"
          }
        >
          Command Center
        </Link>

        <Link
          href={ROUTES.profile}
          className={
            activeItem === "profile"
              ? "text-left text-white"
              : "text-left hover:text-white"
          }
        >
          Career Knowledge Base
        </Link>

        <Link
          href={ROUTES.opportunities}
          className={
            activeItem === "opportunities"
              ? "text-left text-white"
              : "text-left hover:text-white"
          }
        >
          Opportunities
        </Link>

        <span className="text-left">Tailoring</span>

        <span className="text-left">Applications</span>

        <span className="text-left">Analytics</span>

        <span className="text-left">Settings</span>
      </nav>
    </aside>
  );
}
