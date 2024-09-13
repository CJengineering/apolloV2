import { useState } from "react";
import { ChevronRightIcon } from '@heroicons/react/24/solid';

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
    <div className="mt-3 pr-2 w-[199px] md:pr-0 bg-blue-200 ">
      <a
        className="flex   items-center justify-between text-black font-normal dark:text-white hover:text-orange-700 dark:hover:text-orange-400"
        href="#0"
        onClick={(e) => {
          e.preventDefault();
          setLinkOpen(!linkOpen);
        }}
        aria-expanded={linkOpen}
      >
        <span className="text-black dark:text-white w-36 ">{title}</span>
        <ChevronRightIcon
          className={`h-3 w-3 text-black dark:text-white transition-transform duration-200 ${
            linkOpen ? "rotate-90" : ""
          }`}
        />
      </a>
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