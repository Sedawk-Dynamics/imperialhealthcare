"use client"

import type React from "react"
import { useState } from "react"
import { X, Mail, Phone, MapPin, User, FileText, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RCMAuditModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RCMAuditModal({ isOpen, onClose }: RCMAuditModalProps) {
  const [formData, setFormData] = useState<{
    fullName: string
    companyName: string
    email: string
    phone: string
    location: string
    historicalData: File | null
  }>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    location: "",
    historicalData: null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        location: "",
        historicalData: null,
      })
      onClose()
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null

    if (file && file.type !== "application/pdf") {
      alert("Please upload a PDF file only.")
      return
    }

    setFormData({
      ...formData,
      historicalData: file,
    })
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        <div className="p-8">
          {submitted ? (
            /* Success State */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600">
                We'll contact you shortly to schedule your free RCM audit and EBITDA analysis.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Contact Form
                </h2>
                <p className="text-gray-600 text-sm">
                  Fill out the form below and we will contact you shortly.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <User className="h-4 w-4 text-brand-blue" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Company Name (Optional) */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-brand-blue" />
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none"
                    placeholder="Your company name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-brand-blue" />
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-blue" />
                    Phone No. <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand-blue" />
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none"
                    placeholder="City, State, Country"
                  />
                </div>

                {/* Historical Data (Optional PDF Upload) */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-brand-blue" />
                    Historical Data (Optional)
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-brand-blue/10 file:text-brand-blue hover:file:bg-brand-blue/20"
                  />
                  <p className="text-xs text-gray-500">
                    Upload financial or operational data (PDF only)
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-blue to-blue-600 text-white py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
