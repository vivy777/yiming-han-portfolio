import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import PostHeader from "@/components/blog/PostHeader";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post || !post.published) notFound();

  return (
    <article>
      <PostHeader post={post} />
      <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-code:before:content-none prose-code:after:content-none prose-code:bg-neutral-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-700 prose-table:border-collapse prose-th:border prose-th:border-neutral-700 prose-th:px-3 prose-th:py-2 prose-td:border prose-td:border-neutral-700 prose-td:px-3 prose-td:py-2 prose-figcaption:text-center prose-figcaption:text-xs prose-figcaption:text-neutral-500 prose-figcaption:mt-1 prose-figcaption:italic">
        <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </div>
    </article>
  );
}
