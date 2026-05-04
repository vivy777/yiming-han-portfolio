import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and posts by Yiming Han.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <PageHeader title="Blogs" subtitle="Writing on development, tools, and ideas." />
      {posts.length === 0 ? (
        <p className="text-neutral-500 font-mono text-sm">// No posts yet. Check back soon.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
