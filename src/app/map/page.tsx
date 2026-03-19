"use client";

import { useState } from "react";
import { MapHeader } from "@/components/map/MapHeader";
import { MapCanvas } from "@/components/map/MapCanvas";
import { FloatingControls } from "@/components/map/FloatingControls";
import { ZoneBottomSheet } from "@/components/map/ZoneBottomSheet";
import { mockZones } from "@/lib/mockData";
import { Zone } from "@/lib/types";

export default function MapPage() {
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const selectedZone = mockZones.find(z => z.id === selectedZoneId) || null;

  const handleZoneSelect = (id: string) => {
    setSelectedZoneId(id);
    setIsSheetOpen(true);
  };

  return (
    <div className="flex flex-col h-full -mt-4 -mx-4 overflow-hidden bg-slate-50">
      {/* 1. Top App Bar */}
      <MapHeader />

      <div className="flex-1 relative">
        {/* 2. Map Canvas */}
        <MapCanvas 
          selectedZoneId={selectedZoneId || undefined} 
          onZoneSelect={handleZoneSelect} 
        />

        {/* 3. Floating Controls */}
        <FloatingControls />
      </div>

      {/* 4. Bottom Sheet (Zone Detail + Business Insight) */}
      <ZoneBottomSheet 
        zone={selectedZone} 
        isOpen={isSheetOpen} 
        onClose={() => setIsSheetOpen(false)} 
      />
    </div>
  );
}
