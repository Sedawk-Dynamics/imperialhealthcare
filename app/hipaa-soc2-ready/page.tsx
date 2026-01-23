import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HipaaSoc2ReadyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:bg-gray-100">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">HIPAA & SOC 2 Compliance</h1>
          <p className="text-gray-600 mb-8">Imperial Healthcare Systems</p>
          <p className="text-sm text-gray-500 mb-8">
            <strong>Compliance Status:</strong> Audit-Ready (SOC 2 Type II / HIPAA Security Rule)
          </p>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                Imperial Healthcare Systems operates at the intersection of high-scale financial performance and
                rigorous data integrity. This policy outlines our commitment to the AICPA Trust Services Criteria (SOC
                2) and the HIPAA Security & Privacy Rules, ensuring that our RCM workflows are as secure as they are
                efficient.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">A. The Five Trust Service Criteria (SOC 2)</h2>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Security</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our infrastructure is protected against unauthorized access. We utilize enterprise-grade firewalls,
                    intrusion detection systems (IDS), and 24/7 security monitoring.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Availability</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We maintain a 99.9% uptime commitment, supported by redundant cloud architecture and a documented
                    Disaster Recovery (DR) plan with aggressive RTO/RPO targets.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Processing Integrity</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every claim, denial, and payment is processed accurately and timely. Automated reconciliation loops
                    ensure no data is lost or altered during the RCM lifecycle.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Confidentiality</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Data is classified based on sensitivity. PHI is strictly isolated and accessible only to personnel
                    with a "need-to-know" via Role-Based Access Control (RBAC).
                  </p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5. Privacy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We adhere to the HIPAA Privacy Rule, ensuring patient information is used only for treatment,
                    payment, and healthcare operations (TPO) as authorized.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                B. Technical Safeguards (HIPAA & SOC 2 Alignment)
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Encryption Excellence:</strong> All data at rest is encrypted via AES-256, and all data in
                  transit is protected by TLS 1.3.
                </li>
                <li>
                  <strong>Identity Governance:</strong> We enforce Multi-Factor Authentication (MFA) and quarterly
                  access reviews for all production environments.
                </li>
                <li>
                  <strong>Auditability:</strong> Every interaction with PHI is logged in an immutable audit trail,
                  ensuring full accountability during regulatory reviews.
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 27001 Certificate Verification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As part of our commitment to international information security standards, Imperial Healthcare Systems
                is ISO/IEC 27001:2022 certified. This certification validates our Information Security Management System
                (ISMS) on a global scale.
              </p>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Verification Details:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Standard:</strong> ISO/IEC 27001:2022
                  </li>
                  <li>
                    <strong>Certificate Number:</strong> IN/24722241/5761
                  </li>
                  <li>
                    <strong>Verification Portal:</strong> International Accreditation Forum (IAF) CertSearch
                  </li>
                  <li className="flex items-start gap-2">
                    <strong className="whitespace-nowrap">Direct Verification URL:</strong>
                    <a
                      href="https://www.iafcertsearch.org/certified-entity/inAGzFkUgjuEK6iOkxVTbVRF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:underline break-all flex items-center gap-1"
                    >
                      Verify Certificate
                      <ExternalLink className="h-4 w-4 flex-shrink-0" />
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
