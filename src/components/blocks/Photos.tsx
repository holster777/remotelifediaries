import { AssetData, BlockData } from '@gocontento/client'
import clsx from 'clsx'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

export default function Photos({ block }: { block: BlockData }) {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  return (
    <div className="mb-20 mt-16 sm:mt-20 ">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {block.fields.images.assets.map(
          (image: { asset: { url: string | StaticImport } }, index: number) => (
            <div
              key={`image-${index}`}
              className={clsx(
                'relative flex aspect-[9/10] w-44 flex-none items-center justify-center overflow-hidden bg-white px-3 pb-9 pt-3 drop-shadow-md dark:bg-[#f7f7f7] sm:w-72',
                rotations[index % rotations.length],
              )}
            >
              <Image
                src={image.asset.url}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="h-full w-full object-cover"
                width={176}
                height={176}
              />
            </div>
          ),
        )}
      </div>
    </div>
  )
}
