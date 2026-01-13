'use client';

import { GraduationCap, Calendar } from 'lucide-react';
import { resumeData } from '@/data/resume';
import { FadeIn } from '@/components/animations';
import { StaggerChildren, StaggerItem } from '@/components/animations';

export function Education() {
  return (
    <section id="education" className="py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-accent-primary/10 rounded-lg">
              <GraduationCap className="text-accent-primary" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-3 gap-6">
          {resumeData.education.map((edu, index) => (
            <StaggerItem key={index}>
              <div className="bg-dark-700 rounded-xl border border-dark-600 p-6 hover:border-accent-primary/50 transition-colors h-full">
                <h3 className="text-xl font-semibold text-light-100 mb-2">{edu.degree}</h3>
                <p className="text-accent-primary mb-4">{edu.institution}</p>
                <div className="flex items-center gap-2 text-light-400 text-sm">
                  <Calendar size={14} />
                  <span>{edu.startDate} - {edu.endDate}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
