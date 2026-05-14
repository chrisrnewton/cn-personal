'use client';

import { TrendingUp, Sparkles, Code, Layers } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations';

const capabilities = [
  {
    icon: TrendingUp,
    title: 'Demand generation',
    body: 'Pipeline modeling, MQL/SQL definitions, attribution, ABM motion, paid + SEO + content mix. Built the engine at Klaviyo, Ketch, and Skedda.',
  },
  {
    icon: Sparkles,
    title: 'AI-native execution',
    body: 'Built Quincy (in-product AI assistant) using Claude. Active GEO/AEO experimentation. LLM-assisted research, content, and internal tooling.',
  },
  {
    icon: Code,
    title: 'Technical',
    body: 'Ship Rails code to production weekly on Lytical. Comfortable in SQL, HTML/CSS, JavaScript, and Python. Built native integrations against Google Ads, Search Console, HubSpot, Shopify, and Meta Ads APIs.',
  },
  {
    icon: Layers,
    title: 'Stack fluency',
    body: 'HubSpot admin (multiple companies), Salesforce, Google Ads (MCC operations at scale), GA4, Heap, Looker Studio, DataFeedWatch, Ahrefs, Semrush. Full list on LinkedIn.',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-accent-primary/10 rounded-lg">
              <Code className="text-accent-primary" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">How I work</h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <StaggerItem key={cap.title}>
              <div className="h-full bg-dark-800 rounded-xl border border-dark-600 p-6 hover:border-accent-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent-primary/10 rounded-lg">
                    <cap.icon className="text-accent-primary" size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-light-100">{cap.title}</h3>
                </div>
                <p className="text-light-200 leading-relaxed">{cap.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
