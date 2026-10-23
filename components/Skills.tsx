'use client';

import { Skill } from '../types';
import { Layers } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SkillsProps {
    skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
    // จัดกลุ่ม Skills ตาม Category อัตโนมัติ
    const groupedSkills = skills.reduce((acc, skill) => {
        const category = skill.category || 'General';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);

    const categories = Object.keys(groupedSkills);

    const ref = useScrollReveal();

    return (
        <section ref={ref} id="skills" className="reveal py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Tech Stack
                    </h2>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category}
                            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 transition-all hover:bg-white/[0.05]"
                        >
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {groupedSkills[category].map((skill) => (
                                    <span
                                        key={skill.id}
                                        className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 font-medium hover:text-white hover:border-indigo-400/50 transition-colors"
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
