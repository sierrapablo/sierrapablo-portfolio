import { JSX, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { BlogPost } from '../types/blog'
import Loader from '../components/Loader'
import ReactMarkdown from 'react-markdown'

/**
 * Renders a blog post page by slug.
 * Fetches post metadata and corresponding Markdown content.
 */
export default function PostPage(): JSX.Element {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPostData() {
      try {

        const res = await fetch('https://api.sierrapablo.dev/posts')
        if (!res.ok) throw new Error('Failed to fetch post metadata')

        const posts: BlogPost[] = await res.json()
        const found = posts.find((p) => p.slug === slug)

        if (!found) throw new Error('Post not found')

        setPost(found)

        const mdRes = await fetch(found.filepath)
        if (!mdRes.ok) throw new Error('Failed to fetch Markdown file')

        const mdText = await mdRes.text()
        setContent(mdText)
      } catch (err: any) {
        setError(err.message || 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchPostData()
  }, [slug])

  if (loading) {
    return (
      <div className="bg-neutral-800 min-h-screen flex items-center justify-center px-6 py-8">
        <Loader isFadingOut={false} onFadeOutComplete={() => { }} />
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="pt-40 bg-neutral-800 text-center min-h-screen">
        <p className="text-red-500 mb-4">Error: {error ?? 'Unknown error'}</p>
        <a
          href="/blog"
          className="px-4 py-2 bg-amber-500 text-neutral-900 rounded hover:bg-amber-600 transition"
        >
          Volver al blog
        </a>
      </div>
    )
  }

  return (
    <div className='bg-neutral-900 min-h-screen'>
      <div className="max-w-3xl bg-neutral-900 min-h-screen px-6 py-12 mx-auto">
        <h1 className="text-2xl font-bold text-amber-500 mb-4">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-6">
          {new Date(post.created_at).toLocaleDateString()} • {post.author}
        </p>
        <article className="text-gray-300 markdown">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
        <div className="mt-10 text-center">
          <a
            href="/blog"
            className="px-4 py-2 bg-amber-500 text-neutral-900 rounded hover:bg-amber-600 transition"
          >
            Volver al blog
          </a>
        </div>
      </div>
    </div>
  )
}
