'use client'

import { useId } from 'react'
import { BlockData, ContentData } from '@gocontento/client'
import Photos from './blocks/Photos'
import Hero from './blocks/Hero'
import BlogGrid from './blocks/blog/BlogGrid'
import { CategoryLink } from '@/types'
import HeroWithImage from './blocks/HeroWithImage'
import Trips from './blocks/trips/Trips'
import ThreeColumnGrid from './blocks/ThreeColumnGrid'
import FormSection from './forms/FormSection'

export default function BlockMatcher({
  blocks,
  posts,
  categoryLinks,
}: {
  blocks: BlockData[]
  posts?: ContentData[]
  categoryLinks?: CategoryLink[]
}) {
  const id = useId()

  return blocks.map((block: BlockData, index) => {
    switch (block.content_type.handle) {
      case 'photos':
        return <Photos key={id + '-' + index} block={block} />

      case 'hero':
        return <Hero key={id + '-' + index} block={block} />

      case 'hero_with_image':
        return <HeroWithImage key={id + '-' + index} block={block} />

      case 'blog_grid':
        return (
          <BlogGrid
            key={id + '-' + index}
            block={block}
            posts={posts}
            categoryLinks={categoryLinks}
          />
        )

      case 'trips':
        return <Trips key={id + '-' + index} block={block} />

      case 'three_column_grid':
        return <ThreeColumnGrid key={id + '-' + index} block={block} />

      case 'form_section':
        return <FormSection key={id + '-' + index} block={block} />

      default:
        return (
          <div
            key={id + '-' + index}
            className="prose bg-red-300 p-4 text-center"
          >
            <h2>Invalid block</h2>
            <p>
              <code>{block.content_type.handle}</code>
            </p>
          </div>
        )
    }
  })
}
