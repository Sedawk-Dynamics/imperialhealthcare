"use client"

import { useEffect, useRef, useState } from "react"

export function AnimatedCTAText() {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasStarted = useRef(false)
  const loopTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const line1 = "Ready to transform your healthcare operations?"
  const line2 = "Contact us for a consultation"
  const consultationStartIndex = line2.indexOf("consultation")

  const [showLine1, setShowLine1] = useState(false)
  const [line1Text, setLine1Text] = useState("")
  const [showLine2, setShowLine2] = useState(false)
  const [line2Text, setLine2Text] = useState("")
  const [showUnderline, setShowUnderline] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (hasStarted.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          startAnimationLoop()
        }
      },
      { threshold: 0.4 },
    )

    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
      if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current)
    }
  }, [])

  const startAnimationLoop = async () => {
    setFadeOut(false)
    setShowLine1(false)
    setLine1Text("")
    setShowLine2(false)
    setLine2Text("")
    setShowUnderline(false)

    await new Promise((resolve) => setTimeout(resolve, 100))

    setShowLine1(true)
    for (let i = 0; i <= line1.length; i++) {
      setLine1Text(line1.slice(0, i))
      await new Promise((resolve) => setTimeout(resolve, 40))
    }

    await new Promise((resolve) => setTimeout(resolve, 500))

    setShowLine2(true)
    for (let i = 0; i <= line2.length; i++) {
      setLine2Text(line2.slice(0, i))
      await new Promise((resolve) => setTimeout(resolve, 40))
    }

    setShowUnderline(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setFadeOut(true)
    await new Promise((resolve) => setTimeout(resolve, 300))

    await new Promise((resolve) => setTimeout(resolve, 100))

    loopTimeoutRef.current = setTimeout(() => {
      startAnimationLoop()
    }, 0)
  }

  const renderLine2 = () => {
    // If typing is not complete, just show the typed text with gradient
    if (line2Text !== line2) {
      return line2Text
    }

    // Once typing is complete, wrap "consultation" for underline animation
    const parts = line2.split("consultation")

    return (
      <>
        {parts[0]}
        <span
          className={`relative inline-block ${showUnderline ? "font-semibold" : ""}`}
          style={{
            background: "linear-gradient(90deg, #1E3A8A 0%, #14B8A6 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          consultation
          {showUnderline && (
            <span
              className="absolute left-0 h-[2px] bg-[#FF7A00]"
              style={{
                bottom: "-4px",
                width: "100%",
                transformOrigin: "left",
                animation: "underlineSlide 400ms ease-out forwards",
              }}
            />
          )}
        </span>
        {parts[1]}
      </>
    )
  }

  return (
    <>
      <style jsx>{`
        @keyframes underlineSlide {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
      <div ref={containerRef} className="flex flex-col items-center justify-center text-center space-y-2">
        {showLine1 && (
          <p
            className={`text-xl transition-opacity duration-300 ${fadeOut ? "opacity-0" : "opacity-100"}`}
            style={{
              background: "linear-gradient(90deg, #1E3A8A 0%, #14B8A6 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              whiteSpace: "pre-wrap",
            }}
          >
            {line1Text}
          </p>
        )}

        {showLine2 && (
          <div
            className={`text-lg min-h-[28px] flex items-center justify-center transition-opacity duration-300 ${fadeOut ? "opacity-0" : "opacity-100"}`}
            style={{
              whiteSpace: "pre-wrap",
            }}
          >
            {renderLine2()}
          </div>
        )}
      </div>
    </>
  )
}
