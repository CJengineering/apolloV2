import { useState } from "react";

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
    <div className="mt-3">
      <a
        className="flex items-center justify-between space-x-3 text-slate-800 font-medium dark:text-slate-200"
        href="#0"
        onClick={(e) => {
          e.preventDefault();
          setLinkOpen(!linkOpen);
        }}
        aria-expanded={linkOpen}
      >
        <span className="text-gray-600  ">{title}</span>
        <svg
          className={`fill-slate-400 shrink-0 ml-2 ${linkOpen && "rotate-90"}`}
          width="8"
          height="10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
        </svg>
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
