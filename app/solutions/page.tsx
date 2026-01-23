"use client"

import { useState, Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Shield,
  Clock,
  DollarSign,
  BarChart3,
  Target,
  Network,
  Radar,
  ShieldCheck,
  Zap,
  Search,
  Crosshair,
  RotateCw,
} from "lucide-react"
import ContactFormModal from "@/components/contact-form-modal"
import RCMAuditModal from "@/components/rcm-audit-modal"

function SolutionsPageContent() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isRCMAuditModalOpen, setIsRCMAuditModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-orange relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 animate-fade-in-up">
              <span className="text-sm font-semibold">Industry-Leading Healthcare Solutions</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance animate-fade-in-up">
              Comprehensive Solutions for Healthcare Excellence
            </h1>
            <p className="text-2xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Transform your healthcare operations with our expert-driven solutions that deliver measurable results and
              sustainable growth.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button asChild variant="secondary" className="bg-white text-brand-blue hover:bg-gray-100">
                <a href="mailto:info@imperialhealthsystems.com?subject=Consultation%20Request%20-%20Imperial%20Healthcare%20Systems&body=Hello%20Imperial%20Healthcare%20Systems%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%20how%20your%20RCM%20solutions%20can%20help%20my%20practice.%0A%0APlease%20provide%20available%20times%20for%20a%20consultation.%0A%0AThank%20you%2C">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                onClick={() => setIsContactModalOpen(true)}
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          {/* Section Headline */}
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground">
              THE PROBLEM
            </h2>
          </div>

          {/* Subheadline */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground max-w-4xl mx-auto leading-tight">
              <span className="text-brand-orange">The Invisible Tax</span>: Why US Healthcare Providers Lose Up to
              <span className="text-brand-orange font-bold"> 30%</span> of Contracted Revenue.
            </h3>
          </div>

          {/* Paragraph */}
          <div className="text-center mb-16">
            <p className="text-base md:text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              The &apos;Invisible Tax&apos; is the delta between Contractual Collections and Actual Yield. Mass-market
              firms have weaponized complexity to hide the fact that their labor-arbitrage model is incapable of
              capturing the final 10–20% of legitimate revenue. They aren&apos;t just failing to collect; they are
              actively suppressing the provider&apos;s financial potential to protect their own operational margins.
            </p>
          </div>

          {/* Problem Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Card 1 */}
            <Card className="group relative border border-gray-200/40 rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden backdrop-blur-[10px] bg-gradient-to-br from-pink-50/90 via-white/85 to-purple-50/90 hover:backdrop-blur-[16px]">
              {/* Dark translucent black layer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[rgba(0,0,0,0.60)] backdrop-blur-[14px] pointer-events-none z-[1]" />

              {/* Soft radial gradient inside card (dark gray → transparent) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[radial-gradient(ellipse_at_center,rgba(30,30,35,0.4)_0%,transparent_70%)] pointer-events-none z-[2]" />

              <CardHeader className="relative z-10">
                <div className="text-4xl mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(255,122,0,0.4)]">
                  ⚠️
                </div>
                <CardTitle className="text-xl font-bold transition-colors duration-[350ms]">
                  <span className="text-brand-orange group-hover:text-white">The Charge Leakage Abyss</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-slate-700 leading-relaxed transition-colors duration-[350ms] group-hover:text-[#E5E7EB]">
                  Most RCM companies lack robust workflow integrity. Without periodic forensic audits, millions in
                  clinical volume evaporate before they are even billed. Traditional firms ignore the gap between
                  patient visits and claim generation due to improper training and system &apos;blind spots.&apos;
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="group relative border border-gray-200/40 rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden backdrop-blur-[10px] bg-gradient-to-br from-purple-50/90 via-white/85 to-pink-50/90 hover:backdrop-blur-[16px]">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[rgba(0,0,0,0.60)] backdrop-blur-[14px] pointer-events-none z-[1]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[radial-gradient(ellipse_at_center,rgba(30,30,35,0.4)_0%,transparent_70%)] pointer-events-none z-[2]" />

              <CardHeader className="relative z-10">
                <div className="text-4xl mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(255,122,0,0.4)]">
                  📊
                </div>
                <CardTitle className="text-xl font-bold transition-colors duration-[350ms]">
                  <span className="text-brand-orange group-hover:text-white">
                    The &apos;Write-Off&apos; Culture & Abandoned AR
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-slate-700 leading-relaxed transition-colors duration-[350ms] group-hover:text-[#E5E7EB]">
                  Legacy RCM providers focus on &apos;Easy Wins&apos;—new claims. They intentionally ignore &apos;Stuck
                  AR&apos; because fighting denials is labor-intensive. Claims sit untouched for years until they hit
                  Timely Filing Limits, at which point they are quietly written off. Your revenue is sacrificed for
                  their operational speed.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="group relative border border-gray-200/40 rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden backdrop-blur-[10px] bg-gradient-to-br from-blue-50/90 via-white/85 to-purple-50/90 hover:backdrop-blur-[16px]">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[rgba(0,0,0,0.60)] backdrop-blur-[14px] pointer-events-none z-[1]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[radial-gradient(ellipse_at_center,rgba(30,30,35,0.4)_0%,transparent_70%)] pointer-events-none z-[2]" />

              <CardHeader className="relative z-10">
                <div className="text-4xl mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.4)]">
                  👁️
                </div>
                <CardTitle className="text-xl font-bold transition-colors duration-[350ms]">
                  <span className="text-brand-orange group-hover:text-white">The Denial Asymmetry</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-slate-700 leading-relaxed transition-colors duration-[350ms] group-hover:text-[#E5E7EB]">
                  Payers use AI to strategically deny 15%–50% of claims by default, betting that your billing company is
                  too automated or too passive to fight back. When technology replaces people entirely, accountability
                  vanishes, and the payer wins.
                </p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="group relative border border-gray-200/40 rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden backdrop-blur-[10px] bg-gradient-to-br from-orange-50/90 via-white/85 to-pink-50/90 hover:backdrop-blur-[16px]">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[rgba(0,0,0,0.60)] backdrop-blur-[14px] pointer-events-none z-[1]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[radial-gradient(ellipse_at_center,rgba(30,30,35,0.4)_0%,transparent_70%)] pointer-events-none z-[2]" />

              <CardHeader className="relative z-10">
                <div className="text-4xl mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(255,122,0,0.4)]">
                  ⚙️
                </div>
                <CardTitle className="text-xl font-bold transition-colors duration-[350ms]">
                  <span className="text-brand-orange group-hover:text-white">
                    The Commodity Trap: Efficiency vs. Integrity
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-slate-700 leading-relaxed transition-colors duration-[350ms] group-hover:text-[#E5E7EB]">
                  Legacy RCM models prioritize &apos;Cost-to-Collect&apos; metrics over &apos;Yield Optimization.&apos;
                  By focusing on headcount reduction rather than Claim Integrity, they trigger a cycle of high turnover
                  and zero accountability. You aren&apos;t buying a service; you&apos;re subsidizing their labor
                  arbitrage.
                </p>
              </CardContent>
            </Card>

            {/* Card 5 */}
            <Card className="group relative border border-gray-200/40 rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden backdrop-blur-[10px] bg-gradient-to-br from-teal-50/90 via-white/85 to-blue-50/90 hover:backdrop-blur-[16px]">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[rgba(0,0,0,0.60)] backdrop-blur-[14px] pointer-events-none z-[1]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[radial-gradient(ellipse_at_center,rgba(30,30,35,0.4)_0%,transparent_70%)] pointer-events-none z-[2]" />

              <CardHeader className="relative z-10">
                <div className="text-4xl mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(255,122,0,0.4)]">
                  🏥
                </div>
                <CardTitle className="text-xl font-bold transition-colors duration-[350ms]">
                  <span className="text-brand-orange group-hover:text-white">
                    Institutional Neglect: The Mid-Market Blind Spot
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-slate-700 leading-relaxed transition-colors duration-[350ms] group-hover:text-[#E5E7EB]">
                  Tier-1 RCM Companies are architected for high-revenue, high-volume outliers. This leaves
                  small-to-mid-sized healthcare providers relegated to a lower tier of service, where their unique
                  complexities are ignored in favor of a homogenized, one-size-fits-none workflow.
                </p>
              </CardContent>
            </Card>

            {/* Card 6 */}
            <Card className="group relative border border-gray-200/40 rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden backdrop-blur-[10px] bg-gradient-to-br from-indigo-50/90 via-white/85 to-blue-50/90 hover:backdrop-blur-[16px]">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[rgba(0,0,0,0.60)] backdrop-blur-[14px] pointer-events-none z-[1]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[radial-gradient(ellipse_at_center,rgba(30,30,35,0.4)_0%,transparent_70%)] pointer-events-none z-[2]" />

              <CardHeader className="relative z-10">
                <div className="text-4xl mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(255,122,0,0.4)]">
                  🔒
                </div>
                <CardTitle className="text-xl font-bold transition-colors duration-[350ms]">
                  <span className="text-brand-orange group-hover:text-white">
                    The &quot;Black Box&quot; Deficit: Radical Opacity
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-slate-700 leading-relaxed transition-colors duration-[350ms] group-hover:text-[#E5E7EB]">
                  Traditional billing operates behind a veil. This lack of real-time visibility creates a Deficit of
                  Ownership, where providers lose control over their financial data. Without transparent, real-time
                  insights, you aren&apos;t managing your revenue—you&apos;re guessing at it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* THE SOLUTION (IRRF) */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          {/* Headline */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-foreground lg:whitespace-nowrap">
              THE SOLUTION: <span className="text-brand-orange">THE IMPERIAL REVENUE RECOVERY FRAMEWORK (IRRF)</span>
            </h2>
          </div>

          {/* Subheadline */}
          <div className="text-center mb-16">
            <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground max-w-5xl mx-auto">
              Precision Infrastructure for the Modern Healthcare Enterprise
            </h3>
          </div>

          {/* SECTION 1: IRRF CORE CARDS */}
          <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-7xl mx-auto">
            {/* Card 1: THE CORE PROPOSITION */}
            <Card className="relative bg-white rounded-[20px] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden group">
              {/* Pastel Corner Accent - Pink */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 opacity-30 rounded-bl-full transition-opacity duration-300 group-hover:opacity-50" />

              {/* Hover Gradient Overlay with Radial Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/0 via-purple-50/0 to-orange-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(236,72,153,0.08),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

              <CardHeader className="relative space-y-4 p-8 transition-transform duration-300 group-hover:-translate-y-0.5">
                {/* Vibrant Icon Container with Enhanced Hover */}
                <div className="w-16 h-16 rounded-[14px] bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_12px_32px_rgba(236,72,153,0.5)]">
                  <Target className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800 transition-all duration-300 group-hover:text-slate-900">
                  THE CORE PROPOSITION
                </CardTitle>
                <p className="text-lg font-semibold text-brand-orange">
                  Where Algorithmic Precision Meets Human Advocacy
                </p>
              </CardHeader>
              <CardContent className="relative space-y-4 px-8 pb-8 pt-2">
                <p className="text-base text-slate-600 leading-relaxed">
                  The Imperial Revenue Recovery Framework (IRRF) represents a paradigm shift in financial management. We
                  replace reactive legacy processes with a proactive intelligence layer. Our engine doesn&apos;t just
                  manage your revenue; it engineers it—utilizing an advanced AI-enhanced architecture to secure the
                  Clinical EBITDA your practice deserves.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  At IHS, we don&apos;t just &apos;process&apos; claims; we exercise sovereign ownership over them. We
                  have engineered a workflow where Advanced Technology identifies the path and Expert Human Labor
                  ensures the arrival.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: THE IHS INTELLIGENCE ENGINE */}
            <Card className="relative bg-white rounded-[20px] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden group">
              {/* Pastel Corner Accent - Purple */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 opacity-30 rounded-bl-full transition-opacity duration-300 group-hover:opacity-50" />

              {/* Hover Gradient Overlay with Radial Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 via-pink-50/0 to-orange-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.08),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

              <CardHeader className="relative space-y-4 p-8 transition-transform duration-300 group-hover:-translate-y-0.5">
                {/* Vibrant Icon Container with Enhanced Hover */}
                <div className="w-16 h-16 rounded-[14px] bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_12px_32px_rgba(168,85,247,0.5)]">
                  <Network className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800 transition-all duration-300 group-hover:text-slate-900">
                  THE IHS INTELLIGENCE ENGINE
                </CardTitle>
                <p className="text-lg font-semibold text-brand-orange">Engineering Enterprise Resilience</p>
              </CardHeader>
              <CardContent className="relative space-y-4 px-8 pb-8 pt-2">
                <p className="text-base text-slate-600 leading-relaxed">
                  IHS orchestrates high-velocity revenue cycles through a proprietary fusion of specialized intelligence
                  and AI-driven infrastructure. By neutralizing the manual variances that compromise provider margins,
                  we deliver a fortified tech stack engineered for institutional scalability.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  The Sovereign Standard: At IHS, your data is a fortress; your growth is an algorithm. Technology
                  serves as the sentry, but our experienced Revenue Architects hold the final stake in every high-value
                  decision.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* SECTION 2: THE STRATEGIC INTELLIGENCE GRID */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">THE STRATEGIC INTELLIGENCE GRID</h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
                An architectural four-pillar system designed for zero-leakage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Card A: PREDICTIVE DENIAL INTELLIGENCE */}
              <Card className="relative bg-white rounded-[20px] border border-gray-100 shadow-lg transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl overflow-hidden group">
                {/* Corner accent - subtle pink/purple tint */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200/30 via-purple-200/20 to-transparent rounded-bl-[80px] pointer-events-none" />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-purple-500/0 to-orange-500/0 group-hover:from-pink-500/5 group-hover:via-purple-500/5 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none" />

                {/* Radial glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.15), transparent 70%)",
                  }}
                />

                <CardHeader className="relative z-10 p-8 pb-4 space-y-4">
                  <div className="w-14 h-14 rounded-[12px] bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_10px_30px_rgba(236,72,153,0.45)]">
                    <Radar className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 transition-all duration-300 pt-2">
                    PREDICTIVE DENIAL INTELLIGENCE
                  </CardTitle>
                  <p className="text-sm font-semibold text-brand-blue">
                    Strategic Function: Pre-Submission Safeguarding
                  </p>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4 px-8 pb-8">
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">Capability:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Leverages historical payer data and AI-enhanced modeling to identify at-risk claims with 95%
                      accuracy before submission.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">The Why:</p>
                    <p className="text-sm italic text-slate-600">
                      Stops the Denial Cycle and accelerates Cash Velocity.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Card B: ALGORITHMIC ACCURACY SCRUBBING */}
              <Card className="relative bg-white rounded-[20px] border border-gray-100 shadow-lg transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 opacity-30 rounded-bl-[80px] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-orange-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:via-orange-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15), transparent 70%)",
                  }}
                />

                <CardHeader className="relative z-10 p-8 pb-4 space-y-4">
                  <div className="w-14 h-14 rounded-[12px] bg-gradient-to-br from-purple-500 via-orange-500 to-pink-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_10px_30px_rgba(168,85,247,0.45)]">
                    <ShieldCheck className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 transition-all duration-300 pt-2">
                    ALGORITHMIC ACCURACY SCRUBBING
                  </CardTitle>
                  <p className="text-sm font-semibold text-brand-blue">Strategic Function: Integrity Engineering</p>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4 px-8 pb-8">
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">Capability:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Performs real-time, multi-layer validation against thousands of payer-specific rules and ICD-10
                      crosswalks.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">The Why:</p>
                    <p className="text-sm italic text-slate-600">Replaces human error with coded precision.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Card C: INTELLIGENCE-DRIVEN AUTOMATION */}
              <Card className="relative bg-white rounded-[20px] border border-gray-100 shadow-lg transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-pink-200 opacity-30 rounded-bl-[80px] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-orange-500/5 group-hover:via-pink-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.15), transparent 70%)",
                  }}
                />

                <CardHeader className="relative z-10 p-8 pb-4 space-y-4">
                  <div className="w-14 h-14 rounded-[12px] bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_10px_30px_rgba(249,115,22,0.45)]">
                    <Zap className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 transition-all duration-300 pt-2">
                    INTELLIGENCE-DRIVEN AUTOMATION
                  </CardTitle>
                  <p className="text-sm font-semibold text-brand-blue">Strategic Function: Operational Scalability</p>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4 px-8 pb-8">
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">Capability:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Advanced automation reduces manual intervention and human error by 70%.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">The Why:</p>
                    <p className="text-sm italic text-slate-600">Drives up to 60% operating cost reduction.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Card D: REVENUE FORENSIC AUDIT */}
              <Card className="relative bg-white rounded-[20px] border border-gray-100 shadow-lg transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 opacity-30 rounded-bl-[80px] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-orange-500/0 to-purple-500/0 group-hover:from-pink-500/5 group-hover:via-orange-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 70%)",
                  }}
                />

                <CardHeader className="relative z-10 p-8 pb-4 space-y-4">
                  <div className="w-14 h-14 rounded-[12px] bg-gradient-to-br from-pink-500 via-orange-500 to-purple-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_10px_30px_rgba(236,72,153,0.45)]">
                    <Search className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 transition-all duration-300 pt-2">
                    REVENUE FORENSIC AUDIT
                  </CardTitle>
                  <p className="text-sm font-semibold text-brand-blue">Strategic Function: Wealth Recovery</p>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4 px-8 pb-8">
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">Capability:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Continuous audit algorithms scanning historical revenue data.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">The Why:</p>
                    <p className="text-sm italic text-slate-600">Turns lost revenue into realized enterprise value.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* SECTION 3: IRRF THREE-PILLAR ARCHITECTURE */}
          <div>
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                THE IRRF THREE-PILLAR ARCHITECTURE
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
                The Zero-Leakage Architecture: Accountability at Scale
              </p>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                The IRRF operates on a foundational Three-Pillar Architecture designed to ensure no dollar is left
                behind.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Pillar 1 */}
              <Card className="relative bg-white rounded-[20px] border border-slate-200/60 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-bl-[80px] opacity-40 transition-all duration-300 group-hover:opacity-60 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/[0.02] group-hover:via-purple-500/[0.02] group-hover:to-pink-500/[0.02] transition-all duration-300 pointer-events-none rounded-[20px]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-blue-400/10 via-transparent to-transparent blur-2xl" />
                </div>

                <CardHeader className="relative p-8 pb-4 space-y-5">
                  {/* Pillar Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 w-fit">
                    <span className="text-xs font-bold text-brand-blue tracking-wider">PILLAR 1</span>
                  </div>
                  <div className="w-16 h-16 rounded-[14px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_16px_40px_rgba(59,130,246,0.5)]">
                    <Shield className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800 leading-tight transition-all duration-300 group-hover:text-slate-900">
                    THE PREDICTIVE DEFENSE LAYER (THE AI SHIELD)
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative space-y-5 px-8 pb-8">
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Technology:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      AI-enhanced pre-submission forensic scanning across millions of payer denial patterns.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Human Edge:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Senior Coding Auditors recalibrate logic weekly.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Strategic Outcome:</p>
                    <p className="text-sm font-bold text-brand-blue">99% First-Pass Clean Claim Rate.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Pillar 2 */}
              <Card className="relative bg-white rounded-[20px] border border-slate-200/60 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/30 via-pink-400/30 to-purple-400/30 rounded-bl-[80px] opacity-40 transition-all duration-300 group-hover:opacity-60 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-orange-500/[0.02] group-hover:via-pink-500/[0.02] group-hover:to-purple-500/[0.02] transition-all duration-300 pointer-events-none rounded-[20px]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-orange-400/10 via-transparent to-transparent blur-2xl" />
                </div>

                <CardHeader className="relative p-8 pb-4 space-y-5">
                  {/* Pillar Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 w-fit">
                    <span className="text-xs font-bold text-brand-orange tracking-wider">PILLAR 2</span>
                  </div>
                  <div className="w-16 h-16 rounded-[14px] bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_16px_40px_rgba(249,115,22,0.5)]">
                    <Crosshair className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800 leading-tight transition-all duration-300 group-hover:text-slate-900">
                    THE TACTICAL RESOLUTION WAR ROOM (THE HUMAN STRIKE FORCE)
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative space-y-5 px-8 pb-8">
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Technology:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      AI-driven work-queue prioritization by recovery velocity.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Human Edge:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Elite Human Advocates manage appeals and negotiations.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Strategic Outcome:</p>
                    <p className="text-sm font-bold text-brand-blue">Zero Blind Write-Off Policy.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Pillar 3 */}
              <Card className="relative bg-white rounded-[20px] border border-slate-200/60 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/30 via-blue-400/30 to-pink-400/30 rounded-bl-[80px] opacity-40 transition-all duration-300 group-hover:opacity-60 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-pink-500/0 group-hover:from-purple-500/[0.02] group-hover:via-blue-500/[0.02] group-hover:to-pink-500/[0.02] transition-all duration-300 pointer-events-none rounded-[20px]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-purple-400/10 via-transparent to-transparent blur-2xl" />
                </div>

                <CardHeader className="relative p-8 pb-4 space-y-5">
                  {/* Pillar Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 w-fit">
                    <span className="text-xs font-bold text-brand-blue tracking-wider">PILLAR 3</span>
                  </div>
                  <div className="w-16 h-16 rounded-[14px] bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_16px_40px_rgba(168,85,247,0.5)]">
                    <RotateCw className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800 leading-tight transition-all duration-300 group-hover:text-slate-900">
                    THE FORENSIC WEALTH RECOVERY LOOP (THE INTELLIGENCE CYCLE)
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative space-y-5 px-8 pb-8">
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Technology:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Continuous audit algorithms scanning historical revenue data.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Human Edge:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Forensic audit teams conduct deep clinical reviews.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Strategic Outcome:</p>
                    <p className="text-sm font-bold text-brand-blue">Up to 30% Revenue Lift.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Security section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                <span className="text-gray-900">Technology & Security: </span>
                <span className="text-brand-blue">Infrastructure That Shields and Scales</span>
              </h2>
              <p className="text-xl font-semibold text-brand-orange mb-6">
                The IHS Intelligence Protocol: Engineering Enterprise Resilience
              </p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                <span className="text-brand-blue font-semibold">IHS</span> orchestrates high-velocity revenue cycles
                through a proprietary fusion of specialized intelligence and{" "}
                <span className="text-brand-orange font-semibold">AI-driven infrastructure</span>. By neutralizing the
                manual variances that compromise provider margins, we deliver a fortified tech stack engineered for
                institutional scalability. At IHS, your{" "}
                <span className="text-brand-blue font-semibold">data is a fortress</span>; your{" "}
                <span className="text-brand-orange font-semibold">growth is an algorithm</span>.
              </p>
            </div>

            {/* Enterprise Security Architecture Table */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 px-6 py-4">
                <h3 className="text-2xl font-bold text-white text-center tracking-wide">
                  THE ENTERPRISE SECURITY ARCHITECTURE
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-6 py-4 text-left font-bold text-base tracking-wide uppercase border-r border-slate-700">
                        Data Sovereignty
                      </th>
                      <th className="px-6 py-4 text-left font-bold text-base tracking-wide uppercase border-r border-slate-700">
                        Regulatory Governance
                      </th>
                      <th className="px-6 py-4 text-left font-bold text-base tracking-wide uppercase">
                        Access Vigilance
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-5 border-r border-gray-200">
                        <span className="font-semibold text-brand-blue">256-bit AES Standards</span>
                      </td>
                      <td className="px-6 py-5 border-r border-gray-200">
                        <span className="font-semibold text-brand-orange">ISO 27001 Certified</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-semibold text-brand-blue">Multi-Factor Auth (MFA)</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50/50 hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-5 border-r border-gray-200">
                        <p className="text-gray-700">
                          Bank-grade protocols for data <span className="text-brand-blue font-medium">in transit</span>{" "}
                          and <span className="text-brand-blue font-medium">at rest</span>.
                        </p>
                      </td>
                      <td className="px-6 py-5 border-r border-gray-200">
                        <p className="text-gray-700">
                          The <span className="text-brand-orange font-medium">global benchmark</span> for information
                          security management.
                        </p>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-gray-700">
                          <span className="text-brand-blue font-medium">Zero-trust identity verification</span> for all
                          system entry points.
                        </p>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-5 border-r border-gray-200">
                        <span className="font-semibold text-brand-blue">VPN/VDI Clean Rooms</span>
                      </td>
                      <td className="px-6 py-5 border-r border-gray-200">
                        <span className="font-semibold text-brand-orange">Independent 3rd-Party Audits</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-semibold text-brand-blue">HIPAA & SOC2 Readiness</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50/50 hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-5 border-r border-gray-200">
                        <p className="text-gray-700">
                          <span className="text-brand-blue font-medium">PHI-isolated environments</span> ensuring data
                          never leaves our audited cloud.
                        </p>
                      </td>
                      <td className="px-6 py-5 border-r border-gray-200">
                        <p className="text-gray-700">
                          <span className="text-brand-orange font-medium">Continuous validation</span> of security
                          posture through external assessments.
                        </p>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-gray-700">
                          Full alignment with <span className="text-brand-blue font-medium">US Federal</span> data
                          protection mandates.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Solutions Overview */}
      <section className="py-24 bg-gradient-to-b from-white to-brand-blue/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Our <span className="text-brand-orange">Core Solutions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tailored solutions designed to address every aspect of your healthcare revenue cycle and operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <DollarSign className="w-8 h-8" />,
                  title: "Revenue Cycle Management",
                  description: "End-to-end RCM solutions that maximize collections and minimize denials",
                  features: ["99% Clean Claim Rate", "30% Revenue Increase", "50% Faster Collections"],
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Operations Support",
                  description: "Virtual staffing and administrative support to streamline your practice",
                  features: ["60% Cost Reduction", "24/7 Support", "Scalable Resources"],
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Advanced Analytics",
                  description: "Expert analysis with predictive insights to drive better decisions",
                  features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reporting"],
                },
              ].map((solution, idx) => (
                <Card
                  key={idx}
                  className="border-2 hover:border-brand-blue/50 transition-all duration-300 hover:shadow-xl group"
                >
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-orange rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Why Choose <span className="text-brand-orange">Imperial</span> Healthcare Systems?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our competitive advantage lies in our unique combination of operational excellence, skilled manpower,
                and unwavering commitment to excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: <DollarSign className="w-8 h-8" />,
                  title: "Cost Efficiency",
                  desc: "Save up to 60% on operational costs with our affordable skilled manpower and optimized processes.",
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Expert-Driven Systems",
                  desc: "Our specialized team uses advanced tools for predictive analytics, automated claim checking, and real-time insights.",
                },
                {
                  icon: <CheckCircle2 className="w-8 h-8" />,
                  title: "Zero-Error Commitment",
                  desc: "99% clean claim rate achieved through rigorous quality checks and expert oversight.",
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "10+ Years US RCM Expertise",
                  desc: "Deep understanding of US healthcare regulations, payer requirements, and best practices.",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Skilled Manpower",
                  desc: "Certified RCM professionals trained in US healthcare operations and compliance.",
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Transparency",
                  desc: "Real-time dashboards, detailed reporting, and complete visibility into your operations.",
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Measurable Outcomes",
                  desc: "Track improvements in clean claim rates, AR days, denial rates, and collections.",
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Reliability & Integrity",
                  desc: "Built on Imperial values of accountability, reliability, and excellence in every interaction.",
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="border-2 border-brand-blue/10 hover:border-brand-blue/30 transition-all duration-300 hover:scale-105 text-center"
                >
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 rounded-full flex items-center justify-center text-brand-blue">
                      {item.icon}
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                <span className="text-brand-orange">Imperial</span> Healthcare Systems vs Traditional RCM Providers
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-brand-blue/20">
                      <th className="text-left p-4 font-bold">Feature</th>
                      <th className="text-center p-4 font-bold text-brand-orange">Imperial Healthcare Systems</th>
                      <th className="text-center p-4 font-bold text-muted-foreground">Traditional Providers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Cost Savings", ihs: "Up to 60%", others: "20-30%" },
                      { feature: "Clean Claim Rate", ihs: "99%", others: "85-90%" },
                      { feature: "Advanced Analytics", ihs: "✓ Included", others: "✗ Extra Cost" },
                      { feature: "US RCM Expertise", ihs: "10+ Years", others: "Varies" },
                      { feature: "Real-Time Dashboards", ihs: "✓ Standard", others: "✗ Limited" },
                      { feature: "HIPAA Compliance", ihs: "✓ SOC2 Ready", others: "✓ Basic" },
                      { feature: "Transparent Pricing", ihs: "✓ Upfront", others: "✗ Hidden Fees" },
                      { feature: "Dedicated Support", ihs: "✓ 24/7", others: "Business Hours" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-200 hover:bg-white/50 transition-colors">
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center text-brand-blue font-semibold">{row.ihs}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-gradient-to-br from-brand-blue/5 via-white to-brand-orange/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Our <span className="text-brand-orange">Implementation Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven methodology to ensure seamless integration and rapid results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Assessment",
                  description: "Comprehensive analysis of your current operations and pain points",
                },
                {
                  step: "02",
                  title: "Solution Design",
                  description: "Custom solution architecture tailored to your specific needs",
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Seamless deployment with minimal disruption to your operations",
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Continuous monitoring and improvement to maximize results",
                },
              ].map((phase, idx) => (
                <div key={idx} className="relative">
                  <div className="text-6xl font-bold text-brand-blue/30 mb-4 bg-gradient-to-br from-brand-blue/40 to-brand-orange/30 bg-clip-text text-transparent">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-brand-blue to-brand-orange" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-blue to-brand-blue/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Healthcare Operations?</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our expert-driven solutions can help you achieve measurable results and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" className="bg-white text-brand-blue hover:bg-gray-100">
                <a href="mailto:info@imperialhealthsystems.com?subject=Consultation%20Request%20-%20Imperial%20Healthcare%20Systems&body=Hello%20Imperial%20Healthcare%20Systems%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%20how%20your%20RCM%20solutions%20can%20help%20my%20practice.%0A%0APlease%20provide%20available%20times%20for%20a%20consultation.%0A%0AThank%20you%2C">
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                onClick={() => setIsContactModalOpen(true)}
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <RCMAuditModal isOpen={isRCMAuditModalOpen} onClose={() => setIsRCMAuditModalOpen(false)} />
    </div>
  )
}

export default function SolutionsPage() {
  return (
    <Suspense fallback={null}>
      <SolutionsPageContent />
    </Suspense>
  )
}
