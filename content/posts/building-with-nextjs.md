---
title: "Why I Built This Blog with Next.js App Router"
date: "2026-04-20"
tags: ["nextjs", "react", "typescript"]
excerpt: "A look at the architectural decisions behind this site — why Next.js App Router, why Markdown files, and why no CMS."
published: true
---

## The Stack Decision

When I set out to build this blog, I had a few requirements:

1. **Fast** — pages should load instantly
2. **Simple** — no database to manage, no CMS to pay for
3. **Writable** — adding a post should be as easy as creating a file

Next.js 14 with the App Router fits all three. Server Components make it trivial to read Markdown files at build time and generate static pages. No API calls, no hydration overhead for content.

## Markdown Over MDX

I chose plain `.md` files over `.mdx` for one reason: simplicity. I don't need React components inside my prose. If I ever do, I can migrate one file at a time.

Each post lives in `content/posts/`. The filename is the URL slug. That's it.

## The Data Flow

```
.md file
  → gray-matter (parse frontmatter)
  → reading-time (compute read estimate)
  → next-mdx-remote (render content)
  → static HTML at build time
```

No database. No API. No auth. No maintenance.

## What I'd Change

If this blog ever grows to hundreds of posts, the `fs.readdirSync` approach might need caching. But for a personal blog, it's the right call — obvious, debuggable, zero dependencies on external services.
