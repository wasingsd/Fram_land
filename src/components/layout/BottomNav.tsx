"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Map, Plus, BarChart3, Package, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  active: boolean;
}

function NavItem({ href, icon: Icon, label, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center justify-center py-2 flex-1 transition-all relative",
        active ? "text-primary-600" : "text-slate-400 hover:text-slate-600"
      )}
    >
      <Icon className={cn("w-6 h-6", active && "animate-in zoom-in-75 duration-300")} />
      <span className="text-[10px] font-medium mt-1">{label}</span>
      {active && (
        <span className="absolute bottom-0 w-8 h-1 bg-primary-600 rounded-t-full shadow-[0_-2px_6px_rgba(21,128,61,0.2)]"></span>
      )}
    </Link>
  );
}

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-slate-100 flex items-center justify-around px-2 pb-safe">
      <NavItem href="/" icon={Home} label="หน้าแรก" active={pathname === "/"} />
      <NavItem href="/map" icon={Map} label="แผนที่" active={pathname === "/map"} />
      
      {/* Floating Action Button (FAB) for adding */}
      <div className="flex-1 flex justify-center -mt-8 relative drop-shadow-lg">
        <Link
          href="/add"
          className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-lg active:scale-95 transition-transform hover:bg-primary-700"
        >
          <Plus className="w-8 h-8" strokeWidth={3} />
        </Link>
      </div>

      <NavItem href="/reports" icon={BarChart3} label="รายงาน" active={pathname === "/reports"} />
      <NavItem href="/assets" icon={Package} label="ทรัพย์สิน" active={pathname === "/assets"} />
    </nav>
  );
}
