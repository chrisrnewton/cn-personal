'use client';

import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations';

const tiles = [
  {
    headline: 'Founding marketing team member',
    detail: 'Klaviyo, pre-Series B',
  },
  {
    headline: '10x MQLs · $10M+ pipeline',
    detail: 'Head of Demand Generation, Ketch',
  },
  {
    headline: '$3M+ closed-won',
    detail: 'Marketing-sourced revenue, Ketch',
  },
  {
    headline: '6,000+ signups in 6 months',
    detail: 'PLG launch at Skedda, 20% CAC reduction',
  },
  {
    headline: 'Built Lytical',
    detail: 'Rails SaaS with Quincy AI assistant',
  },
];

export function Summary() {
  return (
    <section id="results" className="py-16 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-accent-primary text-sm uppercase tracking-widest mb-6">
            Selected results
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tiles.map((tile) => (
            <StaggerItem key={tile.headline}>
              <div className="h-full p-5 bg-dark-700 rounded-lg border border-dark-600 hover:border-accent-primary/50 transition-colors">
                <p className="text-light-100 text-lg font-semibold leading-tight mb-2">
                  {tile.headline}
                </p>
                <p className="text-light-400 text-sm leading-snug">{tile.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
