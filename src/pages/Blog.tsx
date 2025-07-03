import { JSX, useState, useEffect } from 'react'
import type { BlogPost } from '../types/blog'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Blog(): JSX.Element {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const [startFadeOut, setStartFadeOut] = useState(false)
  const [showContent, setShowContent] = useState(false)

  /**
   * Fetches blog posts from the API and updates the state.
   * Handles loading and error states accordingly.
   */
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('https://api.sierrapablo.dev/posts')
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }
        const data: BlogPost[] = await response.json()
        setPosts(data)
      } catch (err: any) {
        setError(err.message || 'Unknown error')
      } finally {
        setTimeout(() => {
          setStartFadeOut(true)
        }, 1000)
      }
    }

    fetchPosts()
  }, [])

  function handleFadeOutComplete() {
    setLoading(false)
    setTimeout(() => {
      setShowContent(true)
    }, 100)
  }

  function goHome() {
    window.location.href = '/'
  }

  if (loading)
    return (
      <div className="bg-neutral-800 min-h-screen flex items-center justify-center px-6 py-8">
        <Loader isFadingOut={startFadeOut} onFadeOutComplete={handleFadeOutComplete} />
      </div>
    )

  if (error)
    return (
      <div className="pt-40 bg-neutral-800 text-center min-h-screen">
        <p className="text-red-500 mb-4">Error: {error}</p>
        <button
          onClick={goHome}
          className="px-4 py-2 bg-amber-500 text-neutral-900 rounded hover:bg-amber-600 transition"
        >
          Volver al inicio
        </button>
      </div>
    )

  return (
    <div className="bg-neutral-900 min-h-screen">
      <section
        className={`max-w-3xl mx-auto px-4 py-10 transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <h2 className="text-xl font-bold text-amber-500 mb-6">[ Últimas publicaciones ]</h2>

        <ul className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.slug} to={`/post/${post.slug}`}>
              <li
                key={post.slug}
                className="bg-neutral-800 border border-neutral-700 rounded-xl p-5 hover:border-amber-500 transition"
              >
                <h3 className="text-lg font-semibold text-white mb-1">{post.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{post.summary}</p>
                <p className="text-xs text-gray-500">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
              </li>
            </Link>
          ))}
        </ul>

        <div className="text-center mt-8">
          <button
            onClick={goHome}
            className="px-4 py-2 bg-amber-500 text-neutral-900 rounded cursor-pointer hover:bg-amber-600 transition"
          >
            Volver al inicio
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
