"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface KPICardProps {
  label: string;
  value: number;
  change: number;
  type: "income" | "expense";
}

export function KPICard({ label, value, change, type }: KPICardProps) {
  const isPositive = change > 0;
  const isGood = type === 'income' ? isPositive : !isPositive;

  return (
    <Card className="border-none shadow-sm bg-slate-50/50">
      <CardContent className="p-3">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold text-slate-900">{formatCurrency(value)}</span>
        </div>
        <div className={cn(
          "flex items-center gap-0.5 mt-1",
          isGood ? "text-green-600" : "text-red-500"
        )}>
          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          <span className="text-[10px] font-bold">{Math.abs(change)}%</span>
        </div>
      </CardContent>
    </Card>
  );
}
