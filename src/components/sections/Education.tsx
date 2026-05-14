'use client';

import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { resumeData } from '@/data/resume';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations';

export function Education() {
  return (
    <section id="education" className="py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-accent-primary/10 rounded-lg">
              <GraduationCap className="text-accent-primary" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Education & Certifications</h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-light-400 text-sm uppercase tracking-widest mb-4">Education</h3>
            <StaggerChildren className="space-y-3">
              {resumeData.education.map((edu, index) => (
                <StaggerItem key={index}>
                  <div className="bg-dark-700 rounded-lg border border-dark-600 p-4 hover:border-accent-primary/50 transition-colors">
                    <p className="text-light-100 font-semibold">{edu.degree}</p>
                    <p className="text-accent-primary text-sm">{edu.institution}</p>
                    <p className="text-light-400 text-xs mt-1">
                      {edu.startDate} - {edu.endDate}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

          <div>
            <h3 className="text-light-400 text-sm uppercase tracking-widest mb-4">Certifications</h3>
            <StaggerChildren className="space-y-3">
              {resumeData.certifications.map((cert, index) => (
                <StaggerItem key={index}>
                  <div className="bg-dark-700 rounded-lg border border-dark-600 p-4 hover:border-accent-primary/50 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-light-100 font-semibold flex items-center gap-2">
                          <Award className="text-accent-primary shrink-0" size={14} />
                          {cert.name}
                        </p>
                        <p className="text-accent-primary text-sm mt-1">{cert.issuer}</p>
                        {cert.date && <p className="text-light-400 text-xs mt-1">{cert.date}</p>}
                      </div>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light-400 hover:text-accent-primary transition-colors shrink-0 mt-1"
                          aria-label={`View ${cert.name} certificate`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  );
}
