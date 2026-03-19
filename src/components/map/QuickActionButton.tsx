"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface QuickActionButtonProps {
  label: string;
  icon?: any; // Making it optional to match usage
  onClick?: () => void;
}

export function QuickActionButton({ label, onClick }: QuickActionButtonProps) {
  // Parsing label like "💰 ขาย"
  const [emoji, ...textParts] = label.split(" ");
  const text = textParts.join(" ");

  return (
    <motion.button 
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex-1 flex flex-col items-center gap-2 p-4 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all active:bg-slate-50"
    >
      <span className="text-2xl">{emoji}</span>
      <span className="text-sm font-bold text-slate-800">{text}</span>
    </motion.button>
  );
}
