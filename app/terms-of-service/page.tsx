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
                By accessing or using the websites, platforms, and RCM systems (collectively, the "Services") operated
                by Imperial Healthcare Systems ("Imperial," "the Company," "we," "us," or "our"), you agree to be bound
                by these Terms of Service. These terms constitute a legally binding agreement between you and Imperial.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Scope of Services</h2>
              <p className="text-gray-700 leading-relaxed">
                Imperial provides technology-enabled Revenue Cycle Management (RCM) services, including claims
                submission, denial resolution, and payment reconciliation. Our Services are designed for use by
                healthcare providers ("Clients") and authorized professional users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Role as a Business Associate</h2>
              <p className="text-gray-700 leading-relaxed">
                Our relationship with healthcare providers is governed by the Health Insurance Portability and
                Accountability Act (HIPAA). When processing Protected Health Information (PHI) on behalf of a Client,
                Imperial acts as a Business Associate. Use of the Services is subject to the terms of the applicable
                Business Associate Agreement (BAA) executed between Imperial and the Client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property and Proprietary Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                All content, software, automation workflows, AI-enabled systems, and analytics reporting tools provided
                through the Services are the exclusive property of Imperial Healthcare Systems or its licensors.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Users are granted a limited, non-exclusive, non-transferable license to access the Services for
                  authorized business purposes only.
                </li>
                <li>
                  You may not decompile, reverse-engineer, or attempt to derive the source code of any Imperial platform
                  or system.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Security and Account Integrity</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                As an enterprise-grade provider, we enforce strict security protocols.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Access Controls:</strong> Users must maintain the confidentiality of their credentials and
                  utilize Multi-Factor Authentication (MFA) where required.
                </li>
                <li>
                  <strong>Prohibited Actions:</strong> Unauthorized access to PHI or any attempt to circumvent our
                  encryption (AES-256) or audit monitoring systems is strictly prohibited.
                </li>
                <li>
                  <strong>Workforce Compliance:</strong> Clients are responsible for ensuring their personnel have
                  completed necessary HIPAA and cybersecurity training before accessing the Services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Usage and Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your use of the Services is also governed by our Privacy Policy. We utilize technical and usage data to
                enhance platform performance and security. We may use de-identified data in compliance with HIPAA Safe
                Harbor standards to improve our internal systems and AI workflows.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Imperial Healthcare Systems provides Services to optimize healthcare yields; however, we do not
                guarantee specific financial outcomes. To the maximum extent permitted by law, Imperial shall not be
                liable for any indirect, incidental, or consequential damages arising from the use of our RCM platforms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                Imperial reserves the right to suspend or terminate access to the Services for any user who violates
                these Terms, the BAA, or any applicable federal or state regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">For inquiries regarding these Terms, please contact:</p>
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
