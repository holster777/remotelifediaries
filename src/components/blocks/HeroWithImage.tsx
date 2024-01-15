import { BlockData } from '@gocontento/client'
import { Container } from '../Container'
import Image from 'next/image'

export default function HeroWithImage({ block }: { block: BlockData }) {
  return (
    <Container className="mb-16 px-6 dark:prose-invert md:mt-7 md:px-0">
      <div className="grid flex-auto md:grid-cols-2 md:space-x-16">
        <div className="prose pr-6 dark:prose-invert md:mt-0">
          <h1 className="font-display mt-0 text-5xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {block.fields.title.text}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: block.fields.text.text }}
            className="mt-4 text-lg dark:text-zinc-300"
          />
        </div>
        <div className="bg-white px-4 py-4">
          <Image
            src={block.fields.image.assets[0].asset.url}
            alt={block.fields.image.assets[0].asset.description}
            sizes="(min-width: 640px) 18rem, 11rem"
            className="h-full w-full object-cover"
            width={176}
            height={176}
          />
        </div>
      </div>
    </Container>
  )
}
