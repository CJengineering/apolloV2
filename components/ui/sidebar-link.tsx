import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAppProvider } from '@/app/app-provider'

interface SidebarLinkProps {
  children: React.ReactNode
  href: string
}

export default function SidebarLink({
  children,
  href,
}: SidebarLinkProps) {

  const pathname = usePathname()
  
  const { setSidebarOpen } = useAppProvider()  
  
  return (
<Link 
  className={`flex items-center space-x-3 w-36 font-normal ${pathname === href ? 'text-dark-600' : 'text-black dark:text-white'} hover:text-orange-700 dark:hover:text-orange-400`} 
  href={href} 
  onClick={() => setSidebarOpen(false)}
>
  {children}
</Link>
  )
}
