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
    <div className="flex flex-col gap-6 pb-20 mt-2">
      <div className="px-2">
        <h2 className="text-[22px] font-bold text-slate-900 tracking-tight">เพิ่มรายการ</h2>
        <p className="text-sm font-medium text-slate-500 mt-1">บันทึกกิจกรรมในสวนของคุณ</p>
      </div>

      {/* Main Grid Actions */}
      <div className="flex flex-col gap-3">
        {actionTypes.map((action) => {
          const Icon = action.icon;
          return (
            <div 
              key={action.id} 
              className="bg-white rounded-[20px] border border-slate-100 p-[18px] flex items-center justify-between active:scale-[0.98] transition-transform cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`w-[48px] h-[48px] rounded-2xl flex items-center justify-center ${action.color}`}>
                  <Icon className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-base font-bold text-slate-900">{action.label}</h3>
                  <p className="text-[12px] font-medium text-slate-500">{action.sub}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300" />
            </div>
          );
        })}
      </div>

      {/* Favorite Actions Section */}
      <section className="space-y-4 mt-6 px-2">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Star className="w-5 h-5 text-[#f97316] fill-[#f97316]" /> รายการโปรด
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          {mockFavoriteActions.map((action, i) => (
            <button 
              key={i}
              className="min-w-[140px] flex flex-col gap-3 p-4 bg-white border border-slate-100 rounded-[20px] shadow-sm active:scale-[0.98] transition-transform text-left"
            >
              <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center">
                <Star className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-slate-800">{action.label}</span>
            </button>
          ))}
          <button className="min-w-[140px] flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 border border-dashed border-slate-200 rounded-[20px] text-slate-400 active:scale-[0.98] transition-transform">
            <PlusIcon className="w-6 h-6" />
            <span className="text-xs font-bold">เพิ่มรายการโปรด</span>
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
