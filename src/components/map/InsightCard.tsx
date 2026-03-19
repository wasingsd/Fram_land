"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface InsightCardProps {
  text: string;
}

export function InsightCard({ text }: InsightCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="p-3 bg-primary-50 border border-primary-100 rounded-2xl flex items-start gap-3"
    >
      <div className="bg-white p-1.5 rounded-lg shadow-sm">
        <Sparkles className="w-4 h-4 text-primary-600" />
      </div>
      <p className="text-xs font-semibold text-slate-700 leading-relaxed">{text}</p>
    </motion.div>
  );
}
