import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Imperial Healthcare Systems</p>
          <p className="text-sm text-gray-500 mb-8">
            <strong>Effective Date:</strong> 6 Jan 2026 | <strong>Last Updated:</strong> 6 Jan 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction and Scope</h2>
              <p className="text-gray-700 leading-relaxed">
                Imperial Healthcare Systems ("Imperial," "the Company," "we," "us," or "our") is a provider of Revenue
                Cycle Management (RCM) and technology-enabled healthcare services. This Privacy Policy outlines the
                framework governing the collection, use, disclosure, and protection of Personal Information and
                Protected Health Information ("PHI") in accordance with the Health Insurance Portability and
                Accountability Act of 1996 ("HIPAA"), the Health Information Technology for Economic and Clinical Health
                Act ("HITECH"), and other applicable federal and state privacy regulations.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                This Policy applies to information processed through our websites, platforms, systems, and service
                delivery operations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Our Role as a Business Associate</h2>
              <p className="text-gray-700 leading-relaxed">
                When providing services to healthcare providers ("Clients" or "Covered Entities"), Imperial Healthcare
                Systems operates as a Business Associate as defined under HIPAA.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">In this capacity:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  PHI is accessed, used, and disclosed strictly in accordance with the applicable Business Associate
                  Agreement (BAA) executed with each Client.
                </li>
                <li>
                  Administrative, physical, and technical safeguards are implemented to preserve the confidentiality,
                  integrity, and availability of electronic PHI ("ePHI").
                </li>
                <li>
                  All data handling activities adhere to the Minimum Necessary Standard, limiting access solely to
                  information required to fulfill contractual and operational obligations.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Imperial Healthcare Systems collects and processes information across the following categories:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">a. Professional and Client Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Includes names, job titles, organization or practice names, National Provider Identifiers (NPI),
                business email addresses, and business telephone numbers provided during inquiries, onboarding, or
                account administration.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">b. Protected Health Information (PHI)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Processed exclusively on behalf of Clients for RCM operations, including patient demographics, insurance
                data, diagnosis and procedure codes, billing records, and payment information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">c. Technical and Usage Data</h3>
              <p className="text-gray-700 leading-relaxed">
                Includes IP addresses, browser types, device identifiers, and usage analytics collected via cookies or
                similar technologies to enhance platform performance, security, and reliability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Use of Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Collected information is used for the following institutional purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Execution of end-to-end Revenue Cycle Management functions, including claims submission, denial
                  resolution, and payment reconciliation.
                </li>
                <li>Delivery of analytics, reporting, and yield-optimization insights to Clients.</li>
                <li>Compliance with contractual, legal, regulatory, and audit obligations.</li>
                <li>
                  Continuous improvement of internal systems, automation, and AI-enabled workflows using de-identified
                  data in compliance with HIPAA Safe Harbor standards.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security and Institutional Safeguards</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Imperial Healthcare Systems operates under an enterprise-grade security framework designed to meet or
                exceed industry benchmarks, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Encryption:</strong> AES-256 encryption for data at rest and TLS 1.3 for data in transit.
                </li>
                <li>
                  <strong>Access Controls:</strong> Role-Based Access Control (RBAC) and Multi-Factor Authentication
                  (MFA) enforced across all systems.
                </li>
                <li>
                  <strong>Audit & Monitoring:</strong> Comprehensive audit logging and access monitoring for all PHI
                  interactions.
                </li>
                <li>
                  <strong>Workforce Governance:</strong> Mandatory annual HIPAA, data privacy, and cybersecurity
                  training for all personnel and authorized contractors.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Imperial Healthcare Systems does not sell, rent, or commercialize personal or health information.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Information may be disclosed solely under the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Authorized Payers and Clearinghouses:</strong> For claims processing and reimbursement
                  activities.
                </li>
                <li>
                  <strong>Approved Sub-Processors:</strong> Limited to vendors that have executed a BAA and satisfy
                  Imperial's security and compliance standards.
                </li>
                <li>
                  <strong>Legal and Regulatory Obligations:</strong> When required by law, court order, subpoena, or
                  government authority.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Individual Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Under HIPAA and applicable state privacy laws (including, where relevant, the California Consumer
                Privacy Act), individuals may have rights to access, amend, or request an accounting of disclosures of
                their information.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As Imperial Healthcare Systems functions as a Business Associate, such requests should generally be
                directed to the applicable healthcare provider (the Covered Entity), who maintains primary
                responsibility for responding to patient rights requests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information – Privacy & Compliance</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                For questions, concerns, or compliance-related inquiries regarding this Privacy Policy or our data
                protection practices, please contact:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900">Imperial Healthcare Systems</p>
                <p className="text-gray-700">Attn: Data Privacy & Security Office</p>
                <p className="text-gray-700">
                  Email:{" "}
                  <a href="mailto:info@imperialhealthsystems.com" className="text-brand-blue hover:underline">
                    info@imperialhealthsystems.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
