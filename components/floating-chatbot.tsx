"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type QA = {
  question: string
  answer: string
  action?: "contact"
}

interface FloatingChatbotProps {
  onOpenContactModal?: () => void
}

export function FloatingChatbot({ onOpenContactModal }: FloatingChatbotProps) {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatView, setChatView] = useState<"questions" | "answer">("questions")
  const [selectedQA, setSelectedQA] = useState<QA | null>(null)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const predefinedQA: QA[] = [
    {
      question: "Hi 👋",
      answer:
        "Hello, I’m IMPERIA.ai — your Revenue Cycle Intelligence assistant. I help healthcare providers optimize cash flow, reduce denials, and improve financial performance.",
    },
    // {
    //   question: "What is Imperial Healthcare Systems?",
    //   answer:
    //     "Imperial Healthcare Systems (IHS) is a technology-enabled healthcare operations and Revenue Cycle Management (RCM) company delivering cost-efficient, high-quality solutions to global healthcare providers.",
    // },
    {
      question: "What is your mission?",
      answer:
        "Our mission is to deliver high-quality, cost-efficient RCM and healthcare solutions using skilled manpower, proven operational systems, and reliable teams.",
    },
    {
      question: "What is your vision?",
      answer:
        "Our vision is to become the world's most trusted provider of technology-enabled healthcare systems and RCM solutions.",
    },
    {
      question: "What are your core values?",
      answer: "Integrity, Accountability, Reliability, Excellence.",
    },
    {
      question: "Where is your office located?",
      answer: "We are located in Bhubaneswar, India.",
    },
    {
      question: "How can I schedule a consultation?",
      answer:
        "You can schedule a consultation through our website or by submitting your details in the contact form. I can help you start the process now.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We offer Revenue Cycle Management, Healthcare Operations Support, and advanced analytics solutions including Charge Entry, Coding, AR Follow-up, Denial Management, Eligibility Verification, Virtual Staffing, Pre-Auth, and Real-time Dashboards.",
    },
    {
      question: "Do you provide Virtual Staffing?",
      answer:
        "Yes, we provide skilled virtual RCM staff, front desk teams, pre-auth specialists, and medical records support.",
    },
    {
      question: "Do you offer expert-driven tools?",
      answer:
        "Yes, our specialized team uses advanced tools including Predictive Denial Analytics, Automated Claim Accuracy Checker, Workflow Automation, and Real-Time Dashboards.",
    },
    {
      question: "What makes IHS different?",
      answer:
        "We offer expert-driven accuracy, cost-efficient skilled manpower, zero-error commitment, 10+ years of US RCM experience, and reliable, accountable teams.",
    },
    {
      question: "Do you have any success stories?",
      answer:
        "Yes! We have reduced AR days by 40%, improved clean claim rates to 99%, saved 60% on staffing cost, and increased collections by 30%.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We serve Clinics, Hospitals, ASC, DME, Chiropractic, Mental Health, Podiatry, Urgent Care, Multi-specialty practices, and solo physicians.",
    },
    {
      question: "Are you HIPAA compliant?",
      answer:
        "Yes, we ensure HIPAA compliance, SOC2 readiness, encrypted infrastructure, VPN/VDI workspaces, and 24/7 monitoring.",
    },
    {
      question: "Are you hiring?",
      answer:
        "Yes, we regularly hire RCM experts, analysts, virtual staff, and operations professionals. Visit our Careers page for openings.",
    },
    {
      question: "I want to outsource my RCM. What's the process?",
      answer:
        "Share your requirements → We evaluate → Provide staffing or process-based solutions → Setup → Go-live within days.",
    },
    {
      question: "Can I get a price quote?",
      answer:
        "Yes! Please share your requirements, and our team will contact you shortly.",
      action: "contact",
    },
  ]

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [isChatOpen])

  useEffect(() => {
    if (isChatOpen) {
      setChatView("questions")
      setSelectedQA(null)
    }
  }, [isChatOpen])

  const handleQuestionClick = (qa: QA) => {
    setSelectedQA(qa)
    setChatView("answer")

    if (qa.action === "contact" && onOpenContactModal) {
      setTimeout(() => {
        setIsChatOpen(false)
        onOpenContactModal()
      }, 700)
      return
    }

    setTimeout(() => {
      setChatView("questions")
      setSelectedQA(null)
    }, 5000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <Button
        onClick={() => setIsChatOpen(!isChatOpen)}
        size="lg"
        className="h-16 w-16 rounded-full bg-gradient-to-r from-brand-blue to-brand-orange shadow-2xl hover:scale-110 transform transition-all duration-300 relative group"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue to-brand-orange opacity-50 group-hover:opacity-75 animate-ping" />
        <MessageCircle className="h-7 w-7 text-white relative z-10" />
      </Button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="absolute bottom-20 right-0 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border-2 border-brand-blue/20 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-blue to-brand-orange p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">IMPERIA.ai</h3>
                  <p className="text-xs text-white/80">
                    How can I help you today?
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="hover:bg-white/20 p-1 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            {chatView === "questions" ? (
              <div className="space-y-3 animate-fade-in">
                <p className="text-sm text-muted-foreground mb-4">
                  Select a question to learn more about Imperial Healthcare
                  Systems:
                </p>

                {predefinedQA.map((qa, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuestionClick(qa)}
                    className="w-full text-left p-3 bg-white border border-brand-blue/20 rounded-lg hover:border-brand-blue/40 hover:bg-brand-blue/5 transition-all duration-200 text-sm hover:scale-[1.02] transform"
                  >
                    {qa.question}
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4 animate-fade-in">
                <div className="bg-brand-blue/10 p-4 rounded-lg border border-brand-blue/20">
                  <p className="font-semibold text-brand-blue mb-2">
                    {selectedQA?.question}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedQA?.answer}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setChatView("questions")
                    setSelectedQA(null)
                  }}
                  className="w-full p-3 bg-gradient-to-r from-brand-blue to-brand-orange text-white rounded-lg hover:scale-105 transform transition-all duration-200 font-medium"
                >
                  View All Questions
                </button>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        </div>
      )}
    </div>
  )
}
