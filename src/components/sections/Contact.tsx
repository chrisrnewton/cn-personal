'use client';

import { Mail, Linkedin, Twitter, Globe } from 'lucide-react';
import { resumeData } from '@/data/resume';
import { siteConfig } from '@/data/siteConfig';
import { FadeIn } from '@/components/animations';

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: resumeData.profile.email,
      href: `mailto:${resumeData.profile.email}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: `linkedin.com/in/${resumeData.profile.linkedin}`,
      href: siteConfig.links.linkedin,
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: `@${resumeData.profile.twitter}`,
      href: siteConfig.links.twitter,
    },
    {
      icon: Globe,
      label: 'Website',
      value: resumeData.profile.website,
      href: `https://${resumeData.profile.website}`,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-light-300 max-w-xl mx-auto">
              I&apos;m always open to discussing new opportunities, interesting projects, or just
              having a chat about SEO and digital marketing.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-4 bg-dark-700 rounded-xl border border-dark-600 p-5 hover:border-accent-primary/50 transition-colors group"
              >
                <div className="p-3 bg-accent-primary/10 rounded-lg group-hover:bg-accent-primary/20 transition-colors shrink-0">
                  <link.icon className="text-accent-primary" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-light-400 text-sm">{link.label}</p>
                  <p className="text-light-100 group-hover:text-accent-primary transition-colors truncate">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
