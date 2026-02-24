import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { BlogPostCta } from "@/components/BlogPostCta";

const SITE_URL = "https://marcosamplina.com";

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
  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !post.published) notFound();

  const postUrl = `${SITE_URL}/blog/${slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author || "Marco Samplina",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Marco Samplina",
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    url: postUrl,
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

  return (
    <>
      <article
        className="relative z-10 min-h-screen px-6 py-16 sm:py-20"
        aria-label={post.title}
        itemScope
        itemType="https://schema.org/Article"
      >
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-block text-zinc-400 text-sm transition-colors hover:text-white"
          >
            ← Volver al blog
          </Link>
          <header className="mb-10">
            <h1 className="mb-4 text-3xl font-semibold text-white sm:text-4xl" itemProp="headline">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-zinc-500 text-sm">
              {post.date && (
                <time dateTime={post.date} itemProp="datePublished">
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}
              {post.author && (
                <span itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">· {post.author}</span>
                </span>
              )}
            </div>
          </header>
          <div
            className="blog-content text-zinc-300 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_p]:mb-4 [&_p]:leading-relaxed [&_a]:text-white [&_a]:underline [&_a]:hover:no-underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4"
            itemProp="articleBody"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-14" aria-label="Preguntas frecuentes">
              <h2 className="mb-6 text-xl font-semibold text-white">
                Preguntas frecuentes sobre SEO en 2026
              </h2>
              <dl className="space-y-4">
                {post.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <dt className="mb-2 font-medium text-white">{faq.question}</dt>
                    <dd className="text-zinc-400 text-sm leading-relaxed">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {post.cta && <BlogPostCta />}
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
