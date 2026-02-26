import Link from "next/link";
import type { TocEntry } from "@/lib/blog-utils";
import type { BlogPost } from "@/lib/blog";
import { BlogPostCta } from "@/components/BlogPostCta";

interface BlogPostSidebarProps {
  relatedPosts: Omit<BlogPost, "content">[];
  toc: TocEntry[];
  showCta: boolean;
}

export function BlogPostSidebar({
  relatedPosts,
  toc,
  showCta,
}: BlogPostSidebarProps) {
  return (
    <aside className="space-y-10 pl-1">
      {toc.length > 0 && (
        <nav aria-label="En esta entrada">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            En esta entrada
          </h3>
          <ul className="space-y-2 text-sm">
            {toc.map((entry) => (
              <li key={entry.id}>
                <a
                  href={`#${entry.id}`}
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  {entry.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {relatedPosts.length > 0 && (
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Entradas relacionadas
          </h3>
          <ul className="space-y-3 text-sm">
            {relatedPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showCta && <BlogPostCta />}
    </aside>
  );
}
