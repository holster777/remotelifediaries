import { AssetData, BlockData } from '@gocontento/client'
import clsx from 'clsx'
import Image from 'next/image'

export default function Photos({ block }: { block: BlockData }) {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  return (
    <div className="mb-20 mt-16 sm:mt-20 ">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {block.fields.images.assets.map((image, index: number) => (
          <div
            key={`image-${index}`}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[index % rotations.length],
            )}
          >
            <Image
              src={image.asset.url}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
              width={176}
              height={176}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
