# Farm / Land Simulator MVP

เอกสารนี้รวม 3 ส่วนในไฟล์เดียว:
1. Wireframe ทั้งระบบ (หน้าจอจริงแบบข้อความ)
2. Database schema สำหรับ MVP
3. PRD MVP พร้อมส่งต่อทีมพัฒนาได้

---

# 1) Product Overview

## ชื่อชั่วคราว
- Simสวน
- LandFlow AI
- FarmTwin

## Product Vision
ช่วยให้เกษตรกรและเจ้าของที่ดินเห็นภาพรวมสวนบนแผนที่จริง บันทึกกิจกรรมสำคัญได้ง่าย และรู้รายรับ-รายจ่าย-กำไรของแต่ละโซนโดยไม่ต้องใช้ระบบที่ยากเกินไป

## เป้าหมาย MVP
- ผู้ใช้สร้างที่ดินจากแผนที่หรือวาดเองได้
- ผู้ใช้แบ่งโซนในสวนได้
- ผู้ใช้บันทึกรายการหลักได้ง่าย: ขาย, เก็บเกี่ยว, ซื้อของ, จ้างงาน, น้ำ/ไฟ, ใช้เอง/สูญเสีย
- ผู้ใช้เห็นภาพรวมรายได้ ต้นทุน กำไร ต่อสวน / ต่อโซน
- รองรับทั้งโหมดง่ายและโหมดละเอียดระดับเริ่มต้น

## กลุ่มผู้ใช้หลัก
1. เกษตรกรรายย่อย
2. เจ้าของสวนหลายแปลง
3. ลูกหลานที่กลับมาช่วยบริหารสวน
4. คนมีที่ดินเปล่าและอยากจำลองสิ่งที่จะทำ

---

# 2) Scope MVP

## In Scope
- Authentication
- สร้าง Land / แปลงที่ดิน
- สร้าง Zone / โซนใช้งาน
- สร้าง Asset เบื้องต้น (Tree Group / Animal Group / Building / Water / Empty)
- บันทึก Transaction หลัก
- Dashboard ภาพรวม
- Report รายรับรายจ่ายกำไร
- โหมดง่าย / โหมดละเอียด
- Mobile-first web app

## Out of Scope (Phase หลัง MVP)
- AI วิเคราะห์รูปต้นไม้
- รายต้นเต็มรูปแบบสำหรับทุกพืช
- Drone / satellite detection
- Forecast ขั้นสูง
- Marketplace
- Sensor IoT integration
- Accounting export แบบเต็มระบบ

---

# 3) Information Architecture

## เมนูหลัก
- หน้าแรก
- แผนที่สวน
- เพิ่มรายการ
- รายงาน
- ทรัพย์สิน
- ตั้งค่า

## โหมดการใช้งาน
- โหมดง่าย
- โหมดละเอียด

---

# 4) Wireframe ทั้งระบบ

หมายเหตุ: Wireframe ด้านล่างเป็นข้อความเพื่อส่งต่อให้ทีม UI/UX และ dev ทำหน้าจอจริง

---

## 4.1 Splash / Welcome

### หน้าจอ: Welcome
**เป้าหมาย:** อธิบายว่าระบบช่วยอะไร

```
-------------------------------------------------
[Logo Simสวน]

เห็นสวนของคุณบนแผนที่จริง
บันทึกง่าย รู้ต้นทุน รายได้ กำไร

[เริ่มต้นใช้งาน]   [เข้าสู่ระบบ]

จุดเด่น:
- สร้างโซนบนแผนที่
- บันทึกขาย/เก็บเกี่ยว/ค่าใช้จ่ายง่าย
- ดูกำไรขาดทุนของแต่ละโซน
-------------------------------------------------
```

---

## 4.2 Onboarding

### หน้าจอ: เลือกประเภทผู้ใช้
```
-------------------------------------------------
คุณใช้งานแบบไหน?
(o) เกษตรกรรายย่อย
(o) เจ้าของสวนหลายแปลง
(o) มีที่ดินเปล่า อยากลองจำลอง
(o) ผู้จัดการสวน / ลูกหลานช่วยดูแล

[ถัดไป]
-------------------------------------------------
```

### หน้าจอ: เลือกระดับการใช้งาน
```
-------------------------------------------------
เลือกรูปแบบที่เหมาะกับคุณ

(o) โหมดง่าย
- เน้นใช้ง่าย กรอกน้อย

(o) โหมดละเอียด
- แยกโซน แยกต้นทุนละเอียดขึ้น

[เริ่มใช้งาน]
-------------------------------------------------
```

---

## 4.3 Home Dashboard

### หน้าจอ: หน้าแรก
**เป้าหมาย:** ให้ผู้ใช้เข้าใจภาพรวมภายใน 10 วินาที

```
-------------------------------------------------
[ชื่อสวนเชียงดาว]      [เปลี่ยนสวน v]

รายรับเดือนนี้   12,500
รายจ่ายเดือนนี้   7,800
กำไรสุทธิ         4,700

[แผนที่สวนขนาดย่อ]
- โซนมะม่วง
- โซนเป็ด
- โซนน้ำ
- โซนบ้านพัก

สรุปวันนี้
- ขายไข่เป็ด 150 บาท
- ซื้ออาหารสัตว์ 320 บาท
- ค่าน้ำ 100 บาท

Insight
- โซนเป็ดทำเงินมากสุดเดือนนี้
- ค่าอาหารสัตว์สูงขึ้น 18%
- โซนมะม่วงยังไม่มีรายการขาย

[+ เพิ่มรายการ]
Bottom Nav: Home | Map | Add | Reports | Assets
-------------------------------------------------
```

### Components สำคัญ
- KPI cards
- Mini map
- Daily summary
- Insight cards
- Quick action button

---

## 4.4 Land List

### หน้าจอ: รายการที่ดิน
```
-------------------------------------------------
ที่ดินของฉัน

[+ เพิ่มที่ดิน]

[สวนเชียงดาว]
20 ไร่ | 6 โซน | กำไรเดือนนี้ 4,700
[ดูแผนที่] [รายงาน]

[สวนลำพูน]
1 ไร่ | 2 โซน | กำไรเดือนนี้ 1,300
[ดูแผนที่] [รายงาน]
-------------------------------------------------
```

---

## 4.5 Create Land

### หน้าจอ: เพิ่มที่ดิน
```
-------------------------------------------------
เพิ่มที่ดิน

ชื่อที่ดิน: [____________]
ประเภท:
(o) สวน
(o) ฟาร์ม
(o) นา
(o) ที่ดินเปล่า

ตำแหน่ง:
[ค้นหาจากชื่อสถานที่ / pin บนแผนที่]

ขนาด (ไร่): [____]

[บันทึกและไปต่อ]
-------------------------------------------------
```

### หน้าจอ: เลือกพื้นที่บนแผนที่
```
-------------------------------------------------
[Google Map / Static map area]

เครื่องมือ:
[ปักหมุด] [ลากขอบเขต] [ยืนยัน]

พื้นที่ประมาณ: 19.8 ไร่

[ถัดไป]
-------------------------------------------------
```

---

## 4.6 Map / Garden Overview

### หน้าจอ: แผนที่สวน
**เป้าหมาย:** เป็นหัวใจของระบบ

```
----------------------------------------------------------------
[< กลับ] สวนเชียงดาว                         [Layer] [Filter]

 -------------------------------------------------------------
|                                                             |
|                      [2D Map / Satellite]                   |
|                                                             |
|   [โซนมะม่วง - สีเขียว]   [โซนเป็ด - สีส้ม]              |
|   [โซนน้ำ - สีฟ้า]         [โซนบ้านพัก - สีเทา]           |
|                                                             |
 -------------------------------------------------------------

Quick Summary:
- โซนทั้งหมด 6
- รายรับเดือนนี้ 12,500
- รายจ่าย 7,800
- กำไร 4,700

[+ เพิ่มโซน] [บันทึกรายการ]
Bottom Nav: Home | Map | Add | Reports | Assets
----------------------------------------------------------------
```

### Layer Options
- แสดงประเภทโซน
- แสดงรายรับ
- แสดงรายจ่าย
- แสดงกำไร
- แสดงสุขภาพ (Phase 2)

---

## 4.7 Zone Detail

### หน้าจอ: รายละเอียดโซน
```
-------------------------------------------------
[โซนมะม่วง]
ประเภท: พืช
ขนาด: 0.5 ไร่
จำนวนรวม: 5 ต้น
สถานะ: ปกติ

รายรับเดือนนี้: 2,500
รายจ่ายเดือนนี้: 800
กำไร: 1,700

Quick Actions
[ขาย] [เก็บเกี่ยว] [ซื้อของ] [จ้างงาน]
[น้ำ/ไฟ] [ใช้เอง] [แก้ไขโซน]

Assets in zone
- มะม่วงพันธุ์แท้ 5 ต้น

Recent Activity
- เก็บมะม่วง 40 กก.
- ขายมะม่วง 20 กก.
- ใส่ปุ๋ย 500 บาท
-------------------------------------------------
```

---

## 4.8 Create / Edit Zone

### หน้าจอ: เพิ่มโซน
```
-------------------------------------------------
สร้างโซนใหม่

ชื่อโซน: [____________]
ประเภทโซน:
(o) พืช
(o) สัตว์
(o) อาคาร
(o) น้ำ
(o) พื้นที่ว่าง
(o) ท่องเที่ยว/แคมป์

เลือกบนแผนที่:
[วาดโซน]

สีโซน: [เลือกสี]

[บันทึก]
-------------------------------------------------
```

### หน้าจอ: ตั้งค่าโซนพืช
```
-------------------------------------------------
โซนพืช
ชนิดหลัก: [มะม่วง v]
การเก็บข้อมูล:
(o) แบบรวมทั้งโซน
(o) รายต้น (Premium/Phase 2+)

จำนวนต้นรวม: [____]
อายุเฉลี่ย: [____] ปี
พันธุ์: [_________]

[บันทึก]
-------------------------------------------------
```

### หน้าจอ: ตั้งค่าโซนสัตว์
```
-------------------------------------------------
โซนสัตว์
ชนิดสัตว์: [เป็ดไข่ v]
จำนวน: [____]
หน่วย: [ตัว]
อายุเฉลี่ย: [____]

[บันทึก]
-------------------------------------------------
```

---

## 4.9 Add Transaction Hub

### หน้าจอ: เพิ่มรายการ
```
-------------------------------------------------
เพิ่มรายการ

[ขาย]
[เก็บเกี่ยว]
[ซื้อของ]
[จ้างงาน]
[น้ำ/ไฟ]
[ใช้เอง / สูญเสีย]

รายการโปรด
- ขายไข่เป็ด
- ซื้ออาหารเป็ด
- เก็บมะม่วง
-------------------------------------------------
```

---

## 4.10 Sell Transaction

### หน้าจอ: บันทึกขาย
```
-------------------------------------------------
บันทึกขาย

สวน: [สวนเชียงดาว v]
โซน: [โซนเป็ด v]
รายการ: [ไข่เป็ด v]
จำนวน: [30]
หน่วย: [ฟอง v]
ราคาต่อหน่วย: [5]
รวมเงิน: [150]
ลูกค้า: [ขายหน้าสวน v]
รับเงิน: [เงินสด v]
วันที่: [today]
หมายเหตุ: [________]

[บันทึก]
-------------------------------------------------
```

### UX Rules
- ระบบจำราคาล่าสุดให้
- ระบบจำหน่วยล่าสุดให้
- ระบบคำนวณรวมเงินอัตโนมัติ
- ปุ่มใช้รายการเดิมได้ใน 1 tap

---

## 4.11 Harvest Transaction

### หน้าจอ: บันทึกเก็บเกี่ยว
```
-------------------------------------------------
บันทึกเก็บเกี่ยว

สวน: [สวนเชียงดาว]
โซน: [โซนมะม่วง]
รายการ: [มะม่วง]
จำนวน: [40]
หน่วย: [กก.]
เกรด: [A/B/C v]
สถานะ:
(o) รอขาย
(o) เข้าสต๊อก
(o) ใช้เอง
(o) สูญเสีย

วันที่: [today]
หมายเหตุ: [________]

[บันทึก]
-------------------------------------------------
```

---

## 4.12 Expense Transaction

### หน้าจอ: บันทึกซื้อของ / ต้นทุน
```
-------------------------------------------------
บันทึกต้นทุน

สวน: [สวนเชียงดาว]
โซน: [โซนเป็ด]
หมวด: [อาหารสัตว์ v]
รายการ: [อาหารเป็ด]
จำนวนเงิน: [780]
วิธีจ่าย: [เงินสด / โอน]
วันที่: [today]
แนบรูปบิล: [upload]
หมายเหตุ: [________]

[บันทึก]
-------------------------------------------------
```

### หมวดต้นทุนมาตรฐาน
- ปุ๋ย
- ยา/เวชภัณฑ์
- อาหารสัตว์
- ค่าน้ำ
- ค่าไฟ
- ค่าแรง
- ค่าซ่อม
- ค่าขนส่ง
- ค่าอุปกรณ์
- อื่น ๆ

---

## 4.13 Labor Transaction

### หน้าจอ: บันทึกจ้างงาน
```
-------------------------------------------------
บันทึกจ้างงาน

สวน: [สวนเชียงดาว]
โซน: [โซนมะม่วง]
รูปแบบ:
(o) รายวัน
(o) รายเดือน
(o) เหมางาน

งาน: [ตัดหญ้า v]
จำนวนคน: [2]
ค่าจ้างต่อคน: [350]
จำนวนวัน: [1]
รวมเงิน: [700]
วันที่: [today]

[บันทึก]
-------------------------------------------------
```

### รายเดือน
```
-------------------------------------------------
รูปแบบ: รายเดือน
ตำแหน่ง: [คนสวนประจำ]
เงินเดือน: [9000]
เริ่มใช้: [01/01/2026]
ทำซ้ำทุกเดือน: [on]

[บันทึก]
-------------------------------------------------
```

---

## 4.14 Utility Transaction

### หน้าจอ: บันทึกน้ำ/ไฟ
```
-------------------------------------------------
บันทึกค่าน้ำ/ไฟ

สวน: [สวนเชียงดาว]
ประเภทรายการ:
(o) ค่าน้ำ
(o) ค่าไฟ
(o) ค่าน้ำมัน

จำนวนเงิน: [1200]
การจัดสรร:
(o) รวมทั้งสวน
(o) เฉพาะโซน

ถ้าเลือกเฉพาะโซน:
[โซนเป็ด 30%]
[โซนมะม่วง 40%]
[บ้านพัก 30%]

วันที่: [today]
[บันทึก]
-------------------------------------------------
```

---

## 4.15 Internal Use / Loss

### หน้าจอ: ใช้เอง / สูญเสีย
```
-------------------------------------------------
ใช้เอง / สูญเสีย

สวน: [สวนเชียงดาว]
โซน: [โซนมะม่วง]
รายการ: [มะม่วง]
ประเภท:
(o) ใช้ในบ้าน
(o) แจก
(o) สูญเสีย
(o) สัตว์ตาย / พืชตาย

จำนวน: [5]
หน่วย: [กก.]
มูลค่าโดยประมาณ: [250]
วันที่: [today]

[บันทึก]
-------------------------------------------------
```

---

## 4.16 Reports Dashboard

### หน้าจอ: รายงานภาพรวม
```
-------------------------------------------------
รายงาน

ช่วงเวลา: [เดือนนี้ v]
สวน: [สวนเชียงดาว v]

KPI
- รายรับ 12,500
- รายจ่าย 7,800
- กำไร 4,700

รายได้ตามโซน
- เป็ด 6,000
- มะม่วง 4,500
- อื่น ๆ 2,000

รายจ่ายตามหมวด
- อาหารสัตว์ 2,500
- ค่าแรง 2,000
- ปุ๋ย 1,200
- น้ำ/ไฟ 900
- อื่น ๆ 1,200

Insight
- โซนเป็ดกำไรสูงสุด
- ค่าอาหารสัตว์สูงกว่าค่าเฉลี่ยเดือนก่อน

[ดูรายงานแยกโซน]
-------------------------------------------------
```

---

## 4.17 Zone Profit Report

### หน้าจอ: รายงานแยกโซน
```
-------------------------------------------------
รายงานแยกโซน

[โซนเป็ด]
รายรับ 6,000
รายจ่าย 3,100
กำไร 2,900

[โซนมะม่วง]
รายรับ 4,500
รายจ่าย 1,700
กำไร 2,800

[โซนบ้านพัก]
รายรับ 0
รายจ่าย 1,000
กำไร -1,000
-------------------------------------------------
```

---

## 4.18 Assets

### หน้าจอ: ทรัพย์สิน
```
-------------------------------------------------
ทรัพย์สินในสวน

Filter: [ทั้งหมด v]

- โซนมะม่วง | พืช | 5 ต้น
- โซนเป็ด | สัตว์ | 18 ตัว
- โซนน้ำ | น้ำ | 1 แห่ง
- บ้านพัก | อาคาร | 1 หลัง

[เพิ่มทรัพย์สิน]
-------------------------------------------------
```

---

## 4.19 Tree Detail (Premium / Phase 2)

### หน้าจอ: รายละเอียดต้นไม้รายต้น
```
-------------------------------------------------
ต้นมะม่วง A-01

สายพันธุ์: น้ำดอกไม้พันธุ์แท้
อายุ: 15 ปี
สุขภาพ: ปานกลาง
ผลผลิตล่าสุด: 40 กก.
มูลค่าปีล่าสุด: 4,000
คะแนน: 72/100

ประวัติ
- ใส่ปุ๋ย 10/01/2026
- เก็บเกี่ยว 15/03/2026
- ขาย 20/03/2026

[อัปเดตสุขภาพ] [เพิ่มรูป] [ดูเปรียบเทียบ]
-------------------------------------------------
```

---

## 4.20 Settings

### หน้าจอ: ตั้งค่า
```
-------------------------------------------------
ตั้งค่า

โหมดการใช้งาน: [ง่าย / ละเอียด]
หน่วยเริ่มต้น: [กก. / ฟอง / ตัว]
สกุลเงิน: [บาท]
รายการโปรด: [จัดการ]
ผู้ใช้งานร่วม: [เชิญสมาชิก]

[บันทึก]
-------------------------------------------------
```

---

# 5) UX Principles

## หลักการสำคัญ
1. Mobile-first
2. ใช้คำง่าย ไม่ใช้ศัพท์บัญชีมากเกินไป
3. กดน้อยที่สุด
4. เริ่มจากภาพรวมก่อน
5. ความละเอียดเป็น optional
6. ระบบจำค่าล่าสุดให้เสมอ
7. รองรับ offline-first ใน phase ถัดไป

## Design Patterns
- Bottom navigation 5 เมนู
- Floating action button สำหรับเพิ่มรายการ
- Card-based summaries
- Form แบบ wizard สั้น ๆ
- Preset favorite actions

---

# 6) Database Design (MVP)

ใช้ relational database เช่น PostgreSQL

## 6.1 Core Entities Overview
- users
- farms
- lands
- zones
- assets
- products
- transactions
- transaction_items
- recurring_transactions
- media_files
- reference tables

---

## 6.2 Tables

### users
เก็บข้อมูลผู้ใช้

| field | type | notes |
|---|---|---|
| id | uuid PK | |
| full_name | varchar | |
| phone | varchar | unique optional |
| email | varchar | unique optional |
| password_hash | varchar | |
| role | varchar | owner, manager, worker |
| mode_preference | varchar | simple, detailed |
| created_at | timestamp | |
| updated_at | timestamp | |

### farms
กลุ่มธุรกิจ/เจ้าของ อาจมีหลายสวน

| field | type | notes |
|---|---|---|
| id | uuid PK | |
| owner_user_id | uuid FK users.id | |
| name | varchar | เช่น ฟาร์มคุณ A |
| description | text | |
| created_at | timestamp | |
| updated_at | timestamp | |

### lands
แปลงที่ดินจริง

| field | type | notes |
|---|---|---|
| id | uuid PK | |
| farm_id | uuid FK farms.id | |
| name | varchar | สวนเชียงดาว |
| land_type | varchar | orchard, farm, rice_field, empty_land |
| area_rai | numeric(10,2) | |
| location_name | varchar | |
| lat | numeric(10,7) | optional |
| lng | numeric(10,7) | optional |
| map_polygon_geojson | jsonb | ขอบเขตแปลง |
| notes | text | |
| created_at | timestamp | |
| updated_at | timestamp | |

### zones
โซนภายในที่ดิน

| field | type | notes |
|---|---|---|
| id | uuid PK | |
| land_id | uuid FK lands.id | |
| name | varchar | โซนมะม่วง |
| zone_type | varchar | plant, animal, building, water, empty, tourism |
| primary_category | varchar | mango, duck, pig, pond |
| color_hex | varchar | |
| area_rai | numeric(10,2) | optional |
| map_polygon_geojson | jsonb | |
| status | varchar | active, inactive |
| created_at | timestamp | |
| updated_at | timestamp | |

### assets
ทรัพย์สินในโซน (ระดับรวมสำหรับ MVP)

| field | type | notes |
|---|---|---|
| id | uuid PK | |
| zone_id | uuid FK zones.id | |
| asset_type | varchar | plant_group, animal_group, building, water_asset, equipment |
| category | varchar | mango, duck_egg, black_pig |
| name | varchar | มะม่วงพันธุ์แท้ |
| quantity | numeric(10,2) | |
| unit | varchar | tree, animal, building, pond |
| average_age_years | numeric(10,2) | optional |
| breed_or_variety | varchar | พันธุ์ |
| health_status | varchar | good, medium, poor |
| is_individual_tracking | boolean | default false |
| metadata | jsonb | flexible fields |
| created_at | timestamp | |
| updated_at | timestamp | |

### trees
รองรับรายต้นแบบ premium / phase 2 แต่เตรียม schema ไว้

| field | type | notes |
|---|---|---|
| id | uuid PK | |
| asset_id | uuid FK assets.id | parent plant group |
| code | varchar | A-01 |
| species | varchar | mango |
| variety | varchar | น้ำดอกไม้ |
| planted_date | date | optional |
| estimated_age_years | numeric(10,2) | |
| health_score | integer | 0-100 |
| fertility_score | integer | 0-100 |
| status | varchar | active, dead, removed |
| notes | text | |
| created_at | timestamp | |
| updated_at | timestamp | |

### products
รายการผลผลิต/สินค้าอ้างอิง

| field | type | notes |
|---|---|---|
| id | uuid PK | |
| farm_id | uuid FK farms.id nullable | custom per farm |
| name | varchar | ไข่เป็ด |
| category | varchar | produce, livestock, service |
| default_unit | varchar | egg, kg, animal |
| linked_asset_category | varchar | duck_egg, mango |
| is_active | boolean | |
| created_at | timestamp | |
| updated_at | timestamp | |

### transactions
หัวรายการธุรกรรม

| field | type | notes |
|---|---|---|
| id | uuid PK | |
| farm_id | uuid FK farms.id | |
| land_id | uuid FK lands.id nullable | |
| zone_id | uuid FK zones.id nullable | |
| transaction_type | varchar | sale, harvest, expense, labor, utility, internal_use, loss |
| transaction_date | timestamp | |
| payment_method | varchar | cash, transfer, unpaid |
| total_amount | numeric(12,2) | อาจเป็น 0 ใน harvest |
| counterparty_name | varchar | ลูกค้า/ร้านค้า/คนงาน |
| notes | text | |
| created_by | uuid FK users.id | |
| created_at | timestamp | |
| updated_at | timestamp | |

### transaction_items
รายละเอียดภายในธุรกรรม

| field | type | notes |
|---|---|---|
| id | uuid PK | |
| transaction_id | uuid FK transactions.id | |
| product_id | uuid FK products.id nullable | |
| asset_id | uuid FK assets.id nullable | |
| item_name | varchar | เผื่อกรณี ad hoc |
| quantity | numeric(12,2) | |
| unit | varchar | |
| unit_price | numeric(12,2) | |
| amount | numeric(12,2) | |
| grade | varchar | A/B/C |
| item_status | varchar | waiting_sale, stocked, sold, self_used, lost |
| metadata | jsonb | |
| created_at | timestamp | |

### recurring_transactions
รายการประจำ เช่น คนสวนรายเดือน

| field | type | notes |
|---|---|---|
| id | uuid PK | |
| farm_id | uuid FK farms.id | |
| land_id | uuid FK lands.id nullable | |
| zone_id | uuid FK zones.id nullable | |
| recurring_type | varchar | labor_monthly, utility_estimate, rent |
| title | varchar | คนสวนประจำ |
| amount | numeric(12,2) | |
| frequency | varchar | monthly, weekly |
| start_date | date | |
| end_date | date nullable | |
| is_active | boolean | |
| metadata | jsonb | |
| created_at | timestamp | |
| updated_at | timestamp | |

### media_files
แนบรูปบิล / รูปต้นไม้ / รูปโซน

| field | type | notes |
|---|---|---|
| id | uuid PK | |
| owner_type | varchar | transaction, asset, tree, zone |
| owner_id | uuid | |
| file_url | text | |
| file_type | varchar | image, pdf |
| created_at | timestamp | |

---

## 6.3 Reference Tables (recommended)
- ref_zone_types
- ref_asset_types
- ref_transaction_types
- ref_expense_categories
- ref_units
- ref_payment_methods
- ref_health_statuses

สำหรับ MVP อาจเก็บเป็น enum หรือ config table ก็ได้

---

## 6.4 Relationships
- 1 farm has many lands
- 1 land has many zones
- 1 zone has many assets
- 1 asset can have many trees (phase 2)
- 1 farm / land / zone has many transactions
- 1 transaction has many transaction_items

---

## 6.5 Example Transaction Modeling

### ขายไข่เป็ด 30 ฟอง ฟองละ 5 บาท
- transactions
  - type = sale
  - total_amount = 150
  - zone_id = โซนเป็ด
- transaction_items
  - item_name = ไข่เป็ด
  - quantity = 30
  - unit = ฟอง
  - unit_price = 5
  - amount = 150

### ซื้ออาหารเป็ด 780 บาท
- transactions
  - type = expense
  - total_amount = 780
  - zone_id = โซนเป็ด
- transaction_items
  - item_name = อาหารเป็ด
  - quantity = 1
  - unit = รายการ
  - amount = 780

### เก็บมะม่วง 40 กก. ยังไม่ขาย
- transactions
  - type = harvest
  - total_amount = 0
  - zone_id = โซนมะม่วง
- transaction_items
  - item_name = มะม่วง
  - quantity = 40
  - unit = กก.
  - item_status = waiting_sale

---

# 7) Business Logic (MVP)

## 7.1 Revenue Calculation
รายรับ = ผลรวม transaction_type = sale

## 7.2 Expense Calculation
รายจ่าย = ผลรวม transaction_type = expense + labor + utility

## 7.3 Profit Calculation
กำไร = รายรับ - รายจ่าย

## 7.4 Zone Profit
คำนวณจากธุรกรรมที่ผูกกับ zone_id นั้น

## 7.5 Internal Use / Loss
ไม่ถือเป็นรายรับ แต่บันทึกมูลค่าไว้เพื่อใช้ดูผลผลิตรวมและการสูญเสีย

## 7.6 Allocation of Utility
ถ้า utility ถูกบันทึกแบบรวมทั้งสวน และมี allocation per zone ให้ระบบสร้าง allocation records ใน metadata หรือ transaction_items

---

# 8) PRD MVP

## 8.1 Problem Statement
เกษตรกรและเจ้าของสวนจำนวนมากไม่รู้ต้นทุน รายได้ และกำไรของแต่ละกิจกรรมในสวน เพราะข้อมูลกระจัดกระจาย บันทึกยาก และมองภาพรวมไม่ออก โดยเฉพาะกรณีที่มีหลายโซน หลายกิจกรรม หรือหลายที่ดิน

## 8.2 Product Goal
สร้างระบบที่ช่วยให้ผู้ใช้:
1. เห็นสวนของตัวเองบนแผนที่จริง
2. แบ่งพื้นที่เป็นโซนได้
3. บันทึกรายการสำคัญได้ง่ายมาก
4. รู้กำไรขาดทุนระดับสวนและระดับโซน
5. ค่อย ๆ เพิ่มความละเอียดได้ตามความพร้อม

## 8.3 Success Metrics
### Primary
- 70% ของผู้ใช้ใหม่สร้าง land + zone แรกได้สำเร็จในวันแรก
- 50% ของผู้ใช้ที่ onboard แล้วบันทึก transaction อย่างน้อย 3 รายการใน 7 วัน
- 40% ของผู้ใช้กลับมาใช้งานสัปดาห์ถัดไป

### Secondary
- เวลาเฉลี่ยในการบันทึกขาย < 20 วินาที
- เวลาเฉลี่ยในการบันทึกต้นทุน < 20 วินาที
- ผู้ใช้ 30% เปิดหน้า report อย่างน้อย 1 ครั้ง/สัปดาห์

## 8.4 User Stories

### เจ้าของสวน
- ฉันอยากสร้างสวนของตัวเองจากแผนที่ เพื่อเห็นภาพรวมทั้งหมด
- ฉันอยากแบ่งพื้นที่เป็นโซน เพื่อรู้ว่าแต่ละส่วนทำอะไร
- ฉันอยากดูว่ากิจกรรมไหนกำไรหรือขาดทุน

### เกษตรกรรายย่อย
- ฉันอยากบันทึกขายไข่หรือผลผลิตแบบง่าย ๆ โดยไม่ต้องกรอกเยอะ
- ฉันอยากจดค่าน้ำ ค่าไฟ ค่าแรง แบบไม่ซับซ้อน
- ฉันอยากรู้ว่าเดือนนี้เหลือเงินเท่าไร

### ลูกหลาน/ผู้ช่วยบริหาร
- ฉันอยากแยกดูรายงานรายโซน
- ฉันอยากดูต้นทุนตามหมวด
- ฉันอยากใช้ข้อมูลย้อนหลังเปรียบเทียบ

## 8.5 Functional Requirements

### FR-01 Authentication
- ผู้ใช้สมัครและเข้าสู่ระบบด้วยเบอร์โทรหรืออีเมลได้

### FR-02 Farm / Land Management
- ผู้ใช้สร้าง farm ได้อย่างน้อย 1 farm
- ผู้ใช้สร้าง land ได้
- ผู้ใช้ปักหมุดหรือวาดขอบเขต land บนแผนที่ได้

### FR-03 Zone Management
- ผู้ใช้สร้าง zone ได้
- ผู้ใช้กำหนดประเภทโซนได้
- ผู้ใช้กำหนดสีและชื่อโซนได้
- ผู้ใช้แก้ไขและลบโซนได้

### FR-04 Asset Management
- ผู้ใช้เพิ่ม asset ระดับรวมในแต่ละโซนได้
- ผู้ใช้ระบุจำนวนและอายุเฉลี่ยได้

### FR-05 Transaction Logging
ระบบต้องรองรับการบันทึกธุรกรรม 6 ประเภท:
1. sale
2. harvest
3. expense
4. labor
5. utility
6. internal_use / loss

### FR-06 Quick Actions
- ผู้ใช้กดบันทึกจากหน้า zone ได้
- ระบบต้องจำค่าล่าสุดเพื่อกรอกซ้ำง่าย

### FR-07 Reporting
- ระบบต้องแสดงรายรับ รายจ่าย กำไร ระดับ farm
- ระบบต้องแสดงรายรับ รายจ่าย กำไร ระดับ land
- ระบบต้องแสดงรายรับ รายจ่าย กำไร ระดับ zone
- ระบบต้องมี insight เบื้องต้นจาก rule-based logic

### FR-08 Mode Switching
- ผู้ใช้สลับโหมดง่าย / โหมดละเอียดได้
- โหมดง่ายซ่อนฟิลด์ที่ไม่จำเป็น

## 8.6 Non-functional Requirements
- Mobile responsive
- Form submit ภายใน 2 วินาทีใน network ปกติ
- รองรับผู้ใช้เริ่มต้นอย่างน้อย 10,000 ราย
- ใช้ภาษาไทยเป็นหลัก
- โครงสร้างรองรับ phase 2 ได้

## 8.7 Rule-based Insights (MVP)
1. ถ้ารายจ่ายหมวดใดเพิ่มเกิน 15% เมื่อเทียบเดือนก่อน → แจ้งเตือน
2. ถ้าโซนใดไม่มีรายรับแต่มีรายจ่ายต่อเนื่อง 2 เดือน → แจ้งให้ตรวจสอบ
3. ถ้ารายรับของโซนใดสูงสุด → highlight เป็น top earning zone
4. ถ้ารายจ่ายรวมเกินรายรับรวม → แจ้งสถานะขาดทุนเดือนนี้

## 8.8 Permissions
### Owner
- จัดการทุกอย่าง

### Manager
- จัดการ land/zone/transaction ได้

### Worker
- บันทึกรายการได้อย่างเดียว

---

# 9) API Draft (Suggested)

## Auth
- POST /auth/register
- POST /auth/login
- GET /me

## Farms
- GET /farms
- POST /farms
- GET /farms/:id
- PATCH /farms/:id

## Lands
- GET /lands?farm_id=
- POST /lands
- GET /lands/:id
- PATCH /lands/:id

## Zones
- GET /zones?land_id=
- POST /zones
- GET /zones/:id
- PATCH /zones/:id
- DELETE /zones/:id

## Assets
- GET /assets?zone_id=
- POST /assets
- PATCH /assets/:id

## Transactions
- GET /transactions?farm_id=&land_id=&zone_id=&type=&date_from=&date_to=
- POST /transactions
- GET /transactions/:id
- PATCH /transactions/:id

## Reports
- GET /reports/summary?farm_id=&period=
- GET /reports/zones?land_id=&period=
- GET /reports/expenses?farm_id=&period=

---

# 10) Suggested Tech Stack

## Frontend
- Next.js
- TypeScript
- Tailwind CSS
- React Query
- Mapbox GL / Google Maps SDK

## Backend
- Node.js + NestJS หรือ Next.js API routes
- PostgreSQL
- Prisma ORM

## Storage
- S3 compatible storage for images/bills

## Auth
- JWT / Clerk / Firebase Auth

## Analytics
- PostHog / Plausible

---

# 11) MVP Delivery Phases

## Sprint 1
- Auth
- Farm / Land CRUD
- Basic map integration

## Sprint 2
- Zone CRUD
- Asset CRUD
- Home dashboard basic

## Sprint 3
- Transaction flows ทั้ง 6 แบบ
- Quick actions

## Sprint 4
- Reports summary + zone profit
- Rule-based insights
- Mode easy/detailed

## Sprint 5
- QA
- Seed data
- Pilot onboarding

---

# 12) Acceptance Criteria (MVP)

1. ผู้ใช้ใหม่สร้าง farm และ land ได้สำเร็จ
2. ผู้ใช้วาดอย่างน้อย 1 zone ได้
3. ผู้ใช้บันทึก sale และ expense ได้สำเร็จ
4. หน้า dashboard อัปเดตตัวเลขหลังบันทึกรายการ
5. หน้า reports แสดงกำไรขาดทุนรายโซนได้
6. โหมดง่ายแสดงฟิลด์น้อยกว่าโหมดละเอียดจริง

---

# 13) Future Enhancements

## Phase 2
- รายต้นสำหรับต้นไม้ premium
- รูปสุขภาพต้นไม้
- health score
- fertility score

## Phase 3
- AI scenario simulation
- yield forecast
- map auto-zoning
- voice input

## Phase 4
- drone/satellite analysis
- sensor integration
- financial forecasting and credit score for farms

---

# 14) Final Recommendation

สำหรับการเริ่มทำจริง ให้โฟกัสที่ 3 อย่างก่อน:
1. Map + Zone
2. Transaction logging ที่ง่ายมาก
3. Profit visibility ระดับโซน

ถ้า 3 ส่วนนี้ทำดี ผู้ใช้จะเห็นคุณค่าทันที และเป็นฐานให้ต่อยอดไปสู่ระบบรายต้นและ AI ในอนาคตได้

---

# 15) Figma-ready UI Specification

ส่วนนี้ออกแบบให้ทีม UI/UX และทีม Frontend นำไปสร้างหน้าจอจริงได้ทันที

## 15.1 Design Foundation

### Breakpoints
- Mobile: 390 x 844
- Tablet: 768 x 1024
- Desktop: 1440 x 1024

### Grid
- Mobile: 4 columns / margin 16 / gutter 12
- Tablet: 8 columns / margin 24 / gutter 16
- Desktop: 12 columns / margin 32 / gutter 20

### Spacing Scale
- 4, 8, 12, 16, 20, 24, 32, 40, 48

### Radius
- Card: 16
- Button: 14
- Input: 12
- Modal: 20

### Typography
- Display: 28/36 SemiBold
- H1: 24/32 SemiBold
- H2: 20/28 SemiBold
- H3: 18/26 Medium
- Body L: 16/24 Regular
- Body M: 14/22 Regular
- Caption: 12/18 Regular
- Number KPI: 28/32 Bold

### Color Tokens
- Primary Green: #2F8F5B
- Light Green: #E8F5EC
- Accent Orange: #F2994A
- Light Orange: #FFF1E6
- Blue Water: #4DA3FF
- Light Blue: #EAF4FF
- Danger: #E45858
- Warning: #E5B93C
- Gray 900: #1F2937
- Gray 700: #4B5563
- Gray 500: #9CA3AF
- Gray 200: #E5E7EB
- Gray 100: #F3F4F6
- White: #FFFFFF

### Icon Style
- Rounded outline icons
- 24 px standard
- 20 px inside compact chips

---

## 15.2 Global Components

### Top App Bar
โครงสร้าง:
- Left: back button หรือ title
- Center/Left: page title
- Right: action buttons เช่น filter, layer, edit
- Height: 56 px mobile / 64 px desktop

### Bottom Navigation
รายการ:
- Home
- Map
- Add
- Reports
- Assets

สถานะ:
- Active = primary green + filled icon
- Inactive = gray 500
- Height 72 px

### Floating Action Button
- Size 56 px
- Position bottom-right above bottom nav
- Icon +
- Action: เปิด quick action sheet

### KPI Card
โครงสร้าง:
- Label ด้านบน
- Value ตัวใหญ่
- Delta / subtitle ด้านล่าง
- Padding 16
- Shadow เบา

### Zone Card
โครงสร้าง:
- Zone color dot
- Zone name
- Zone type chip
- Revenue / Expense / Profit mini rows
- Actions 2-3 ปุ่ม

### Quick Action Sheet
รายการปุ่มใหญ่ 2 columns:
- ขาย
- เก็บเกี่ยว
- ซื้อของ
- จ้างงาน
- น้ำ/ไฟ
- ใช้เอง/สูญเสีย

---

## 15.3 Screen Spec: Home Dashboard

### Mobile Layout
1. Top App Bar
   - Title: ชื่อสวนปัจจุบัน
   - Right: เปลี่ยนสวน, notifications
2. KPI Section
   - 3 cards stacked / 2+1 arrangement
   - รายรับเดือนนี้
   - รายจ่ายเดือนนี้
   - กำไรสุทธิ
3. Mini Map Card
   - แสดง preview แผนที่
   - CTA: ดูแผนที่เต็ม
4. Today Summary Card
   - list 3-5 รายการล่าสุด
5. Insight Card
   - 2-3 ข้อความอัตโนมัติ
6. Favorite Actions Row
   - ขายไข่เป็ด
   - ซื้ออาหารเป็ด
   - เก็บมะม่วง
7. Bottom Navigation

### States
- Empty state: ยังไม่มีที่ดิน → CTA เพิ่มที่ดิน
- Loading state: skeleton cards
- Error state: retry button

### Interaction
- แตะ KPI → ไปหน้า Reports พร้อม filter
- แตะ mini map → ไปหน้า Map
- แตะรายการล่าสุด → ไป transaction detail

---

## 15.4 Screen Spec: Map Overview

### Layout
1. Top App Bar
   - Back
   - Title: สวนเชียงดาว
   - Right: Layer, Filter
2. Map Canvas
   - สูง 55-65% ของหน้าจอ mobile
   - แสดง polygons ของ zones
3. Floating Controls
   - + เพิ่มโซน
   - recenter map
4. Summary Dock ด้านล่าง
   - จำนวนโซน
   - รายรับ
   - รายจ่าย
   - กำไร
5. Zone Chips horizontal scroll
   - มะม่วง
   - เป็ด
   - น้ำ
   - บ้านพัก

### Layer Panel
- ประเภทโซน
- รายรับ
- รายจ่าย
- กำไร
- ความอุดมสมบูรณ์ (disabled label: coming soon)

### Filter Panel
- ช่วงเวลา
- แสดงเฉพาะโซน
- แสดงเฉพาะประเภท transaction

### Interaction
- แตะ polygon → เปิด bottom sheet โซน
- long press → edit zone mode
- pinch zoom / pan ปกติ

---

## 15.5 Screen Spec: Zone Bottom Sheet / Detail

### Compact Bottom Sheet
- Zone name
- Type chip
- จำนวนรวม
- Revenue / Expense / Profit
- Quick actions row
- CTA: ดูรายละเอียดเต็ม

### Full Detail Page
Sections:
1. Header summary
2. KPI 3 ช่อง
3. Quick actions grid
4. Assets list
5. Recent activity list
6. CTA edit zone

### Empty States
- ยังไม่มี asset → เพิ่มทรัพย์สิน
- ยังไม่มีรายการ → บันทึกรายการแรก

---

## 15.6 Screen Spec: Add Transaction Hub

### Layout
- Header: เพิ่มรายการ
- Search field: ค้นหาการกระทำ
- Grid 2 columns
  - ขาย
  - เก็บเกี่ยว
  - ซื้อของ
  - จ้างงาน
  - น้ำ/ไฟ
  - ใช้เอง/สูญเสีย
- Favorites list
- Recent actions list

### Behavior
- ถ้าเข้าจากโซน ให้ prefill zone อัตโนมัติ
- แสดง last used form shortcut

---

## 15.7 Form Spec: Sale

### Field Priority
Required:
- สวน
- โซน
- รายการ
- จำนวน
- หน่วย
- ราคาต่อหน่วย หรือ รวมเงิน

Optional:
- ลูกค้า
- วิธีรับเงิน
- หมายเหตุ

### UX Rules
- ถ้าใส่จำนวน + ราคาต่อหน่วย → คำนวณรวมอัตโนมัติ
- ถ้าใส่รวมเงินก่อน → ระบบคำนวณราคาต่อหน่วยถ้า quantity มี
- Dropdown แสดงตัวเลือกจาก usage ล่าสุดก่อน
- ปุ่ม copy last transaction

### Validation
- quantity > 0
- amount >= 0
- zone ต้องอยู่ใน land เดียวกับฟาร์มที่เลือก

---

## 15.8 Form Spec: Harvest

Required:
- โซน
- รายการ
- จำนวน
- หน่วย
- สถานะ

Optional:
- เกรด
- หมายเหตุ

Statuses:
- รอขาย
- เข้าสต๊อก
- ใช้เอง
- สูญเสีย

UX:
- ถ้า status = รอขาย → สร้าง available inventory logical state ใน backend
- future CTA “ขายจากของที่รอขาย”

---

## 15.9 Form Spec: Expense / Purchase

Required:
- โซนหรือทั้งสวน
- หมวด
- รายการ
- จำนวนเงิน

Optional:
- รูปบิล
- ร้านค้า
- วิธีจ่าย

Expense Categories UI:
- chips + dropdown สำรอง
- categories ล่าสุดขึ้นก่อน

---

## 15.10 Form Spec: Labor

Modes tabs:
- รายวัน
- รายเดือน
- เหมางาน

### รายวัน
- งาน
- จำนวนคน
- ค่าแรงต่อคน
- จำนวนวัน
- รวมเงิน auto

### รายเดือน
- ตำแหน่ง
- เงินเดือน
- เริ่มใช้
- recurring toggle

### เหมางาน
- ชื่องาน
- ราคาเหมา
- วันที่

---

## 15.11 Form Spec: Utility

Required:
- ประเภท: น้ำ / ไฟ / น้ำมัน
- จำนวนเงิน
- การจัดสรร

Allocation UI:
- ทั้งสวน
- แบ่งตามโซน

ถ้าแบ่งตามโซน:
- list zone rows
- ใส่เปอร์เซ็นต์ / จำนวนเงิน
- progress summary ต้องรวม 100%

---

## 15.12 Reports UI Spec

### Summary Report
Sections:
1. Filter bar
2. KPI cards
3. Revenue by zone chart
4. Expense by category chart
5. Top zone / worst zone cards
6. Insight list

### Zone Report
- sortable list by profit desc
- compact cards
- filter by zone type

### Visual Rules
- positive = green
- negative = red
- neutral = gray

---

## 15.13 Assets UI Spec

Tabs:
- ทั้งหมด
- พืช
- สัตว์
- อาคาร
- น้ำ

Card fields:
- Name
- Category
- Quantity
- Unit
- Zone
- Health chip (if available)

CTA:
- ดูรายละเอียด
- แก้ไข

---

## 15.14 Tree Premium UI Spec (Phase 2 ready)

Map Mode:
- จุดต้นไม้บน zone
- icon ตามสุขภาพ

Tree Detail:
- code
- variety
- age
- latest harvest
- value last season
- health score
- notes

Actions:
- อัปเดตสุขภาพ
- เพิ่มรูป
- บันทึกเก็บเกี่ยว
- เปรียบเทียบกับต้นอื่น

---

# 16) Design System Component Inventory

## Inputs
- Text input
- Numeric input
- Unit selector
- Date picker
- Search select
- Radio group
- Chip select
- Toggle switch
- File upload
- Percent allocator row

## Data Display
- KPI card
- Transaction row
- Zone card
- Asset card
- Insight alert
- Empty state card
- Mini chart card

## Feedback
- Toast success
- Inline validation error
- Empty state illustration
- Skeleton loader
- Confirmation modal

---

# 17) Detailed Database Notes

## 17.1 Recommended Enums

### zone_type
- plant
- animal
- building
- water
- empty
- tourism

### asset_type
- plant_group
- animal_group
- building
- water_asset
- equipment

### transaction_type
- sale
- harvest
- expense
- labor
- utility
- internal_use
- loss

### payment_method
- cash
- transfer
- unpaid
- mixed

### health_status
- good
- medium
- poor
- unknown

### item_status
- waiting_sale
- stocked
- sold
- self_used
- lost

---

## 17.2 Suggested Extra Tables for Production-readiness

### transaction_templates
สำหรับรายการโปรด/รายการใช้บ่อย

| field | type | notes |
|---|---|---|
| id | uuid PK | |
| user_id | uuid FK users.id | |
| title | varchar | ขายไข่เป็ด |
| transaction_type | varchar | sale |
| land_id | uuid nullable | |
| zone_id | uuid nullable | |
| default_payload | jsonb | จำนวน field ล่าสุด |
| created_at | timestamp | |

### zone_allocations
สำหรับ utility shared allocation แบบชัดเจน

| field | type | notes |
|---|---|---|
| id | uuid PK | |
| transaction_id | uuid FK transactions.id | utility record |
| zone_id | uuid FK zones.id | |
| allocated_amount | numeric(12,2) | |
| allocated_percent | numeric(5,2) | |
| created_at | timestamp | |

### insights_cache
สำหรับเก็บ insight ที่คำนวณแล้ว ลดโหลดระบบ

| field | type | notes |
|---|---|---|
| id | uuid PK | |
| farm_id | uuid FK farms.id | |
| land_id | uuid nullable | |
| zone_id | uuid nullable | |
| period_key | varchar | 2026-03 |
| insight_type | varchar | top_zone, cost_alert |
| title | varchar | |
| description | text | |
| severity | varchar | info, warning, danger |
| generated_at | timestamp | |

---

## 17.3 Index Recommendations
- users(email)
- users(phone)
- lands(farm_id)
- zones(land_id)
- assets(zone_id)
- transactions(farm_id, transaction_date)
- transactions(zone_id, transaction_date)
- transaction_items(transaction_id)
- trees(asset_id)

---

## 17.4 Soft Delete Recommendation
เพิ่ม field `deleted_at` ในตารางหลักเหล่านี้
- lands
- zones
- assets
- transactions
- trees

เพื่อป้องกันข้อมูลหายจากการใช้งานจริง

---

# 18) Engineering Notes for Dev Team

## 18.1 Frontend State Strategy
- Server state: React Query
- Form state: React Hook Form + Zod
- UI state: Zustand / Context เฉพาะส่วนที่จำเป็น

## 18.2 Map Strategy
MVP ใช้แบบนี้ก่อน:
- แสดงแผนที่ด้วย Mapbox หรือ Google Maps
- วาด polygon ด้วย drawing tools
- เก็บเป็น GeoJSON ใน DB
- render zones จาก GeoJSON

## 18.3 Report Calculation Strategy
เริ่มด้วย server-side aggregation query
ไม่ต้องทำ event-sourcing เต็มรูปแบบใน MVP

## 18.4 Permission Middleware
- owner: full access
- manager: create/update/read almost all except ownership settings
- worker: create/read transactions only for assigned lands/zones

## 18.5 Audit Fields
ทุก mutation ควรเก็บ
- created_by
- updated_by
- created_at
- updated_at

---

# 19) MVP Build Order for Design + Dev

## Design Order
1. Welcome / onboarding
2. Home dashboard
3. Map overview
4. Zone detail
5. Add transaction hub
6. Sale form
7. Expense form
8. Harvest form
9. Labor form
10. Utility form
11. Reports
12. Assets

## Dev Order
1. Auth + user/farm/land
2. Zone CRUD + map polygons
3. Transactions core
4. Dashboard aggregations
5. Reports
6. Templates / favorites

---

# 20) Immediate Next Deliverables

หลังจากเอกสารนี้ สิ่งที่ควรทำต่อมี 3 แบบ

## ตัวเลือก A: แตกเป็น User Flow รายหน้าจอ
เช่น flow ตั้งแต่ “เพิ่มสวนครั้งแรก” จนถึง “บันทึกขายไข่เป็ดสำเร็จ”

## ตัวเลือก B: สร้าง SQL schema + Prisma schema จริง
เพื่อให้ทีม backend เริ่มลงมือได้ทันที

## ตัวเลือก C: สร้าง Frontend component spec + props
เพื่อให้ทีม frontend ขึ้นจอได้เร็ว

แนะนำลำดับที่คุ้มที่สุด:
1. User Flow
2. Prisma schema
3. Component spec

