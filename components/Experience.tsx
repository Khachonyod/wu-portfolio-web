import { Experience as ExperienceType } from '../types';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceProps {
    experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
    // ฟังก์ชันจัดรูปแบบวันที่ให้อ่านง่าย เช่น Jan 2023
    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Work Experience
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-12">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative group">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-[#0a0a0f] group-hover:scale-125 transition-transform" />

                            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 transition-all">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-white">
                                        {exp.position}
                                    </h3>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {formatDate(exp.startDate)} – {exp.isCurrent ? 'Present' : exp.endDate ? formatDate(exp.endDate) : ''}
                                    </span>
                                </div>

                                <p className="text-indigo-300 text-sm font-medium mb-4">
                                    {exp.company}
                                </p>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
