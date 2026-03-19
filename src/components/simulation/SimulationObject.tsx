"use client";

import { motion } from "framer-motion";
import { Trees, Bird, Home, Waves } from "lucide-react";
import { EntityType } from "@/lib/simulationStore";

interface SimulationObjectProps {
  id: string;
  type: EntityType;
  x: number;
  y: number;
}

export function SimulationObject({ id, type, x, y }: SimulationObjectProps) {
  const getVisuals = () => {
    switch (type) {
      case 'tree':
        return { icon: Trees, color: 'text-green-600', bg: 'bg-green-100', size: 'w-10 h-10', bounce: 1.05 };
      case 'duck':
        return { icon: Bird, color: 'text-orange-600', bg: 'bg-orange-100', size: 'w-8 h-8', bounce: 1.1 };
      case 'building':
        return { icon: Home, color: 'text-slate-600', bg: 'bg-slate-200', size: 'w-16 h-16', bounce: 1.02 };
      case 'pond':
        return { icon: Waves, color: 'text-sky-600', bg: 'bg-sky-100', size: 'w-24 h-24', bounce: 1.01 };
    }
  };

  const v = getVisuals();
  const Icon = v.icon;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: v.bounce }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`absolute flex items-center justify-center rounded-3xl cursor-pointer shadow-sm ${v.bg} ${v.color} ${v.size}`}
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      <Icon className="w-3/5 h-3/5" />
    </motion.div>
  );
}
