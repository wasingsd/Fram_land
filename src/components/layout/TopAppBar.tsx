"use client";

import { usePathname } from "next/navigation";
import { Bell, User, Settings, ChevronDown } from "lucide-react";
import { mockLand } from "@/lib/mockData";

export function TopAppBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-slate-100 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
          S
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-900 flex items-center gap-1 leading-tight">
            {mockLand.name}
            <ChevronDown className="w-3 h-3 text-slate-400 mt-0.5" />
          </h1>
          <p className="text-[10px] text-slate-500 font-medium">เจ้าของสวน: คุณพงษ์</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative p-1.5 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-secondary-500 border-2 border-white rounded-full"></span>
        </button>
        <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
