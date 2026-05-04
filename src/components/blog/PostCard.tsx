import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Post } from "@/types";
import Tag from "@/components/ui/Tag";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="border border-neutral-800 bg-neutral-900/30 rounded-lg p-5 hover:border-neutral-700 transition-colors">
      <p className="text-blue-400 font-mono text-xs mb-1.5">## blog</p>
      <div className="flex items-center gap-3 text-xs text-neutral-600 font-mono mb-2">
        <time>{formatDate(post.date)}</time>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h2 className="text-base font-semibold font-mono text-neutral-100 mb-2">
        <Link href={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors">
          <span className="text-neutral-600 mr-2">→</span>{post.title}
        </Link>
      </h2>
      <p className="text-neutral-400 text-sm leading-relaxed mb-3">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </article>
  );
}
