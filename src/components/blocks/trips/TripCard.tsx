import ChevronRightIcon from '@/images/ChevronIconRight'
import { formatDate } from '@/lib/formatDate'
import { BlockData } from '@gocontento/client'
import Image from 'next/image'
import Link from 'next/link'

export default function TripCard({ trip }: { trip: BlockData }) {
  return (
    <div className="not-prose flex items-center space-x-6">
      <Link
        href={`/blog/${trip.fields.slug}`}
        className="h-72 w-full flex-shrink-0 bg-white p-3 dark:bg-white md:h-44 md:w-44"
      >
        <Image
          src={trip.fields.image.assets[0].asset.url}
          alt=""
          className="h-full w-full object-cover"
          width={100}
          height={100}
        />
      </Link>

      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          <article className="md:grid md:grid-cols-4 md:items-baseline">
            <div className="group relative flex flex-col items-start md:col-span-3">
              <Link href={`/trips/${trip.fields.slug}`}>
                <h3 className="font-display text-4xl tracking-tight text-zinc-800 dark:text-zinc-100">
                  {trip.fields.title.text}
                </h3>
              </Link>
              <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-600 dark:text-[#EBFFA3]">
                {formatDate(trip.fields.start_date.date)}{' '}
                <span className="px-2 pb-[2px]">-</span>
                {formatDate(trip.fields.end_date.date)}{' '}
              </p>

              <p className="relative z-10 mt-2 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400">
                {trip.fields.description.text}
              </p>
              <Link
                href={`/trips/${trip.fields.slug}`}
                aria-hidden="true"
                className="relative z-10 mt-4 flex items-center text-sm font-bold text-zinc-800 dark:text-zinc-200"
              >
                More Info
                <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
