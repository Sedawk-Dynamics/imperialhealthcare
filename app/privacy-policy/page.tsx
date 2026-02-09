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
                Imperial Healthcare Systems ("Imperial," "Company," "we," "us," or "our") values the privacy of its visitors, clients, and users. This Privacy Policy explains how we collect, use, disclose, and protect information when you access or use our websites, platforms, systems, and services, including www.imperialhealthsystems.com and related domains.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                This Privacy Policy applies only to online activities and information collected through our websites and services. It does not apply to information collected offline or through channels other than this website.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                This Policy is designed to comply with applicable privacy and data protection laws, including the Health Insurance Portability and Accountability Act of 1996 ("HIPAA"), the Health Information Technology for Economic and Clinical Health Act ("HITECH"), and other applicable federal and state regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Our Role as a Business Associate</h2>
              <p className="text-gray-700 leading-relaxed">
                When providing services to healthcare providers, hospitals, clinics, and medical practices ("Clients" or "Covered Entities"), Imperial Healthcare Systems operates as a Business Associate as defined under HIPAA.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">In this role:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Protected Health Information ("PHI") is accessed, used, and disclosed strictly in accordance with executed Business Associate Agreements (BAAs).
                </li>
                <li>
                  Administrative, physical, and technical safeguards are implemented to protect the confidentiality, integrity, and availability of electronic PHI ("ePHI").
                </li>
                <li>
                  Access to information is limited to the minimum necessary to perform contractual and operational obligations.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect and process the following categories of information:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">a. Professional and Client Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Names, job titles, organization or practice names, National Provider Identifiers (NPI), business email addresses, and business phone numbers submitted during inquiries, onboarding, account administration, or support interactions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">b. Protected Health Information (PHI)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                PHI is processed solely on behalf of our Clients for Revenue Cycle Management (RCM) and related healthcare operations. This may include patient demographics, insurance information, diagnosis and procedure codes, billing data, and payment records.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">c. Technical and Usage Data</h3>
              <p className="text-gray-700 leading-relaxed">
                Information such as IP addresses, browser type, device identifiers, cookies, and usage analytics collected to maintain security, improve performance, and enhance user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Use of Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Information collected by Imperial Healthcare Systems is used for legitimate business and operational purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Performing Revenue Cycle Management services such as claims submission, denial management, and payment reconciliation.
                </li>
                <li>Providing analytics, reporting, and operational insights to Clients.</li>
                <li>Maintaining compliance with contractual, legal, regulatory, and audit requirements.</li>
                <li>
                  Improving systems, automation, and AI-enabled workflows using de-identified data in compliance with HIPAA Safe Harbor standards.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Communications, Messaging, and Opt-Out</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Types of Messages</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                By providing your contact information, you may receive communications related to healthcare operations, including appointment scheduling, confirmations, patient follow-ups, and service-related notifications. Communications are not sent for marketing or promotional purposes.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Message Frequency</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Message frequency may vary depending on the nature of services or interactions. Communications may be sent daily, weekly, or as required for specific notifications.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Opt-Out Instructions</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may opt out of receiving communications at any time by following the instructions included in each message, such as replying with the word "STOP" or using the unsubscribe option where available.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Message and Data Rates</h3>
              <p className="text-gray-700 leading-relaxed">
                Standard message and data rates may apply. Please consult your mobile service provider for details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security and Safeguards</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Imperial Healthcare Systems maintains an enterprise-grade security framework, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Encryption:</strong> AES-256 encryption for data at rest and TLS 1.3 encryption for data in transit.
                </li>
                <li>
                  <strong>Access Controls:</strong> Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA).
                </li>
                <li>
                  <strong>Audit & Monitoring:</strong> Continuous monitoring and audit logging of system access.
                </li>
                <li>
                  <strong>Workforce Training:</strong> Mandatory annual HIPAA, privacy, and cybersecurity training for employees and authorized contractors.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Imperial Healthcare Systems does not sell, rent, or share personal or health information for promotional or marketing purposes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Information may be disclosed only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  To authorized payers, clearinghouses, and entities for claims processing and reimbursement.
                </li>
                <li>
                  To approved sub-processors that have executed a Business Associate Agreement and meet our security standards.
                </li>
                <li>
                  When required by law, regulation, court order, or government authority.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Opt-in data and mobile information are never shared or sold to third parties for promotional purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Individual Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Under HIPAA and applicable state privacy laws, individuals may have rights to access, amend, or request an accounting of disclosures of their information.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Because Imperial Healthcare Systems operates as a Business Associate, such requests should typically be directed to the applicable healthcare provider (the Covered Entity), which is responsible for responding to patient rights requests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Privacy Policies</h2>
              <p className="text-gray-700 leading-relaxed">
                Imperial Healthcare Systems' Privacy Policy does not apply to third-party websites or services that may be linked through our website. We encourage users to review the privacy policies of any third-party sites they visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us – Privacy & Support</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                If you have any questions, concerns, or require assistance regarding this Privacy Policy or our data protection practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <p className="font-semibold text-gray-900">Imperial Healthcare Systems</p>
                <p className="text-gray-700">Attn: Data Privacy & Security Office</p>
                <p className="text-gray-700">
                  Email:{" "}
                  <a href="mailto:info@imperialhealthsystems.com" className="text-brand-blue hover:underline">
                    info@imperialhealthsystems.com
                  </a>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed font-semibold">
                24/7 Support Available
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
