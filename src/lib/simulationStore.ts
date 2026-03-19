import { create } from 'zustand';

export type EntityType = 'tree' | 'duck' | 'pond' | 'building';

export interface SimEntity {
  id: string;
  type: EntityType;
  x: number;
  y: number;
}

interface SimulationState {
  entities: SimEntity[];
  addEntity: (type: EntityType, count?: number) => void;
  reset: () => void;
  setInitialData: (data: SimEntity[]) => void;
}

// Simple helper to generate random coordinates avoiding immediate overlap (basic)
const generateRandomPosition = (existing: SimEntity[], padding: number = 40) => {
  let x = 0, y = 0, collision = true, attempts = 0;
  
  // Canvas size assumption: 1000x1000 for internal coordinates
  while (collision && attempts < 50) {
    x = Math.random() * 800 + 100; // Keep away from edges
    y = Math.random() * 800 + 100;
    
    collision = existing.some(ent => {
      const dx = ent.x - x;
      const dy = ent.y - y;
      return Math.sqrt(dx * dx + dy * dy) < padding;
    });
    attempts++;
  }
  return { x, y };
};

export const useSimulationStore = create<SimulationState>((set) => ({
  entities: [],
  
  addEntity: (type, count = 1) => set((state) => {
    const newEntities = [...state.entities];
    
    // Different padding based on type
    const padding = type === 'pond' || type === 'building' ? 100 : 40;

    for (let i = 0; i < count; i++) {
      const { x, y } = generateRandomPosition(newEntities, padding);
      newEntities.push({
        id: `${type}-${Date.now()}-${i}`,
        type,
        x,
        y,
      });
    }
    
    return { entities: newEntities };
  }),

  reset: () => set({ entities: [] }),
  setInitialData: (data) => set({ entities: data }),
}));
