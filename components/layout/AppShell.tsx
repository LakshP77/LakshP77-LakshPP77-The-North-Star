import type { ReactNode } from "react";

import { Sidebar } from "@/components/layout/Sidebar";
import type { SidebarItem } from "@/components/layout/Sidebar";

type AppShellProps = {
  activeItem: SidebarItem;
  children: ReactNode;
  contentClassName?: string;
};

export function AppShell({
  activeItem,
  children,
  contentClassName = "flex-1 p-6 md:p-8",
}: AppShellProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex min-h-screen">
        <Sidebar activeItem={activeItem} />

        <section className={contentClassName}>{children}</section>
      </div>
    </main>
  );
}
