"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

const CONTACT_DETAILS = {
  phone: "+1 (859) 555-0199", // replace if needed
  email: "info@imperialhealthsystems.com",
  contactForm: "https://www.imperialhealthsystems.com/contact",
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hello, I’m *Imperia.ai* — your healthcare business assistant. How can I assist you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const isContactIntent = (message: string) => {
  const keywords = [
    "contact",
    "connect",
    "talk to team",
    "sales",
    "consultation",
    "call",
    "email",
    "reach out",
    "get in touch",
  ]

  return keywords.some((k) =>
    message.toLowerCase().includes(k)
  )
}

  const sendMessage = async () => {
  if (!input.trim()) return

  const userMessage = { role: "user", content: input }
  setMessages((prev) => [...prev, userMessage])
  setInput("")

  // ✅ STEP 2: HANDLE CONTACT REQUEST LOCALLY
  if (isContactIntent(input)) {
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: `
          <strong>I'd be happy to connect you with the Imperial Healthcare Systems team.</strong><br/><br/>
          Please choose one of the options below:
          <div class="mt-3 space-y-2">
            <a href="tel:${CONTACT_DETAILS.phone}"
               class="block rounded-lg bg-blue-600 px-4 py-2 text-white text-sm text-center">
              📞 Call Us
            </a>
            <a href="mailto:${CONTACT_DETAILS.email}"
               class="block rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm text-center">
              📧 Email Us
            </a>
            <a href="${CONTACT_DETAILS.contactForm}"
               target="_blank"
               class="block rounded-lg bg-gray-900 px-4 py-2 text-white text-sm text-center">
              🌐 Contact Form
            </a>
          </div>
        `,
      },
    ])
    return // ⛔ DO NOT CALL API
  }

  // ⬇️ NORMAL AI FLOW
  setLoading(true)

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    })

    const data = await res.json()

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: data.reply || "⚠️ Unable to respond right now.",
      },
    ])
  } catch {
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "⚠️ AI service temporarily unavailable.",
      },
    ])
  } finally {
    setLoading(false)
  }
}

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:scale-105 transition"
      >
        {isOpen ? (
          <X className="text-white" />
        ) : (
          <MessageCircle className="text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[95vw] rounded-2xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-white font-semibold flex items-center gap-2">
            🤖 Imperia.ai — AI Assistant
          </div>

          {/* Messages */}
          <div className="h-[360px] overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85% rounded-xl px-4 py-2 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "ml-auto bg-blue-600 text-white"
                    : "bg-white border shadow-sm"
                }`}
                dangerouslySetInnerHTML={{ __html: msg.content }}
              />
            ))}

            {loading && (
              <div className="text-xs text-gray-400">Imperia.ai is typing...</div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about billing, RCM, services..."
              className="flex-1 rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={sendMessage}
              className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
