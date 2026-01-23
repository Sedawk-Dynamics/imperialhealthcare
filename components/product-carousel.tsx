"use client"

import { motion, useAnimationFrame } from "framer-motion"
import { useRef, useState } from "react"
import { Activity, TrendingUp, Shield, Clock, DollarSign } from "lucide-react"

export function ProductCarousel() {
  const [position, setPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState(0)
  const [isMoving, setIsMoving] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

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
      const totalWidth = itemWidth * products.length * 3

      if (next <= -totalWidth / 3) next += totalWidth / 3
      if (next >= 0) next -= totalWidth / 3

      return next
    })
  })

  const products = [
    {
      title: "Revenue Cycle Management",
      description: "Complete RCM solutions from eligibility to collections",
      beforeImage: "/modern-healthcare-revenue-cycle-management-dashboa.jpg",
      afterImage: "/modern-healthcare-revenue-cycle-management-dashboa.jpg",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      title: "Healthcare Operations Support",
      description: "Virtual staffing and administrative support solutions",
      beforeImage: "/professional-healthcare-team-working-on-computers.jpg",
      afterImage: "/professional-healthcare-team-working-on-computers.jpg",
      color: "bg-gradient-to-br from-orange-400 to-amber-500",
    },
    {
      title: "Advanced Analytics Solutions",
      description: "Expert analysis with advanced technology for predictive insights",
      beforeImage: "/artificial-intelligence-healthcare-technology-abst.jpg",
      afterImage: "/artificial-intelligence-healthcare-technology-abst.jpg",
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    },
    {
      title: "Compliance & Security",
      description: "HIPAA-compliant with SOC2 readiness",
      beforeImage: "/healthcare-data-security-encryption-technology.jpg",
      afterImage: "/healthcare-data-security-encryption-technology.jpg",
      color: "bg-gradient-to-br from-green-500 to-green-600",
    },
  ]

  const benefits = [
    {
      text: "Cost Efficiency",
      icon: DollarSign,
      gradient: "from-blue-500 to-blue-600",
      description: "Save up to 60% on operational costs",
    },
    {
      text: "Expert-Driven Systems",
      icon: Activity,
      gradient: "from-orange-500 to-orange-600",
      description: "Specialized team with advanced tools",
    },
    {
      text: "99% Clean Claim Rate",
      icon: TrendingUp,
      gradient: "from-cyan-500 to-cyan-600",
      description: "Zero-error commitment with quality checks",
    },
    {
      text: "10+ Years Expertise",
      icon: Shield,
      gradient: "from-green-500 to-green-600",
      description: "Deep US healthcare knowledge",
    },
    {
      text: "24/7 Support",
      icon: Clock,
      gradient: "from-purple-500 to-purple-600",
      description: "Round-the-clock assistance",
    },
  ]

  const handleBenefitClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section id="services" className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block text-3xl sm:text-4xl mb-3 sm:mb-4"
        >
          🔥
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-4"
        >
          Transform Your Healthcare Operations
          <br />
          <span className="text-[#F49446]">With Expert-Led Solutions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3 sm:mt-4 px-4"
        >
          Experience the future of healthcare operations with Imperial Healthcare Systems
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.button
                key={index}
                onClick={() => handleBenefitClick(index)}
                className={`flex flex-col items-center text-center transition-all duration-300 group cursor-pointer hover:bg-gray-800/40 active:bg-gray-700/50 rounded-xl p-3 sm:p-4 md:p-6 min-h-[120px] sm:min-h-[140px] ${
                  activeIndex === index ? "bg-gray-800/60 scale-105" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${benefit.gradient} group-hover:opacity-90 flex items-center justify-center shadow-lg transition-transform duration-300 mb-2 sm:mb-3 md:mb-4 ${
                    activeIndex === index ? "scale-110 shadow-xl" : "group-hover:scale-105"
                  }`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <span
                  className={`text-xs sm:text-sm md:text-base font-medium transition-colors mb-1 sm:mb-2 ${
                    activeIndex === index ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                  }`}
                >
                  {benefit.text}
                </span>
                <p className="text-[10px] sm:text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                  {benefit.description}
                </p>
              </motion.button>
            )
          })}
        </div>
      </div>

      <div className="relative text-center mb-8 sm:mb-10 md:mb-12 px-4">
        <motion.h3
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Our Core Services
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-xs sm:text-sm md:text-base"
        >
          Comprehensive solutions powered by our expert team, available 24/7
        </motion.p>
      </div>

      <div
        ref={containerRef}
        className="relative touch-pan-y"
        onMouseMove={(e) => {
          setMousePos(e.clientX)
          setIsMoving(true)
        }}
        onMouseLeave={() => setIsMoving(false)}
        onTouchStart={() => setIsMoving(false)}
        style={{ perspective: "1200px" }}
      >
        <motion.div
          className="flex gap-4 sm:gap-6 transform-gpu px-4 sm:px-0"
          style={{ x: position, willChange: "transform" }}
        >
          {[...products, ...products, ...products].map((product, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] group transform-gpu"
            >
              <div
                className={`relative h-[380px] sm:h-[440px] md:h-[480px] lg:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden 
                ${product.color}
                transition-all duration-500 ease-out
                group-hover:scale-[1.03] group-hover:-translate-y-3
                group-hover:shadow-2xl group-hover:shadow-[#F49446]/20`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative z-10 p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white">{product.title}</h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/90">{product.description}</p>
                </div>

                <img
                  src={product.beforeImage || "/placeholder.svg"}
                  alt={product.title}
                  className="absolute bottom-0 left-0 right-0 h-[240px] sm:h-[280px] md:h-[320px] lg:h-[340px] object-cover object-bottom transition-all duration-700 ease-out group-hover:opacity-80 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
