"use client";

import { Layers, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function FloatingControls() {
  return (
    <>
      {/* Top Right Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-40">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="icon" variant="secondary" className="w-11 h-11 rounded-2xl shadow-lg bg-white/90 backdrop-blur-sm border-none">
            <Layers className="w-5 h-5 text-slate-600" />
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="icon" variant="secondary" className="w-11 h-11 rounded-2xl shadow-lg bg-white/90 backdrop-blur-sm border-none">
            <Filter className="w-5 h-5 text-slate-600" />
          </Button>
        </motion.div>
      </div>

      {/* Main FAB */}
      <div className="fixed bottom-24 right-6 z-40">
        <motion.div 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Button size="icon" className="w-14 h-14 rounded-full shadow-2xl shadow-primary-500/40 bg-primary-600 hover:bg-primary-700 text-white border-4 border-white">
            <Plus className="w-8 h-8" />
          </Button>
        </motion.div>
      </div>
    </>
  );
}
