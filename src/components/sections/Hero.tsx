'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';
import { resumeData } from '@/data/resume';
import { siteConfig } from '@/data/siteConfig';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-dark-600 shadow-2xl">
              <Image
                src={resumeData.profile.avatar}
                alt={resumeData.profile.name}
                width={256}
                height={256}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/20" />
          </motion.div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-accent-primary text-lg mb-2"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {resumeData.profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-light-300 mb-8"
            >
              {resumeData.profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-dark-900 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                <Mail size={18} />
                Get in Touch
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-dark-600 text-light-100 rounded-lg hover:border-accent-primary hover:text-accent-primary transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-dark-600 text-light-100 rounded-lg hover:border-accent-primary hover:text-accent-primary transition-colors"
              >
                <Github size={18} />
                GitHub
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-light-400"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
