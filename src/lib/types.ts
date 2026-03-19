export type ZoneType = "plant" | "animal" | "building" | "water" | "empty" | "tourism";

export interface Zone {
  id: string;
  name: string;
  type: ZoneType;
  areaRai: number;
  color: string;
  description?: string;
}

export interface Land {
  id: string;
  name: string;
  type: string;
  areaRai: number;
  locationName: string;
  zones: Zone[];
}

export interface Transaction {
  id: string;
  type: "sell" | "harvest" | "buy" | "labor" | "utility" | "loss";
  title: string;
  category?: string;
  amount: number;
  unit?: string;
  totalPrice?: number;
  date: string;
  zoneId?: string;
  notes?: string;
}

export interface KPI {
  label: string;
  value: number;
  change: number;
  type: "income" | "expense" | "net";
}

export interface Asset {
  id: string;
  name: string;
  type: ZoneType;
  quantity: number;
  unit: string;
  zoneId: string;
  status: "normal" | "warning" | "critical";
}
