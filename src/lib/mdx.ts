import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_PATH = path.join(process.cwd(), 'src/content/blog');
const PROJECTS_PATH = path.join(process.cwd(), 'src/content/projects');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  published: boolean;
  content: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  url: string;
  category: string;
  featured: boolean;
  content: string;
}

function ensureDirectoryExists(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export function getBlogPosts(): BlogPost[] {
  ensureDirectoryExists(BLOG_PATH);

  const files = fs.readdirSync(BLOG_PATH);

  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(BLOG_PATH, file);
      const source = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(source);

      return {
        slug: file.replace('.mdx', ''),
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        author: data.author || '',
        tags: data.tags || [],
        published: data.published !== false,
        content,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getBlogPost(slug: string): BlogPost | null {
  ensureDirectoryExists(BLOG_PATH);

  const filePath = path.join(BLOG_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    author: data.author || '',
    tags: data.tags || [],
    published: data.published !== false,
    content,
  };
}

export function getProjects(): Project[] {
  ensureDirectoryExists(PROJECTS_PATH);

  const files = fs.readdirSync(PROJECTS_PATH);

  const projects = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(PROJECTS_PATH, file);
      const source = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(source);

      return {
        slug: file.replace('.mdx', ''),
        title: data.title || '',
        description: data.description || '',
        url: data.url || '',
        category: data.category || '',
        featured: data.featured || false,
        content,
      };
    });

  return projects;
}

export function getProject(slug: string): Project | null {
  ensureDirectoryExists(PROJECTS_PATH);

  const filePath = path.join(PROJECTS_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    url: data.url || '',
    category: data.category || '',
    featured: data.featured || false,
    content,
  };
}
