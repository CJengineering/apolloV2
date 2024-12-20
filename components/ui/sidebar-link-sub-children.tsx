import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface SidebarLinkSubChildrenProps {
  children: React.ReactNode;
  title: string;
  open: boolean;
}

export default function SidebarLinkSubChildren({
  children,
  title,
  open,
}: SidebarLinkSubChildrenProps) {
  const [linkOpen, setLinkOpen] = useState<boolean>(open);
  

  return (
    <div className="mt-3 pr-2 w-[px] md:pr-0">
      <div
        className="flex lg:hidden items-center justify-between text-black font-normal dark:text-white hover:text-orange-700 dark:hover:text-orange-400"
        onMouseDown={(e) => {
          e.preventDefault();
          setLinkOpen(!linkOpen);
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          setLinkOpen(!linkOpen);
        }}
        aria-expanded={linkOpen}
      >
        <span className="text-black dark:text-white w-36 ">{title}</span>
        <div>
          <ChevronRightIcon
            className={`h-3 w-3 text-black dark:text-white transition-transform duration-200 ${
              linkOpen ? "rotate-90" : ""
            }`}
          />
        </div>
      </div>

      <div
        className="hidden lg:flex hover:cursor-pointer items-center justify-between text-black font-normal dark:text-white hover:text-orange-700 dark:hover:text-orange-400"
        
        onClick={(e) => {
          e.preventDefault();
          setLinkOpen(!linkOpen);
        }}
        aria-expanded={linkOpen}
      >
        <span className="text-black dark:text-white w-36 hover:text-orange-700 dark:hover:text-orange-400 ">{title}</span>
        <div>
          <ChevronRightIcon
            className={`h-3 w-3 text-black dark:text-white transition-transform duration-200 ${
              linkOpen ? "rotate-90" : ""
            }`}
          />
        </div>
      </div>

      <div
        className={`mb-3 ml-1 pl-4 border-l border-slate-200 dark:border-slate-800 ${
          !linkOpen && "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
