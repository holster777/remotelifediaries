import { CategoryLink } from '@/types'
import CategoryPills from './CategoryPill'

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function BlogCategoryList({
  categoryLinks,
  text,
}: {
  categoryLinks: CategoryLink[] | undefined
  text: string
}) {
  return (
    <div className="border-t-8 border-[#AEA2E8] bg-white p-6 dark:border-[#AEA2E8] md:max-w-2xl">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-600">
        <ArrowDownIcon className="h-6 w-6 stroke-zinc-600 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        <span className="ml-3">Categories</span>
      </h2>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-600">{text}</p>
      <div className="mt-6">
        <CategoryPills categoryLinks={categoryLinks} />
      </div>
    </div>
  )
}
