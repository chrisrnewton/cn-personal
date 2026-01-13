import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { getBlogPosts } from '@/lib/mdx';
import readingTime from 'reading-time';

export const metadata: Metadata = {
  title: 'Blog | Chris Newton',
  description: 'Thoughts on SEO, digital marketing, and building great products.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-accent-primary/10 rounded-lg">
              <BookOpen className="text-accent-primary" size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Blog</h1>
          </div>
          <p className="text-light-300 text-lg">
            Thoughts on SEO, digital marketing, growth strategies, and building great products.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-light-400 text-lg mb-4">No posts yet.</p>
            <p className="text-light-300">Check back soon for new content!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => {
              const stats = readingTime(post.content);
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-dark-800 rounded-xl border border-dark-600 p-6 hover:border-accent-primary/50 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h2 className="text-xl font-semibold text-light-100 group-hover:text-accent-primary transition-colors">
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-4 text-light-400 text-sm shrink-0">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{stats.text}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-light-300 mb-4">{post.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-dark-700 rounded-full text-xs text-light-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="flex items-center gap-2 text-accent-primary text-sm group-hover:gap-3 transition-all">
                      Read more
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
