import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import FlowingGallery from "@/components/ui/FlowingGallery";

const badges = [
  { label: "CompTIA Security+", emoji: "🔐", bg: "bg-red-900/40", border: "border-red-700/50", text: "text-red-300" },
  { label: "CompTIA Network+", emoji: "🌐", bg: "bg-blue-900/40", border: "border-blue-700/50", text: "text-blue-300" },
  { label: "Honours Graduate · RRC Polytech", emoji: "🎓", bg: "bg-purple-900/40", border: "border-purple-700/50", text: "text-purple-300" },
  { label: "Winnipeg, CA", emoji: "📍", bg: "bg-green-900/40", border: "border-green-700/50", text: "text-green-300" },
];

const techStack = [
  { label: "Windows Server / AD / GPO", color: "bg-blue-900/30 border-blue-700/40 text-blue-300" },
  { label: "Linux", color: "bg-orange-900/30 border-orange-700/40 text-orange-300" },
  { label: "Python", color: "bg-yellow-900/30 border-yellow-700/40 text-yellow-300" },
  { label: "PowerShell", color: "bg-sky-900/30 border-sky-700/40 text-sky-300" },
  { label: "JavaScript", color: "bg-yellow-900/30 border-yellow-700/40 text-yellow-300" },
  { label: "PHP", color: "bg-purple-900/30 border-purple-700/40 text-purple-300" },
  { label: "SQL", color: "bg-cyan-900/30 border-cyan-700/40 text-cyan-300" },
  { label: "Cisco Packet Tracer", color: "bg-teal-900/30 border-teal-700/40 text-teal-300" },
  { label: "Wireshark", color: "bg-indigo-900/30 border-indigo-700/40 text-indigo-300" },
];

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-10">

      {/* ── Header ── */}
      <section>
        <p className="text-neutral-600 text-xs font-mono mb-2"># README.md</p>
        <h1 className="text-3xl font-bold font-mono mb-1">
          <span className="text-yellow-400">👋</span>{" "}
          Hi, I&apos;m <span className="text-blue-400">Yiming Han</span>
        </h1>
        <p className="text-neutral-500 text-sm font-mono mb-5">
          <span className="text-neutral-600">//</span> Aspiring IT Professional · RRC Polytech · Winnipeg, CA
        </p>

        {/* Status badges */}
        <div className="flex flex-wrap gap-2">
          {badges.map(({ label, emoji, bg, border, text }) => (
            <span
              key={label}
              className={`inline-flex items-center gap-1.5 ${bg} border ${border} ${text} text-xs px-2.5 py-1 rounded-full font-medium`}
            >
              {emoji} {label}
            </span>
          ))}
        </div>
      </section>

      {/* ── Flowing Gallery ── */}
      <FlowingGallery />

      {/* ── About ── */}
      <section className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
        <p className="text-blue-400 font-mono text-xs mb-4">## About Me</p>
        <ul className="space-y-2.5 text-sm text-neutral-300 leading-relaxed">
          <li>
            <span className="text-neutral-500 font-mono mr-2">🌏</span>
            Global background — studied at <span className="text-neutral-100">Federation University Australia</span>, now based in <span className="text-neutral-100">Canada</span>
          </li>
          <li>
            <span className="text-neutral-500 font-mono mr-2">🔒</span>
            Focused on{" "}
            <span className="text-blue-400">cybersecurity</span>,{" "}
            <span className="text-blue-400">network infrastructure</span>, and{" "}
            <span className="text-blue-400">IT support</span>
          </li>
          <li>
            <span className="text-neutral-500 font-mono mr-2">💻</span>
            Building with{" "}
            <code className="text-green-400 bg-green-900/20 px-1 rounded text-xs">Python</code>{" "}
            <code className="text-green-400 bg-green-900/20 px-1 rounded text-xs">PowerShell</code>{" "}
            and full-stack web tech
          </li>
          <li>
            <span className="text-neutral-500 font-mono mr-2">🚀</span>
            Open to <span className="text-neutral-100">IT Support</span>, <span className="text-neutral-100">Junior Network</span>, or <span className="text-neutral-100">Security</span> roles · on-site / hybrid / remote
          </li>
        </ul>
      </section>

      {/* ── Tech Stack ── */}
      <section>
        <p className="text-blue-400 font-mono text-xs mb-3">## 🛠️ Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map(({ label, color }) => (
            <span
              key={label}
              className={`inline-block border text-xs px-2.5 py-1 rounded font-mono ${color}`}
            >
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* ── Connect ── */}
      <section>
        <p className="text-blue-400 font-mono text-xs mb-3">## 📫 Connect</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/vivy777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-300 text-xs px-3 py-1.5 rounded font-mono transition-colors"
          >
            ⬡ github.com/vivy777
          </a>
          <a
            href="https://www.linkedin.com/in/yiminghan-ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-900/30 hover:bg-blue-900/50 border border-blue-700/50 text-blue-300 text-xs px-3 py-1.5 rounded font-mono transition-colors"
          >
            in linkedin.com/in/yiminghan-ca
          </a>
        </div>
      </section>

      {/* ── Recent Posts ── */}
      {recentPosts.length > 0 && (
        <section className="border-t border-neutral-800 pt-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-blue-400 font-mono text-xs">## 📝 Recent Posts</p>
            <Link href="/blog" className="text-xs text-neutral-500 hover:text-blue-400 font-mono transition-colors">
              view all →
            </Link>
          </div>
          <div className="space-y-3">
            {recentPosts.map((post) => (
              <div key={post.slug} className="flex items-baseline justify-between gap-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-neutral-400 hover:text-blue-400 transition-colors text-sm font-mono truncate"
                >
                  <span className="text-neutral-600 mr-2">→</span>{post.title}
                </Link>
                <time className="text-xs text-neutral-600 shrink-0 font-mono">
                  {formatDate(post.date)}
                </time>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
