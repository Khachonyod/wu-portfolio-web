import { Profile, Skill, Project, Experience } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1';

// ฟังก์ชันดึง Profile
export async function getProfile(): Promise<Profile | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/profile`, { cache: 'no-store' });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        console.error('Failed to fetch profile:', error);
        return null;
    }
}

// ฟังก์ชันดึง Skills
export async function getSkills(): Promise<Skill[]> {
    try {
        const res = await fetch(`${API_BASE_URL}/skills`, { cache: 'no-store' });
        if (!res.ok) return [];
        return res.json();
    } catch (error) {
        console.error('Failed to fetch skills:', error);
        return [];
    }
}

// ฟังก์ชันดึง Projects
export async function getProjects(): Promise<Project[]> {
    try {
        const res = await fetch(`${API_BASE_URL}/projects`, { cache: 'no-store' });
        if (!res.ok) return [];
        return res.json();
    } catch (error) {
        console.error('Failed to fetch projects:', error);
        return [];
    }
}

// ฟังก์ชันดึง Experiences
export async function getExperiences(): Promise<Experience[]> {
    try {
        const res = await fetch(`${API_BASE_URL}/experiences`, { cache: 'no-store' });
        if (!res.ok) return [];
        return res.json();
    } catch (error) {
        console.error('Failed to fetch experiences:', error);
        return [];
    }
}

// ฟังก์ชันส่งข้อความ Contact Form (Client-Side)
export async function sendContactMessage(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    const result = await res.json();
    if (!res.ok) {
        throw new Error(result.message || 'ส่งข้อความไม่สำเร็จ');
    }
    return result;
}
