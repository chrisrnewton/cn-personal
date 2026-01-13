'use client';

import { Award, ExternalLink } from 'lucide-react';
import { resumeData } from '@/data/resume';
import { FadeIn } from '@/components/animations';
import { StaggerChildren, StaggerItem } from '@/components/animations';

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-accent-primary/10 rounded-lg">
              <Award className="text-accent-primary" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Certifications</h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 gap-6">
          {resumeData.certifications.map((cert, index) => (
            <StaggerItem key={index}>
              <div className="bg-dark-800 rounded-xl border border-dark-600 p-6 hover:border-accent-primary/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-light-100 mb-2">{cert.name}</h3>
                    <p className="text-accent-primary">{cert.issuer}</p>
                    {cert.date && (
                      <p className="text-light-400 text-sm mt-2">{cert.date}</p>
                    )}
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-400 hover:text-accent-primary transition-colors shrink-0"
                      aria-label={`View ${cert.name} certificate`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
