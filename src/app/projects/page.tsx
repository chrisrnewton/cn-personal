import { Metadata } from 'next';
import Link from 'next/link';
import { FolderOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { resumeData } from '@/data/resume';
import { getProjects } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Projects & Tools | Chris Newton',
  description: 'Tools and platforms I work with for SEO, marketing automation, and growth.',
};

export default function ProjectsPage() {
  const mdxProjects = getProjects();

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-accent-primary/10 rounded-lg">
              <FolderOpen className="text-accent-primary" size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Projects & Tools</h1>
          </div>
          <p className="text-light-300 text-lg">
            Tools and platforms I use for SEO, marketing automation, and driving business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.tools.map((tool) => {
            const mdxProject = mdxProjects.find((p) => p.slug === tool.id);
            const hasDetailPage = !!mdxProject;

            return (
              <div
                key={tool.id}
                className="bg-dark-800 rounded-xl border border-dark-600 p-6 hover:border-accent-primary/50 transition-all group flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-xl font-semibold text-light-100 group-hover:text-accent-primary transition-colors">
                    {tool.name}
                  </h2>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-400 hover:text-accent-primary transition-colors"
                    aria-label={`Visit ${tool.name} website`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                <p className="text-light-300 mb-6 flex-grow">{tool.description}</p>

                {hasDetailPage ? (
                  <Link
                    href={`/projects/${tool.id}`}
                    className="flex items-center gap-2 text-accent-primary hover:text-accent-hover transition-colors text-sm group/link"
                  >
                    <span>View details</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-light-400 hover:text-accent-primary transition-colors text-sm"
                  >
                    <span>Visit website</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
