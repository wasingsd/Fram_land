"use client";

import { 
  ShoppingBag, 
  ArrowDownCircle, 
  ShoppingCart, 
  Users, 
  Droplets, 
  AlertCircle,
  ChevronRight,
  Star
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { mockFavoriteActions } from "@/lib/mockData";

const actionTypes = [
  { id: 'sell', label: 'ขาย', icon: ShoppingBag, color: 'bg-green-100 text-green-600', sub: 'บันทึกการขายผลผลิต' },
  { id: 'harvest', label: 'เก็บเกี่ยว', icon: ArrowDownCircle, color: 'bg-blue-100 text-blue-600', sub: 'บันทึกจำนวนผลผลิต' },
  { id: 'buy', label: 'ซื้อของ', icon: ShoppingCart, color: 'bg-orange-100 text-orange-600', sub: 'ปุ๋ย, เมล็ดพันธุ์, อาหารสัตว์' },
  { id: 'labor', label: 'จ้างงาน', icon: Users, color: 'bg-purple-100 text-purple-600', sub: 'ค่าแรง, ผู้รับเหมา' },
  { id: 'utility', label: 'น้ำ/ไฟ', icon: Droplets, color: 'bg-sky-100 text-sky-600', sub: 'ค่าน้ำ, ค่าไฟ, น้ำมัน' },
  { id: 'loss', label: 'ใช้เอง/สูญเสีย', icon: AlertCircle, color: 'bg-red-100 text-red-600', sub: 'เน่าเสีย, หาย, ใช้ครัวเรือน' },
];

export default function AddTransactionPage() {
  return (
    <div className="space-y-6 pb-10">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">เพิ่มรายการ</h2>
        <p className="text-sm text-slate-500 font-medium mt-1">บันทึกกิจกรรมในสวนของคุณ</p>
      </div>

      {/* Main Grid Actions */}
      <div className="grid grid-cols-1 gap-3">
        {actionTypes.map((action) => {
          const Icon = action.icon;
          return (
            <Card key={action.id} className="hover:border-primary-200 transition-colors cursor-pointer group">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${action.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{action.label}</h3>
                    <p className="text-[11px] text-slate-500 font-medium">{action.sub}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary-500 transition-colors" />
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Favorite Actions Section */}
      <section className="space-y-3 mt-8">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Star className="w-5 h-5 text-secondary-500 fill-secondary-500" /> รายการโปรด
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {mockFavoriteActions.map((action, i) => (
            <button 
              key={i}
              className="min-w-[140px] flex flex-col gap-2 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="w-8 h-8 bg-slate-50 text-slate-400 rounded-lg flex items-center justify-center">
                <Star className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-800">{action.label}</span>
            </button>
          ))}
          <button className="min-w-[140px] flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 border border-dashed border-slate-200 rounded-2xl text-slate-400">
            <PlusIcon className="w-6 h-6" />
            <span className="text-[10px] font-bold">เพิ่มรายการโปรด</span>
          </button>
        </div>
      </section>
    </div>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}
