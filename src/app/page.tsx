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

export async function generateMetadata(): Promise<Metadata> {
  return await createClient()
    .getContentBySlug('home', 'general_page')
    .then((content) => {
      return generateSeo(content, {}, content.url?.replace('/home', ''))
    })
    .catch(() => {
      return {}
    })
}

export default async function page() {
  const content = await createClient(draftMode().isEnabled)
    .getContentBySlug('home', 'general_page')
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
