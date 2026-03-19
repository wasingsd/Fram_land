"use client";

import { useState } from "react";
import { 
  Package, 
  Leaf, 
  Bird, 
  Home as HomeIcon, 
  Droplets,
  Search,
  Plus,
  ArrowRight,
  AlertTriangle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { mockAssets, mockZones } from "@/lib/mockData";
import { cn } from "@/lib/utils";

const tabs = [
  { id: 'all', label: 'ทั้งหมด', icon: Package },
  { id: 'plant', label: 'พืช', icon: Leaf },
  { id: 'animal', label: 'สัตว์', icon: Bird },
  { id: 'building', label: 'อาคาร', icon: HomeIcon },
  { id: 'water', label: 'น้ำ', icon: Droplets },
];

export default function AssetsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredAssets = activeTab === 'all' 
    ? mockAssets 
    : mockAssets.filter(asset => asset.type === activeTab);

  return (
    <div className="space-y-6 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">ทรัพย์สิน</h2>
          <p className="text-sm text-slate-500 font-medium mt-1">จัดการทรัพยากรในสวน</p>
        </div>
        <button className="w-10 h-10 bg-primary-600 text-white rounded-xl shadow-lg flex items-center justify-center">
          <Plus className="w-6 h-6" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold transition-all whitespace-nowrap",
                isActive 
                  ? "bg-primary-600 text-white shadow-md shadow-primary-200" 
                  : "bg-white text-slate-500 border border-slate-100 hover:border-slate-200"
              )}
            >
              <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-slate-400")} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input 
          type="text" 
          placeholder="ค้นหาชื่อทรัพย์สิน..."
          className="w-full bg-white border border-slate-100 rounded-2xl py-3 pl-11 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all shadow-sm"
        />
      </div>

      {/* Asset List */}
      <div className="space-y-3">
        {filteredAssets.length > 0 ? (
          filteredAssets.map((asset) => {
            const zone = mockZones.find(z => z.id === asset.zoneId);
            return (
              <Card key={asset.id} className="hover:border-slate-200 transition-all cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center",
                      asset.type === 'plant' ? "bg-green-100 text-green-600" :
                      asset.type === 'animal' ? "bg-orange-100 text-orange-600" :
                      asset.type === 'water' ? "bg-sky-100 text-sky-600" :
                      "bg-slate-100 text-slate-600"
                    )}>
                      {asset.type === 'plant' && <Leaf className="w-6 h-6" />}
                      {asset.type === 'animal' && <Bird className="w-6 h-6" />}
                      {asset.type === 'water' && <Droplets className="w-6 h-6" />}
                      {asset.type === 'building' && <HomeIcon className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{asset.name}</h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{zone?.name}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{asset.quantity} {asset.unit}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {asset.status === 'warning' && (
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                    )}
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <div className="py-20 flex flex-col items-center justify-center text-slate-400">
            <Package className="w-12 h-12 mb-4 opacity-20" />
            <p className="text-sm font-bold">ไม่พบทรัพย์สินในหมวดนี้</p>
          </div>
        )}
      </div>

      {/* Asset Summary */}
      <Card className="bg-slate-900 border-none shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold">ภาพรวมทรัพย์สิน</h3>
            <span className="text-primary-400 text-xs font-bold px-2 py-1 bg-primary-400/10 rounded-lg border border-primary-400/20">ปกติทุกรายการ</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-slate-500 uppercase">ราคาประเมินรวม</p>
              <p className="text-xl font-bold text-white">฿450,000</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-slate-500 uppercase">อัตราการเติบโต</p>
              <p className="text-xl font-bold text-green-400">+5.2%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
