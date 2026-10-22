import Navbar from '../components/Navbar';
import Hero from '../components/hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

import { getProfile, getSkills, getProjects, getExperiences } from '../lib/api';

export default async function HomePage() {
  // ดึงข้อมูลทั้งหมดจาก NestJS API พร้อมๆ กัน (Parallel Fetching)
  const [profile, skills, projects, experiences] = await Promise.all([
    getProfile(),
    getSkills(),
    getProjects(),
    getExperiences(),
  ]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* 1. แถบเมนูด้านบน */}
      <Navbar />

      <main className="flex-1">
        {/* 2. หน้าทักทายแรก */}
        <Hero profile={profile} />

        {/* 3. ส่วนแสดงทักษะ */}
        <Skills skills={skills} />

        {/* 4. ส่วนแสดงผลงาน */}
        <Projects projects={projects} />

        {/* 5. ส่วนแสดงประวัติการทำงาน */}
        <Experience experiences={experiences} />

        {/* 6. แบบฟอร์มส่งข้อความ */}
        <ContactForm />
      </main>

      {/* 7. แถบข้อมูลด้านล่าง */}
      <Footer
        email={profile?.email}
        githubUrl={profile?.githubUrl}
        linkedinUrl={profile?.linkedinUrl}
        name={profile?.name}
      />
    </div>
  );
}
