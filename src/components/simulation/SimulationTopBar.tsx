"use client";

import { ChevronLeft, RotateCcw, Save, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSimulationStore } from "@/lib/simulationStore";
import Link from "next/link";
import { useState } from "react";
import { SimulationResultModal } from "./SimulationResultModal";

export function SimulationTopBar() {
  const reset = useSimulationStore((state) => state.reset);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-slate-50">
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </Button>
          </Link>
          <div>
            <h1 className="text-lg font-bold text-slate-900">จำลองสวน</h1>
            <p className="text-[10px] font-medium text-slate-500">Farm Builder 2D</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={reset} className="w-10 h-10 rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50">
            <RotateCcw className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full text-slate-400 hover:text-primary-600 hover:bg-primary-50">
            <Save className="w-4 h-4" />
          </Button>
          <Button onClick={() => setIsModalOpen(true)} className="rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold px-4 h-10 gap-2 shadow-md shadow-primary-200">
            <Play className="w-4 h-4 fill-white" /> ผลลัพธ์
          </Button>
        </div>
      </div>

      <SimulationResultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
