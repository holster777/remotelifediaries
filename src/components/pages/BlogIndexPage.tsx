'use client'

import { ContentData } from '@gocontento/client'
import { useLivePreview } from '@gocontento/next'
import { CategoryLink } from '@/types'
import { type Metadata } from 'next'
import { Container } from '../Container'
import BlogCard from '../blocks/blog/BlogCard'
import CategoryPills from '../blocks/blog/CategoryPill'

export default function BlogIndexPage({
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
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {content.fields.title.text}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: content.fields.text.text }}
          className="prose mt-4 text-lg dark:prose-invert"
        />
        <CategoryPills categoryLinks={categoryLinks} />
      </header>
      <div className="mt-12 space-y-10">
        {posts.map((post, index) => (
          <BlogCard key={`blog-post-${index}`} post={post} />
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Blog Posts',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}
