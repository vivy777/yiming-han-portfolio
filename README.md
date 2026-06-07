# Yiming Han — Personal Blog & Portfolio

A personal website for presenting my IT and cybersecurity background, certifications,
education, experience, selected projects, and technical writing.

Live site: [yiminghan.ca](https://yiminghan.ca)

## Features

- Static portfolio pages for skills, certifications, education, experience, and projects
- Markdown-based blog with frontmatter, reading-time estimates, and GFM support
- Statically generated article routes
- Client-side PDF previews for professional certificates
- Responsive photo galleries and a homepage image marquee
- Vercel Analytics integration

## Stack

- Next.js 14 App Router
- React 18 and TypeScript
- Tailwind CSS
- Markdown, `gray-matter`, `next-mdx-remote`, and `remark-gfm`
- `pdfjs-dist`
- Vercel Analytics

The site intentionally uses local files instead of a database or CMS. Portfolio data
lives in `src/data`, and blog posts live in `content/posts`.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful commands:

```bash
npm run lint
npm run build
npm run start
```

## Adding a Blog Post

Create a Markdown file in `content/posts`:

```yaml
---
title: "Post title"
date: "2026-06-06"
tags: ["security", "networking"]
excerpt: "A short description."
published: true
---
```

The filename becomes the URL slug. For example, `network-notes.md` is published at
`/blog/network-notes`.
