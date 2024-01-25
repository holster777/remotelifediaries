import { type Metadata } from 'next'
import { Providers } from '@/app/providers'
import '@/styles/tailwind.css'
import { GeneralLayout } from '@/components/layouts/GeneralLayout'
import { createClient } from '@/lib/contento'
import { notFound } from 'next/navigation'
import { Courier_Prime } from 'next/font/google'
import { Instrument_Serif } from 'next/font/google'

const courier = Courier_Prime({
  variable: '--font-courier-prime',
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})
const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const mainNav = await createClient()
    .getContentById('c_01hkq83GC1q66nszyAYEYRc3Kb')
    .catch(() => {
      notFound()
    })

  const footerNav = await createClient()
    .getContentById('c_01HKyzM3N905AC11j3ET2CMHzv')
    .catch(() => {
      notFound()
    })

  const announcementBar = await createClient()
    .getContentById('c_01HM6Xx103G95dYG01yEGk29vr')
    .catch(() => {
      notFound()
    })

  return (
    <html
      lang="en"
      className={`${courier.variable} ${instrumentSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex h-full bg-[#F2EEE9] font-paragraph dark:bg-[#3F3C47]">
        <Providers>
          <div className="flex w-full">
            <GeneralLayout
              mainNav={mainNav}
              footerNav={footerNav}
              announcementBar={announcementBar}
            >
              {children}
            </GeneralLayout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
