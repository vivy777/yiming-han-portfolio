import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { Post, PostWithContent } from "@/types";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const frontmatter = data as Post;

      if (!frontmatter.published) return null;

      return {
        slug,
        title: frontmatter.title,
        date: frontmatter.date,
        tags: frontmatter.tags ?? [],
        excerpt: frontmatter.excerpt ?? "",
        published: frontmatter.published,
        readingTime: readingTime(content).text,
      } satisfies Post;
    })
    .filter((p): p is NonNullable<typeof p> => p !== null);

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): PostWithContent | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as Post;

  return {
    slug,
    title: frontmatter.title,
    date: frontmatter.date,
    tags: frontmatter.tags ?? [],
    excerpt: frontmatter.excerpt ?? "",
    published: frontmatter.published,
    readingTime: readingTime(content).text,
    content,
  };
}
