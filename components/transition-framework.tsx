"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Settings, Shield, TrendingUp, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Phase {
  id: number
  roman: string
  title: string
  shortTitle: string
  description: string
  icon: React.ElementType
  position: string // CSS positioning class
}

const phases: Phase[] = [
  {
    id: 1,
    roman: "I",
    title: "FORENSIC DISCOVERY & REVENUE SALVAGE",
    shortTitle: "Forensic Discovery",
    description:
      "An exhaustive, non-invasive audit of your trailing 12-month AR. We don't just 'review' data; we perform a forensic autopsy to identify and rescue latent capital trapped by previous administrative failures.",
    icon: Search,
    position: "top-0 left-0",
  },
  {
    id: 2,
    roman: "II",
    title: "ARCHITECTURAL SYNCHRONIZATION",
    shortTitle: "System Integration",
    description:
      "Rapid integration of our proprietary Intelligence Engine with your existing EMR/PM ecosystem via secure VDI. Unlike legacy firms that take months to 'onboard,' our agile framework ensures zero downtime and immediate data fluidity.",
    icon: Settings,
    position: "top-0 right-0",
  },
  {
    id: 3,
    roman: "III",
    title: "OPERATIONAL STABILIZATION (THE 99% BENCHMARK)",
    shortTitle: "99% Stabilization",
    description:
      "Deployment of elite, specialized strike teams to enforce the Imperial Standard: a 99% first-pass clean claim rate. We stabilize the cash-flow volatility that plagues standard RCM models.",
    icon: Shield,
    position: "bottom-0 right-0",
  },
  {
    id: 4,
    roman: "IV",
    title: "EBITDA OPTIMIZATION & WEALTH RECOVERY",
    shortTitle: "Wealth Recovery",
    description:
      "Continuous forensic auditing focused on your bottom line. We move beyond simple collections to strategic cost reduction and long-term margin expansion, ensuring your practice yields its maximum theoretical value.",
    icon: TrendingUp,
    position: "bottom-0 left-0",
  },
]

export function TransitionFramework() {
  const [activePhase, setActivePhase] = useState<number | null>(null)
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null)
  const [centerHovered, setCenterHovered] = useState(false)
  const [isAnyPhaseHovered, setIsAnyPhaseHovered] = useState(false)
  const [rotationAngle, setRotationAngle] = useState(0)
  const animationFrameRef = useRef<number>()
  const lastTimeRef = useRef<number>(Date.now())

  useEffect(() => {
    // Rotation speed calculation
    const getRotationDuration = () => (centerHovered ? 15000 : 28000) // 28-32 seconds, using 28

    const animate = (currentTime: number) => {
      // Only update rotation if not paused by hover
      if (!isAnyPhaseHovered) {
        const deltaTime = currentTime - lastTimeRef.current
        const rotationDuration = getRotationDuration()
        const rotationSpeed = 360 / rotationDuration // degrees per millisecond

        setRotationAngle((prev) => (prev + rotationSpeed * deltaTime) % 360)
      }

      lastTimeRef.current = currentTime
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Start animation immediately
    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isAnyPhaseHovered, centerHovered])

  return (
    <div className="w-full">
      {/* Desktop: Circular/Quadrant Layout */}
      <div className="hidden lg:block">
        <div className="relative mx-auto max-w-4xl aspect-square">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: centerHovered ? 1.03 : 1,
              opacity: 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onMouseEnter={() => setCenterHovered(true)}
            onMouseLeave={() => setCenterHovered(false)}
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full z-10",
              "bg-gradient-to-br from-brand-orange/10 to-brand-blue/10",
              "border-2 transition-all duration-400 ease-out cursor-pointer",
              centerHovered ? "border-brand-orange shadow-[0_0_40px_rgba(251,146,60,0.4)]" : "border-brand-orange/30",
            )}
            style={{
              boxShadow: centerHovered
                ? "0 0 60px rgba(251, 146, 60, 0.5), 0 0 120px rgba(251, 146, 60, 0.3)"
                : undefined,
            }}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center">
              {centerHovered && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0%, rgba(251, 146, 60, 0.5) 50%, transparent 100%)",
                    mask: "radial-gradient(circle, transparent 95%, black 95%)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              )}
              <h3 className="text-xl font-bold uppercase text-foreground mb-2 relative z-10">
                Imperial Transition Engine
              </h3>
              <p className="text-sm text-muted-foreground relative z-10">30–60 Day Sovereign Revenue Deployment</p>
            </div>
          </motion.div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            {/* Circular orbital path */}
            <motion.circle
              cx="50%"
              cy="50%"
              r="32%"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              className="text-brand-orange"
              strokeOpacity="0.3"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />

            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
              const radius = 32 // matches orbit radius percentage
              const angleInRadians = ((angle + rotationAngle * 0.3) * Math.PI) / 180 // Slow arrow drift
              const x = 50 + radius * Math.cos(angleInRadians)
              const y = 50 + radius * Math.sin(angleInRadians)

              // Calculate rotation to point clockwise along the path
              const arrowRotation = angle + rotationAngle * 0.3 + 90

              return (
                <g key={index} transform={`translate(${x}%, ${y}%)`}>
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity:
                        hoveredPhase !== null
                          ? Math.abs((angle % 360) - (rotationAngle % 360)) < 60
                            ? 0.8
                            : 0.3
                          : 0.5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight
                      className="text-brand-orange"
                      style={{
                        transform: `rotate(${arrowRotation}deg) translate(-8px, -8px)`,
                        transformOrigin: "center",
                      }}
                      width="16"
                      height="16"
                      strokeWidth="2"
                    />
                  </motion.g>
                </g>
              )
            })}
          </svg>

          {phases.map((phase, index) => {
            const Icon = phase.icon
            const isActive = activePhase === phase.id || hoveredPhase === phase.id
            const isDimmed = hoveredPhase !== null && hoveredPhase !== phase.id

            const baseAngles = [0, 90, 180, 270]
            const angleInRadians = ((baseAngles[index] + rotationAngle) * Math.PI) / 180

            const radius = 32 // percentage of container
            const x = 50 + radius * Math.cos(angleInRadians) // center at 50%
            const y = 50 + radius * Math.sin(angleInRadians)

            return (
              <motion.div
                key={phase.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: isDimmed ? 0.4 : 1,
                  left: `${x}%`,
                  top: `${y}%`,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.15,
                  ease: "easeOut",
                  // Smooth position transitions when not hovering
                  left: { type: "tween", ease: "linear" },
                  top: { type: "tween", ease: "linear" },
                }}
                className="absolute w-64 cursor-pointer -translate-x-1/2 -translate-y-1/2 z-20"
                onMouseEnter={() => {
                  setHoveredPhase(phase.id)
                  setIsAnyPhaseHovered(true)
                }}
                onMouseLeave={() => {
                  setHoveredPhase(null)
                  setIsAnyPhaseHovered(false)
                }}
                onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.03 : 1,
                    boxShadow: isActive
                      ? "0 20px 40px rgba(251, 146, 60, 0.4), 0 0 60px rgba(251, 146, 60, 0.3)"
                      : "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "bg-background border-2 rounded-xl p-6 transition-all duration-300",
                    isActive ? "border-brand-orange" : "border-border hover:border-brand-orange/50",
                  )}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <motion.div
                      animate={{ rotate: isActive ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                      className={cn(
                        "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center",
                        isActive
                          ? "bg-gradient-to-br from-brand-orange to-orange-600"
                          : "bg-gradient-to-br from-brand-blue to-blue-600",
                      )}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-brand-orange mb-1">PHASE {phase.roman}</div>
                      <h4 className="text-sm font-bold text-foreground leading-tight">{phase.shortTitle}</h4>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-border">
                          <h5 className="text-xs font-bold text-foreground uppercase mb-2">{phase.title}</h5>
                          <p className="text-xs text-muted-foreground leading-relaxed">{phase.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Mobile: Vertical Stepper */}
      <div className="lg:hidden space-y-6">
        {phases.map((phase, index) => {
          const Icon = phase.icon
          const isExpanded = activePhase === phase.id

          return (
            <motion.div
              key={phase.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              {index < phases.length - 1 && <div className="absolute left-6 top-16 w-0.5 h-full bg-border -z-10" />}

              <div
                className={cn(
                  "bg-background border-2 rounded-xl p-5 cursor-pointer transition-all duration-300",
                  isExpanded ? "border-brand-orange shadow-xl" : "border-border",
                )}
                onClick={() => setActivePhase(isExpanded ? null : phase.id)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center",
                      isExpanded
                        ? "bg-gradient-to-br from-brand-orange to-orange-600"
                        : "bg-gradient-to-br from-brand-blue to-blue-600",
                    )}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-brand-orange mb-1">PHASE {phase.roman}</div>
                    <h4 className="text-base font-bold text-foreground mb-2">{phase.shortTitle}</h4>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <h5 className="text-sm font-bold text-foreground uppercase mb-2">{phase.title}</h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
