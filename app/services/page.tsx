"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductCarousel } from "@/components/product-carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, ChevronRight, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-brand-blue/5 via-background to-brand-orange/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-brand-blue/20 to-brand-orange/20 rounded-full backdrop-blur-sm border border-brand-blue/30 animate-fade-in-up">
              <span className="text-sm font-semibold bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">
                Comprehensive Healthcare Solutions
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance animate-fade-in-up">
              Transform Your <span className="text-brand-orange">Healthcare Operations</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              End-to-end revenue cycle management, operations support, and advanced analytics solutions designed to
              maximize efficiency and revenue.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-brand-blue hover:bg-brand-blue/90 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <a href="mailto:info@imperialhealthsystems.com?subject=Consultation%20Request%20-%20Imperial%20Healthcare%20Systems&body=Hello%20Imperial%20Healthcare%20Systems%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%20how%20your%20RCM%20solutions%20can%20help%20my%20practice.%0A%0APlease%20provide%20available%20times%20for%20a%20consultation.%0A%0AThank%20you%2C">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <ProductCarousel />

      {/* Detailed Services Section */}
      <section className="py-24 bg-gradient-to-b from-background to-brand-blue/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Comprehensive <span className="text-brand-orange">Healthcare Solutions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                End-to-end revenue cycle management, operations support, and advanced analytics solutions
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-12">
              {/* Revenue Cycle Management */}
              <Card className="border-2 border-brand-blue/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-brand-blue/10 to-brand-blue/5">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    Revenue Cycle Management
                  </CardTitle>
                  <CardDescription>Complete RCM solutions from eligibility to collections</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "Charge Entry",
                      "Coding & Auditing",
                      "Payment Posting",
                      "AR Follow-up",
                      "Denial Management",
                      "Patient Calling",
                      "Eligibility Verification",
                      "Credentialing",
                      "Reporting & Analytics",
                    ].map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg hover:bg-brand-blue/10 transition-colors duration-200"
                      >
                        <ChevronRight className="w-4 h-4 text-brand-blue flex-shrink-0" />
                        <span className="text-sm font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Healthcare Operations Support */}
              <Card className="border-2 border-brand-orange/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-brand-orange/10 to-brand-orange/5">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    Healthcare Operations Support
                  </CardTitle>
                  <CardDescription>Virtual staffing and administrative support solutions</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "Virtual Staffing",
                      "Pre-Authorization",
                      "Virtual Front Desk",
                      "Medical Records Management",
                      "Fax & Intake Operations",
                    ].map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg hover:bg-brand-orange/10 transition-colors duration-200"
                      >
                        <ChevronRight className="w-4 h-4 text-brand-orange flex-shrink-0" />
                        <span className="text-sm font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Advanced Analytics Solutions */}
              <Card className="border-2 border-brand-blue/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-brand-blue/10 to-brand-orange/10">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-brand-blue to-brand-orange rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    Advanced Analytics Solutions
                  </CardTitle>
                  <CardDescription>Expert analysis with advanced technology for predictive insights</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Predictive Denial Analytics",
                      "Automated Claim Accuracy Checker",
                      "Workflow Automation",
                      "Real-time Dashboard",
                    ].map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg hover:bg-gradient-to-r hover:from-brand-blue/10 hover:to-brand-orange/10 transition-colors duration-200"
                      >
                        <ChevronRight className="w-4 h-4 text-brand-blue flex-shrink-0" />
                        <span className="text-sm font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Why Choose <span className="text-brand-orange">Our Services</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our competitive advantage lies in our unique combination of operational excellence, skilled manpower,
                and unwavering commitment to excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "💰",
                  title: "Cost Efficiency",
                  desc: "Save up to 60% on operational costs with our affordable skilled manpower and optimized processes.",
                },
                {
                  icon: "🤖",
                  title: "Expert-Driven Systems",
                  desc: "Our specialized team uses advanced tools for predictive analytics, automated claim checking, and real-time insights.",
                },
                {
                  icon: "🎯",
                  title: "Zero-Error Commitment",
                  desc: "99% clean claim rate achieved through rigorous quality checks and expert oversight.",
                },
                {
                  icon: "🏆",
                  title: "10+ Years US RCM Expertise",
                  desc: "Deep understanding of US healthcare regulations, payer requirements, and best practices.",
                },
                {
                  icon: "👥",
                  title: "Skilled Manpower",
                  desc: "Certified RCM professionals trained in US healthcare operations and compliance.",
                },
                {
                  icon: "🔍",
                  title: "Transparency",
                  desc: "Real-time dashboards, detailed reporting, and complete visibility into your operations.",
                },
                {
                  icon: "📊",
                  title: "Measurable Outcomes",
                  desc: "Track improvements in clean claim rates, AR days, denial rates, and collections.",
                },
                {
                  icon: "🤝",
                  title: "Reliability & Integrity",
                  desc: "Built on Imperial values of accountability, reliability, and excellence in every interaction.",
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="border-2 border-brand-blue/10 hover:border-brand-blue/30 transition-all duration-300 hover:scale-105 text-center"
                >
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-blue to-brand-blue/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how Imperial Healthcare Systems can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" className="bg-white text-brand-blue hover:bg-gray-100">
                <a href="mailto:info@imperialhealthsystems.com">Schedule a Demo</a>
              </Button>
              {/* <Button
                asChild
                onClick={() => (window.location.href = "mailto:info@imperialhealthsystems.com")}
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <a href="mailto:info@imperialhealthsystems.com">Contact Sales</a>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* Removed ContactFormModal as it is no longer needed */}
    </div>
  )
}
