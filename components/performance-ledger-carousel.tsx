"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"

export function PerformanceLedgerCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const slides = [
    {
      title: "I. Institutional Benchmarking: Setting the New Industry Ceiling",
      subtitle: "The direct impact of the IRRF on your bottom line.",
      tableHeaders: ["Metric", "Benchmark / Rationale", "The Imperial Standard"],
      tableRows: [
        ["Coding Accuracy", "vs. 88% Industry Average", "99.5%"],
        ["Net Collection Rate", "vs. 91% Industry Average", "99%"],
        ["Revenue Expansion", "Direct Bottom-Line Impact", "26%"],
        ["OPEX Reduction", "Powered by Smart Automation", "60%"],
      ],
    },
    {
      title: "II. Strategic KPI Comparison: IHS vs. the Mass-Market Incumbents",
      subtitle: "Transformation from reactive legacy billing to the IHS Alpha Framework.",
      tableHeaders: ["Performance Indicator", "Mass-Market Incumbents", "The Imperial Standard"],
      tableRows: [
        ["First-Pass Clean Claim Rate", "65–75%", ">98.5%"],
        ["AR Over 90 Days", "25–45%", "<8%"],
        ["Net Collection Ratio", "88–92%", ">99.2%"],
        ["Days in AR (DAR)", "55–70+", "<30"],
        ["Denied Claim Rate", "15–22%", "<5%"],
        ["Timely Filing Write-offs", "5–8%", "0%"],
        ["Administrative Burden", "High", "Autonomous (60% Reduction)"],
      ],
    },
    {
      title: "III. HBMA Baseline vs. The Imperial Standard",
      subtitle: "Validated against Healthcare Billing & Management Association (HBMA) standards.",
      strategicNote:
        "While the industry accepts 'standard' leakage as a cost of doing business, the IRRF is engineered for total wealth recovery.",
      tableHeaders: ["KPI Criticals", "HBMA Standard (Baseline)", "The Imperial Standard"],
      tableRows: [
        ["First-Pass Clean Claim", "70–80%", ">98.5%"],
        ["AR Over 90 Days", "20%", "<10%"],
        ["Net Collection Ratio", "92–95%", ">99.2%"],
        ["Days in AR", "45–55", "<32"],
        ["Initial Denial Rate", "15–20%", "<3%"],
        ["Timely Filing Write-offs", "5%", "0%"],
      ],
    },
  ]

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <Carousel setApi={setApi} opts={{ loop: false }} className="w-full">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="space-y-6">
                  {/* Slide Title */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground uppercase">
                      {slide.title}
                    </h3>
                    <p className="text-base text-muted-foreground">{slide.subtitle}</p>
                  </div>

                  {/* Strategic Note (Slide 3 only) */}
                  {slide.strategicNote && (
                    <div className="bg-brand-blue/5 border-l-4 border-brand-blue px-6 py-4 rounded">
                      <p className="text-sm md:text-base font-medium text-foreground italic">{slide.strategicNote}</p>
                    </div>
                  )}

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border border-border rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="px-4 md:px-6 py-3 md:py-4 text-center font-semibold text-foreground border-b border-border text-sm md:text-base">
                            {slide.tableHeaders[0]}
                          </th>
                          <th className="px-4 md:px-6 py-3 md:py-4 text-center font-semibold text-foreground border-b border-border text-sm md:text-base">
                            {slide.tableHeaders[1]}
                          </th>
                          <th className="px-4 md:px-6 py-3 md:py-4 text-center font-semibold text-brand-orange border-b border-border bg-gradient-to-r from-brand-orange/10 to-brand-orange/5 text-sm md:text-base">
                            {slide.tableHeaders[2]}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {slide.tableRows.map((row, rowIndex) => (
                          <tr key={rowIndex} className="hover:bg-muted/30 transition-colors">
                            <td className="px-4 md:px-6 py-3 md:py-4 text-center border-b border-border font-medium text-sm md:text-base">
                              {row[0]}
                            </td>
                            <td className="px-4 md:px-6 py-3 md:py-4 text-center border-b border-border text-muted-foreground text-sm md:text-base">
                              {row[1]}
                            </td>
                            <td className="px-4 md:px-6 py-3 md:py-4 text-center border-b border-border text-brand-orange font-bold text-base md:text-lg bg-gradient-to-r from-brand-orange/10 to-brand-orange/5">
                              {row[2]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="lg"
            onClick={() => api?.scrollPrev()}
            disabled={!api?.canScrollPrev()}
            className="gap-2 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-brand-orange"
                    : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="lg"
            onClick={() => api?.scrollNext()}
            disabled={!api?.canScrollNext()}
            className="gap-2 disabled:opacity-30"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          Benchmark {current + 1} of {count}
        </p>
      </div>
    </div>
  )
}
