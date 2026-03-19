"use client";

import { Trees, Bird, Home, Waves } from "lucide-react";
import { useSimulationStore } from "@/lib/simulationStore";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

export function ControlPanel() {
  const addEntity = useSimulationStore((state) => state.addEntity);

  const controls = [
    { type: 'tree' as const, label: '+10 ต้นไม้', icon: Trees, count: 10, color: 'bg-green-100 text-green-700 hover:bg-green-200' },
    { type: 'duck' as const, label: '+10 เป็ด', icon: Bird, count: 10, color: 'bg-orange-100 text-orange-700 hover:bg-orange-200' },
    { type: 'pond' as const, label: 'สร้างบ่อน้ำ', icon: Waves, count: 1, color: 'bg-sky-100 text-sky-700 hover:bg-sky-200' },
    { type: 'building' as const, label: 'สร้างโรงเรือน', icon: Home, count: 1, color: 'bg-slate-100 text-slate-700 hover:bg-slate-200' },
  ];

  return (
    <div className="bg-white p-4 border-t border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] relative z-20">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">เพิ่มองค์ประกอบ</h3>
      
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-3">
          {controls.map((ctrl) => {
            const Icon = ctrl.icon;
            return (
              <motion.div key={ctrl.label} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className={`h-auto flex flex-col items-center gap-2 px-6 py-4 rounded-3xl border-none shadow-sm transition-all ${ctrl.color}`}
                  onClick={() => addEntity(ctrl.type, ctrl.count)}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-sm font-bold">{ctrl.label}</span>
                </Button>
              </motion.div>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
}
