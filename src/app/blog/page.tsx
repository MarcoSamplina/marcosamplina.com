import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Marco Samplina",
  description:
    "Artículos sobre marketing digital, SEO, herramientas y estrategia. Marco Samplina.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <section
      className="relative z-10 min-h-screen px-6 py-16 sm:py-20"
      aria-label="Blog"
    >
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
          Blog
        </h1>
        <p className="mb-12 max-w-xl text-zinc-400 text-sm md:text-base">
          Guías, reflexiones y novedades sobre marketing digital, SEO y
          herramientas.
        </p>

        {posts.length === 0 ? (
          <p className="text-zinc-500">Aún no hay entradas publicadas.</p>
        ) : (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
                >
                  {post.date && (
                    <time
                      dateTime={post.date}
                      className="mb-2 block text-zinc-500 text-xs uppercase tracking-wider"
                    >
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                  <h2 className="mb-3 font-semibold text-white group-hover:text-white/95">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="mt-auto text-zinc-400 text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 group-hover:text-white">
                    Leer artículo
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
