import { notFound } from "next/navigation"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export const dynamic = "force-dynamic"

const GHOST_URL = process.env.NEXT_PUBLIC_GHOST_API_URL!
const GHOST_KEY = process.env.NEXT_PUBLIC_GHOST_CONTENT_KEY!

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params }: PageProps) {
  try {
    // ✅ IMPORTANT FIX
    const { slug } = await params

    const safeSlug = encodeURIComponent(slug)

    const url = `${GHOST_URL}/ghost/api/content/posts/slug/${safeSlug}/?key=${GHOST_KEY}`

    console.log("Fetching:", url)

    const res = await fetch(url, {
      cache: "no-store",
    })

    if (!res.ok) {
      console.error("Ghost API failed:", res.status, res.statusText)
      return notFound()
    }

    const data = await res.json()
    const post = data?.posts?.[0]

    if (!post) return notFound()

    return (
  <>
    <SiteHeader />

    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto max-w-4xl px-4">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {post.title}
        </h1>

        {/* Meta */}
        <p className="text-muted-foreground mb-10">
          Published on{" "}
          {new Date(post.published_at).toLocaleDateString()}
        </p>

        {/* Feature Image */}
        {post.feature_image && (
          <img
            src={post.feature_image}
            alt={post.title}
            className="rounded-xl mb-10 w-full object-cover"
          />
        )}

        {/* Content */}
        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

      </div>
    </main>

    <SiteFooter />
  </>
)
  } catch (error) {
    console.error("Ghost fetch crashed:", error)
    return notFound()
  }
}
