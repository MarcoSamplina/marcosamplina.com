import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPostFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  published: boolean;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  faqs?: BlogPostFAQ[];
  cta?: boolean;
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, "");
}

export function getPosts(): Omit<BlogPost, "content">[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const posts = files
    .map((filename) => {
      const fullPath = path.join(BLOG_DIR, filename);
      const raw = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(raw);
      if (data.published === false) return null;
      return {
        slug: getSlugFromFilename(filename),
        title: data.title ?? "",
        date: data.date ?? "",
        description: data.description ?? "",
        author: data.author ?? "",
        published: data.published !== false,
      };
    })
    .filter(Boolean) as Omit<BlogPost, "content">[];
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  const faqs = Array.isArray(data.faqs)
    ? (data.faqs as BlogPostFAQ[]).filter(
        (f) => f && typeof f.question === "string" && typeof f.answer === "string"
      )
    : undefined;

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    description: data.description ?? "",
    author: data.author ?? "",
    published: data.published !== false,
    content,
    metaTitle: typeof data.metaTitle === "string" ? data.metaTitle : undefined,
    metaDescription: typeof data.metaDescription === "string" ? data.metaDescription : undefined,
    faqs: faqs?.length ? faqs : undefined,
    cta: data.cta === true,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => getSlugFromFilename(f));
}
