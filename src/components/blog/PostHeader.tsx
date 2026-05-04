import Tag from "@/components/ui/Tag";
import { formatDate } from "@/lib/utils";
import { Post } from "@/types";

interface PostHeaderProps {
  post: Post;
}

export default function PostHeader({ post }: PostHeaderProps) {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold text-neutral-100 mb-4">{post.title}</h1>
      <div className="flex items-center gap-3 text-sm text-neutral-500 mb-4">
        <time>{formatDate(post.date)}</time>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
}
