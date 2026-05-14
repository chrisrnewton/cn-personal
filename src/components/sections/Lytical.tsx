'use client';

import { Sparkles, ArrowUpRight } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations';

const proofPoints = [
  'Live on the ChatGPT app store and HubSpot app marketplace',
  'Built Quincy using Claude and other LLMs for in-product analytics queries',
  'Free interactive tools driving top-of-funnel: LinkedIn Insufferability Calculator, GA4 Data Sampling Calculator, spam trigger word checker',
];

export function Lytical() {
  return (
    <section id="lytical" className="py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-accent-primary/10 rounded-lg">
              <Sparkles className="text-accent-primary" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Building Lytical</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-xl border border-accent-primary/30 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-700 p-6 md:p-10">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-3">
                <p className="text-light-200 text-base md:text-lg leading-relaxed mb-6">
                  Lytical is a privacy-first web analytics SaaS I built from scratch, on Rails,
                  Postgres, and Heroku. A practitioner-built alternative to GA4. It includes Quincy,
                  an embedded AI assistant for natural-language analytics queries, plus cookieless
                  tracking, session recordings, heatmaps, keyword rank tracking, AI search
                  visibility monitoring, and a technical SEO crawler. Shipped 10+ native
                  integrations including HubSpot, Shopify, Google Ads, Search Console, and Meta
                  Ads.
                </p>

                <a
                  href="https://lytical.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-primary to-accent-secondary text-dark-900 font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Visit lytical.ai
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="lg:col-span-2">
                <StaggerChildren className="space-y-3">
                  {proofPoints.map((point) => (
                    <StaggerItem key={point}>
                      <div className="flex items-start gap-3 text-light-200">
                        <span className="text-accent-primary mt-1.5 text-xs">&#9679;</span>
                        <span className="text-sm md:text-base leading-snug">{point}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
