"use client"

import { useEffect, useRef, useState } from "react"

interface JourneyPhase {
  id: number
  title: string
  subtitle: string
  description: string
  bullets: Array<{ label: string; text: string }>
}

const phases: JourneyPhase[] = [
  {
    id: 1,
    title: "PHASE 1 — EXPLORATION & INTELLIGENCE",
    subtitle: "THE FIRST LIGHT",
    description: 'Establishing the IHS "Torch" of deep domain authority.',
    bullets: [
      {
        label: "High-Value Intelligence Injection:",
        text: "Proprietary insights on payer volatility and regulatory shifts tailored to your specialty.",
      },
      {
        label: "The Imperial Vision Briefing:",
        text: "Demonstration of how we bridge rising US administrative overhead with aggressive revenue capture.",
      },
      {
        label: "The Diagnostic RFP:",
        text: "Precision data-gathering that quantifies revenue leakage before a contract is signed.",
      },
    ],
  },
  {
    id: 2,
    title: "PHASE 2 — DIAGNOSTIC & STRATEGY",
    subtitle: "THE ARCHITECTURAL DEEP-DIVE",
    description: "Proving the Zero-Error Operational Promise through empirical data.",
    bullets: [
      {
        label: "The RCM Health Audit:",
        text: "Hard-target analysis of Days in AR and Net Collection Ratios.",
      },
      {
        label: "Predictive Proposal Development:",
        text: "Guaranteed 99% clean claim rate and 60% friction reduction.",
      },
      {
        label: "The Imperial Roadmap:",
        text: "Definitive transition plan from manual billing to AI-augmented yield systems.",
      },
    ],
  },
  {
    id: 3,
    title: "PHASE 3 — THE IMPERIAL COMMITMENT",
    subtitle: "INSTITUTIONAL INTEGRITY",
    description: "Transparency, accountability, and uncompromising ethics.",
    bullets: [
      {
        label: "The Radical Transparency Session:",
        text: "Line-by-line review of the partnership — no fine print.",
      },
      {
        label: "The Mutual Success Compact:",
        text: "KPIs and communication cadences hard-coded into accountability.",
      },
      {
        label: "Tier-1 Security Execution:",
        text: "SOC2-ready, HIPAA-compliant contract vault.",
      },
    ],
  },
  {
    id: 4,
    title: "PHASE 4 — AGILE TRANSITION",
    subtitle: "RAPID STABILIZATION",
    description: "Speed, precision, and future-ready execution.",
    bullets: [
      {
        label: "Vision Alignment Kickoff:",
        text: "Introduction to your dedicated Imperial Strike Team.",
      },
      {
        label: "Intelligent Systems Onboarding:",
        text: "Instant activation of Claim Accuracy and Predictive Denial Analytics.",
      },
      {
        label: "Global Relationship Architecture:",
        text: "US-based strategists paired with 24/7 elite operational leads in India.",
      },
    ],
  },
  {
    id: 5,
    title: "PHASE 5 — OPERATIONAL EXCELLENCE",
    subtitle: "THE IMPERIAL BENCHMARK",
    description: "Standardizing perfection across the revenue cycle.",
    bullets: [
      {
        label: "Process Blueprinting:",
        text: "Zero-deviation workflows from eligibility through appeals.",
      },
      {
        label: "The Imperial Cadence:",
        text: "Weekly huddles and monthly deep-dive performance forensics.",
      },
      {
        label: "The Sovereign Dashboard:",
        text: "Real-time, ungated visibility into every dollar.",
      },
    ],
  },
  {
    id: 6,
    title: "PHASE 6 — COMPOUND MASTERY & YIELD",
    subtitle: "THE IMPERIAL CRESCENDO",
    description: "Continuous optimization and strategic evolution.",
    bullets: [
      {
        label: "Proactive Intelligence Loops:",
        text: "Predictive analytics that prevent revenue leaks before they occur.",
      },
      {
        label: "Strategic Growth Advisory:",
        text: "Quarterly business reviews with actionable market insights.",
      },
      {
        label: "The Perpetual Standard:",
        text: "Ever-evolving best practices that compound your competitive advantage.",
      },
    ],
  },
]

export function ImperialJourneyMap() {
  const [activePhase, setActivePhase] = useState<number | null>(1) // Set Phase 1 as default active
  const [revealedPhases, setRevealedPhases] = useState<Set<number>>(new Set([1, 2, 3, 4, 5, 6])) // All phases visible by default
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const phaseId = Number.parseInt(hash.replace("#phase-", ""))
      if (phaseId >= 1 && phaseId <= 6) {
        setActivePhase(phaseId)
      }
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Center-focused trigger
      threshold: 0.3,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const phaseId = Number.parseInt(entry.target.getAttribute("data-phase") || "1")
          setActivePhase(phaseId)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    phaseRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      phaseRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [prefersReducedMotion])

  const handlePhaseClick = (phaseId: number) => {
    setActivePhase(phaseId)
    window.history.pushState(null, "", `#phase-${phaseId}`)

    const index = phaseId - 1
    phaseRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return (
    <div ref={containerRef} className="relative min-h-[600px]">
      <div className="hidden lg:block">
        <div className="space-y-8 min-h-[400px]">
          {phases.map((phase, index) => {
            const isActive = activePhase === phase.id

            return (
              <div
                key={phase.id}
                ref={(el) => {
                  phaseRefs.current[index] = el
                }}
                data-phase={phase.id}
                id={`phase-${phase.id}`}
                className="transition-all duration-400 ease-out min-h-[300px]"
              >
                <button
                  onClick={() => handlePhaseClick(phase.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      handlePhaseClick(phase.id)
                    }
                  }}
                  className={`w-full text-left group transition-all duration-300 rounded-lg p-6 focus:outline-none focus:ring-4 focus:ring-brand-orange/50 ${
                    isActive
                      ? "bg-gradient-to-r from-brand-orange/10 to-transparent shadow-lg ring-4 ring-brand-orange/30"
                      : "hover:bg-muted/30 opacity-60 hover:opacity-100" // Inactive phases are muted but visible
                  }`}
                  aria-expanded={isActive}
                  aria-controls={`phase-content-${phase.id}`}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 cursor-pointer hover:scale-105 ${
                        isActive
                          ? "bg-brand-orange shadow-xl shadow-brand-orange/50 scale-110"
                          : "bg-muted hover:bg-brand-orange/20 hover:ring-4 hover:ring-brand-orange/30"
                      }`}
                    >
                      <span className={`text-xl font-bold ${isActive ? "text-white" : "text-muted-foreground"}`}>
                        {phase.id}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3
                          className={`text-2xl md:text-3xl font-bold uppercase transition-all duration-300 ${
                            isActive ? "text-brand-orange" : "text-foreground group-hover:text-brand-orange/80"
                          }`}
                        >
                          {phase.title}
                        </h3>
                        <span className="text-sm font-medium text-muted-foreground/60 tracking-wide">
                          Phase {phase.id} of 6
                        </span>
                      </div>
                      <p
                        className={`text-base font-semibold uppercase tracking-wide transition-all duration-300 ${
                          isActive ? "text-brand-orange/90" : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {phase.subtitle}
                      </p>
                      <p
                        className={`text-base italic mt-2 transition-all duration-300 ${
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </button>

                <div
                  id={`phase-content-${phase.id}`}
                  className={`overflow-hidden transition-all duration-400 ease-out ${
                    isActive ? "max-h-[1000px] opacity-100 mt-6" : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={!isActive}
                >
                  <div
                    className={`pl-[5.5rem] pr-6 transition-all duration-400 ease-out ${
                      isActive ? "translate-y-0" : "-translate-y-4"
                    }`}
                  >
                    <ul className="space-y-4">
                      {phase.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start">
                          <span className="mr-3 text-brand-orange font-bold text-lg mt-1">•</span>
                          <span className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            <strong className="text-foreground">{bullet.label}</strong> {bullet.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="lg:hidden space-y-4 min-h-[400px]">
        {phases.map((phase, index) => {
          const isActive = activePhase === phase.id

          return (
            <div
              key={phase.id}
              ref={(el) => {
                phaseRefs.current[index] = el
              }}
              data-phase={phase.id}
              id={`phase-${phase.id}`}
              className={`border border-border rounded-lg overflow-hidden transition-all duration-300 ${
                isActive ? "ring-4 ring-brand-orange/30 shadow-lg" : ""
              }`}
            >
              <button
                onClick={() => handlePhaseClick(isActive ? 0 : phase.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    handlePhaseClick(isActive ? 0 : phase.id)
                  }
                }}
                className={`w-full p-6 text-left transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-orange/50 ${
                  isActive ? "bg-gradient-to-r from-brand-orange/10 to-transparent" : "bg-background hover:bg-muted/50"
                }`}
                aria-expanded={isActive}
                aria-controls={`mobile-phase-content-${phase.id}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isActive ? "bg-brand-orange shadow-lg shadow-brand-orange/40" : "bg-muted"
                    }`}
                  >
                    <span className={`text-base font-bold ${isActive ? "text-white" : "text-muted-foreground"}`}>
                      {phase.id}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4
                        className={`text-base font-bold uppercase transition-all duration-300 ${
                          isActive ? "text-brand-orange" : "text-foreground"
                        }`}
                      >
                        {phase.title}
                      </h4>
                      <span className="text-xs font-medium text-muted-foreground/60 tracking-wide flex-shrink-0">
                        {phase.id}/6
                      </span>
                    </div>
                    <p
                      className={`text-sm font-medium uppercase transition-all duration-300 ${
                        isActive ? "text-brand-orange/90" : "text-muted-foreground"
                      }`}
                    >
                      {phase.subtitle}
                    </p>
                  </div>
                </div>
              </button>

              <div
                id={`mobile-phase-content-${phase.id}`}
                className={`overflow-hidden transition-all duration-400 ease-out ${
                  isActive ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
                aria-hidden={!isActive}
              >
                <div className="p-6 pt-0 space-y-4">
                  <p className="text-base text-muted-foreground italic">{phase.description}</p>
                  <ul className="space-y-3">
                    {phase.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start">
                        <span className="mr-3 text-brand-orange font-bold">•</span>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          <strong className="text-foreground">{bullet.label}</strong> {bullet.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
