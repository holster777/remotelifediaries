'use client'

import { ContentData } from '@gocontento/client'
import { useLivePreview } from '@gocontento/next'
import { Container } from '../Container'
import { formatDate } from '@/lib/formatDate'
import Link from 'next/link'
import Image from 'next/image'

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function BlogPost({
  initialContent,
}: {
  initialContent: ContentData
}) {
  const { content } = useLivePreview({ content: initialContent })
  const category = content.fields.category.content_links[0].content_link

  return (
    <Container className="mt-16 px-6 md:px-0">
      <div className="xl:relative">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            aria-label="Go back to blog"
            className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
          </Link>
          <article>
            <div className="grid grid-cols-3 items-center space-x-6">
              <div className="col-span-1 bg-white px-4 py-4">
                <Image
                  src={content.fields.image.assets[0].asset.url}
                  alt={content.fields.image.assets[0].asset.description}
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="h-64 w-full object-cover"
                  width={120}
                  height={120}
                />
              </div>
              <header className="col-span-2 flex flex-col">
                <h1 className="font-display mb-6 mt-6 text-3xl tracking-tight text-zinc-800 dark:text-zinc-100 md:text-5xl">
                  {content.fields.title.text}
                </h1>
                <div className="order-first flex space-x-10">
                  <time
                    dateTime={content.published_at}
                    className="flex items-center text-base text-zinc-600 dark:text-zinc-500"
                  >
                    <span>{formatDate(content.published_at)}</span>
                  </time>
                  <div className="w-min-content group rounded-3xl bg-white px-4 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20">
                    <span className="prose text-base text-zinc-800 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-300">
                      {category.fields.title.text}
                    </span>
                  </div>
                </div>
              </header>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: content.fields.post_body.text,
              }}
              className="prose mt-9 dark:prose-invert"
            />
          </article>
        </div>
      </div>
    </Container>
  )
}
