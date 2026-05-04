export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-24">
      <div className="max-w-2xl mx-auto px-4 py-8 flex items-center justify-between text-sm text-neutral-500">
        <span>© {new Date().getFullYear()} Yiming Han</span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vivy777"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yiminghan-ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-200 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
