"use client";

import { TopAppBar } from "./TopAppBar";
import { BottomNav } from "./BottomNav";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative shadow-2xl shadow-slate-200">
      <TopAppBar />
      <main className="flex-1 pb-32 overflow-y-auto w-full px-4 pt-4">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
