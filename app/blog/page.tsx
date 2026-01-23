"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "5 Ways AI is Revolutionizing Healthcare Revenue Cycle Management",
      excerpt:
        "Discover how artificial intelligence and machine learning are transforming RCM operations, from predictive denial management to automated coding assistance.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Technology",
      image: "/artificial-intelligence-healthcare-technology-abst.jpg",
      slug: "ai-revolutionizing-rcm",
    },
    {
      title: "Understanding the New CMS Billing Guidelines for 2024",
      excerpt:
        "A comprehensive guide to the latest CMS billing updates and how they impact your practice's revenue cycle. Stay compliant and maximize reimbursements.",
      author: "Michael Chen, CPC",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Compliance",
      image: "/modern-healthcare-revenue-cycle-management-dashboa.jpg",
      slug: "cms-billing-guidelines-2024",
    },
    {
      title: "Reducing AR Days: A Step-by-Step Implementation Guide",
      excerpt:
        "Learn proven strategies to reduce your accounts receivable days from 60+ to under 30, with real case studies and actionable tactics.",
      author: "Jennifer Martinez, MBA",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Best Practices",
      image: "/professional-healthcare-team-working-on-computers.jpg",
      slug: "reducing-ar-days-guide",
    },
    {
      title: "The Hidden Costs of In-House RCM: A Financial Analysis",
      excerpt:
        "Explore the true cost of maintaining an in-house RCM team versus outsourcing, including hidden expenses like training, technology, and turnover.",
      author: "Robert Williams, CFP",
      date: "February 28, 2024",
      readTime: "15 min read",
      category: "Financial",
      image: "/healthcare-professionals-working-together-modern-o.jpg",
      slug: "hidden-costs-inhouse-rcm",
    },
    {
      title: "Denial Management Best Practices for Multi-Specialty Clinics",
      excerpt:
        "Proven techniques to reduce denial rates, improve appeal success rates, and accelerate revenue recovery for practices with multiple specialties.",
      author: "Dr. Emily Thompson",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "Operations",
      image: "/modern-healthcare-technology-abstract-background-b.jpg",
      slug: "denial-management-best-practices",
    },
    {
      title: "Cybersecurity in Healthcare: Protecting Patient Data and Revenue",
      excerpt:
        "Essential cybersecurity measures every healthcare provider must implement to protect sensitive patient information and maintain revenue cycle integrity.",
      author: "James Anderson, CISSP",
      date: "February 15, 2024",
      readTime: "11 min read",
      category: "Security",
      image: "/healthcare-data-security-encryption-technology.jpg",
      slug: "cybersecurity-healthcare-rcm",
    },
  ]

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              IHS <span className="text-brand-orange">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Insights, best practices, and industry trends in healthcare revenue cycle management from our team of
              experts.
            </p>
          </div>

          {/* Featured Post */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="border-2 border-brand-orange/40 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-brand-orange text-white">Featured</Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-3">
                    {blogPosts[0].category}
                  </Badge>
                  <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-orange transition-colors font-semibold"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* All Posts */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Latest <span className="text-brand-orange">Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, idx) => (
                <Card
                  key={idx}
                  className="border-2 border-brand-blue/20 hover:border-brand-orange/40 transition-all group overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-brand-blue">{post.category}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-brand-orange transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-orange transition-colors font-semibold text-sm"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <Card className="border-2 border-brand-blue/20 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5">
              <CardHeader>
                <CardTitle className="text-3xl">Stay Updated</CardTitle>
                <CardDescription className="text-base">
                  Subscribe to our newsletter for weekly insights on healthcare RCM trends, best practices, and industry
                  news.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border-2 border-brand-blue/20 rounded-lg focus:outline-none focus:border-brand-orange"
                  />
                  <button className="px-6 py-2 bg-brand-blue text-white rounded-lg hover:bg-brand-orange transition-colors font-semibold">
                    Subscribe
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
