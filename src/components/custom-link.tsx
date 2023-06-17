import { cn } from '@libs'
import Link from 'next/link'

type LinkType = {
  href: string
  children: React.ReactNode | string
  className?: string
}
const CustomLink = ({ href, children, className }: LinkType) => {
  return (
    <Link
      className={cn(
        'hover:underline font-medium ml-1 transition-colors dark:text-orange-50 text-orange-700 dark:hover:text-cyan-500 hover:text-cyan-700',
        className
      )}
      href={href}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      {children}
    </Link>
  )
}

export default CustomLink
