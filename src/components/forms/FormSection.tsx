import { BlockData } from '@gocontento/client'
import ContactForm from './ContactForm'
import { Container } from '../Container'

export default function FormSection({ block }: { block: BlockData }) {
  return (
    <Container className="mb-16 px-6 dark:prose-invert md:mt-7 md:px-0">
      <div className="grid space-x-10 md:grid-cols-2">
        <div className="prose pr-6 dark:prose-invert md:mt-0">
          <h1 className="mt-0 font-display text-4xl font-normal tracking-tight text-zinc-800 dark:text-zinc-100 md:text-5xl">
            {block.fields.title.text}
          </h1>
          <p>{block.fields.text.text}</p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </Container>
  )
}
