'use client';

import { motion } from 'framer-motion';
import { Wrench, ExternalLink } from 'lucide-react';
import { resumeData } from '@/data/resume';
import { FadeIn } from '@/components/animations';
import { StaggerChildren, StaggerItem } from '@/components/animations';

export function Tools() {
  return (
    <section id="tools" className="py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-accent-primary/10 rounded-lg">
              <Wrench className="text-accent-primary" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Tools & Expertise</h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.tools.map((tool) => (
            <StaggerItem key={tool.id}>
              <motion.a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-dark-700 rounded-xl border border-dark-600 p-6 hover:border-accent-primary/50 transition-all group h-full"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-light-100 group-hover:text-accent-primary transition-colors">
                    {tool.name}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-light-400 group-hover:text-accent-primary transition-colors"
                  />
                </div>
                <p className="text-light-300 text-sm">{tool.description}</p>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
