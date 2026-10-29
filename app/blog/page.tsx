import type { Metadata } from "next";
import { getDailyPosts } from "@/lib/daily";

export const metadata: Metadata = {
  title: "Writing about web & mobile development...",
  description: "Developer news from daily.dev",
};

export default async function BlogPage() {
  let posts: Awaited<ReturnType<typeof getDailyPosts>> = [];
  let failed = false;

  try {
    posts = await getDailyPosts();
  } catch {
    failed = true;
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-16 pb-16 sm:px-8">
      <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
        Writing about web & mobile development...
      </h1>
      <p className="mt-3 text-center text-[var(--muted)]">
        Latest developer news from daily.dev
      </p>

      {failed && (
        <p className="mt-16 text-center text-[var(--muted)]">
          daily.dev is unavailable right now. Try again in a little while.
        </p>
      )}

      <div className="mt-14 space-y-12">
        {posts.map((post) => (
          <article key={post.id}>
            <div className="relative mb-8 h-px bg-[var(--line)]">
              <span className="absolute top-1/2 left-0 h-[3px] w-[34%] -translate-y-1/2 bg-[var(--fg)]" />
            </div>
            {post.image && (
              <a
                href={post.permalink}
                target="_blank"
                rel="noreferrer"
                className="mb-6 block overflow-hidden rounded-2xl border border-[var(--line)] bg-white"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt=""
                  className="aspect-[16/9] w-full object-cover"
                />
              </a>
            )}
            <p className="text-sm text-[var(--muted)]">
              {post.source}
              <span className="px-2">·</span>
              {post.published}
              {post.readTime ? (
                <>
                  <span className="px-2">·</span>
                  {post.readTime} min read
                </>
              ) : null}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              <a
                href={post.permalink}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {post.title}
              </a>
            </h2>
            {post.summary && (
              <p className="mt-3 text-[var(--body)]">{post.summary}</p>
            )}
            <a
              href={post.permalink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex font-medium text-[var(--brand)]"
            >
              Read on daily.dev →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
