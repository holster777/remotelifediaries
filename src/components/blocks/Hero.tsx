import { BlockData } from '@gocontento/client'
import { Container } from '../Container'
import Link from 'next/link'
import ChevronRightIcon from '@/images/ChevronIconRight'

export default function Hero({ block }: { block: BlockData }) {
  return (
    <Container className="prose mx-auto mt-6 px-6 dark:prose-invert md:px-0">
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        <h1 className="font-display text-center text-4xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {block.fields.title.text}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: block.fields.body.text }}
          className="text-md mt-4 text-center"
        />
        <Link
          href="/about"
          className="relative z-10 mt-4 flex items-center text-sm font-bold text-zinc-500"
        >
          About Us
          <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
        </Link>
      </div>
    </Container>
  )
}
