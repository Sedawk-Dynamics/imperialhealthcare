"use client"

import { motion } from "framer-motion"

interface AnimatedHeroHeadlineProps {
  line1: string
  line2: string
  line3: string
  highlightLine2?: boolean
  highlightLine3?: boolean
}

export function AnimatedHeroHeadline({
  line1,
  line2,
  line3,
  highlightLine2 = false,
  highlightLine3 = false,
}: AnimatedHeroHeadlineProps) {
  // Calculate delays for sequential animation
  const line1Duration = line1.length * 0.03 // 0.03s per character
  const line2Duration = line2.length * 0.03
  const line2Delay = line1Duration
  const line3Delay = line1Duration + line2Duration

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1], // ease-out curve
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // 30ms delay between each letter
      },
    },
  }

  const splitIntoLetters = (text: string) => {
    return text.split("").map((char, index) => ({
      char: char === " " ? "\u00A0" : char, // Use non-breaking space for proper spacing
      index,
    }))
  }

  return (
    <div className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-center text-white">
      {/* Line 1 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="inline-block"
      >
        {splitIntoLetters(line1).map((letter) => (
          <motion.span key={`line1-${letter.index}`} variants={letterVariants} className="inline-block">
            {letter.char}
          </motion.span>
        ))}
      </motion.div>

      <br />

      {/* Line 2 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className={`inline-block ${highlightLine2 ? "text-brand-orange" : ""}`}
        style={{ animationDelay: `${line2Delay}s` }}
        transition={{ delayChildren: line2Delay }}
      >
        {splitIntoLetters(line2).map((letter) => (
          <motion.span
            key={`line2-${letter.index}`}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: line2Delay + letter.index * 0.03,
                },
              },
            }}
            className="inline-block"
          >
            {letter.char}
          </motion.span>
        ))}
      </motion.div>

      <br />

      {/* Line 3 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className={`inline-block ${highlightLine3 ? "text-brand-orange" : ""}`}
        style={{ animationDelay: `${line3Delay}s` }}
        transition={{ delayChildren: line3Delay }}
      >
        {splitIntoLetters(line3).map((letter) => (
          <motion.span
            key={`line3-${letter.index}`}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: line3Delay + letter.index * 0.03,
                },
              },
            }}
            className="inline-block"
          >
            {letter.char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
