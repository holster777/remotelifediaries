import { BlockData } from '@gocontento/client'
import { Container } from '../Container'

export default function Hero({ block }: { block: BlockData }) {
  return (
    <Container className="prose mt-10 px-6 dark:prose-invert md:px-0">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {block.fields.title.text}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: block.fields.body.text }}
          className="mt-4 text-lg"
        />
      </div>
    </Container>
  )
}
