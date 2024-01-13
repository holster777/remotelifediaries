import ChevronRightIcon from '@/images/ChevronIconRight'
import { formatDate } from '@/lib/formatDate'
import { ContentData } from '@gocontento/client'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogCard({ post }: { post: ContentData }) {
  const category = post.fields.category.content_links[0].content_link

  return (
    <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6 md:space-y-0">
      <Image
        src={post.fields.image.assets[0].asset.url}
        alt=""
        className="h-72 w-full flex-shrink-0 rounded-xl object-cover sm:rounded-2xl md:h-44 md:w-44"
        width={100}
        height={100}
      />

      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          <article className="md:grid md:grid-cols-4 md:items-baseline">
            <div className="group relative flex flex-col items-start md:col-span-3">
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  {post.fields.title.text}
                </h3>
              </Link>
              <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
                {formatDate(post.published_at)}{' '}
                <span className="px-2 pb-[2px]">|</span>
                {category.fields.title.text}
              </p>

              <p className="relative z-10 mt-2 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400">
                {post.fields.description.text}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                aria-hidden="true"
                className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
              >
                Read Me
                <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
