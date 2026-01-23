"use client"

import { useState, useEffect, useRef } from "react"
import {
  ArrowRight,
  DollarSign,
  TrendingDown,
  TrendingUp,
  Clock,
  Brain,
  CheckCircle,
  Check,
  MapPin,
  Award,
  Eye,
  Wallet,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Users,
  RefreshCw,
  Download,
  Target,
  Network,
  Radar,
  Shield,
  Zap,
  Crosshair,
  AlertTriangle,
  BarChart3,
  Settings,
  Building2,
  Lock,
  RotateCw,
  PhoneCall,
  SearchIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingChatbot } from "@/components/floating-chatbot"
import ContactFormModal from "@/components/contact-form-modal"
import { SequentialHeroAnimation } from "@/components/sequential-hero-animation"
import { ImperialJourneyMap } from "@/components/imperial-journey-map"
import { TransitionFramework } from "@/components/transition-framework"
import { PerformanceLedgerCarousel } from "@/components/performance-ledger-carousel"
import { AnimatedCTAText } from "@/components/animated-cta-text"
import { ServicesCarousel } from "@/components/services-carousel"
import RCMAuditModal from "@/components/rcm-audit-modal"
import ScrollReveal from "@/components/ui/ScrollReveal"

export default function Home() {
  // Changed from HomePage to LandingPage to match original
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  // Removed ROI calculator state variables

  const [calcOrgType, setCalcOrgType] = useState<"clinic" | "hospital">("clinic")
  const [calcAGC, setCalcAGC] = useState<string>("") // Annual Gross Charges
  const [calcANC, setCalcANC] = useState<string>("") // Annual Net Collections
  const [calcARD, setCalcARD] = useState<string>("") // Average AR Days
  const [calcCCR, setCalcCCR] = useState<string>("") // Clean Claim Rate (diagnostic)
  const [calcDR, setCalcDR] = useState<string>("") // Denial Rate (diagnostic)
  const [calcStaffCount, setCalcStaffCount] = useState<string>("") // RCM Staff Count
  const [calcStaffCost, setCalcStaffCost] = useState<string>("") // Cost per Staff/Year
  const [benefit, setBenefit] = useState({
    revenueLeak: 0,
    annualCostSavings: 0,
    cashLockedAR: 0,
    totalBenefit: 0,
  })

  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  // Added contact modal state for pricing buttons
  const [contactModalOpen, setContactModalOpen] = useState(false)

  const [isRCMAuditModalOpen, setIsRCMAuditModalOpen] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  const calculateFinancialBenefit = () => {
    const agc = Number(calcAGC) || 0
    const anc = Number(calcANC) || 0
    const ard = Number(calcARD) || 0
    const staffCount = Number(calcStaffCount) || 0
    const staffCost = Number(calcStaffCost) || 65000

    // System Constants (Benchmarks)
    const BENCH_COLLECTION_RATIO = calcOrgType === "clinic" ? 0.92 : 0.9
    const COST_SAVINGS_RATE = calcOrgType === "clinic" ? 0.3 : 0.22
    const TARGET_ARD = calcOrgType === "clinic" ? 35 : 45
    const RECOVERY_CAP = 0.4
    const REALIZATION_RATE = 0.7

    // Engine 1: Revenue Leakage Recovery (P&L Impact)
    const EXPECTED_COLLECTIONS = agc * BENCH_COLLECTION_RATIO
    const REVENUE_GAP = Math.max(0, EXPECTED_COLLECTIONS - anc)
    const RECOVERABLE_REVENUE = REVENUE_GAP * RECOVERY_CAP
    const revenueBenefit = RECOVERABLE_REVENUE * REALIZATION_RATE

    // Engine 2: RCM Cost Savings (EBITDA Impact)
    const BASELINE_COST = staffCount * staffCost
    const RAW_SAVINGS = BASELINE_COST * COST_SAVINGS_RATE
    const costSavings = Math.min(RAW_SAVINGS, BASELINE_COST * 0.5)

    // Engine 3: Cash Released from AR (Balance Sheet Impact)
    const DAILY_NET_REVENUE = anc / 365
    const AR_IMPROVEMENT = Math.max(0, ard - TARGET_ARD)
    const cashReleased = DAILY_NET_REVENUE * AR_IMPROVEMENT

    // Final Aggregation
    const totalBenefit = revenueBenefit + costSavings + cashReleased

    return {
      revenueLeak: Math.round(revenueBenefit),
      annualCostSavings: Math.round(costSavings),
      cashLockedAR: Math.round(cashReleased),
      totalBenefit: Math.round(totalBenefit),
    }
  }

  useEffect(() => {
    const results = calculateFinancialBenefit()
    setBenefit(results)
  }, [calcOrgType, calcAGC, calcANC, calcARD, calcCCR, calcDR, calcStaffCount, calcStaffCost])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isCalculatorComplete = () => {
    return (
      calcAGC !== "" &&
      calcANC !== "" &&
      calcARD !== "" &&
      calcStaffCount !== "" &&
      Number(calcAGC) > 0 &&
      Number(calcANC) > 0 &&
      Number(calcARD) > 0 &&
      Number(calcStaffCount) > 0
    )
  }

const generatePDFReport = async () => {
  setIsGeneratingPDF(true)

  try {
    const { jsPDF } = await import("jspdf")
    const doc = new jsPDF()

    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()

    const margin = 20
    const line = 6
    const sectionGap = 14
    const FOOTER_HEIGHT = 80

    let yPos = 20

    /* =======================
       HEADER
    ======================= */

    try {
      const logoImg = new Image()
logoImg.src = "/images/imperial logo horizontal.png"

await new Promise((resolve, reject) => {
  logoImg.onload = resolve
  logoImg.onerror = reject
  setTimeout(reject, 3000)
})

// Maintain aspect ratio automatically
const maxLogoWidth = 90
const aspectRatio = logoImg.width / logoImg.height
const logoWidth = maxLogoWidth
const logoHeight = logoWidth / aspectRatio

doc.addImage(
  logoImg,
  "JPEG", // ✅ correct format
  (pageWidth - logoWidth) / 2,
  yPos,
  logoWidth,
  logoHeight
)

yPos += logoHeight + 12

    } catch {
      yPos += 10
    }

    doc.setFontSize(20)
    doc.setTextColor(30, 111, 232)
    doc.text("IHS Revenue Leakage & ROI Report", pageWidth / 2, yPos, {
      align: "center",
    })

    yPos += 8
    doc.setFontSize(9)
    doc.setTextColor(120)
    doc.text(
      `Generated on ${new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}`,
      pageWidth / 2,
      yPos,
      { align: "center" },
    )

    yPos += sectionGap

    /* =======================
       HELPERS
    ======================= */

    const checkPage = (extraSpace = 20) => {
      if (yPos > pageHeight - FOOTER_HEIGHT - extraSpace) {
        doc.addPage()
        yPos = margin
      }
    }

    const sectionTitle = (title: string) => {
      checkPage()
      doc.setFontSize(14)
      doc.setFont(undefined, "bold")
      doc.setTextColor(0)
      doc.text(title, margin, yPos)

      yPos += 4
      doc.setDrawColor(220)
      doc.line(margin, yPos, pageWidth - margin, yPos)
      yPos += 8
      doc.setFont(undefined, "normal")
    }

    const drawRow = (label: string, value: string) => {
      checkPage()
      doc.setFontSize(10)

      doc.setTextColor(80)
      doc.text(label, margin, yPos)

      doc.setTextColor(20)
      const wrapped = doc.splitTextToSize(value, pageWidth / 2 - margin)
      doc.text(wrapped, pageWidth / 2, yPos)

      yPos += wrapped.length * line
    }

    /* =======================
       ORGANIZATION
    ======================= */

    sectionTitle("Organization Overview")
    drawRow(
      "Organization Type",
      calcOrgType === "clinic"
        ? "Clinic / Practice"
        : "Hospital / Health System",
    )

    yPos += sectionGap / 2

    /* =======================
       INPUT METRICS
    ======================= */

    sectionTitle("Current Metrics (User-Entered)")
    drawRow("Annual Gross Charges (AGC)", `$${Number(calcAGC).toLocaleString()}`)
    drawRow("Annual Net Collections (ANC)", `$${Number(calcANC).toLocaleString()}`)
    drawRow("Average AR Days", `${calcARD} days`)
    drawRow("Clean Claim Rate", calcCCR ? `${calcCCR}%` : "Not provided")
    drawRow("Denial Rate", calcDR ? `${calcDR}%` : "Not provided")
    drawRow("RCM Staff Count", String(calcStaffCount))
    drawRow(
      "Cost per Staff / Year",
      `$${Number(calcStaffCost || 65000).toLocaleString()}`,
    )

    yPos += sectionGap / 2

    /* =======================
       FINANCIAL BENEFITS
    ======================= */

    sectionTitle("Calculated Financial Benefit (First Year)")
    doc.setTextColor(34, 139, 34)
    drawRow(
      "Revenue Leakage Recovery",
      `$${benefit.revenueLeak.toLocaleString()}`,
    )
    drawRow(
      "RCM Cost Savings",
      `$${benefit.annualCostSavings.toLocaleString()}`,
    )
    drawRow(
      "Cash Released from AR",
      `$${benefit.cashLockedAR.toLocaleString()}`,
    )

    yPos += 4
    doc.setFontSize(12)
    doc.setFont(undefined, "bold")
    doc.setTextColor(255, 122, 0)
    doc.text(
      `Total First-Year Benefit: $${benefit.totalBenefit.toLocaleString()}`,
      margin,
      yPos,
    )
    doc.setFont(undefined, "normal")

    yPos += sectionGap

    /* =======================
       EXPLANATIONS
    ======================= */

    sectionTitle("How These Metrics Impact Your Revenue")
    doc.setFontSize(9)
    doc.setTextColor(60)

    const explanations = [
      {
        title: "Revenue Leakage Recovery",
        text:
          "Identifies unbilled charges and recoverable denials through improved claim accuracy and AR follow-up. IHS targets recovery of up to 40% of identified gaps.",
      },
      {
        title: "RCM Cost Savings",
        text:
          "Operational efficiencies through automation and optimized staffing models reduce cost while maintaining quality.",
      },
      {
        title: "Cash Locked in AR",
        text:
          "Reducing AR days to industry benchmarks improves working capital and cash flow velocity.",
      },
    ]

    explanations.forEach((item) => {
      checkPage(60)
      doc.setFont(undefined, "bold")
      doc.text(item.title + ":", margin, yPos)
      yPos += 4

      doc.setFont(undefined, "normal")
      const lines = doc.splitTextToSize(item.text, pageWidth - margin * 2)
      doc.text(lines, margin, yPos)
      yPos += lines.length * 4 + 6
    })

    /* =======================
       BENCHMARKS
    ======================= */

    sectionTitle("Industry Benchmark Comparison")

    const currentCCR = Number(calcCCR) || 85
    const targetCCR = 99
    const currentARD =
      Number(calcARD) || (calcOrgType === "clinic" ? 50 : 60)
    const targetARD = calcOrgType === "clinic" ? 35 : 45
    const collectionRatio =
      Number(calcAGC) > 0
        ? (Number(calcANC) / Number(calcAGC)) * 100
        : 0

    drawRow(
      "Clean Claim Rate",
      `${currentCCR.toFixed(1)}% (Target: ${targetCCR}%)`,
    )
    drawRow(
      "Average AR Days",
      `${currentARD} days (Target: ${targetARD} days)`,
    )
    drawRow(
      "Collection Ratio",
      `${collectionRatio.toFixed(1)}% (Best: ${
        calcOrgType === "clinic" ? "92%" : "90%"
      })`,
    )

    /* =======================
       DISCLAIMER
    ======================= */

    sectionTitle("Disclaimer")
    doc.setFontSize(8)
    doc.setTextColor(100)
    doc.text(
      doc.splitTextToSize(
        "This report provides estimated financial impact based on industry benchmarks and assumptions. Actual results may vary depending on payer mix, specialty, and operational practices. This does not constitute financial advice.",
        pageWidth - margin * 2,
      ),
      margin,
      yPos,
    )

    /* =======================
       FOOTER
    ======================= */

    const totalPages = doc.getNumberOfPages()

    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i)

      const footerTop = pageHeight - FOOTER_HEIGHT + 10

      doc.setDrawColor(30, 111, 232)
      doc.setLineWidth(0.8)
      doc.line(margin, footerTop, pageWidth - margin, footerTop)

      let y = footerTop + 7

      doc.setFontSize(11)
      doc.setFont(undefined, "bold")
      doc.setTextColor(30, 111, 232)
      doc.text("Imperial Healthcare Systems", pageWidth / 2, y, { align: "center" })

      y += 5
      doc.setFontSize(8)
      doc.setFont(undefined, "italic")
      doc.setTextColor(255, 122, 0)
      doc.text(
        "Transforming Healthcare Revenue Cycle Management",
        pageWidth / 2,
        y,
        { align: "center" },
      )

      y += 7
      doc.setFontSize(8)
      doc.setFont(undefined, "normal")
      doc.setTextColor(60)
      doc.text(
        "Email: info@imperialhealthsystems.com  |  Phone: US +1-XXX-XXX-XXXX  •  India +91-XXXXXXXXXX",
        pageWidth / 2,
        y,
        { align: "center" },
      )

      y += 8
      const leftX = margin + 5
      const rightX = pageWidth / 2 + 10

      doc.setFontSize(8)
      doc.setFont(undefined, "bold")
      doc.setTextColor(30, 111, 232)
      doc.text("United States Office", leftX, y)

      doc.setFontSize(7)
      doc.setFont(undefined, "normal")
      doc.setTextColor(70)
      doc.text("Imperial Healthcare Systems LLC", leftX, y + 4)
      doc.text("212 N. 2nd St. STE 100", leftX, y + 8)
      doc.text("Richmond, KY 40475, United States", leftX, y + 12)

      doc.setFontSize(8)
      doc.setFont(undefined, "bold")
      doc.setTextColor(30, 111, 232)
      doc.text("India Office", rightX, y)

      doc.setFontSize(7)
      doc.setFont(undefined, "normal")
      doc.setTextColor(70)
      doc.text("Imperial Healthcare Systems Pvt. Ltd.", rightX, y + 4)
      doc.text("Unit No. 219 2F, ILD Trade Centre", rightX, y + 8)
      doc.text("Sector 47, Sohna Road", rightX, y + 12)
      doc.text("Gurugram - 122018, Haryana, India", rightX, y + 16)

      doc.setFontSize(7)
      doc.setTextColor(120)
      doc.text(
        `Page ${i} of ${totalPages}`,
        pageWidth - margin,
        pageHeight - 8,
        { align: "right" },
      )
    }

    doc.save("IHS-Revenue-Leakage-ROI-Report.pdf")
  } catch (error) {
    console.error(error)
    alert("Error generating PDF")
  } finally {
    setIsGeneratingPDF(false)
  }
}


  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Mobile Menu Overlay - keeping for backwards compatibility */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-brand-blue/20">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {[
              { name: "Home", href: "#home" },
              { name: "Services", href: "#services" },
              { name: "Solutions", href: "#solutions" },
              // Updated About link to navigate to separate page instead of anchor
              { name: "About", href: "/about" },
              { name: "Careers", href: "#careers" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-brand-blue transition-colors py-2 hover:translate-x-2 transform duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Repositioning sections in the order: Hero, Core Values, Problem, Solution, IHS Advantage, Promise, Calculators, Why Choose Us, Services Carousel, IHS Standards, Pricing, Success Stories, Results, Industries, Technology & Security */}

      {/* 1. Hero Banner */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 40%, rgba(59, 130, 246, 0.08), transparent 45%),
            radial-gradient(circle at 80% 60%, rgba(251, 146, 60, 0.10), transparent 45%),
            linear-gradient(to bottom, #f8fafc, #ffffff)
          `,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Badge */}
            {/* Power Tag */}
            <div className="animate-fade-in-up mb-8 flex justify-center">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange/80 text-white text-sm font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Think Excellence
              </span>
            </div>

            <SequentialHeroAnimation />

            <div className="flex justify-center mb-8 animate-fade-in-up animation-delay-200">
              <p className="text-base font-medium text-slate-700 leading-relaxed max-w-4xl text-center px-4">
                Imperial Healthcare Systems (IHS) replaces obsolete 'Volume-over-Value' models with the IRRF—a
                proprietary intelligence architecture that re-engineers your unit economics to secure a 99.2% Net
                Collection Rate.
              </p>
            </div>

            <div className="flex justify-center mb-8 animate-fade-in-up animation-delay-300">
              <p className="text-xl md:text-2xl font-semibold text-slate-900 text-center leading-snug px-4 md:whitespace-nowrap">
                We don't just process claims, we optimize your{" "}
                <span className="text-brand-orange">Clinical EBITDA</span>.
              </p>
            </div>

            {/* CTAs */}
            {/* CHANGE: Updated button to open ContactFormModal popup instead of RCM Audit modal */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300 justify-center mb-16">
              <Button
                size="lg"
                onClick={() => setContactModalOpen(true)}
                className="px-10 py-6 text-lg bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-brand-blue/30 group cursor-pointer"
                aria-label="Schedule a Free RCM Audit & EBITDA Analysis"
              >
                <span className="flex items-center gap-2">
                  Schedule a Free RCM Audit & EBITDA Analysis
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>

              {/* <Button
                variant="outline"
                className="px-6 py-3 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg group bg-transparent"
              >
                <span className="flex items-center gap-2">
                  Explore Our Specialty Solutions
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button> */}
            </div>

            {/* Stats cards with new design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto animate-fade-in-up animation-delay-400">
              <div className="group text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-brand-blue/20 hover:border-brand-blue hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl font-bold bg-gradient-to-br from-brand-blue to-blue-600 bg-clip-text text-transparent mb-2">
                  99%
                </div>
                <div className="text-sm font-semibold text-gray-600">Clean Claim Rate</div>
              </div>
              <div className="group text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-brand-orange/20 hover:border-brand-orange hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl font-bold bg-gradient-to-br from-brand-orange to-orange-600 bg-clip-text text-transparent mb-2">
                  60%
                </div>
                <div className="text-sm font-semibold text-gray-600">Cost Reduction</div>
              </div>
              <div className="group text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-brand-orange/20 hover:border-brand-orange hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl font-bold bg-gradient-to-br from-brand-orange to-orange-600 bg-clip-text text-transparent mb-2">
                  26%
                </div>
                <div className="text-sm font-semibold text-gray-600">Increased Revenue</div>
              </div>
              <div className="group text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-brand-blue/20 hover:border-brand-blue hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl font-bold bg-gradient-to-br from-brand-blue to-blue-600 bg-clip-text text-transparent mb-2">
                  99.5%
                </div>
                <div className="text-sm font-semibold text-gray-600">Coding Accuracy</div>
              </div>
              <div className="group text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-brand-blue/20 hover:border-brand-blue hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl font-bold bg-gradient-to-br from-brand-blue to-blue-600 bg-clip-text text-transparent mb-2">
                  10+
                </div>
                <div className="text-sm font-semibold text-gray-600">Years Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Imperial Promise */}
      <ScrollReveal>
      <section className="py-24 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-blue/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-brand-orange">Imperial</span> Promise
            </h2>
            <p className="text-xl md:text-2xl text-brand-orange font-semibold">Excellence Delivered. Trust Earned.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition">
              <div className="w-14 h-14 bg-brand-orange/20 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-orange">Precision & Quality</h3>
              <ul className="space-y-4 text-white/85">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1" />
                  Zero-compromise quality with multi-layer QC validation
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1" />
                  Expert-driven execution across every workflow
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1" />
                  Errors prevented before they reach payers
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition">
              <div className="w-14 h-14 bg-brand-orange/20 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-orange">Accountability & Transparency</h3>
              <ul className="space-y-4 text-white/85">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1" />
                  Dedicated teams that own outcomes, not just tasks
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1" />
                  Full visibility into workflows, KPIs, and reporting
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1" />
                  No hidden gaps, no excuses—only results
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition">
              <div className="w-14 h-14 bg-brand-orange/20 rounded-full flex items-center justify-center mb-6">
                <Wallet className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-orange">Financial Impact</h3>
              <ul className="space-y-4 text-white/85">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1" />
                  Cost-efficient delivery without sacrificing performance
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1" />
                  Measurable improvements in collections and cash flow
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1" />
                  Revenue growth engineered into every process
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-4xl mx-auto">
              We don't just process billing, we engineer cash flow. Our 'Zero-Error' IRRF methodology combines the
              precision of AI-driven tools with the nuance of specialized US healthcare expertise. The result? Your
              revenue is protected, your costs are slashed, and your clinical focus remains uninterrupted.
            </p>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* THE PROBLEM Section */}
      <ScrollReveal>
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
              <span className="text-brand-orange font-bold">30%</span> of Contracted Revenue.
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
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[rgba(0,0,0,0.60)] backdrop-blur-[14px] pointer-events-none z-[1]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[radial-gradient(ellipse_at_center,rgba(30,30,35,0.4)_0%,transparent_70%)] pointer-events-none z-[2]" />

              <CardHeader className="relative z-10">
                <div className="mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(255,122,0,0.4)]">
                  <AlertTriangle className="w-10 h-10 text-orange-500 group-hover:text-orange-400" />
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
                <div className="mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(255,122,0,0.4)]">
                  <BarChart3 className="w-10 h-10 text-purple-500 group-hover:text-purple-400" />
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
                <div className="mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.4)]">
                  <Eye className="w-10 h-10 text-blue-500 group-hover:text-blue-400" />
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
                <div className="mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(255,122,0,0.4)]">
                  <Settings className="w-10 h-10 text-orange-500 group-hover:text-orange-400" />
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
                <div className="mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(255,122,0,0.4)]">
                  <Building2 className="w-10 h-10 text-teal-500 group-hover:text-teal-400" />
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
            <Card className="group relative border border-gray-200/40 rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden backdrop-blur-[10px] bg-gradient-to-br from-indigo-50/90 via-white/85 to-purple-50/90 hover:backdrop-blur-[16px]">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[rgba(0,0,0,0.60)] backdrop-blur-[14px] pointer-events-none z-[1]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[radial-gradient(ellipse_at_center,rgba(30,30,35,0.4)_0%,transparent_70%)] pointer-events-none z-[2]" />

              <CardHeader className="relative z-10">
                <div className="mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.4)]">
                  <Lock className="w-10 h-10 text-indigo-500 group-hover:text-indigo-400" />
                </div>
                <CardTitle className="text-xl font-bold transition-colors duration-[350ms]">
                  <span className="text-brand-orange group-hover:text-white">
                    The Accountability Void: When Humans Disappear
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-slate-700 leading-relaxed transition-colors duration-[350ms] group-hover:text-[#E5E7EB]">
                  Full automation without human oversight creates a system where no one is accountable when claims fail.
                  When issues arise, there&apos;s no escalation path, no single point of contact. It&apos;s a black box
                  that prioritizes cost savings over your financial outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* 3. The Solution Section */}

      {/* 4. THE SOLUTION (IRRF) */}
      <ScrollReveal>
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
                  At IHS, we don't just &apos;process&apos; claims; we exercise sovereign ownership over them. We have
                  engineered a workflow where Advanced Technology identifies the path and Expert Human Labor ensures the
                  arrival.
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
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 opacity-30 rounded-bl-[80px] pointer-events-none" />

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
                    <SearchIcon className="w-7 h-7 text-white" strokeWidth={2.5} />
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

          {/* SECTION 2: IRRF THREE-PILLAR ARCHITECTURE */}
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
      </ScrollReveal>

      {/* 5. IHS Advantage Section - NEW */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                The <span className="text-brand-orange">IHS</span> Advantage
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Imperial Healthcare Systems delivers unmatched competitive advantages through our unique operational
                model
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-blue/70 rounded-2xl flex items-center justify-center mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Unprecedented Cost Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Achieve up to 60% operational cost reduction without sacrificing quality. Our global delivery model
                    combines skilled professionals with intelligent automation to deliver exceptional value.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-orange/20 hover:border-brand-orange/40 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange/70 rounded-2xl flex items-center justify-center mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">AI-Enhanced Intelligence Layer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Level the playing field against payer denial engines. Our predictive analytics and automated claim
                    accuracy systems catch errors before submission, securing your 99% first-pass clean claim rate.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-orange rounded-2xl flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Decade of US RCM Mastery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Benefit from 10+ years of deep US healthcare expertise. Our specialized teams understand the nuances
                    of payer policies, compliance regulations, and specialty-specific coding requirements.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-12 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 border-2 border-brand-blue/30">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The IHS Difference</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      While traditional RCM providers focus on processing claims, we engineer your entire revenue
                      architecture. Our integrated approach synchronizes clinical excellence with financial performance,
                      delivering measurable EBITDA improvements that compound over time.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Clean Claim Rate", value: "99%" },
                      { label: "Cost Reduction", value: "Up to 60%" },
                      { label: "US RCM Experience", value: "10+ Years" },
                      { label: "Support Coverage", value: "24/7" },
                    ].map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                        <span className="font-semibold">{stat.label}</span>
                        <span className="text-2xl font-bold text-brand-orange">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* 6. THE IHS ADVANTAGE */}
      <ScrollReveal>
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The <span className="text-brand-orange">IHS</span> Advantage
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                The Difference Between Processing and Partnering
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Imperial Healthcare Systems was built to beat the &apos;Mass Billing&apos; giants by offering a level of
                surgical precision they cannot match.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {/* Card 1: Full-Stake Accountability */}
              <div
                className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col h-full border-2 border-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(white, white), linear-gradient(to bottom right, rgb(249, 115, 22), rgb(251, 146, 60), rgb(249, 115, 22))",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-brand-blue to-brand-orange">
                    <ShieldCheck className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold uppercase tracking-wide text-foreground mb-4">
                  FULL-STAKE ACCOUNTABILITY
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We take ownership of the{" "}
                  <span className="text-brand-orange font-semibold">&apos;Lost Claim.&apos;</span> Unlike our
                  competitors, our staff is trained to see a denial not as a stopping point, but as a challenge. We
                  apply Human Verification at every stage, ensuring no claim is ever abandoned to the Timely Filing
                  clock.
                </p>
              </div>

              {/* Card 2: Efficiency Re-Invested in People */}
              <div className="relative bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col h-full">
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-brand-blue to-brand-orange">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold uppercase tracking-wide text-foreground mb-4">
                  EFFICIENCY RE-INVESTED IN PEOPLE
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We use advanced technology to eliminate operational noise—but we never reduce staff. Instead, we
                  reinvest that recovered time into deeper human expertise across your AR. This allows us to scale
                  without ever diluting quality for existing providers.
                </p>
              </div>

              {/* Card 3: Resolution-Driven Follow-Up */}
              <div
                className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col h-full border-2 border-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(white, white), linear-gradient(to bottom right, rgb(37, 99, 235), rgb(59, 130, 246), rgb(37, 99, 235))",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-brand-blue to-brand-orange">
                    <RefreshCw className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold uppercase tracking-wide text-foreground mb-4">
                  RESOLUTION-DRIVEN FOLLOW-UP
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  While the industry celebrates &apos;First Pass Rate&apos; as a vanity metric, we optimize for{" "}
                  <span className="text-brand-orange font-semibold">Net Collection Rate</span>. Our experienced human
                  specialists actively challenge payer denials—often knowing payer policy nuances better than the payers
                  themselves.
                </p>
              </div>
            </div>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center justify-center gap-3 flex-wrap px-6 py-4 bg-white rounded-lg shadow-md border border-gray-200">
                <span className="text-lg font-semibold text-foreground">Clean Claim</span>
                <span className="text-brand-orange text-2xl">→</span>
                <span className="text-lg font-semibold text-foreground">Net Collection</span>
                <span className="text-brand-orange text-2xl">→</span>
                <span className="text-lg font-semibold text-foreground">EBITDA</span>
                <span className="text-brand-orange text-2xl">→</span>
                <span className="text-lg font-semibold text-brand-orange">Enterprise Valuation Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* 7. Revenue Leakage Calculator */}
      <ScrollReveal>
      <section id="calculator" className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
              IHS Revenue Leakage &{" "}
              <span className="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">
                Benefit Calculator
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Quantify your revenue leakage, AR cash delay, and cost inefficiency with our CFO-reviewed financial
              diagnostic tool
            </p>
          </div>

          <Card className="shadow-2xl border-2 border-brand-blue/20">
            <CardHeader className="bg-gradient-to-r from-brand-blue/10 via-white to-brand-orange/10 border-b py-4">
              <CardTitle className="text-xl">Enter Your Current Metrics</CardTitle>
              <CardDescription className="text-sm">
                Input your actual billing and operational numbers to calculate your first-year financial benefit with
                IHS
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Organization Type */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-foreground flex items-center gap-2">
                    Organization Type
                    <span className="text-xs text-muted-foreground font-normal">(Affects AR days benchmark)</span>
                  </label>
                  <div className="flex gap-3">
                    <Button
                      variant={calcOrgType === "clinic" ? "default" : "outline"}
                      onClick={() => setCalcOrgType("clinic")}
                      className={
                        calcOrgType === "clinic"
                          ? "bg-brand-blue hover:bg-brand-blue/90 text-sm py-2"
                          : "border-2 hover:border-brand-blue text-sm py-2"
                      }
                    >
                      Clinic / Practice
                    </Button>
                    <Button
                      variant={calcOrgType === "hospital" ? "default" : "outline"}
                      onClick={() => setCalcOrgType("hospital")}
                      className={
                        calcOrgType === "hospital"
                          ? "bg-brand-blue hover:bg-brand-blue/90 text-sm py-2"
                          : "border-2 hover:border-brand-blue text-sm py-2"
                      }
                    >
                      Hospital / Health System
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {/* AGC - Annual Gross Charges */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground">
                      Annual Gross Charges (AGC)
                      <span className="text-xs text-muted-foreground font-normal block">
                        Total charges billed (12 mo)
                      </span>
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="number"
                        value={calcAGC}
                        onChange={(e) => setCalcAGC(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                        min="0"
                        step="10000"
                        placeholder="0"
                      />
                    </div>
                  </div>

                  {/* ANC - Annual Net Collections */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground">
                      Annual Net Collections (ANC)
                      <span className="text-xs text-muted-foreground font-normal block">
                        Total cash received (12 mo)
                      </span>
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="number"
                        value={calcANC}
                        onChange={(e) => {
                          const value = e.target.value
                          const agcNum = Number(calcAGC) || 0
                          const ancNum = Number(value) || 0
                          if (value === "" || (ancNum <= agcNum && agcNum !== 0) || agcNum === 0) {
                            setCalcANC(value)
                          }
                        }}
                        className="w-full pl-8 pr-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                        min="0"
                        step="10000"
                        placeholder="0"
                      />
                    </div>
                    {Number(calcANC) > Number(calcAGC) && calcANC !== "" && calcAGC !== "" && (
                      <p className="text-xs text-red-500">Collections cannot exceed gross charges</p>
                    )}
                  </div>

                  {/* ARD - Average AR Days */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground">
                      Average AR Days (ARD)
                      <span className="text-xs text-muted-foreground font-normal block">Days to collect</span>
                    </label>
                    <input
                      type="number"
                      value={calcARD}
                      onChange={(e) => setCalcARD(e.target.value)}
                      className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                      min="0"
                      step="1"
                      placeholder="0"
                    />
                  </div>

                  {/* CCR - Clean Claim Rate */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground">
                      Clean Claim Rate (CCR) %
                      <span className="text-xs text-muted-foreground font-normal block">First-pass paid claims</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={calcCCR}
                        onChange={(e) => {
                          const value = e.target.value
                          const num = Number(value)
                          if (value === "" || (num >= 0 && num <= 100)) {
                            setCalcCCR(value)
                          }
                        }}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                        min="0"
                        max="100"
                        step="1"
                        placeholder="0"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">%</span>
                    </div>
                  </div>

                  {/* DR - Denial Rate */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground">
                      Denial Rate (DR) %
                      <span className="text-xs text-muted-foreground font-normal block">
                        Claims denied first submit
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={calcDR}
                        onChange={(e) => {
                          const value = e.target.value
                          const num = Number(value)
                          if (value === "" || (num >= 0 && num <= 100)) {
                            setCalcDR(value)
                          }
                        }}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                        min="0"
                        max="100"
                        step="1"
                        placeholder="0"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">%</span>
                    </div>
                  </div>

                  {/* RCM Staff Count */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground">
                      RCM Staff Count
                      <span className="text-xs text-muted-foreground font-normal block">Total billing/AR staff</span>
                    </label>
                    <input
                      type="number"
                      value={calcStaffCount}
                      onChange={(e) => setCalcStaffCount(e.target.value)}
                      className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                      min="1"
                      step="1"
                      placeholder="0"
                    />
                  </div>

                  {/* Cost per Staff - Now spans 2 columns to maintain alignment */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-semibold text-foreground">
                      Average Cost per RCM Staff (Annual)
                      <span className="text-xs text-muted-foreground font-normal block">
                        Salary + benefits + overhead
                      </span>
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="number"
                        value={calcStaffCost}
                        onChange={(e) => setCalcStaffCost(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                        min="0"
                        step="1000"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="mt-6 pt-6 border-t-2">
                <h3 className="text-xl font-bold mb-4 text-center">Your First-Year Financial Benefit with IHS</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {/* Revenue Leakage */}
                  <Card className="border-2 border-red-200 bg-red-50/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-red-700 flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <TrendingDown className="w-4 h-4 text-white" />
                        </div>
                        Revenue Leakage
                      </CardTitle>
                      <CardDescription className="text-xs">Money lost to inefficiency</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <p className="text-2xl font-bold text-red-700 transition-all duration-500 ease-out">
                        ${benefit.revenueLeak.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Cost Savings */}
                  <Card className="border-2 border-green-200 bg-green-50/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-green-700 flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-white" />
                        </div>
                        RCM Cost Savings
                      </CardTitle>
                      <CardDescription className="text-xs">Annual expense reduction</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <p className="text-2xl font-bold text-green-700 transition-all duration-500 ease-out">
                        ${benefit.annualCostSavings.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Cash Locked in AR */}
                  <Card className="border-2 border-orange-200 bg-orange-50/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-orange-700 flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <Clock className="w-4 h-4 text-white" />
                        </div>
                        Cash Locked in AR
                      </CardTitle>
                      <CardDescription className="text-xs">Working capital delayed</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <p className="text-2xl font-bold text-orange-700 transition-all duration-500 ease-out">
                        ${benefit.cashLockedAR.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Total Benefit */}
                  <Card className="border-2 border-brand-blue bg-gradient-to-br from-brand-blue/10 to-brand-orange/10 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-brand-blue flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-orange rounded-full flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-white" />
                        </div>
                        Total Benefit
                      </CardTitle>
                      <CardDescription className="text-xs font-semibold">First-year benefit</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <p className="text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent transition-all duration-500 ease-out">
                        ${benefit.totalBenefit.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Disclaimer */}
                <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>Disclaimer:</strong> This calculator provides estimates based on industry benchmarks and
                    does not constitute financial advice. Actual results vary by organization, payer mix, and specialty.
                    Contact IHS for a customized ROI analysis validated against your actual data.
                  </p>
                </div>

                <Card className="border-2 border-gradient-to-r from-brand-blue to-brand-orange bg-gradient-to-br from-blue-50/30 to-orange-50/30">
                  <CardContent className="p-6 text-center space-y-4">
                    <Button
                      size="lg"
                      onClick={generatePDFReport}
                      disabled={!isCalculatorComplete() || isGeneratingPDF}
                      className={`w-full max-w-md mx-auto px-8 py-6 text-base font-semibold rounded-full transition-all duration-300 ${
                        isCalculatorComplete() && !isGeneratingPDF
                          ? "bg-gradient-to-r from-brand-blue to-brand-orange hover:from-brand-blue/90 hover:to-brand-orange/90 text-white shadow-xl hover:shadow-2xl hover:scale-105"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      <span className="flex items-center justify-center gap-3">
                        {isGeneratingPDF ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Preparing your report...
                          </>
                        ) : (
                          <>
                            <Download className="h-5 w-5" />
                            Download Full ROI & Leakage Report (PDF)
                          </>
                        )}
                      </span>
                    </Button>

                    {!isCalculatorComplete() && (
                      <p className="text-xs text-gray-500">Please fill in all required fields to download the report</p>
                    )}

                    {isCalculatorComplete() && !isGeneratingPDF && (
                      <p className="text-xs text-gray-600 font-medium"></p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      </ScrollReveal>

      <ServicesCarousel />

      {/* 15. The Performance Ledger */}
      <ScrollReveal>
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance uppercase">
                The Performance <span className="text-brand-orange">Ledger</span>
              </h2>
              <p className="text-xl font-semibold text-foreground mb-6 max-w-4xl mx-auto">
                Benchmarked Excellence: The <span className="text-brand-orange">Imperial Standard</span> of RCM Outcomes
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We do not merely track performance; we define it. By synchronizing the IHS Intelligence Engine with
                elite domain expertise, we consistently outpace industry averages to deliver superior financial health
                and clinical EBITDA for our partners.
              </p>
            </div>

            <PerformanceLedgerCarousel />
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* 8. Why Choose IHS Section */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                The <span className="text-brand-orange">IHS</span> Advantage
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Imperial Healthcare Systems delivers unmatched competitive advantages through our unique operational
                model
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-blue/70 rounded-2xl flex items-center justify-center mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Unprecedented Cost Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Achieve up to 60% operational cost reduction without sacrificing quality. Our global delivery model
                    combines skilled professionals with intelligent automation to deliver exceptional value.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-orange/20 hover:border-brand-orange/40 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange/70 rounded-2xl flex items-center justify-center mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">AI-Enhanced Intelligence Layer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Level the playing field against payer denial engines. Our predictive analytics and automated claim
                    accuracy systems catch errors before submission, securing your 99% first-pass clean claim rate.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-orange rounded-2xl flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Decade of US RCM Mastery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Benefit from 10+ years of deep US healthcare expertise. Our specialized teams understand the nuances
                    of payer policies, compliance regulations, and specialty-specific coding requirements.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-12 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 border-2 border-brand-blue/30">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The IHS Difference</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      While traditional RCM providers focus on processing claims, we engineer your entire revenue
                      architecture. Our integrated approach synchronizes clinical excellence with financial performance,
                      delivering measurable EBITDA improvements that compound over time.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Clean Claim Rate", value: "99%" },
                      { label: "Cost Reduction", value: "Up to 60%" },
                      { label: "US RCM Experience", value: "10+ Years" },
                      { label: "Support Coverage", value: "24/7" },
                    ].map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                        <span className="font-semibold">{stat.label}</span>
                        <span className="text-2xl font-bold text-brand-orange">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* 9. IHS Standards vs Traditional RCM Providers */}
      <ScrollReveal>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                IHS Standards vs <span className="text-brand-orange">Traditional</span> RCM Providers
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how Imperial Healthcare Systems delivers superior value across every critical metric
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 rounded-2xl p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-brand-blue/20">
                      <th className="p-4 font-bold text-left">Feature</th>
                      <th className="p-4 font-bold text-center text-brand-orange">
                        Imperial <span className="text-black">Healthcare Systems</span>
                      </th>
                      <th className="p-4 font-bold text-center text-muted-foreground">Traditional Providers</th>
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
                        <td className="p-4 text-center font-semibold text-brand-blue">{row.ihs}</td>
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
      </ScrollReveal>

      {/* 13. Industries We Serve */}
      <ScrollReveal>
      <section className="py-24 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Industries We <span className="text-brand-orange">Serve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized RCM expertise across diverse healthcare sectors with deep understanding of
                specialty-specific requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { name: "Clinics", icon: "🏥", desc: "Primary care & family medicine" },
                { name: "Hospitals", icon: "🏛️", desc: "Acute care & multi-specialty" },
                { name: "ASC", icon: "⚕️", desc: "Ambulatory surgery centers" },
                { name: "DME", icon: "🦽", desc: "Durable medical equipment" },
                { name: "Chiropractic", icon: "🦴", desc: "Spine & musculoskeletal" },
                { name: "Mental Health", icon: "🧠", desc: "Behavioral health services" },
                { name: "Podiatry", icon: "🦶", desc: "Foot & ankle specialists" },
                { name: "Urgent Care", icon: "🚑", desc: "Immediate care facilities" },
                { name: "Multi-Specialty", icon: "🏨", desc: "Comprehensive practices" },
                { name: "Solo Physicians", icon: "👨‍⚕️", desc: "Independent practitioners" },
              ].map((industry, idx) => (
                <Card
                  key={idx}
                  className="border-2 border-brand-blue/10 hover:border-brand-blue/30 transition-all duration-300 hover:scale-105 text-center group"
                >
                  <CardContent className="pt-6">
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <h3 className="font-bold mb-1 text-brand-blue">{industry.name}</h3>
                    <p className="text-xs text-muted-foreground">{industry.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-12 border-2 border-brand-orange/20 bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">Specialty-Specific Expertise</h3>
                <p className="text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
                  Each healthcare specialty has unique coding requirements, payer policies, and compliance regulations.
                  Our specialized teams understand the nuances of your practice, ensuring accurate claims, faster
                  reimbursements, and optimal revenue outcomes tailored to your specific industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* 11. Proven Success Stories */}
      <ScrollReveal>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Proven <span className="text-brand-orange">Success Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from real healthcare providers who transformed their operations with Imperial Healthcare
                Systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Multi-Specialty Clinic Transformation",
                  location: "Phoenix, AZ",
                  challenge: "High denial rates (25%) and AR days exceeding 70 days",
                  solution: "Implemented comprehensive RCM with intelligent denial prevention",
                  results: [
                    "Reduced AR days by 40% (70 → 42 days)",
                    "Improved clean claim rate to 99%",
                    "Decreased denial rate from 25% to 8%",
                    "Increased monthly collections by 35%",
                  ],
                  savings: "$480,000",
                  period: "First Year",
                  pdfUrl: "/case-studies/Case-Study-Multi-Specialty-Clinic-Phoenix-Arizona.pdf", // Added PDF URL
                },
                {
                  title: "Hospital System Cost Optimization",
                  location: "Tampa, FL",
                  challenge: "High operational costs with 15 in-house RCM staff",
                  solution: "Transitioned to IHS dedicated staffing model with advanced analytics tools",
                  results: [
                    "Saved 60% in staffing costs",
                    "Maintained 99% clean claim accuracy",
                    "Reduced claim processing time by 45%",
                    "Zero operational disruption during transition",
                  ],
                  savings: "$540,000",
                  period: "Annual Savings",
                  pdfUrl: "/case-studies/Hospital-System-Cost-Optimization-Tampa-FL.pdf", // Added PDF URL
                },
                {
                  title: "DME Provider Revenue Recovery",
                  location: "Dallas, TX",
                  challenge: "Cash flow issues with $850K locked in aging AR",
                  solution: "Aggressive AR follow-up with IHS specialized team",
                  results: [
                    "Recovered $680K from aging AR",
                    "Improved cash flow by 45%",
                    "Reduced AR days to industry-leading 28 days",
                    "Ongoing collections increased 30%",
                  ],
                  savings: "$680,000",
                  period: "Recovered",
                  pdfUrl: "/case-studies/DME-Working-Capital-Optimization-Dallas-TX.pdf", // Added PDF URL
                },
                {
                  title: "Ambulatory Surgery Center (ASC) Revenue Optimization",
                  location: "San Diego, CA",
                  challenge:
                    "High claim denials and delayed reimbursements due to complex payer rules and limited billing staff",
                  solution: "Specialized ASC RCM team + automated pre-authorization and eligibility verification",
                  results: [
                    "Reduced claim denial rate by 45%",
                    "Faster reimbursements with improved cash flow",
                    "100% real-time eligibility and authorization checks",
                    "Improved surgeon and patient satisfaction",
                  ],
                  savings: "$420,000",
                  period: "Annual Revenue Improvement",
                  pdfUrl: "/case-studies/Ambulatory-Surgery-Center-ASC-Revenue-Optimization-San-Diego-CA.pdf", // Added PDF URL
                },
              ].map((study, idx) => (
                <Card
                  key={idx}
                  className="border-2 border-brand-blue/20 hover:border-brand-orange/40 transition-all duration-300 hover:scale-[1.02] flex flex-col"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-xl">{study.title}</CardTitle>
                        <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 text-brand-orange" />
                          <span>{study.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-brand-orange">{study.savings}</div>
                        <div className="text-xs text-muted-foreground">{study.period}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <div>
                      <h4 className="font-semibold text-sm text-red-600 mb-1">Challenge:</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-brand-blue mb-1">Solution:</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-green-600 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, ridx) => (
                          <li key={ridx} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t mt-auto">
                      <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white">
                        <a href={study.pdfUrl} download target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* 14. Technology & Security */}
      <ScrollReveal>
      <section id="footer1" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Technology & <span className="text-brand-orange">Security</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Enterprise-grade infrastructure with uncompromising security standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Advanced Capabilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Predictive Denial Analytics: Identify at-risk claims before submission",
                    "Automated Claim Accuracy Checker: Real-time validation against payer rules",
                    "Smart Workflow Automation: Reduce manual tasks by 70%",
                    "Revenue Leakage Detection: Our expert team flags missed charges and underpayments",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-orange/20 hover:border-brand-orange/40 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange/80 rounded-lg flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Security & Compliance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "HIPAA Compliant Infrastructure",
                    "ISO 27001",
                    "256-bit End-to-End Encryption",
                    "Multi-Factor Authentication (MFA)",
                    "Regular Third-Party Security Audits",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* THE IMPERIAL TRANSITION FRAMEWORK */}
      <ScrollReveal>
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase">
                THE <span className="text-brand-orange">IMPERIAL TRANSITION FRAMEWORK</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The mass market reacts; we anticipate. The Imperial Transition is a high-velocity deployment designed to
                dismantle inefficiency and install a sovereign revenue infrastructure within 30 to 60 days.
              </p>
            </div>

            {/* Framework Component */}
            <TransitionFramework />
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* 10. Flexible Pricing Plans */}
      <ScrollReveal>
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Flexible <span className="text-brand-orange">Pricing</span> Plans
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from dedicated staffing, service-based pricing, or custom solutions tailored to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: "Dedicated RCM Staff",
                  desc: "Full-time or part-time skilled professionals",
                  features: [
                    "Certified RCM specialists",
                    "US healthcare trained",
                    "Direct team oversight",
                    "Flexible hours",
                    "50-60% cost savings vs US staff",
                  ],
                  cta: "Get Staffing Quote",
                  popular: false,
                },
                {
                  name: "Service-Based Pricing",
                  desc: "Pay per claim, per encounter, or percentage of collections",
                  features: [
                    "No upfront costs",
                    "Performance-based fees",
                    "Scalable as you grow",
                    "Transparent pricing",
                    "Risk-free trial available",
                  ],
                  cta: "Calculate Your Savings",
                  secondaryCta: "Schedule Consultation", // Add secondary CTA for staffing quote
                  popular: true,
                },
                {
                  name: "Custom Solutions",
                  desc: "Tailored packages for your specific needs",
                  features: [
                    "Hybrid staffing + services",
                    "Multi-location support",
                    "Specialized workflows",
                    "Custom integrations",
                    "Dedicated account manager",
                  ],
                  cta: "Schedule Consultation",
                  popular: false,
                },
              ].map((plan, idx) => (
                <Card
                  key={idx}
                  className={cn(
                    "relative border-2 hover:scale-105 transition-all duration-300",
                    plan.popular ? "border-brand-orange shadow-2xl" : "border-brand-blue/20 hover:border-brand-blue/40",
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-orange to-brand-blue text-white px-6 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.name === "Service-Based Pricing" ? (
                      <div className="space-y-3">
                        <Button
                          className="w-full bg-gradient-to-r from-brand-orange to-brand-blue hover:opacity-90"
                          onClick={() => {
                            const calculatorSection = document.getElementById("calculator")
                            if (calculatorSection) {
                              calculatorSection.scrollIntoView({ behavior: "smooth", block: "start" })
                            }
                          }}
                        >
                          {plan.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          className="w-full bg-brand-blue hover:bg-brand-orange"
                          onClick={() => setIsRCMAuditModalOpen(true)}
                        >
                          {plan.secondaryCta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        className={cn(
                          "w-full",
                          plan.popular
                            ? "bg-gradient-to-r from-brand-orange to-brand-blue hover:opacity-90"
                            : "bg-brand-blue hover:bg-brand-orange",
                        )}
                        onClick={() => setIsRCMAuditModalOpen(true)}
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-12 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 border-2 border-brand-blue/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">Why We Are Cost-Efficient</h3>
                <p className="text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
                  By leveraging skilled manpower from cost-effective regions, implementing intelligent automation, and
                  focusing on continuous process improvement, IHS helps reduce operational costs while maintaining
                  superior quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* 12. Results you have never seen before! */}

      {/* THE IMPERIAL JOURNEY */}
      <ScrollReveal>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase">
                THE <span className="text-brand-orange">IMPERIAL JOURNEY</span>
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-foreground mb-6 max-w-4xl mx-auto">
                From Initial Intelligence to Compounded Yield
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                While competitors provide a &apos;service,&apos; we provide a Journey of Yield. We replace the friction
                of traditional RCM with a seamless, high-standard progression toward financial sovereignty.
              </p>
            </div>

            {/* Progressive Journey Map */}
            <ImperialJourneyMap />
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* comprehensive Contact section */}
      <ScrollReveal>
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Get <span className="text-brand-orange">Started</span> Today
              </h2>
              {/* CHANGE: Replaced static text with animated component */}
              <AnimatedCTAText />
            </div>

            <Card className="border-2 border-brand-blue/30 shadow-2xl">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left info */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a href="mailto:info@imperialhealth.in" className="text-brand-blue hover:underline">
                          info@imperialhealthsystems.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <PhoneCall className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground">US: +1-XXX-XXX-XXXX</p>
                        <p className="text-muted-foreground">India: +91-XXXXXXXXXX</p>
                      </div>
                    </div>

                    {/* CHANGE */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Office Locations</h3>

                        {/* US Location */}
                        <div className="mb-6">
                          <p className="font-medium text-brand-orange mb-1">
                            United States - Imperial Healthcare Systems LLC
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Registered Office:</strong>
                            <br />
                            212 N. 2nd St. STE 100,
                            <br />
                            Richmond, KY 40475, United States
                          </p>
                        </div>

                        {/* India Location */}
                        <div className="mt-6">
                          <p className="font-medium text-brand-blue mb-1">
                            India - Imperial Healthcare Systems Pvt. Ltd.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Registered Office:</strong>
                            <br />
                            Unit No. 219 2F, ILD Trade Centre,
                            <br />
                            Sector 47, Sohna Road,
                            <br />
                            Gurugram - 122018, Haryana, India
                          </p>

                          <p className="text-sm text-muted-foreground mt-2">
                            <strong>Administrative Office:</strong>
                            <br />
                            Unit No. 219 2F, ILD Trade Centre,
                            <br />
                            Sector 47, Sohna Road,
                            <br />
                            Gurugram - 122018, Haryana, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right action buttons */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-200 shadow-lg">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-6 w-6 text-cyan-600" />
                          Advantages of Audit
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="text-brand-blue font-semibold">Compare your practice performance</span> with
                          industry benchmarks and{" "}
                          <span className="text-brand-orange font-semibold">HBMA Standards</span>, be aware of your
                          statistics and KPI to{" "}
                          <span className="text-cyan-600 font-semibold">boost your practice performance</span>.
                        </p>
                      </div>
                      <Button
                        size="lg"
                        onClick={() => setContactModalOpen(true)}
                        className="
                      w-full
                      rounded-full
                      px-10
                      py-7
                      text-lg
                      font-semibold
                      bg-cyan-500
                      hover:bg-cyan-600
                      text-white
                      shadow-lg
                      hover:shadow-xl
                      transition-all
                    "
                      >
                        Get a Free Audit
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>

                    {/* CHANGE: Fixed mailto link to use proper anchor element */}
                    <Button size="lg" asChild className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white">
                      <a href="mailto:info@imperialhealthsystems.com?subject=Consultation%20Request%20-%20Imperial%20Healthcare%20Systems&body=Hello%20Imperial%20Healthcare%20Systems%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%20how%20your%20RCM%20solutions%20can%20help%20my%20practice.%0A%0APlease%20provide%20available%20times%20for%20a%20consultation.%0A%0AThank%20you%2C">
                        Schedule a Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>

                   <Button
                    size="lg"
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = "/Imperial-company-profile.pdf" // place PDF in /public
                      link.download = "Imperial-company-profile.pdf"
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                    }}
                  >
                    Download Company Profile
                    <Download className="ml-2 h-5 w-5" />
                  </Button>

                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <SiteFooter />

      <FloatingChatbot onOpenContactModal={() => setContactModalOpen(true)} />

      <RCMAuditModal isOpen={isRCMAuditModalOpen} onClose={() => setIsRCMAuditModalOpen(false)} />
      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onOpenRCMAudit={() => setIsRCMAuditModalOpen(true)}
      />
    </div>
  )
}
