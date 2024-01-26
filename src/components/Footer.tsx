import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { BlockData, ContentData } from '@gocontento/client'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer({ footerNav }: { footerNav: ContentData }) {
  return (
    <footer className="mt-32 flex-none bg-[#3F3C47] dark:bg-[#EBFFA3]">
      <ContainerOuter>
        <div className="pb-16 pt-10">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-white dark:text-black">
                {footerNav.fields.footer_links.blocks.map(
                  (item: BlockData, index: number) => {
                    return (
                      <NavLink
                        key={`footer-link-${index}`}
                        href={item.fields.url.text}
                      >
                        {item.fields.link_text.text}
                      </NavLink>
                    )
                  },
                )}
              </div>
              <p className="text-sm text-white dark:text-black">
                &copy; {new Date().getFullYear()} Remote Life Diaries. All
                rights reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
