import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { getBlogPost, getBlogPosts } from '@/lib/mdx';
import readingTime from 'reading-time';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Chris Newton`,
    description: post.description,
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const stats = readingTime(post.content);

  return (
    <article className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-light-400 hover:text-accent-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-light-400 mb-6">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{stats.text}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-dark-700 rounded-full text-sm text-light-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          <MDXRemote source={post.content} components={components} />
        </div>
      </div>
    </article>
  );
}
