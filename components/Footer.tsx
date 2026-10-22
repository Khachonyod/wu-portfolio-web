import { Mail } from 'lucide-react';

// SVG Component สำหรับ GitHub Icon
function GithubIcon({ className = 'w-5 h-5' }: { className?: string }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
    );
}

// SVG Component สำหรับ LinkedIn Icon
function LinkedinIcon({ className = 'w-5 h-5' }: { className?: string }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.55a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
        </svg>
    );
}

interface FooterProps {
    email?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    name?: string;
}

export default function Footer({ email, githubUrl, linkedinUrl, name }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 py-12 bg-[#08080c]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-gray-400 text-sm">
                    © {currentYear} {name || 'Portfolio'}. All rights reserved.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/50 hover:bg-white/10 transition-all"
                        >
                            <GithubIcon className="w-5 h-5" />
                        </a>
                    )}
                    {linkedinUrl && (
                        <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/50 hover:bg-white/10 transition-all"
                        >
                            <LinkedinIcon className="w-5 h-5" />
                        </a>
                    )}
                    {email && (
                        <a
                            href={`mailto:${email}`}
                            aria-label="Send Email"
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/50 hover:bg-white/10 transition-all"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>
        </footer>
    );
}
