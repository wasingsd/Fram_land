import { Land, Zone, Transaction, KPI, Asset } from "./types";

export const mockZones: Zone[] = [
  {
    id: "z1",
    name: "โซนมะม่วง",
    type: "plant",
    areaRai: 5.5,
    color: "#16a34a",
    description: "มะม่วงน้ำดอกไม้เกรดส่งออก",
    plantCount: 50,
    recentActivities: [
      { id: "ra1", type: "harvest", title: "เก็บเกี่ยวผลผลิต", date: "2 วันที่ผ่านมา" },
      { id: "ra2", type: "sell", title: "ขายมะม่วง (20 กก.)", date: "5 วันที่ผ่านมา" },
    ]
  },
  {
    id: "z2",
    name: "โซนเป็ด",
    type: "animal",
    areaRai: 2.0,
    color: "#ea580c",
    description: "เป็ดไข่พันธุ์กากีเบลล์",
    animalCount: 30,
    recentActivities: [
      { id: "ra3", type: "harvest", title: "เก็บไข่เป็ด (50 ฟอง)", date: "วันนี้" },
      { id: "ra4", type: "buy", title: "ซื้ออาหารเป็ด (5 กระสอบ)", date: "3 วันที่ผ่านมา" },
    ]
  },
  {
    id: "z3",
    name: "โซนน้ำ",
    type: "water",
    areaRai: 1.5,
    color: "#0284c7",
    description: "บ่อปลาและแหล่งน้ำสำรอง",
    recentActivities: [
      { id: "ra5", type: "utility", title: "ตรวจเช็คระดับน้ำ", date: "1 วันที่ผ่านมา" },
    ]
  },
  {
    id: "z4",
    name: "โซนบ้านพัก",
    type: "building",
    areaRai: 0.5,
    color: "#475569",
    description: "ที่พักคนงานและโรงเก็บเครื่องมือ",
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
  { label: "รายรับเดือนนี้", value: 12500, change: 20, type: "income" },
  { label: "รายจ่ายเดือนนี้", value: 7800, change: -10, type: "expense" },
  { label: "กำไรสุทธิ", value: 4700, change: 8, type: "net" },
];

export const mockTransactions: Transaction[] = [
  { id: "t1", type: "sell", title: "ขายไข่เป็ด", amount: 150, unit: "บาท", date: "2026-03-19", zoneId: "z2" },
  { id: "t2", type: "buy", title: "ซื้ออาหารสัตว์", amount: 320, unit: "บาท", date: "2026-03-19", zoneId: "z2" },
  { id: "t3", type: "utility", title: "ค่าน้ำ", amount: 100, unit: "บาท", date: "2026-03-18" },
  { id: "t4", type: "harvest", title: "เก็บเกี่ยวมะม่วง", amount: 50, unit: "กก.", date: "2026-03-17", zoneId: "z1" },
];

export const mockAssets: Asset[] = [
  { id: "a1", name: "มะม่วงน้ำดอกไม้", type: "plant", quantity: 50, unit: "ต้น", zoneId: "z1", status: "normal" },
  { id: "a2", name: "เป็ดไข่", type: "animal", quantity: 30, unit: "ตัว", zoneId: "z2", status: "normal" },
  { id: "a3", name: "เครื่องสูบน้ำ", type: "building", quantity: 1, unit: "เครื่อง", zoneId: "z3", status: "warning" },
];

export const mockInsights = [
  "โซนนี้ทำกำไรสูงสุดในสวน",
  "ควรเพิ่มจำนวนต้นเพื่อเพิ่มผลผลิต",
  "ค่าใช้จ่ายยังอยู่ในระดับดี",
];

export const mockFavoriteActions = [
  { label: "💰 ขาย", type: "sell" },
  { label: "🌾 เก็บเกี่ยว", type: "harvest" },
  { label: "💸 ซื้อของ", type: "buy" },
];
