'use client';

import { motion } from 'framer-motion';
import { Code, TrendingUp, Layers } from 'lucide-react';
import { resumeData } from '@/data/resume';
import { FadeIn } from '@/components/animations';

const categoryIcons = {
  technical: Code,
  marketing: TrendingUp,
  platforms: Layers,
};

const categoryLabels = {
  technical: 'Technical Skills',
  marketing: 'Marketing Skills',
  platforms: 'Platforms & Tools',
};

export function Skills() {
  const groupedSkills = resumeData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof resumeData.skills>);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-accent-primary/10 rounded-lg">
              <Code className="text-accent-primary" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Skills & Proficiency</h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {(Object.keys(groupedSkills) as Array<keyof typeof categoryIcons>).map((category, catIndex) => {
            const Icon = categoryIcons[category];
            return (
              <FadeIn key={category} delay={catIndex * 0.2}>
                <div className="bg-dark-800 rounded-xl border border-dark-600 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="text-accent-primary" size={20} />
                    <h3 className="text-lg font-semibold">{categoryLabels[category]}</h3>
                  </div>

                  <div className="space-y-4">
                    {groupedSkills[category].map((skill, index) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-light-200">{skill.name}</span>
                          <span className="text-light-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: index * 0.1,
                              ease: [0.25, 0.4, 0.25, 1],
                            }}
                            className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
