'use client';

import { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp, MapPin, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '@/data/resume';
import { FadeIn } from '@/components/animations';

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
                  <div className="absolute left-2 md:left-6 w-4 h-4 bg-accent-primary rounded-full border-4 border-dark-900" />

                  <div
                    className="bg-dark-800 rounded-xl border border-dark-600 overflow-hidden hover:border-accent-primary/50 transition-colors cursor-pointer"
                    onClick={() => toggleExpand(exp.id)}
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-light-100">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-light-400 text-sm">
                          <Calendar size={14} />
                          <span>{exp.startDate} - {exp.endDate}</span>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                        <span className="text-accent-primary font-medium">{exp.company}</span>
                        <div className="flex items-center gap-1 text-light-400 text-sm">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-light-300 mb-4">{exp.description}</p>

                      <button className="flex items-center gap-2 text-accent-primary hover:text-accent-hover transition-colors text-sm">
                        {expandedId === exp.id ? (
                          <>
                            <span>Show less</span>
                            <ChevronUp size={16} />
                          </>
                        ) : (
                          <>
                            <span>Show details</span>
                            <ChevronDown size={16} />
                          </>
                        )}
                      </button>
                    </div>

                    <AnimatePresence>
                      {expandedId === exp.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-dark-600 pt-4">
                            <ul className="space-y-2">
                              {exp.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-3 text-light-300">
                                  <span className="text-accent-primary mt-1.5 text-xs">&#9679;</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
