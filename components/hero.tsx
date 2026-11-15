'use client';

import { useState } from 'react';
import {
    CheckCircle2,
    MapPin,
    Mail,
    Code2,
    ArrowUpRight,
    Share2,
    Check,
    Download,
    FileText,
    Send,
    User
} from 'lucide-react';
import { Profile } from '../types';

interface HeroProps {
    profile: Profile | null;
}

export default function Hero({ profile }: HeroProps) {
    const name = profile?.name || 'Khachonyod';
    const title = profile?.title || 'Full-Stack Developer';
    const bio = profile?.bio || 'หลงใหลในการพัฒนา Web Applications ที่มีประสิทธิภาพสูง สวยงาม และใช้งานง่าย';
    const email = profile?.email || 'contact@example.com';
    const avatarUrl = profile?.avatarUrl || 'https://6ad82a8ad9feb8b36628ecea.imgix.net/scooter.jpg?auto=format&fit=fill&w=384';
    const githubUrl = profile?.githubUrl || 'https://github.com';
    const linkedinUrl = profile?.linkedinUrl || 'https://linkedin.com';
    const resumeUrl = profile?.resumeUrl;

    const [copied, setCopied] = useState<boolean>(false);

    // Copy profile link handler
    const handleShare = () => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    // Extract clean handle from URL
    const getGithubHandle = (url: string) => {
        try {
            const path = new URL(url).pathname.replace(/^\//, '');
            return path ? `@${path}` : '@github';
        } catch {
            return '@github';
        }
    };

    const getLinkedinHandle = (url: string) => {
        try {
            const parts = new URL(url).pathname.split('/').filter(Boolean);
            const handle = parts[parts.length - 1];
            return handle ? `@${handle}` : '@linkedin';
        } catch {
            return '@linkedin';
        }
    };

    return (
        <section id="about" className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Social Profile Card Container */}
            <div className="relative rounded-2xl bg-[#0f0f15]/90 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">

                {/* 1. Header Profile Section */}
                <div className="p-6 sm:p-8 border-b border-white/10">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

                        {/* Avatar & User Info */}
                        <div className="flex items-center gap-5 sm:gap-6">
                            {/* Avatar */}
                            <div className="relative group">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/20 shadow-xl relative">
                                    <img
                                        src={avatarUrl}
                                        alt={name}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Name, Title */}
                            <div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                        {name}
                                    </h1>
                                </div>

                                <p className="text-sm sm:text-base text-gray-400 font-medium mt-1">
                                    {title}
                                </p>
                            </div>
                        </div>

                        {/* Share Button */}
                        <div className="flex items-center gap-2 self-end sm:self-center">
                            <button
                                onClick={handleShare}
                                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-all active:scale-95"
                                title="Share / Copy Profile Link"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4 text-emerald-400" />
                                        <span className="text-emerald-400">Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Share2 className="w-4 h-4 text-gray-400" />
                                        <span>Share</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* 2. Quick Info Bar (Location, Email, Focus) */}
                <div className="px-6 py-4 sm:px-8 border-b border-white/10 bg-black/20">
                    <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-gray-300">
                        {/* Location */}
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#E9E6E7] shrink-0" />
                            <span>Bangkok, Thailand</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-[#E9E6E7] shrink-0" />
                            <a
                                href={`mailto:${email}`}
                                className="hover:text-white hover:underline transition-colors"
                            >
                                {email}
                            </a>
                        </div>

                        {/* Status / Focus */}
                        <div className="flex items-center gap-2">
                            <Code2 className="w-4 h-4 text-[#E9E6E7] shrink-0" />
                            <span>Web & Application Development</span>
                        </div>
                    </div>
                </div>

                {/* 3. แถบ About Me (Hi, I'm ...) */}
                <div className="p-6 sm:p-8 border-b border-white/10 bg-white/[0.015]">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                        <User className="w-4 h-4 text-[#AB978C]" />
                        <span>About Me</span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
                        Hi, I&apos;m {name} 👋
                    </h2>

                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl">
                        {bio}
                    </p>
                </div>

                {/* 4. Social Media Cards Grid (2x2) */}
                <div className="p-6 sm:p-8 bg-black/40">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* LinkedIn Card */}
                        {linkedinUrl && (
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-blue-500/30 transition-all duration-200"
                            >
                                <div className="flex items-center gap-3.5">
                                    <div className="w-10 h-10 rounded-lg bg-[#0077b5] flex items-center justify-center text-white font-bold text-lg shadow-md">
                                        in
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                                            LinkedIn
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            {getLinkedinHandle(linkedinUrl)}
                                        </div>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        )}

                        {/* GitHub Card */}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 transition-all duration-200"
                            >
                                <div className="flex items-center gap-3.5">
                                    <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-white shadow-md">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white group-hover:text-gray-200 transition-colors">
                                            GitHub
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            {getGithubHandle(githubUrl)}
                                        </div>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        )}

                        {/* Resume / CV Card */}
                        {resumeUrl ? (
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                download="Resume.pdf"
                                className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#AB978C]/40 transition-all duration-200"
                            >
                                <div className="flex items-center gap-3.5">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5E5653] to-[#AB978C] flex items-center justify-center text-white shadow-md">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white group-hover:text-[#AB978C] transition-colors">
                                            Resume / CV
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            Download PDF
                                        </div>
                                    </div>
                                </div>
                                <Download className="w-4 h-4 text-gray-500 group-hover:text-[#AB978C] transition-colors" />
                            </a>
                        ) : (
                            <a
                                href="#projects"
                                className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#6B7C98]/40 transition-all duration-200"
                            >
                                <div className="flex items-center gap-3.5">
                                    <div className="w-10 h-10 rounded-lg bg-[#6B7C98]/20 border border-[#6B7C98]/30 flex items-center justify-center text-[#6B7C98] shadow-md">
                                        <Code2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white group-hover:text-[#6B7C98] transition-colors">
                                            Featured Works
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            View Projects
                                        </div>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#6B7C98] transition-colors" />
                            </a>
                        )}

                        {/* Contact Card */}
                        <a
                            href="#contact"
                            className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#6B7C98]/40 transition-all duration-200"
                        >
                            <div className="flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#6B7C98] shadow-md">
                                    <Send className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-semibold text-white group-hover:text-[#6B7C98] transition-colors">
                                        Get in Touch
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        Send a Message
                                    </div>
                                </div>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>

                    </div>
                </div>

            </div>
        </section>
    );
}
