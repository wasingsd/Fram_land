"use client";

import { useEffect, useState } from "react";
import { SimulationTopBar } from "@/components/simulation/SimulationTopBar";
import { SimulationCanvas } from "@/components/simulation/SimulationCanvas";
import { ControlPanel } from "@/components/simulation/ControlPanel";
import { useSimulationStore, SimEntity } from "@/lib/simulationStore";

// Pre-generate initial layout for 50 trees, 30 ducks, 1 pond to avoid hydration issues
const initialEntities: SimEntity[] = [];

// Rough distribution helper
const addInitial = (type: 'tree'|'duck'|'pond', count: number, startX: number, startY: number, spread: number) => {
  for (let i = 0; i < count; i++) {
    initialEntities.push({
      id: `init-${type}-${i}`,
      type,
      x: startX + (Math.random() - 0.5) * spread,
      y: startY + (Math.random() - 0.5) * spread,
    });
  }
};

// Farm layout clusters
// 1000, 1000 is the center of the 2000x2000 canvas
addInitial('pond', 1, 1000, 800, 50); // Top center pond
addInitial('tree', 50, 800, 1100, 400); // Bottom left orchard
addInitial('duck', 30, 1200, 900, 300); // Middle right duck pen

export default function SimulationPage() {
  const [isClient, setIsClient] = useState(false);
  const setInitialData = useSimulationStore((state) => state.setInitialData);

  useEffect(() => {
    setIsClient(true);
    setInitialData(initialEntities);
  }, [setInitialData]);

  if (!isClient) {
    return <div className="flex bg-primary-50 items-center justify-center h-screen w-full">กำลังโหลดพื้นที่จำลอง...</div>;
  }

  return (
    <div className="flex flex-col h-full -mt-4 -mx-4 overflow-hidden bg-primary-50 relative">
      <SimulationTopBar />
      <SimulationCanvas />
      <ControlPanel />
    </div>
  );
}
