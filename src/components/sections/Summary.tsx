'use client';

import { FileText } from 'lucide-react';
import { resumeData } from '@/data/resume';
import { FadeIn } from '@/components/animations';
import { StaggerChildren, StaggerItem } from '@/components/animations';

export function Summary() {
  return (
    <section id="summary" className="py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-accent-primary/10 rounded-lg">
              <FileText className="text-accent-primary" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{resumeData.summary.title}</h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid gap-4">
          {resumeData.summary.content.map((item, index) => (
            <StaggerItem key={index}>
              <div className="flex items-start gap-4 p-4 bg-dark-700 rounded-lg border border-dark-600 hover:border-accent-primary/50 transition-colors">
                <span className="text-accent-primary mt-1">&#9679;</span>
                <p className="text-light-200">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
