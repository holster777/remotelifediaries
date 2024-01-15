import { Container } from '@/components/Container'
import { BlockData, ContentData } from '@gocontento/client'
import BlogCard from './BlogCard'
import Newsletter from '../Newsletter'
import BlogCategoryList from './BlogCategoryList'
import { CategoryLink } from '@/types'
import { instrumentSerif } from '@/styles/fonts'

export default function BlogGrid({
  block,
  posts,
  categoryLinks,
}: {
  block: BlockData
  posts: ContentData[] | undefined
  categoryLinks: CategoryLink[] | undefined
}) {
  return (
    <Container className="my-9 px-6">
      <h2 className={`text-5xl font-bold ${instrumentSerif.className}`}>
        {block.fields.title.text}
      </h2>
      {block.fields.text.text && <p>{block.fields.text.text}</p>}
      <div className="mx-auto mt-9 grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-3">
        <div className="flex flex-col gap-y-16 lg:col-span-2">
          {posts?.map((post, index) => {
            return <BlogCard key={`blog-post-${index}`} post={post} />
          })}
        </div>
        <div className="space-y-10 lg:col-span-1">
          <Newsletter
            title="Stay up to date"
            text="Get notified when we post something new, unsubsribe at any time."
          />
          <BlogCategoryList
            categoryLinks={categoryLinks}
            text="Check out our different blog categories. We're sure you'll find
        something you like."
          />
        </div>
      </div>
    </Container>
  )
}
