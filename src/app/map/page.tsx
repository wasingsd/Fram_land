"use client";

import { useState } from "react";
import { Layers, Filter, ChevronRight, MapPin, TrendingUp, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { mockZones, mockKPIs } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function MapPage() {
  const [selectedZone, setSelectedZone] = useState(mockZones[0]);

  return (
    <div className="flex flex-col h-full -mt-4 -mx-4">
      {/* Map Area */}
      <div className="flex-1 min-h-[400px] bg-slate-200 relative overflow-hidden">
        {/* Mock Satellite Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-60"></div>
        
        {/* Zone Polygons (Mock) */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600">
          {/* Zone 1: Plant */}
          <path 
            d="M50,100 L250,80 L280,300 L60,320 Z" 
            fill={mockZones[0].color} 
            fillOpacity="0.4"
            stroke={mockZones[0].color}
            strokeWidth="3"
            className="cursor-pointer hover:fill-opacity-60 transition-all shadow-lg"
            onClick={() => setSelectedZone(mockZones[0])}
          />
          <text x="120" y="200" fill="white" className="text-[14px] font-bold pointer-events-none drop-shadow-md">
            {mockZones[0].name}
          </text>

          {/* Zone 2: Animal */}
          <path 
            d="M260,310 L350,280 L380,450 L270,480 Z" 
            fill={mockZones[1].color} 
            fillOpacity="0.4"
            stroke={mockZones[1].color}
            strokeWidth="3"
            className="cursor-pointer hover:fill-opacity-60 transition-all"
            onClick={() => setSelectedZone(mockZones[1])}
          />
          <text x="280" y="380" fill="white" className="text-[12px] font-bold pointer-events-none drop-shadow-md">
            {mockZones[1].name}
          </text>
        </svg>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-slate-600 active:scale-95 transition-transform">
            <Layers className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-slate-600 active:scale-95 transition-transform">
            <Filter className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute top-4 left-4">
          <div className="bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary-600" />
            <span className="text-xs font-bold text-slate-800">สวนเชียงดาว</span>
          </div>
        </div>
      </div>

      {/* Bottom Sheet Detail (Mocked as static for prototype) */}
      <div className="bg-white rounded-t-[32px] -mt-10 relative z-10 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] p-6 pb-20">
        <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6"></div>
        
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={cn(
                "w-3 h-3 rounded-full",
                selectedZone.type === 'plant' ? "bg-green-500" : "bg-orange-500"
              )}></span>
              <h2 className="text-xl font-bold text-slate-900">{selectedZone.name}</h2>
            </div>
            <p className="text-sm text-slate-500 font-medium">{selectedZone.description}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-slate-900">{selectedZone.areaRai} ไร่</p>
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">ขนาดพื้นที่</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card variant="outline" className="border-slate-100">
            <CardContent className="p-3">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">รายรับเดือนนี้</p>
              <p className="text-lg font-bold text-green-600">{formatCurrency(2500)}</p>
            </CardContent>
          </Card>
          <Card variant="outline" className="border-slate-100">
            <CardContent className="p-3">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">รายจ่ายเดือนนี้</p>
              <p className="text-lg font-bold text-slate-900">{formatCurrency(800)}</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Info className="w-4 h-4 text-primary-600" /> การดำเนินการล่าสุด
          </h3>
          <div className="space-y-2">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">เก็บเกี่ยวผลผลิต</p>
                    <p className="text-[10px] text-slate-500">2 วันที่ผ่านมา</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            ))}
          </div>
        </div>

        <button className="w-full mt-6 bg-primary-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary-200 active:scale-95 transition-transform">
          ดูรายละเอียดโซนแบบเต็ม
        </button>
      </div>
    </div>
  );
}
