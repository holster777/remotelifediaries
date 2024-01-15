'use client'

import { Footer } from '@/components/Footer'
import { ContentData } from '@gocontento/client'
import HeaderNew from '../HeaderNew'

export function GeneralLayout({
  children,
  mainNav,
  footerNav,
  announcementBar,
}: {
  children: React.ReactNode
  mainNav: ContentData
  footerNav: ContentData
  announcementBar: ContentData
}) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8"></div>
      <div className="relative flex w-full flex-col">
        <HeaderNew mainNav={mainNav} announcementBar={announcementBar} />
        <main className="flex-auto">{children}</main>
        <Footer footerNav={footerNav} />
      </div>
    </>
  )
}
