"use client";

import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MapHeader() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div>
        <h1 className="text-xl font-bold text-slate-900">สวนเชียงดาว</h1>
        <p className="text-xs font-medium text-slate-500">เจ้าของสวน: คุณวศิน</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full relative">
          <Bell className="w-5 h-5 text-slate-600" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-slate-100">
          <User className="w-5 h-5 text-slate-600" />
        </Button>
      </div>
    </div>
  );
}
