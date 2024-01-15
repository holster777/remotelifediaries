import { BlockData, ContentData } from '@gocontento/client'
import Link from 'next/link'
import AnnouncementBar from './AnnouncementBar'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import LogoLight from '@/images/RLD-Logo-Black.png'
import LogoDark from '@/images/RLD-Logo-White.png'
import { Popover, Transition } from '@headlessui/react'

function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconMenu_hamburger(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 6.5h12M4.498 10.5h11.997M4.5 14.5h11.995" />
      </g>
    </svg>
  )
}

function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  )
}

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function HeaderNew({ mainNav }: { mainNav: ContentData }) {
  let { resolvedTheme } = useTheme()
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <>
        <div className="hidden flex-col md:flex">
          <AnnouncementBar />
          <div className="mx-auto flex w-full max-w-2xl items-center justify-between py-9 lg:max-w-7xl lg:px-8 ">
            <nav className="flex flex-1 justify-start">
              <ul className="flex gap-x-12">
                {mainNav.fields.nav_links.blocks.map(
                  (item: BlockData, index: number) => {
                    return (
                      <Link
                        key={`nav-item-${index}`}
                        href={item.fields.url.text}
                      >
                        {item.fields.link_text.text}
                      </Link>
                    )
                  },
                )}
              </ul>
            </nav>
            <div>
              {resolvedTheme === 'light' ? (
                <Image
                  src={LogoLight}
                  alt=""
                  className=""
                  width={200}
                  height={300}
                />
              ) : (
                <Image
                  src={LogoDark}
                  alt=""
                  className=""
                  width={200}
                  height={300}
                />
              )}
            </div>
            <div className="flex justify-end md:flex-1">
              <div className="pointer-events-auto">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:hidden">
          <AnnouncementBar />
          <Popover className="mt-9 flex items-center justify-between px-6">
            <Popover.Button className="flex flex-1 text-3xl font-bold">
              <IconMenu_hamburger />
            </Popover.Button>
            <Transition.Root>
              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel className="fixed inset-x-4 top-8 z-50 origin-top bg-white px-8 pb-12 pt-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
                  <div className="flex flex-row-reverse items-center justify-between border-b pb-5">
                    <Popover.Button
                      aria-label="Close menu"
                      className="-m-1 p-1"
                    >
                      <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                    </Popover.Button>
                    <h2 className="font-display text-2xl text-zinc-600 dark:text-zinc-400">
                      RDL
                    </h2>
                  </div>
                  <nav className="mt-6">
                    <ul className="-my-2 flex flex-col space-y-6 text-base text-zinc-800">
                      {mainNav.fields.nav_links.blocks.map(
                        (item: BlockData, index: number) => {
                          return (
                            <Link
                              key={`nav-item-${index}`}
                              href={item.fields.url.text}
                            >
                              {item.fields.link_text.text}
                            </Link>
                          )
                        },
                      )}
                    </ul>
                  </nav>
                </Popover.Panel>
              </Transition.Child>
            </Transition.Root>
            <div className="flex flex-1 justify-center">
              {resolvedTheme === 'light' ? (
                <Image
                  src={LogoLight}
                  alt=""
                  className=""
                  width={150}
                  height={300}
                />
              ) : (
                <Image
                  src={LogoDark}
                  alt=""
                  className=""
                  width={150}
                  height={300}
                />
              )}
            </div>
            <div className="flex flex-1 justify-end">
              <div className="pointer-events-auto">
                <ThemeToggle />
              </div>
            </div>
          </Popover>
        </div>
      </>
    )
  )
}
