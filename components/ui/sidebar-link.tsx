import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAppProvider } from '@/app/app-provider'

interface SidebarLinkProps {
  children: React.ReactNode
  href: string
  targetBlank?: boolean
}

export default function SidebarLink({
  children,
  href,
  targetBlank
}: SidebarLinkProps) {

  const pathname = usePathname()


  
  const { setSidebarOpen } = useAppProvider()  
  
  return (
<Link 
  className={`flex items-center py-2  pl-2 space-x-3 w-44 font-normal ${pathname === href ? 'text-dark-600' : 'text-black dark:text-white'}   hover:text-orange-700 dark:hover:text-orange-400`} 
  href={href} 
  target={ targetBlank ? '_blank' : ''}
  onClick={() => setSidebarOpen(false)}
>
  {children}
</Link>
  )
}
