import { ArrowDown, Download, Send, Sparkles } from 'lucide-react';
import { Profile } from '../types';

interface HeroProps {
    profile: Profile | null;
}

export default function Hero({ profile }: HeroProps) {
    const name = profile?.name || 'Your Name';
    const title = profile?.title || 'Full-Stack Developer';
    const bio =
        profile?.bio ||
        'หลงใหลในการพัฒนา Web Applications ที่มีประสิทธิภาพสูง สวยงาม และใช้งานง่าย';
    const avatarUrl =
        profile?.avatarUrl ||
        'https://6ad82a8ad9feb8b36628ecea.imgix.net/scooter.jpg?auto=format&fit=fill&w=384';

    return (
        <section id="about" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Name & Title */}
            <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                <div className="relative mb-8 group">
                    <img
                        src={avatarUrl}
                        alt={name}
                        className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-2 border-white/20 shadow-2xl"
                    />
                </div>

                {/* Name & Title */}
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
                    {' '}
                    <span className="text-white">
                        {name}
                    </span>
                </h1>

                <p className="text-lg sm:text-2xl font-medium text-gray-300 mb-6">
                    {title}
                </p>

                {/* Bio */}
                <p className="text-base sm:text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
                    {bio}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D21312] hover:bg-[#F15A59] text-white font-medium shadow-lg shadow-[#ED2B2A     ] transition-all hover:scale-105 active:scale-95"
                    >
                        <span>See My Work</span>
                        <ArrowDown className="w-4 h-4" />
                    </a>

                    {profile?.resumeUrl && (
                        <a
                            href={profile.resumeUrl}
                            download="Khachonyod_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
                        >
                            <Download className="w-4 h-4 text-gray-400" />
                            <span>Download Resume</span>
                        </a>
                    )}

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
                    >
                        <Send className="w-4 h-4 text-[#F15A59]" />
                        <span>Contact</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
