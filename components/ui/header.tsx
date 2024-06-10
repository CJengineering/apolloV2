import Logo from '@/components/ui/logo'
import ThemeToggle from './theme-toggle'
import Search from './search'
import LanguageChanger from '../custom beta components/LanguageChanger'

export default function Header() {
  return (
    <header className="fixed w-full  z-30">
      <div
        className="absolute inset-0 bg-white bg-opacity-70 border-b border-slate-200 backdrop-blur -z-10 dark:bg-slate-900 dark:border-slate-800"
        aria-hidden="true"
      />
      <div className="max-w-12xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="grow">
            <div className="flex items-center">
              <Logo />
           
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="flex">
            {/* Right side elements links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="ml-4">
              <Search />
              </li>
              {/* Lights switch */}
              <li>
                <ThemeToggle />
              </li>
              <li>
                <LanguageChanger></LanguageChanger>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
