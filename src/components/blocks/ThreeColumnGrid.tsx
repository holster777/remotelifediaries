import { BlockData } from '@gocontento/client'
import Link from 'next/link'
import { Container } from '../Container'
import IconMachine from '@/images/Icons/IconMachine'

export default function ThreeColumnGrid({ block }: { block: BlockData }) {
  return (
    <Container className="px-6">
      <div className="mb-7">
        <h3 className="font-display text-3xl tracking-tight">
          {block.fields.title.text}
        </h3>
        {block.fields.text.text && <p>{block.fields.text.text}</p>}
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {block.fields.content.blocks.map((card: BlockData, index: number) => {
          return <Card key={`card-${index}`} card={card} />
        })}
      </div>
    </Container>
  )
}

function Card({ card }: { card: BlockData }) {
  return (
    <div className="flex flex-col border-b-8 border-[#AEA2E8] bg-white p-6">
      <div className="mb-4 flex space-x-4">
        <IconMachine
          icon={card.fields.icon.selected_option.value}
          className="h-9 w-9 text-zinc-600"
        />
        <h4 className="mt-[2px] font-display text-2xl tracking-tight dark:text-zinc-800">
          {card.fields.title.text}
        </h4>
      </div>
      <p className="mb-5 dark:text-zinc-600">{card.fields.text.text}</p>
      <Link
        className="font-semibold dark:text-zinc-600"
        href={card.fields.button.blocks[0].fields.button_url.text}
      >
        {card.fields.button.blocks[0].fields.button_text.text}
      </Link>
    </div>
  )
}
