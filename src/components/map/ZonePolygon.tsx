"use client";

import { motion } from "framer-motion";

interface ZonePolygonProps {
  id: string;
  name: string;
  d: string;
  color: string;
  isSelected?: boolean;
  onClick: (id: string) => void;
}

export function ZonePolygon({ id, name, d, color, isSelected, onClick }: ZonePolygonProps) {
  return (
    <g onClick={() => onClick(id)} className="cursor-pointer group">
      <motion.path
        d={d}
        fill={color}
        initial={{ fillOpacity: 0.3 }}
        animate={{ 
          fillOpacity: isSelected ? 0.6 : 0.35,
          strokeWidth: isSelected ? 4 : 2,
        }}
        stroke={color}
        strokeWidth="2"
        whileHover={{ fillOpacity: 0.5, strokeWidth: 3 }}
        transition={{ duration: 0.3 }}
        className="transition-all"
      />
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        className="text-[12px] font-bold pointer-events-none drop-shadow-md select-none"
        style={{ 
          // Note: positioning text on SVG path centers is tricky, 
          // simplified for mock. Real app would use bbox calculation.
        }}
      >
        {/* Placeholder mapping for mock labels */}
        {id === 'z1' && <tspan x="120" y="200">{name}</tspan>}
        {id === 'z2' && <tspan x="280" y="380">{name}</tspan>}
      </motion.text>
    </g>
  );
}
