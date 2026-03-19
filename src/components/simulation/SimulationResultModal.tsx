"use client";

import { useSimulationStore } from "@/lib/simulationStore";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { formatCurrency } from "@/lib/utils";
import { Trees, Bird, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SimulationResultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SimulationResultModal({ isOpen, onClose }: SimulationResultModalProps) {
  const entities = useSimulationStore((state) => state.entities);

  // Mock calculation logic
  const trees = entities.filter(e => e.type === 'tree').length;
  const ducks = entities.filter(e => e.type === 'duck').length;
  
  // Assumptions per unit per month
  const incomePerTree = 50; // Baht
  const expensePerTree = 10;
  
  const incomePerDuck = 40;
  const expensePerDuck = 15;

  const totalIncome = (trees * incomePerTree) + (ducks * incomePerDuck);
  const totalExpense = (trees * expensePerTree) + (ducks * expensePerDuck);
  const netProfit = totalIncome - totalExpense;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-[32px] p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary-600" /> ผลลัพธ์จำลอง (รายเดือน)
          </DialogTitle>
          <DialogDescription className="text-slate-500 font-medium pt-2">
            คำนวณจากจำนวนต้นไม้และสัตว์ที่คุณจัดวางบนพื้นที่
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                <Trees className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">จำนวนพืช</p>
                <p className="text-lg font-bold text-slate-900">{trees} ต้น</p>
              </div>
            </div>
            
            <div className="w-px bg-slate-200"></div>
            
            <div className="flex-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                <Bird className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">จำนวนสัตว์</p>
                <p className="text-lg font-bold text-slate-900">{ducks} ตัว</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-bold text-slate-600">
              <span>รายได้คาดการณ์</span>
              <span className="text-green-600">{formatCurrency(totalIncome)}</span>
            </div>
            <div className="flex justify-between items-center text-sm font-bold text-slate-600">
              <span>ต้นทุนคาดการณ์</span>
              <span className="text-red-500">{formatCurrency(totalExpense)}</span>
            </div>
            <div className="w-full h-px bg-slate-100 my-2"></div>
            <div className="flex justify-between items-center text-lg font-black text-slate-900">
              <span>กำไรสุทธิ</span>
              <span className="text-primary-600">{formatCurrency(netProfit)}</span>
            </div>
          </div>
        </div>

        <Button onClick={onClose} className="w-full h-14 rounded-2xl text-base font-bold bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-200">
          เข้าใจแล้ว
        </Button>
      </DialogContent>
    </Dialog>
  );
}
