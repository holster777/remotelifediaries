import {
  createClient,
  generateSeo,
  getBlogCategoryLinks,
  getBlogPosts,
} from '@/lib/contento'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import GeneralPage from '@/components/pages/GeneralPage'

type Props = {
  params: {
    slug: string
  }
}

const client = createClient()

export async function generateStaticParams() {
  return await client
    .getContentByType({
      contentType: 'general_page',
      limit: 100,
    })
    .then((response) => {
      return response.content.map((content) => ({
        slug: content.slug,
      }))
    })
    .catch(() => {
      return []
    })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return await client
    .getContentBySlug(params.slug, 'general_page')
    .then((content) => {
      return generateSeo(content, {
        type: 'article',
        publishedTime: content.published_at ?? undefined,
        modifiedTime: content.updated_at,
        section: content.fields.category.content_links[0].content_link.name,
      })
    })
    .catch(() => {
      return {}
    })
}

export default async function page({ params }: Props) {
  const content = await createClient(draftMode().isEnabled)
    .getContentBySlug(params.slug, 'general_page')
    .catch(() => {
      notFound()
    })

  const posts = await getBlogPosts()

  const categoryLinks = await getBlogCategoryLinks()

  return (
    <GeneralPage
      initialContent={content}
      posts={posts}
      categoryLinks={categoryLinks}
    />
  )
}
