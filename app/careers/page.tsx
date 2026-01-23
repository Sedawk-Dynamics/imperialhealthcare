"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Clock, DollarSign, Users, TrendingUp } from "lucide-react"
import ContactFormModal from "@/components/contact-form-modal"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function CareersPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState("")

  const jobOpenings = [
    {
      title: "Medical Billing Specialist",
      department: "Revenue Cycle Management",
      location: "Remote (US)",
      type: "Full-Time",
      experience: "2-4 years",
      salary: "$45,000 - $65,000",
      description:
        "We're seeking an experienced Medical Billing Specialist to join our RCM team. You'll be responsible for claim submissions, payment posting, and denial management for various healthcare specialties.",
      requirements: [
        "2+ years of medical billing experience",
        "Knowledge of CPT, ICD-10, and HCPCS codes",
        "Experience with major payers (Medicare, Medicaid, commercial insurance)",
        "Strong attention to detail and problem-solving skills",
      ],
    },
    {
      title: "RCM Team Lead",
      department: "Revenue Cycle Management",
      location: "Hybrid - Gurugram, India",
      type: "Full-Time",
      experience: "5-7 years",
      salary: "$70,000 - $90,000",
      description:
        "Lead a team of RCM specialists to optimize revenue cycle operations for US healthcare providers. You'll manage workflows, train team members, and ensure quality metrics are met.",
      requirements: [
        "5+ years in healthcare RCM with 2+ years in leadership",
        "Deep knowledge of US healthcare billing and coding",
        "Experience with RCM software (Epic, Cerner, Athenahealth)",
        "Strong leadership and communication skills",
      ],
    },
    {
      title: "Healthcare Data Analyst",
      department: "Advanced Analytics",
      location: "Remote (US/India)",
      type: "Full-Time",
      experience: "3-5 years",
      salary: "$60,000 - $85,000",
      description:
        "Analyze healthcare data to identify revenue opportunities, denial patterns, and operational inefficiencies. Create dashboards and reports for clients to improve their financial performance.",
      requirements: [
        "3+ years in healthcare analytics or data science",
        "Proficiency in SQL, Python, and BI tools (Tableau, Power BI)",
        "Understanding of healthcare KPIs (AR days, denial rates, collection rates)",
        "Strong analytical and visualization skills",
      ],
    },
    {
      title: "Prior Authorization Specialist",
      department: "Healthcare Operations",
      location: "Remote (India)",
      type: "Full-Time",
      experience: "1-3 years",
      salary: "$35,000 - $50,000",
      description:
        "Handle prior authorization requests for medical procedures, ensuring timely approvals and minimizing claim denials. Work directly with US payers and provider offices.",
      requirements: [
        "1+ years of prior authorization experience",
        "Knowledge of insurance verification and medical necessity",
        "Excellent communication skills (verbal and written)",
        "Ability to work US hours",
      ],
    },
    {
      title: "Denial Management Specialist",
      department: "Revenue Cycle Management",
      location: "Remote (US/India)",
      type: "Full-Time",
      experience: "2-4 years",
      salary: "$50,000 - $70,000",
      description:
        "Focus on analyzing and appealing denied claims to maximize reimbursements. Work with a dedicated team to reduce denial rates and improve clean claim rates.",
      requirements: [
        "2+ years in denial management or appeals",
        "Strong understanding of payer policies and denial codes",
        "Excellent written communication for appeal letters",
        "Experience with EHR/PM systems",
      ],
    },
    {
      title: "Credentialing Coordinator",
      department: "Provider Services",
      location: "Remote (US)",
      type: "Full-Time",
      experience: "2-3 years",
      salary: "$45,000 - $60,000",
      description:
        "Manage provider credentialing and enrollment with insurance payers. Ensure timely renewals, maintain CAQH profiles, and track credentialing status.",
      requirements: [
        "2+ years in medical credentialing",
        "Knowledge of CAQH, NPDB, and payer enrollment processes",
        "Strong organizational and follow-up skills",
        "CPCS or CPMSM certification preferred",
      ],
    },
  ]

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle)
    setContactModalOpen(true)
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Join Our <span className="text-brand-orange">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build your career in healthcare technology with Imperial Healthcare Systems. We're transforming revenue
              cycle management with innovation, integrity, and excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-brand-blue" />
                <span>
                  <strong>500+</strong> Employees
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-brand-orange" />
                <span>
                  <strong>Growing</strong> Company
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-blue" />
                <span>
                  <strong>US & India</strong> Locations
                </span>
              </div>
            </div>
          </div>

          {/* Job Openings */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Current <span className="text-brand-orange">Openings</span>
            </h2>
            <div className="grid gap-6">
              {jobOpenings.map((job, idx) => (
                <Card key={idx} className="border-2 border-brand-blue/20 hover:border-brand-orange/40 transition-all">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-base">{job.department}</CardDescription>
                      </div>
                      <Button onClick={() => handleApply(job.title)} className="whitespace-nowrap">
                        Apply Now
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.experience}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        {job.salary}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">About the Role</h4>
                      <p className="text-muted-foreground">{job.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, ridx) => (
                          <li key={ridx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-brand-orange mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Join Us */}
          <div className="max-w-6xl mx-auto mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Join <span className="text-brand-orange">IHS</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Growth Opportunities",
                  description: "Continuous learning, skill development, and clear career progression paths.",
                },
                {
                  title: "Work-Life Balance",
                  description: "Flexible schedules, remote work options, and supportive team culture.",
                },
                {
                  title: "Competitive Benefits",
                  description: "Competitive salaries, health insurance, and performance bonuses.",
                },
              ].map((benefit, idx) => (
                <Card key={idx} className="border-2 border-brand-blue/20">
                  <CardHeader>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <ContactFormModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
          defaultMessage={`I am interested in applying for the ${selectedJob} position.`}
        />
      </main>
      <SiteFooter />
    </>
  )
}
