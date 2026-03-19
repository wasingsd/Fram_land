import { Land, Zone, Transaction, KPI, Asset } from "./types";

export const mockZones: Zone[] = [
  {
    id: "z1",
    name: "โซนมะม่วง",
    type: "plant",
    areaRai: 5.5,
    color: "#22c55e",
    description: "มะม่วงน้ำดอกไม้ 50 ต้น",
  },
  {
    id: "z2",
    name: "โซนเป็ด",
    type: "animal",
    areaRai: 2.0,
    color: "#f97316",
    description: "เป็ดไข่ 200 ตัว",
  },
  {
    id: "z3",
    name: "โซนน้ำ",
    type: "water",
    areaRai: 1.5,
    color: "#0ea5e9",
    description: "บ่อปลาและกักเก็บน้ำ",
  },
  {
    id: "z4",
    name: "โซนบ้านพัก",
    type: "building",
    areaRai: 0.5,
    color: "#64748b",
    description: "บ้านพักและโรงเก็บอุปกรณ์",
  },
];

export const mockLand: Land = {
  id: "l1",
  name: "สวนเชียงดาว",
  type: "สวนผสม",
  areaRai: 20,
  locationName: "เชียงดาว, เชียงใหม่",
  zones: mockZones,
};

export const mockKPIs: KPI[] = [
  { label: "รายรับเดือนนี้", value: 12500, change: 12, type: "income" },
  { label: "รายจ่ายเดือนนี้", value: 7800, change: -5, type: "expense" },
  { label: "กำไรสุทธิ", value: 4700, change: 8, type: "net" },
];

export const mockTransactions: Transaction[] = [
  {
    id: "t1",
    type: "sell",
    title: "ขายไข่เป็ด",
    amount: 150,
    unit: "บาท",
    date: "2026-03-19",
    zoneId: "z2",
  },
  {
    id: "t2",
    type: "buy",
    title: "ซื้ออาหารสัตว์",
    amount: 320,
    unit: "บาท",
    date: "2026-03-19",
    zoneId: "z2",
  },
  {
    id: "t3",
    type: "utility",
    title: "ค่าน้ำ",
    amount: 100,
    unit: "บาท",
    date: "2026-03-18",
  },
  {
    id: "t4",
    type: "harvest",
    title: "เก็บเกี่ยวมะม่วง",
    amount: 50,
    unit: "กก.",
    date: "2026-03-17",
    zoneId: "z1",
  },
];

export const mockAssets: Asset[] = [
  {
    id: "a1",
    name: "มะม่วงน้ำดอกไม้",
    type: "plant",
    quantity: 50,
    unit: "ต้น",
    zoneId: "z1",
    status: "normal",
  },
  {
    id: "a2",
    name: "เป็ดไข่",
    type: "animal",
    quantity: 200,
    unit: "ตัว",
    zoneId: "z2",
    status: "normal",
  },
  {
    id: "a3",
    name: "เครื่องสูบน้ำ",
    type: "building",
    quantity: 1,
    unit: "เครื่อง",
    zoneId: "z3",
    status: "warning",
  },
];

export const mockInsights = [
  "โซนเป็ดทำเงินมากสุดเดือนนี้",
  "ค่าอาหารสัตว์สูงขึ้น 18%",
  "โซนมะม่วงใกล้ถึงเวลาเก็บเกี่ยวอีกครั้ง",
];

export const mockFavoriteActions = [
  { label: "ขายไข่เป็ด", type: "sell" },
  { label: "ซื้ออาหารเป็ด", type: "buy" },
  { label: "เก็บมะม่วง", type: "harvest" },
];
