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
  /** URL de la imagen de portada (para schema y listado) */
  image?: string;
  /** Alt text de la imagen de portada */
  imageAlt?: string;
  /** Fecha de última actualización (para mostrar "Actualizado el...") */
  dateModified?: string;
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
        image: typeof data.image === "string" ? data.image : undefined,
        imageAlt: typeof data.imageAlt === "string" ? data.imageAlt : undefined,
        dateModified: typeof data.dateModified === "string" ? data.dateModified : undefined,
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
    image: typeof data.image === "string" ? data.image : undefined,
    imageAlt: typeof data.imageAlt === "string" ? data.imageAlt : undefined,
    dateModified: typeof data.dateModified === "string" ? data.dateModified : undefined,
  };
}

/** Posts relacionados (excluye el actual, por fecha, límite N) */
export function getRelatedPosts(currentSlug: string, limit = 3): Omit<BlogPost, "content">[] {
  const posts = getPosts().filter((p) => p.slug !== currentSlug);
  return posts.slice(0, limit);
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => getSlugFromFilename(f));
}
