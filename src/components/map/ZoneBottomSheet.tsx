"use client";

import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { History, LayoutGrid, Trees, ChevronRight } from "lucide-react";
import { Zone } from "@/lib/types";
import { mockKPIs, mockInsights, mockFavoriteActions } from "@/lib/mockData";
import { KPICard } from "./KPICard";
import { InsightCard } from "./InsightCard";
import { QuickActionButton } from "./QuickActionButton";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface ZoneBottomSheetProps {
  zone: Zone | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ZoneBottomSheet({ zone, isOpen, onClose }: ZoneBottomSheetProps) {
  if (!zone) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[85vh] rounded-t-[32px] border-none px-6 pt-2 pb-0 outline-none">
        <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6"></div>
        
        <ScrollArea className="h-full pr-0 -mr-2">
          <SheetHeader className="text-left mb-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: zone.color }}></div>
                  <SheetTitle className="text-2xl font-black text-slate-900 leading-tight">
                    {zone.name}
                  </SheetTitle>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <span className="bg-slate-100 px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wider">{zone.type === 'plant' ? 'พืช' : 'สัตว์'}</span>
                  <Separator orientation="vertical" className="h-3" />
                  <span>{zone.areaRai} ไร่</span>
                </div>
              </div>
              
              <Badge variant="secondary" className="bg-primary-50 text-primary-700 hover:bg-primary-50 border-none font-bold py-1">
                {zone.type === 'plant' ? (
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Trees className="w-3.5 h-3.5" /> {zone.plantCount} ต้น
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <LayoutGrid className="w-3.5 h-3.5" /> {zone.animalCount} ตัว
                  </div>
                )}
              </Badge>
            </div>
          </SheetHeader>

          {/* KPI Section */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <KPICard label="รายรับเดือนนี้" value={2500} change={20} type="income" />
            <KPICard label="รายจ่ายเดือนนี้" value={800} change={-10} type="expense" />
          </div>

          {/* Quick Actions */}
          <div className="flex gap-3 mb-8">
            {mockFavoriteActions.map((action, i) => (
              <QuickActionButton key={i} label={action.label} />
            ))}
          </div>

          {/* Insight Section */}
          <div className="space-y-3 mb-8">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Business Insights</h3>
            <div className="space-y-2">
              {mockInsights.map((text, i) => (
                <InsightCard key={i} text={text} />
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-4 mb-24">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
              <History className="w-3.5 h-3.5" /> ประวัติกิจกรรม
            </h3>
            <div className="space-y-2">
              {zone.recentActivities?.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-3xl group active:scale-[0.98] transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-active:bg-primary-50 group-active:text-primary-600 transition-colors">
                      <LayoutGrid className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{activity.title}</p>
                      <p className="text-[11px] font-medium text-slate-400">{activity.date}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300" />
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>

        {/* Floating CTA in bottom sheet */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pt-4 bg-gradient-to-t from-white via-white to-white/0">
          <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-[20px] shadow-xl active:scale-95 transition-all text-sm">
            ดูรายละเอียดโซนแบบเต็ม
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
