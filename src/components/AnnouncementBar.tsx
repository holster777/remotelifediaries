import { ContentData } from '@gocontento/client'

export default function AnnouncementBar({
  announcementBar,
}: {
  announcementBar: ContentData
}) {
  return (
    <div className="flex w-full items-center justify-center bg-[#3F3C47] px-6 py-4 text-center text-xs text-white dark:bg-[#EBFFA3] dark:text-black">
      <div
        dangerouslySetInnerHTML={{ __html: announcementBar.fields.text.text }}
        className="text-white dark:text-zinc-900"
      />
    </div>
  )
}
