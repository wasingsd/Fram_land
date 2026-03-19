"use client";

import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  PieChart as PieChartIcon, 
  Calendar,
  Filter,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockKPIs, mockZones } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";

export default function ReportsPage() {
  return (
    <div className="space-y-6 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">รายงาน</h2>
          <p className="text-sm text-slate-500 font-medium mt-1">สรุปผลการดำเนินงาน</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-600 shadow-sm">
          <Calendar className="w-4 h-4" /> เดือนนี้
        </button>
      </div>

      {/* KPI Overviews */}
      <div className="grid grid-cols-2 gap-3">
        {mockKPIs.slice(0, 2).map((kpi) => (
          <Card key={kpi.label} className="border-none shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg ${
                  kpi.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {kpi.type === 'income' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                </div>
                <span className={`text-[10px] font-bold ${
                  kpi.change >= 0 ? 'text-green-600' : 'text-red-500'
                }`}>
                  {kpi.change > 0 ? '+' : ''}{kpi.change}%
                </span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{kpi.label}</p>
              <p className="text-lg font-bold text-slate-900 mt-1">{formatCurrency(kpi.value)}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue by Zone Chart (Mock) */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary-600" /> รายได้แยกตามโซน
          </CardTitle>
          <button className="text-[10px] font-bold text-primary-600 border border-primary-100 px-2 py-1 rounded-md">ดูรายเดือน</button>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="space-y-4">
            {mockZones.map((zone, i) => {
              const percentages = [60, 40, 0, 0];
              if (percentages[i] === 0) return null;
              return (
                <div key={zone.id} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">{zone.name}</span>
                    <span className="text-slate-900">{percentages[i]}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000" 
                      style={{ 
                        width: `${percentages[i]}%`, 
                        backgroundColor: zone.color 
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Expense by Category (Mock) */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <PieChartIcon className="w-5 h-5 text-secondary-600" /> รายจ่ายแยกตามหมวด
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="space-y-4">
            {[
              { label: 'อาหารสัตว์', amount: 2500, color: 'bg-orange-500' },
              { label: 'ค่าแรง', amount: 2000, color: 'bg-purple-500' },
              { label: 'ปุ๋ย/ยา', amount: 1200, color: 'bg-green-500' },
              { label: 'น้ำ/ไฟ', amount: 900, color: 'bg-sky-500' },
            ].map((cat, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${cat.color}`}></div>
                  <span className="text-xs font-bold text-slate-700">{cat.label}</span>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-900">{formatCurrency(cat.amount)}</p>
                  <p className="text-[10px] text-slate-400">{(cat.amount / 6600 * 100).toFixed(0)}%</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Insights */}
      <section className="space-y-3">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 uppercase tracking-wider">
          <TrendingUp className="w-4 h-4 text-primary-600" /> การวิเคราะห์
        </h3>
        <Card className="bg-primary-50 border-primary-100">
          <CardContent className="p-4">
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-slate-700 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-1.5 shrink-0"></div>
                โซนเป็ดมีสัดส่วนรายได้สูงสุด (60%) ของเดือนนี้
              </li>
              <li className="flex gap-3 text-sm text-slate-700 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary-500 mt-1.5 shrink-0"></div>
                ค่าอาหารสัตว์เพิ่มขึ้นเล็กน้อยเมื่อเทียบกับต้นทุนเฉลี่ย
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
