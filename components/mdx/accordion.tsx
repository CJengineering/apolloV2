"use client";
import { useState, useRef, useEffect } from "react";

interface PostAccordionProps {
  title: string;
  active?: boolean;
  children: React.ReactNode;
  itemsCount?:string;
}

export default function PostAccordion({
  title,
  itemsCount,
  active = false,
  ...props
}: PostAccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
  const accordion = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAccordionOpen(active);
  }, [accordion]);

  return (
    <div className="border-b border-slate-200 dark:border-slate-700 py-4 px prose-p:m-0">
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={(e) => {
          e.preventDefault();
          setAccordionOpen(!accordionOpen);
        }}
        aria-expanded={accordionOpen}
      >
        <div className="flex justify-between w-full">

          <h2 className="sans-serif font-medium text-xl lg:text-2xl">
            {title}
          </h2>
          {itemsCount && <span className="flex items-center mr-4">{itemsCount}</span>}
       
        </div>
       
        <div className="shrink-0">
          <svg
            className={`fill-slate-400 dark:fill-slate-500 ${
              accordionOpen && "rotate-90"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
          >
            <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z" />
          </svg>
        </div>
      </button>
      <div className={`${!accordionOpen ? "hidden" : ""}`}>
        <div className="mt-6">{props.children}</div>
      </div>
    </div>
  );
}
