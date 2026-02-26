import type { ComponentProps } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllSlugs, getRelatedPosts } from "@/lib/blog";
import { getReadingTimeMinutes, getTableOfContents, getWordCount } from "@/lib/blog-utils";
import { BlogPostCta } from "@/components/BlogPostCta";
import { BlogPostFaq } from "@/components/BlogPostFaq";
import { BlogPostVisualBreak } from "@/components/BlogPostVisualBreak";
import { BlogCurvedLine } from "@/components/BlogCurvedLine";
import { BlogPostSidebar } from "@/components/BlogPostSidebar";

const SITE_URL = "https://marcosamplina.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/marco-samplina-cordova";
const AUTHOR_IMAGE_URL =
  "https://hpgodeemiqtbixwnzzvd.supabase.co/storage/v1/object/public/media/general/1771457705483-marco_linkedin.webp";

/** URLs del autor para schema sameAs (entidad y autoridad) */
const AUTHOR_SAME_AS = [
  "https://www.linkedin.com/in/marco-samplina-cordova",
  "https://www.instagram.com/marcotgod",
  "https://calendly.com/marco-samplina/30min",
  "https://marco-samplina.framer.website/",
  "https://tools.marcosamplina.com",
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Entrada no encontrada" };
  const title = post.metaTitle ?? `${post.title} | Blog — Marco Samplina`;
  const description = post.metaDescription ?? post.description;
  const canonical = `${SITE_URL}/blog/${slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      ...(post.image && { images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt ?? post.title }] }),
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !post.published) notFound();

  const postUrl = `${SITE_URL}/blog/${slug}`;
  const readingMinutes = getReadingTimeMinutes(post.content);
  const wordCount = getWordCount(post.content);
  const toc = getTableOfContents(post.content);
  const relatedPosts = getRelatedPosts(slug, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    inLanguage: "es",
    wordCount,
    author: {
      "@type": "Person",
      name: post.author || "Marco Samplina",
      url: LINKEDIN_URL,
      sameAs: AUTHOR_SAME_AS,
    },
    publisher: {
      "@type": "Organization",
      name: "Marco Samplina",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    url: postUrl,
    ...(post.image && {
      image: {
        "@type": "ImageObject",
        url: post.image,
        width: 1200,
        height: 630,
      },
    }),
  };

  const faqSchema =
    (post.faqs?.length ?? 0) > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: (post.faqs ?? []).map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  let h2Index = 0;
  const defaultImageAlt = post.imageAlt ?? post.title;
  const mdComponents = {
    h2: ({ children, ...props }: ComponentProps<"h2">) => {
      const id = toc[h2Index]?.id;
      h2Index += 1;
      return (
        <h2 id={id} {...props}>
          {children}
        </h2>
      );
    },
    img: ({ src, alt, ...props }: ComponentProps<"img">) => (
      <img
        src={src}
        alt={alt ?? defaultImageAlt}
        {...props}
      />
    ),
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      <article
        className="relative z-10 min-h-screen px-6 py-16 sm:py-20"
        aria-label={post.title}
      >
        <div className="mx-auto max-w-6xl">
          <Link
            href="/blog"
            className="mb-8 inline-block text-zinc-400 text-sm transition-colors hover:text-white"
          >
            ← Volver al blog
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px]">
            <div className="min-w-0">
              <header className="mb-10">
                <h1 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
                  {post.title}
                </h1>
                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-zinc-500 text-sm">
                  <span>{readingMinutes} min de lectura</span>
                  {post.date && (
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("es-ES", dateOptions)}
                    </time>
                  )}
                  {post.dateModified && post.dateModified !== post.date && (
                    <span>
                      Actualizado:{" "}
                      {new Date(post.dateModified).toLocaleDateString("es-ES", dateOptions)}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-opacity hover:opacity-90"
                    aria-label={`${post.author} en LinkedIn`}
                  >
                    <Image
                      src={AUTHOR_IMAGE_URL}
                      alt={post.author || "Marco Samplina"}
                      width={40}
                      height={40}
                      className="size-10 rounded-full object-cover border border-white/10"
                    />
                    <span className="font-medium text-white">{post.author}</span>
                  </a>
                </div>
              </header>
              <div
                className="blog-content text-zinc-300 [&_h2]:mt-10 [&_h2]:scroll-mt-24 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_p]:mb-4 [&_p]:leading-relaxed [&_a]:text-white [&_a]:underline [&_a]:hover:no-underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1 [&_img]:my-6 [&_img]:w-full [&_img]:rounded-2xl [&_img]:border [&_img]:border-white/10 [&_table]:my-8 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-white/20 [&_th]:bg-white/5 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-sm [&_th]:font-semibold [&_th]:text-white [&_td]:border [&_td]:border-white/10 [&_td]:px-4 [&_td]:py-3 [&_td]:text-sm [&_thead]:border-b [&_thead]:border-white/20"
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
                  {post.content}
                </ReactMarkdown>
              </div>

              <BlogCurvedLine />
              <BlogPostVisualBreak />

              {post.faqs && post.faqs.length > 0 && (
                <BlogPostFaq faqs={post.faqs} />
              )}
            </div>

            <aside className="lg:sticky lg:top-20 lg:z-10 lg:self-start">
              <div className="lg:max-h-[calc(100vh-5rem)] lg:overflow-y-auto lg:pr-2">
                <BlogPostSidebar
                  relatedPosts={relatedPosts}
                  toc={toc}
                  showCta={!!post.cta}
                />
              </div>
            </aside>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
