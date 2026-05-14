'use client';

import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { resumeData } from '@/data/resume';
import { FadeIn } from '@/components/animations';

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-accent-primary/10 rounded-lg">
              <Briefcase className="text-accent-primary" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Work Experience</h2>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-dark-600" />

          <div className="space-y-8">
            {resumeData.experiences.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 0.1}>
                <div className="relative pl-12 md:pl-20">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2 md:left-6 w-4 h-4 rounded-full border-4 border-dark-900 ${
                      exp.featured ? 'bg-accent-primary ring-2 ring-accent-primary/40' : 'bg-accent-primary'
                    }`}
                  />

                  <div
                    className={`rounded-xl border overflow-hidden transition-colors ${
                      exp.featured
                        ? 'bg-dark-800 border-accent-primary/40 shadow-[0_0_0_1px_rgba(34,211,238,0.1)]'
                        : 'bg-dark-800 border-dark-600'
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-light-100">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-light-400 text-sm">
                          <Calendar size={14} />
                          <span>
                            {exp.startDate} - {exp.endDate}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                        <span className="text-accent-primary font-medium">{exp.company}</span>
                        <div className="flex items-center gap-1 text-light-400 text-sm">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-light-200">
                            <span className="text-accent-primary mt-1.5 text-xs">&#9679;</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-10 text-light-400 text-sm md:text-base text-center md:text-left md:pl-20">
            Plus: independent consulting since 2009, alongside the FTE roles above.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
