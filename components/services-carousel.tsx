"use client"

import { motion, useAnimationFrame } from "framer-motion"
import { useRef, useState } from "react"
import {
  FileText,
  CheckCircle,
  DollarSign,
  Phone,
  XCircle,
  Users,
  ShieldCheck,
  FileCheck,
  ClipboardList,
  UserCheck,
  BarChart3,
  Workflow,
  Activity,
  FolderOpen,
  Mail,
} from "lucide-react"

export function ServicesCarousel() {
  const [position, setPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState(0)
  const [isMoving, setIsMoving] = useState(false)

  const SPEED = 20
  const lerp = (a: number, b: number, n: number) => a + (b - a) * n

  useAnimationFrame(() => {
    if (!containerRef.current || !isMoving) return

    const rect = containerRef.current.getBoundingClientRect()
    const mouseX = mousePos

    const leftZone = rect.left + rect.width * 0.25
    const rightZone = rect.left + rect.width * 0.75

    let speed = 0
    if (mouseX < leftZone) speed = SPEED
    if (mouseX > rightZone) speed = -SPEED

    setPosition((prev) => {
      let next = lerp(prev, prev + speed, 0.18)

      const itemWidth = 480 + 24
      const totalWidth = itemWidth * services.length * 3

      if (next <= -totalWidth / 3) next += totalWidth / 3
      if (next >= 0) next -= totalWidth / 3

      return next
    })
  })

  const services = [
    {
      title: "Revenue Cycle Operations",
      services: [
        { name: "Charge Entry", icon: FileText },
        { name: "Coding & Auditing", icon: FileCheck },
        { name: "Payment Posting", icon: DollarSign },
        { name: "AR Follow-up", icon: Activity },
        { name: "Denial Management", icon: XCircle },
      ],
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      image: "/modern-healthcare-revenue-cycle-management-dashboa.jpg",
    },
    {
      title: "Patient & Front Office Services",
      services: [
        { name: "Patient Calling", icon: Phone },
        { name: "Eligibility Verification", icon: CheckCircle },
        { name: "Pre-Authorization", icon: ClipboardList },
        { name: "Virtual Front Desk", icon: Users },
        { name: "Credentialing", icon: ShieldCheck },
      ],
      color: "bg-gradient-to-br from-orange-400 to-amber-500",
      image: "/professional-healthcare-team-working-on-computers.jpg",
    },
    {
      title: "Analytics & Automation",
      services: [
        { name: "Reporting & Analytics", icon: BarChart3 },
        { name: "Predictive Denial Analytics", icon: Activity },
        { name: "Automated Claim Accuracy Checker", icon: CheckCircle },
        { name: "Workflow Automation", icon: Workflow },
        { name: "Real-time Dashboard", icon: Activity },
      ],
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      image: "/artificial-intelligence-healthcare-technology-abst.jpg",
    },
    {
      title: "Extended Operations Support",
      services: [
        { name: "Virtual Staffing", icon: UserCheck },
        { name: "Medical Records Management", icon: FolderOpen },
        { name: "Fax & Intake Operations", icon: Mail },
      ],
      color: "bg-gradient-to-br from-green-500 to-green-600",
      image: "/healthcare-data-security-encryption-technology.jpg",
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden bg-black">
      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto mt-4"
        >
          End-to-end RCM and healthcare operations support, delivered with precision and scale.
        </motion.p>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="relative"
        onMouseMove={(e) => {
          setMousePos(e.clientX)
          setIsMoving(true)
        }}
        onMouseLeave={() => setIsMoving(false)}
        style={{ perspective: "1200px" }}
      >
        <motion.div className="flex gap-6 transform-gpu" style={{ x: position, willChange: "transform" }}>
          {[...services, ...services, ...services].map((service, index) => (
            <motion.div key={index} className="flex-shrink-0 w-[480px] group transform-gpu">
              <div
                className={`relative h-[520px] rounded-3xl overflow-hidden 
                ${service.color}
                transition-all duration-500 ease-out
                group-hover:scale-[1.03] group-hover:-translate-y-3
                group-hover:shadow-2xl group-hover:shadow-[#F49446]/20`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Text content container with proper height constraints */}
                <div className="relative z-10 h-[240px] p-8 pb-6 flex flex-col">
                  <h3 className="text-3xl font-bold mb-6 text-white flex-shrink-0">{service.title}</h3>
                  {/* Services list with scroll if needed (though shouldn't happen with current content) */}
                  <div className="space-y-3 overflow-y-auto flex-1">
                    {service.services.map((item, idx) => {
                      const Icon = item.icon
                      return (
                        <div key={idx} className="flex items-center gap-3 text-white">
                          <Icon className="w-5 h-5 flex-shrink-0" />
                          <span className="text-base font-medium">{item.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Image container - fixed height at bottom, separate from text */}
                <div className="absolute bottom-0 left-0 right-0 h-[280px] z-0 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover object-bottom transition-all duration-700 ease-out group-hover:opacity-80 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
