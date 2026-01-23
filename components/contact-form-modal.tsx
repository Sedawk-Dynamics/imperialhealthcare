"use client"

import type React from "react"

import { useState } from "react"
import { X, Mail, Phone, MapPin, User, MessageSquare, Building2, Upload, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
  onOpenRCMAudit?: () => void
}

export default function ContactFormModal({ isOpen, onClose, onOpenRCMAudit }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    message: "",
  })

  const [file, setFile] = useState<File | null>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        location: "",
        message: "",
      })
      setFile(null)
      onClose()
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-form-title"
    >
      <Card
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-2 top-2 sm:right-4 sm:top-4 rounded-full p-3 hover:bg-gray-100 transition-colors z-10 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Close contact form"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
        </button>

        <CardContent className="p-4 sm:p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-8 sm:py-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-sm sm:text-base text-muted-foreground px-4">
                We have received your message and will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <h2 id="contact-form-title" className="text-2xl sm:text-3xl font-bold mb-2">
                  Get In <span className="text-brand-orange">Touch</span>
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground px-2">
                  Fill out the form below and we will contact you shortly.
                </p>
              </div>

              

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                      <User className="h-4 w-4 text-brand-blue" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-base min-h-[48px]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4 text-brand-blue" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-base min-h-[48px]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4 text-brand-blue" />
                      Phone No. *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-base min-h-[48px]"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-brand-blue" />
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-base min-h-[48px]"
                      placeholder="Healthcare Corporation"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand-blue" />
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-base min-h-[48px]"
                    placeholder="City, State, Country"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="file" className="text-sm font-medium flex items-center gap-2">
                    <Upload className="h-4 w-4 text-brand-blue" />
                    Attach Historical Data
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="file"
                      onChange={handleFileChange}
                      accept=".pdf,.xlsx,.xls,.csv,.doc,.docx"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-base min-h-[48px] file:mr-2 sm:file:mr-4 file:py-2 file:px-3 sm:file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-blue/10 file:text-brand-blue hover:file:bg-brand-blue/20"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Please attach your historical data (Quarterly, Half-yearly, or Yearly). Historical data must contain
                    charge report, payment report, and AR report.
                  </p>
                  {file && (
                    <div className="flex items-center gap-2 mt-2 p-2 sm:p-3 bg-green-50 rounded-lg">
                      <svg
                        className="w-4 h-4 text-green-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-green-700 break-all">{file.name}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-brand-blue" />
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none text-base"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-blue to-cyan-600 hover:from-brand-blue/90 hover:to-cyan-600/90 text-white py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-lg shadow-lg min-h-[52px]"
                  aria-label="Send contact form message"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24" aria-hidden="true">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
