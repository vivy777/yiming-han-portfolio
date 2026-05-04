export interface PostFrontmatter {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  published: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
  readingTime: string;
}

export interface PostWithContent extends Post {
  content: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  event?: string;
  photos?: string[];
  bullets: string[];
}
