'use client'

import { ContentData } from '@gocontento/client'
import { useLivePreview } from '@gocontento/next'
import { useContext } from 'react'
import { AppContext } from '@/app/providers'
import { Container } from '../Container'
import { Prose } from '../Prose'
import { formatDate } from '@/lib/formatDate'
import Link from 'next/link'

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

  // const author = content.fields.author.content_links[0]
  //   .content_link as ContentData;
  const category = content.fields.category.content_links[0].content_link

  return (
    <Container className="mt-16 px-6 md:px-0 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            aria-label="Go back to blog"
            className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
          </Link>
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {content.fields.title.text}
              </h1>
              <div className="order-first flex space-x-10">
                <time
                  dateTime={content.published_at}
                  className="flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">
                    {formatDate(content.published_at)}
                  </span>
                </time>
                <div className="w-min-content group rounded-3xl bg-white px-4 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20">
                  <span className="prose text-base text-zinc-800 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-300">
                    {category.fields.title.text}
                  </span>
                </div>
              </div>
            </header>
            <div
              dangerouslySetInnerHTML={{
                __html: content.fields.post_body.text,
              }}
              className="prose mt-4 dark:prose-invert"
            />
          </article>
        </div>
      </div>
    </Container>
  )
}