import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Imperial Healthcare Systems</p>
          <p className="text-sm text-gray-500 mb-8">
            <strong>Effective Date:</strong> 6 Jan 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using the website located at https://www.imperialhealthsystems.com, including any related platforms, systems, or services (collectively, the "Services"), you agree to be bound by these Terms and Conditions ("Terms"). These Terms constitute a legally binding agreement between you and Imperial Healthcare Systems ("Imperial," "Company," "we," "us," or "our").
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                If you do not agree to all of the Terms stated herein, you must not access or use the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Scope of Services</h2>
              <p className="text-gray-700 leading-relaxed">
                Imperial Healthcare Systems provides technology-enabled Revenue Cycle Management (RCM) and healthcare support services, including but not limited to claims submission, denial resolution, payment reconciliation, analytics, and operational communications. The Services are intended for use by healthcare providers ("Clients") and their authorized professional users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Role as a Business Associate</h2>
              <p className="text-gray-700 leading-relaxed">
                When Imperial processes Protected Health Information ("PHI") on behalf of a healthcare provider, it operates as a Business Associate as defined under the Health Insurance Portability and Accountability Act ("HIPAA").
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                <li>PHI is accessed, used, and disclosed strictly in accordance with the applicable Business Associate Agreement ("BAA") executed with the Client.</li>
                <li>All handling of PHI complies with HIPAA, HITECH, and applicable state privacy regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Communications, Messaging, and Consent</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">Brand Identification</h3>
              <p className="text-gray-700 leading-relaxed">
                By engaging with our Services, you acknowledge that communications may be sent on behalf of Imperial Healthcare Systems or under the relevant brand, program, or campaign through which services are delivered.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">Types of Messages</h3>
              <p className="text-gray-700 leading-relaxed">
                You may receive service-related communications including appointment scheduling, confirmations, patient health information, emergency or routine follow-ups, and other healthcare-related notifications. Communications are not sent for marketing or promotional purposes.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">Message Frequency</h3>
              <p className="text-gray-700 leading-relaxed">
                Message frequency may vary based on your interactions, preferences, and the nature of the services provided.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">Message and Data Rates</h3>
              <p className="text-gray-700 leading-relaxed">
                Standard message and data rates may apply for SMS, phone, or electronic communications. Please consult your mobile service provider for details.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">Opt-Out Instructions</h3>
              <p className="text-gray-700 leading-relaxed">
                You may opt out of receiving communications at any time by replying STOP to any message or by following the unsubscribe instructions provided in the communication.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">Support</h3>
              <p className="text-gray-700 leading-relaxed">
                For assistance or questions, contact us at info@imperialhealthsystems.com. Support is available 24/7.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Personal Information and Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Imperial respects your privacy. Personal information is never shared, sold, or disclosed to third parties for marketing or promotional purposes without explicit consent. Use of the Services is subject to our Privacy Policy, which governs the collection, use, and protection of personal information and PHI in compliance with HIPAA regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property and Proprietary Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                All content, software, platforms, automation workflows, AI-enabled systems, analytics, and documentation provided through the Services are the exclusive property of Imperial Healthcare Systems or its licensors.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Users are granted a limited, non-exclusive, non-transferable license to access the Services solely for authorized business purposes.</li>
                <li>Users may not copy, modify, distribute, reverse-engineer, decompile, or attempt to derive source code or proprietary methodologies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Security and Account Integrity</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Imperial enforces enterprise-grade security standards, including encryption, audit logging, and access controls.</li>
                <li>Users are responsible for maintaining the confidentiality of credentials and complying with security requirements such as Multi-Factor Authentication (MFA) where applicable.</li>
                <li>Unauthorized access to systems or PHI, or attempts to bypass security controls, are strictly prohibited.</li>
                <li>Clients are responsible for ensuring their personnel are appropriately trained on HIPAA and cybersecurity requirements before accessing the Services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Usage</h2>
              <p className="text-gray-700 leading-relaxed">
                Imperial may collect and use technical and usage data to maintain security, monitor performance, and improve systems. De-identified data may be used to enhance internal analytics and AI workflows in compliance with HIPAA Safe Harbor standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Imperial Healthcare Systems, including its affiliates, partners, and associates, provides RCM, analytics, benchmarking, and related technology services for operational support purposes only. Imperial does not guarantee any specific financial, reimbursement, revenue, profitability, or business outcomes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Benchmarks, analytics, projections, performance metrics, or "optics" are generated using proprietary technologies under specific assumptions and data configurations. Actual results may vary based on provider type, business operations, data quality, payer mix, regulatory requirements, and user inputs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, Imperial shall not be liable for any indirect, incidental, consequential, or special damages arising from the use of, or reliance on, the Services or outputs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                Imperial reserves the right to suspend or terminate access to the Services for any user who violates these Terms, an applicable BAA, or any federal or state law or regulation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                For questions or concerns regarding these Terms, please contact:
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
