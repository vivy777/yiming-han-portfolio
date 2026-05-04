import PdfPreview from "@/components/skills/PdfPreview";

interface CertCardProps {
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  score?: string;
  pdfPath: string;
}

export default function CertCard({ title, issuer, issued, expires, score, pdfPath }: CertCardProps) {
  return (
    <div className="border border-neutral-800 bg-neutral-900/30 rounded-lg overflow-hidden">
      <div className="px-5 py-4 border-b border-neutral-800">
        <p className="text-blue-400 font-mono text-xs mb-1.5">## cert</p>
        <h3 className="font-semibold text-neutral-100 font-mono mb-1">{title}</h3>
        <code className="text-green-400 bg-green-900/20 px-1.5 py-0.5 rounded text-xs inline-block">{issuer}</code>
        <div className="flex items-center gap-4 mt-2">
          <p className="text-xs text-neutral-600 font-mono">
            issued: {issued}{expires ? ` · expires: ${expires}` : ""}
          </p>
          {score && (
            <span className="inline-flex items-center gap-1 bg-yellow-900/30 border border-yellow-700/50 text-yellow-300 text-xs px-2 py-0.5 rounded font-mono">
              🏆 {score}
            </span>
          )}
        </div>
      </div>
      <div className="p-3">
        <PdfPreview title={title} pdfPath={pdfPath} />
      </div>
    </div>
  );
}
