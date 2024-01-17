'use client'

import { useLivePreview } from '@gocontento/next'
import { ContentData } from '@gocontento/client/lib/types'
import { CategoryLink } from '@/types'
import CategoryPills from '../blocks/blog/CategoryPill'
import BlogCard from '../blocks/blog/BlogCard'
import { Container } from '../Container'
import Image from 'next/image'
import { Metadata } from 'next'

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
    <Container className="mt-9 px-6 md:px-0">
      {/* TODO - Needs Fixing */}
      {/* <header>
        <div className="grid md:grid-cols-2 md:space-x-10">
          <div className="hidden bg-white px-4 py-4 md:mr-6 md:block">
            <Image
              src={content.fields.image.assets[0].asset.url}
              alt={content.fields.image.assets[0].asset.description}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="h-full w-full object-cover"
              width={176}
              height={176}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-display text-5xl tracking-tight text-zinc-800 dark:text-zinc-100 md:text-6xl">
              Blog - {content.name}
            </h1>
            <div
              dangerouslySetInnerHTML={{ __html: content.fields.text.text }}
              className="prose my-4 text-lg dark:prose-invert dark:text-zinc-300"
            />
            <CategoryPills categoryLinks={categoryLinks} />
          </div>
        </div>
      </header> */}
      <div className="mt-12 grid gap-12 md:mt-20 md:grid-cols-2">
        {posts.map((post, index) => (
          <BlogCard key={`blog-post-${index}`} post={post} grid={2} />
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
