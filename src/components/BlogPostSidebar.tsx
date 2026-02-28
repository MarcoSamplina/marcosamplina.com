import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { BlogPostCta } from "@/components/BlogPostCta";

interface BlogPostSidebarProps {
  relatedPosts: Omit<BlogPost, "content">[];
  showCta: boolean;
}

export function BlogPostSidebar({
  relatedPosts,
  showCta,
}: BlogPostSidebarProps) {
  return (
    <aside className="space-y-10 pl-1" aria-label="Recursos y CTA">
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
