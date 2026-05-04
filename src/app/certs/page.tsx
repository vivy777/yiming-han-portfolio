import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CertCard from "@/components/skills/CertCard";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Professional certifications earned by Yiming Han.",
};

export default function CertsPage() {
  return (
    <div>
      <PageHeader
        title="Certifications"
        subtitle="Professional certifications I've earned."
      />
      <div className="space-y-6">
        <CertCard
          title="CompTIA Security+ ce (SY0-701)"
          issuer="CompTIA"
          issued="Aug 2025"
          expires="Aug 2028"
          score="790 / 900"
          pdfPath="/certs/comptia-security-plus.pdf"
        />
        <CertCard
          title="CompTIA Network+ ce (N10-008)"
          issuer="CompTIA"
          issued="Mar 2026"
          expires="Mar 2029"
          score="803 / 900"
          pdfPath="/certs/comptia-network-plus.pdf"
        />
        <CertCard
          title="Certificate of Attendance"
          issuer="ISACA Winnipeg Chapter"
          issued="Apr 2026"
          pdfPath="/certs/isaca-certificate.pdf"
        />
      </div>
    </div>
  );
}
