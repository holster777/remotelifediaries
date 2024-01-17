import BlogIcon from './BlogIcon'
import CommunityIcon from './CommunityIcon'
import WorldIcon from './WorldIcon'

export default function IconMachine({
  icon,
  className,
}: {
  icon: string
  className?: string | undefined
}) {
  switch (icon) {
    case 'trips':
      return <WorldIcon className={className} />

    case 'blog':
      return <BlogIcon className={className} />

    case 'community':
      return <CommunityIcon className={className} />

    default:
      return <div>Missing Icon: {icon}</div>
  }
}
