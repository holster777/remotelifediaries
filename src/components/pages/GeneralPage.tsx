'use client'

import { ContentData } from '@gocontento/client/lib/types'
import { useLivePreview } from '@gocontento/next'
import BlockMatcher from '../BlockMatcher'
import { CategoryLink } from '@/types'

export default function GeneralPage({
  initialContent,
  posts,
  categoryLinks,
}: {
  initialContent: ContentData
  posts?: ContentData[]
  categoryLinks?: CategoryLink[]
}) {
  const { content } = useLivePreview({ content: initialContent })

  return (
    <div className="mt-9">
      <div>
        <BlockMatcher
          blocks={content.fields.content.blocks}
          posts={posts}
          categoryLinks={categoryLinks}
        />
      </div>
    </div>
  )
}
