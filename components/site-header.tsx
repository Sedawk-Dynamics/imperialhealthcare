"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, PlayCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDemoModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isDemoModalOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDemoModalOpen) {
        setIsDemoModalOpen(false)
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [isDemoModalOpen])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/90 backdrop-blur-xl shadow-lg border-b border-brand-blue/20"
            : "bg-background/50 backdrop-blur-sm",
        )}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20 md:h-28">
            <Link href="/" className="flex-shrink-0 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-orange/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <Image
              src="/images/imperial-logo-horizontal-removebg-preview.png"
              alt="Imperial Healthcare Systems"
              width={520}
              height={180}
              className="h-24 md:h-28 w-auto relative z-10 scale-100 md:scale-150 hover:scale-110 md:hover:scale-[1.6] transition-transform duration-300"
              priority
            />

              </div>
            </Link>

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {[
                { name: "Home", href: "/" },
                { name: "Solutions", href: "/solutions" },
                { name: "Services", href: "/services" },
                { name: "About", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/#contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-semibold group transition-all duration-300 hover:scale-110 transform"
                >
                  <span className="relative z-10 group-hover:text-brand-blue transition-colors duration-300">
                    {item.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-orange group-hover:w-full transition-all duration-300 rounded-full" />
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10" />
                </Link>
              ))}

              <div className="flex items-center gap-3 ml-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.sedawk.imperialhealthsystems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 hover:border-brand-blue hover:shadow-lg hover:shadow-brand-blue/20 hover:scale-105 transition-all duration-300"
                  aria-label="Get it on Google Play"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"
                      fill="#00D6FF"
                    />
                    <path d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z" fill="#FFD500" />
                    <path
                      d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"
                      fill="#FF4444"
                    />
                    <path d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="#00E676" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[9px] text-gray-600 uppercase leading-none">GET IT ON</span>
                    <span className="text-sm font-semibold text-gray-900 leading-tight">Google Play</span>
                  </div>
                </a>

                <Button
                  size="sm"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="rounded-full bg-gradient-to-r from-brand-blue to-brand-orange text-white hover:opacity-90 hover:shadow-lg hover:shadow-brand-orange/30 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 px-4 py-2 h-10"
                  aria-label="Watch Demo Video"
                >
                  <PlayCircle className="w-4 h-4 mr-2" />
                  <span className="font-semibold text-sm">Watch Demo</span>
                </Button>
              </div>
            </div>

            <button
              className="md:hidden relative group p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="absolute inset-0 bg-brand-blue/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {mobileMenuOpen ? (
                <X className="h-6 w-6 relative z-10 text-brand-blue" />
              ) : (
                <Menu className="h-6 w-6 relative z-10" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-2 border-t border-brand-blue/20 animate-fade-in-up">
              {[
                { name: "Home", href: "/" },
                { name: "Solutions", href: "/solutions" },
                { name: "Services", href: "/services" },
                { name: "About", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/#contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-2 text-base font-semibold hover:text-brand-blue hover:bg-brand-blue/5 transition-colors rounded-md min-h-[44px] flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-4 space-y-3 pb-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.sedawk.imperialhealthsystems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-4 py-3 rounded-full bg-white border-2 border-gray-300 hover:border-brand-blue hover:bg-brand-blue/5 min-h-[52px] transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Get it on Google Play"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"
                      fill="#00D6FF"
                    />
                    <path d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z" fill="#FFD500" />
                    <path
                      d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81Z"
                      fill="#FF4444"
                    />
                    <path d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="#00E676" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] text-gray-600 uppercase leading-none">GET IT ON</span>
                    <span className="text-base font-semibold text-gray-900 leading-tight">Google Play</span>
                  </div>
                </a>

                <Button
                  size="lg"
                  onClick={() => {
                    setIsDemoModalOpen(true)
                    setMobileMenuOpen(false)
                  }}
                  className="w-full rounded-full bg-gradient-to-r from-brand-blue to-brand-orange text-white hover:opacity-90 min-h-[52px]"
                  aria-label="Watch Demo Video"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Watch Demo</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {isDemoModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsDemoModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

          <div
            className="relative z-10 w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200 hover:scale-110"
              aria-label="Close demo video"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-gradient-to-r from-brand-blue to-brand-orange px-6 py-4">
              <h2 id="demo-modal-title" className="text-xl font-bold text-white">
                Imperial Healthcare Systems Demo
              </h2>
            </div>

            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/DvXe48GcT98?autoplay=1"
                title="Imperial Healthcare Systems Demo Video"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SiteHeader
