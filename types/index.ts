export interface Profile {
    id: string;
    name: string;
    title: string;
    bio: string;
    avatarUrl?: string;
    resumeUrl?: string;
    email: string;
    githubUrl?: string;
    linkedinUrl?: string;
}

export interface Skill {
    id: string;
    name: string;
    category: string;
    icon?: string;
    order: number;
}

export interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    coverImage?: string;
    tags: string[];
    repoUrl?: string;
    liveUrl?: string;
    featured: boolean;
    order: number;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
    description: string;
    order: number;
}
