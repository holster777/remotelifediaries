'use client'

import { useLivePreview } from '@gocontento/next'
import { ContentData } from '@gocontento/client/lib/types'
import { CategoryLink } from '@/types'
import CategoryPills from '../blocks/blog/CategoryPill'
import BlogCard from '../blocks/blog/BlogCard'
import { Container } from '../Container'

export default function BlogCategoryPage({
  initialContent,
  posts,
  categoryLinks,
}: {
  initialContent: ContentData
  posts: ContentData[]
  categoryLinks: CategoryLink[]
}) {
  const { content } = useLivePreview({ content: initialContent })

  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {content.fields.title.text}
        </h1>
        <CategoryPills categoryLinks={categoryLinks} />
      </header>
      <div className="mt-9 space-y-10">
        {posts.map((post, index) => (
          <BlogCard key={`blog-post-${index}`} post={post} grid={1} />
        ))}
      </div>
    </Container>
  )
}
