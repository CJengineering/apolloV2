import Logo from "@/components/ui/logo";
import ThemeToggle from "./theme-toggle";
import Search from "./search";
import LanguageChanger from "../custom beta components/LanguageChanger";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Hamburger from "./hamburger";
import { Link } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed w-full z-30  ">
      <div
        className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur -z-10 dark:bg-slate-900 dark:border-slate-800"
        aria-hidden="true"
      />
      <div className="  mx-auto px-4 lg:px- pt-4 lg:pt-0 2xl:w-[1563px] xl:w-[1280px] lg:w-[1024px]  ">
        <div className="flex space-betweem items-center h-12 sm:h-16">
          {/* Site branding */}
          <div className="grow">
            <div className="flex items-center">
              <Logo />
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="flex">
            {/* Right side elements links */}
            <div className=" flex lg:hidden ">
              <ThemeToggle />
              <Hamburger />
            </div>
            <ul className="lg:flex hidden gap-4  grow justify-between flex-wrap items-center">
              {/* Lights switch */}
              <li>
                <ThemeToggle />
              </li>
              <li>
                <a href="/search">
                <div className="h-4 w-4">
                  <MagnifyingGlassIcon />
                </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
