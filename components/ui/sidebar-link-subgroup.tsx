'use client';
import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface SidebarLinkSubgroupProps {
  children: React.ReactNode;
  title: string;
  open: boolean;
}

export default function SidebarLinkSubgroup({
  children,
  title,
  open,
}: SidebarLinkSubgroupProps) {
  const [linkOpen, setLinkOpen] = useState<boolean>(open);

  return (
    <>
      <div className="mt-3 pr-2 md:pr-0 md:w-[194px] block lg:hidden ">
        <div
          className="flex items-center  justify-between text-black  font-normal dark:text-white hover:text-orange-700 dark:hover:text-orange-400"
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
          <span className="text-black dark:text-white ">{title}</span>
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

      <div className="mt-3 hover:cursor-pointer  pr-2 md:pr-0 md:w-[194px]  hidden lg:block">
        <div
          className="flex items-center justify-between text-black font-normal dark:text-white hover:text-orange-700 dark:hover:text-orange-400"
          onClick={(e) => {
            e.preventDefault();
            setLinkOpen(!linkOpen);
          }}
          aria-expanded={linkOpen}
        >
          <span className="text-black dark:text-white hover:text-orange-700  dark:hover:text-orange-400 ">
            {title}
          </span>
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
    </>
  );
}
