'use client';

import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Mail, href: `mailto:${siteConfig.links.email}`, label: 'Email' },
    { icon: Linkedin, href: siteConfig.links.linkedin, label: 'LinkedIn' },
    { icon: Github, href: siteConfig.links.github, label: 'GitHub' },
    { icon: Twitter, href: siteConfig.links.twitter, label: 'Twitter' },
  ];

  return (
    <footer className="border-t border-dark-600 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="text-light-400 hover:text-accent-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          <p className="text-light-400 text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-light-400 hover:text-accent-primary transition-colors"
            aria-label="Scroll to top"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
