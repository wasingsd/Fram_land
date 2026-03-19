"use client";

import { MapPin } from "lucide-react";
import { ZonePolygon } from "./ZonePolygon";
import { Zone } from "@/lib/types";
import { mockZones } from "@/lib/mockData";

interface MapCanvasProps {
  selectedZoneId?: string;
  onZoneSelect: (id: string) => void;
}

export function MapCanvas({ selectedZoneId, onZoneSelect }: MapCanvasProps) {
  return (
    <div className="flex-1 min-h-[450px] bg-slate-200 relative overflow-hidden">
      {/* Mock Satellite / Nature Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-100/40 to-transparent"></div>
      
      {/* Zone Polygons (SVG) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600">
        <ZonePolygon 
          id="z1"
          name="โซนมะม่วง"
          d="M50,100 L250,80 L280,300 L60,320 Z"
          color={mockZones[0].color}
          isSelected={selectedZoneId === 'z1'}
          onClick={onZoneSelect}
        />
        <ZonePolygon 
          id="z2"
          name="โซนเป็ด"
          d="M260,310 L350,280 L380,450 L270,480 Z"
          color={mockZones[1].color}
          isSelected={selectedZoneId === 'z2'}
          onClick={onZoneSelect}
        />
      </svg>

      {/* Location Tag */}
      <div className="absolute top-4 left-4">
        <div className="bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-white/40 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></div>
          <span className="text-[11px] font-bold text-slate-800">เชียงดาว, เชียงใหม่</span>
        </div>
      </div>
    </div>
  );
}
