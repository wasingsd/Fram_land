"use client";

import { useRef } from "react";
import { motion, useDragControls } from "framer-motion";
import { useSimulationStore } from "@/lib/simulationStore";
import { SimulationObject } from "./SimulationObject";

export function SimulationCanvas() {
  const entities = useSimulationStore((state) => state.entities);
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();

  return (
    <div className="flex-1 w-full h-full bg-primary-50 relative overflow-hidden border-t border-b border-primary-200/50">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#16a34a 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Draggable Canvas Area */}
      <motion.div
        ref={canvasRef}
        drag
        dragControls={dragControls}
        dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
        dragElastic={0.1}
        whileTap={{ cursor: "grabbing" }}
        className="absolute top-0 left-0 w-[2000px] h-[2000px] cursor-grab origin-center"
      >
        {/* Render all entities */}
        {entities.map((entity) => (
          <SimulationObject key={entity.id} {...entity} />
        ))}
      </motion.div>
    </div>
  );
}
