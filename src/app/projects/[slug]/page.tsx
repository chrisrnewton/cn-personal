import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getProject, getProjects } from '@/lib/mdx';
import { resumeData } from '@/data/resume';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  const tool = resumeData.tools.find((t) => t.id === slug);

  if (!project && !tool) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project?.title || tool?.name} | Chris Newton`,
    description: project?.description || tool?.description,
  };
}

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-bold mt-6 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 text-light-200 leading-relaxed" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-light-200" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-light-200" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-light-200" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-accent-primary hover:text-accent-hover underline" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-accent-primary pl-4 my-4 italic text-light-300" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-dark-700 px-2 py-1 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-dark-700 p-4 rounded-lg overflow-x-auto mb-4 font-mono text-sm" {...props} />
  ),
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  const tool = resumeData.tools.find((t) => t.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-light-400 hover:text-accent-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <header className="mb-12">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            {(project.url || tool?.url) && (
              <a
                href={project.url || tool?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent-primary hover:text-accent-hover transition-colors shrink-0"
              >
                <span className="text-sm">Visit site</span>
                <ExternalLink size={16} />
              </a>
            )}
          </div>

          <p className="text-light-300 text-lg mb-4">{project.description}</p>

          {project.category && (
            <span className="inline-block px-3 py-1 bg-dark-700 rounded-full text-sm text-light-300">
              {project.category}
            </span>
          )}
        </header>

        <div className="prose prose-invert max-w-none">
          <MDXRemote source={project.content} components={components} />
        </div>
      </div>
    </article>
  );
}
