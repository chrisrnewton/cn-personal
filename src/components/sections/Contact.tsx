'use client';

import { Mail, Linkedin, Github, Twitter, Globe } from 'lucide-react';
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
      icon: Github,
      label: 'GitHub',
      value: `github.com/${resumeData.profile.github}`,
      href: siteConfig.links.github,
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-4 bg-dark-700 rounded-xl border border-dark-600 p-5 hover:border-accent-primary/50 transition-colors group"
              >
                <div className="p-3 bg-accent-primary/10 rounded-lg group-hover:bg-accent-primary/20 transition-colors">
                  <link.icon className="text-accent-primary" size={20} />
                </div>
                <div>
                  <p className="text-light-400 text-sm">{link.label}</p>
                  <p className="text-light-100 group-hover:text-accent-primary transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Interests</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {resumeData.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 bg-dark-700 rounded-full text-light-300 border border-dark-600"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
