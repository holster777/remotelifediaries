import { BlockData } from '@gocontento/client'
import { Container } from '../Container'
import Image from 'next/image'

export default function HeroWithImage({ block }: { block: BlockData }) {
  return (
    <Container className="prose mt-16 px-6 dark:prose-invert md:px-0">
      <div className="grid flex-auto md:grid-cols-2 md:space-x-16">
        <div className="order-2 mt-9 md:order-1 md:mt-0">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {block.fields.title.text}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: block.fields.text.text }}
            className="mt-4 text-lg"
          />
        </div>
        <div className="col-span-1">
          <Image
            src={block.fields.image.assets[0].asset.url}
            alt={block.fields.image.assets[0].asset.description}
            sizes="(min-width: 640px) 18rem, 11rem"
            className="order-1 h-full w-full object-cover md:order-2"
            width={176}
            height={176}
          />
        </div>
      </div>
    </Container>
  )
}
