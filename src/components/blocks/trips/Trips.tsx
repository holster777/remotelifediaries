import { Container } from '@/components/Container'
import { BlockData } from '@gocontento/client'
import TripCard from './TripCard'
import Newsletter from '../Newsletter'

export default function Trips({ block }: { block: BlockData }) {
  return (
    <Container className="mt-10 px-6 dark:prose-invert md:px-0">
      <div className="max-w-2xl">
        <h2 className="font-display tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl md:text-3xl">
          {block.fields.title.text}
        </h2>
        <p className="mt-4">{block.fields.text.text}</p>
      </div>
      <div className="mt-9 space-y-6">
        {block.fields.trip_list.blocks.length > 0 ? (
          block.fields.trip_list.blocks.map(
            (trip: BlockData, index: number) => {
              return <TripCard key={`blog-post-${index}`} trip={trip} />
            },
          )
        ) : (
          <div className="grid md:grid-cols-2">
            <Newsletter
              title="We're Currently Working on Our Next Trip Plans."
              text="Get notified when we release our next trip, unsubscribe at any time."
            />
          </div>
        )}
      </div>
    </Container>
  )
}
