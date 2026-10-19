# 🗺️ Full-Stack Portfolio Roadmap (Step-by-Step)
> **Stack:** Next.js (Frontend) + NestJS (Backend) + PostgreSQL + Prisma ORM

---

## 🏗️ System Architecture Overview

```
[ Browser / Client ]
        │
        ▼ (HTTP Requests / UI)
[ Frontend: Next.js (portfolio-web) ]
  - App Router, React Server Components
  - Tailwind CSS / UI Styling
  - Fetching API & State Management
        │
        ▼ (REST API JSON / CORS)
[ Backend: NestJS (portfolio-api) ]
  - Modular Architecture (Module, Controller, Service)
  - Data Validation (class-validator, DTOs)
  - Business Logic & Error Handling
        │
        ▼ (Queries / Type-Safe ORM)
[ Prisma ORM ]
  - schema.prisma & Migration Engine
  - Prisma Client
        │
        ▼ (TCP / SQL)
[ PostgreSQL Database ]
  - Tables: Profile, Skills, Projects, Experiences, Contacts
```

---

## 📌 Phase 1: เตรียมสภาพแวดล้อมและเครื่องมือ (Environment Setup)
*เป้าหมาย: เตรียมเครื่องให้พร้อมใช้งานทั้ง Node.js, CLI และฐานข้อมูล PostgreSQL*

- [ ] **1.1 ตรวจสอบ Node.js & Package Manager**
  - ตรวจสอบเวอร์ชัน Node.js (`node -v`) ควรเป็น v18 หรือ v20+ LTS
  - ตรวจสอบเวอร์ชัน npm (`npm -v`)
- [ ] **1.2 เตรียม PostgreSQL Database**
  - เลือกวิธีใช้งาน: ติดตั้ง PostgreSQL ในเครื่องโดยตรง หรือ รันผ่าน Docker Compose
  - สร้าง Database ก้อนใหม่สำหรับโปรเจกต์ เช่น `portfolio_db`
  - ตรวจสอบ Connection String: `postgresql://USER:PASSWORD@localhost:5432/portfolio_db?schema=public`
- [ ] **1.3 ติดตั้งเครื่องมือ CLI สำหรับ NestJS**
  - ติดตั้ง Nest CLI: `npm i -g @nestjs/cli`

---

## 📌 Phase 2: เริ่มต้น Backend & ฐานข้อมูล (portfolio-api)
*เป้าหมาย: วางโครงสร้างโปรเจกต์ API และเชื่อมต่อกับ PostgreSQL ผ่าน Prisma ORM*

- [ ] **2.1 สร้างโปรเจกต์ NestJS ใน `portfolio-api`**
  - รันคำสั่งสร้าง NestJS project
  - ทำความเข้าใจโครงสร้างหลัก:
    - `main.ts` : จุดเริ่มต้นของเซิร์ฟเวอร์ (Bootstrap)
    - `app.module.ts` : Root Module ที่รวมโมดูลทั้งหมด
    - `app.controller.ts` : ตัวรับ Request และส่ง Response
    - `app.service.ts` : ตัวจัดการ Logic การทำงาน
  - รัน Dev Server (`npm run start:dev`) และทดสอบ `http://localhost:3000`
- [ ] **2.2 ติดตั้งและตั้งค่า Prisma ORM**
  - ติดตั้ง Prisma CLI: `npm install -D prisma`
  - ติดตั้ง Prisma Client: `npm install @prisma/client`
  - รันคำสั่ง Initial Prisma: `npx prisma init`
  - กำหนดค่า `DATABASE_URL` ในไฟล์ `.env`
- [ ] **2.3 ออกแบบ Database Schema (`prisma/schema.prisma`)**
  - โมเดล **Profile** (id, name, title, bio, avatarUrl, socialLinks, resumeUrl)
  - โมเดล **Skill** (id, name, category, proficiency, icon)
  - โมเดล **Project** (id, title, slug, description, coverImage, tags, repoUrl, liveUrl, featured)
  - โมเดล **Experience** (id, company, position, startDate, endDate, isCurrent, description)
  - โมเดล **ContactMessage** (id, senderName, senderEmail, subject, message, createdAt)
- [ ] **2.4 Migration และ Seeding ข้อมูลเริ่มต้น**
  - รัน Migration เพื่อสร้างตารางใน PostgreSQL: `npx prisma migrate dev --name init`
  - เขียนสคริปต์ `prisma/seed.ts` สำหรับใส่ข้อมูล Profile และ Projects ตัวอย่าง
  - เปิดดูข้อมูลผ่าน GUI ด้วย `npx prisma studio`
- [ ] **2.5 สร้าง Prisma Service ใน NestJS**
  - สร้าง `PrismaService` เพื่อสืบทอดจาก `PrismaClient` และผูก Lifecycle Hook
  - สร้าง `PrismaModule` แบบ Global เพื่อให้โมดูลอื่นเรียกใช้ Database ได้สะดวก

---

## 📌 Phase 3: พัฒนา REST API ฝั่ง Backend (NestJS Endpoints)
*เป้าหมาย: สร้าง Endpoint สำหรับดึงข้อมูล และรับข้อมูลจากผู้เยี่ยมชม*

- [ ] **3.1 Profile Module & Skills Module**
  - สร้าง module/controller/service ด้วย CLI
  - `GET /api/profile` : ดึงข้อมูลประวัติส่วนตัว
  - `GET /api/skills` : ดึงรายการทักษะทั้งหมด (จัดกลุ่มตามหมวดหมู่ได้)
- [ ] **3.2 Projects Module**
  - `GET /api/projects` : ดึงรายการโปรเจกต์ทั้งหมด (รองรับ filter `featured`)
  - `GET /api/projects/:id` หรือ `:slug` : ดึงรายละเอียดโปรเจกต์รายตัว
- [ ] **3.3 Contact Module พร้อม Data Validation**
  - ติดตั้ง `class-validator` และ `class-transformer`
  - สร้าง DTO: `CreateContactMessageDto` (เช็ค email format, ความยาวข้อความ)
  - `POST /api/contact` : บันทึกข้อความและส่ง Response กลับ
- [ ] **3.4 การตั้งค่าระบบกลาง (Global Configuration)**
  - เปิดใช้งาน **CORS** เพื่อให้ Next.js สามารถเรียก API ได้ข้าม Port
  - ตั้งค่า **Global ValidationPipe** เพื่อตรวจสอบ DTO อัตโนมัติ
  - กำหนด Global Prefix เป็น `/api/v1`

---

## 📌 Phase 4: เริ่มต้น Frontend ด้วย Next.js (portfolio-web)
*เป้าหมาย: วางโครงสร้างเว็บและดีไซน์ UI ที่สวยงาม ทันสมัย*

- [ ] **4.1 สร้างโปรเจกต์ Next.js ใน `portfolio-web`**
  - ติดตั้ง Next.js (App Router, TypeScript, Tailwind CSS, ESLint)
  - ทำความเข้าใจโครงสร้างไฟล์:
    - `app/layout.tsx` : Root Layout (Navbar, Footer, Font, Theme)
    - `app/page.tsx` : หน้า Home Page หลัก
    - `app/globals.css` : สไตล์และ Design Tokens
- [ ] **4.2 วางระบบ Design System & Components พื้นฐาน**
  - กำหนดชุดสี Modern Dark Mode หรือ Elegant Theme
  - สร้าง Component พื้นฐาน:
    - `Navbar` : แถบเมนู มีปุ่มสลับธีม และ Smooth Scroll Link
    - `Footer` : ข้อมูลลิขสิทธิ์ และ Social Links
    - `ProjectCard` : การ์ดแสดงผลงานพร้อม Effect Hover
    - `SkillBadge` : แสดงทักษะพร้อมไอคอน
    - `Button` : ปุ่มกดมาตรฐานพร้อม Micro-interaction
- [ ] **4.3 สร้าง Section ต่างๆ ของหน้า Portfolio**
  - **Hero Section**: ข้อความทักทาย, ตำแหน่ง, ปุ่มดาวน์โหลด Resume & ติดต่อ
  - **About Section**: แนะนำตัวและประสบการณ์ทำงาน (Timeline)
  - **Skills Section**: แสดงทักษะแยกตามกลุ่ม (Frontend / Backend / DevOps / Tools)
  - **Projects Section**: แสดงผลงานเด่น พร้อมลิงก์ GitHub และ Live Demo
  - **Contact Section**: แบบฟอร์มติดต่อ (ชื่อ, อีเมล, ข้อความ)

---

## 📌 Phase 5: เชื่อมต่อ Frontend เข้ากับ Backend (Integration)
*เป้าหมาย: นำข้อมูลจาก PostgreSQL ผ่าน NestJS มาแสดงบน Next.js แบบ Real Data*

- [ ] **5.1 กำหนด Types & สร้าง API Client**
  - สร้าง TypeScript Interfaces ฝั่ง Frontend ให้ตรงกับ Model จาก Backend
  - สร้าง Service Helper สำหรับ `fetch` ข้อมูล
- [ ] **5.2 เชื่อมต่อข้อมูลด้วย React Server Components (RSC)**
  - ดึงข้อมูล Profile, Skills, Projects ฝั่ง Server เพื่อความเร็วและ SEO
  - จัดการกรณี Backend ปิดอยู่ หรือเกิด Network Error อย่างนุ่มนวล
- [ ] **5.3 ทำงานกับ Client Components ใน Contact Form**
  - จัดการ State ของฟอร์ม (Form Handling)
  - ส่ง Request แบบ `POST` ไปยัง NestJS `/api/v1/contact`
  - แสดงสถานะ Loading (ปุ่มหมุน) และ Toast Notification (สำเร็จ / ผิดพลาด)

---

## 📌 Phase 6: ตกแต่งความสวยงามและการปรับปรุง (Polish & Best Practices)
*เป้าหมาย: ยกระดับ Portfolio ให้ดู Professional และพร้อมโชว์ผลงาน*

- [ ] **6.1 การใส่ Animation & Micro-interactions**
  - ใส่ Scroll Reveal Animation หรือ Smooth Fade-in
  - เติมลูกเล่น Hover Effect บนรูปภาพและปุ่มกด
- [ ] **6.2 Responsive Design**
  - ทดสอบและปรับแต่งการแสดงผลบน Mobile, Tablet และ Desktop หน้าจอใหญ่
- [ ] **6.3 SEO & Metadata**
  - ใส่ Title, Description, Favicon และ Open Graph Image สำหรับแสดงผลเวลาแชร์ลิงก์

---

## 🤝 กฎกติกาการเรียนรู้ (Hand-holding Mentorship)
1. **คุณเป็นคนลงมือทำทุกขั้นตอน**: ผมจะบอกคำสั่ง, อธิบายหลักการ, และให้โครงโค้ด
2. **ทำทีละ Checkbox**: ทำเสร็จข้อไหน เช็คถูกข้อนั้น แล้วค่อยไปข้อต่อไป
3. **ติดขัดตรงไหนถามได้ทันที**: เจอบั๊กหรือ Error ก๊อปปี้มาวางได้เลย เราจะแก้ไปด้วยกัน
