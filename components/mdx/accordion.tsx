'use client'
import { useState, useRef, useEffect } from 'react'

interface PostAccordionProps {
  title: string
  active?: boolean
  children: React.ReactNode
}

export default function PostAccordion({ title, active = false, ...props }: PostAccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)
  const accordion = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setAccordionOpen(active)
  }, [accordion])

  return (
    <div className="border-b border-gray-300 py-4 prose-p:m-0">
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={(e) => {
          e.preventDefault();
          setAccordionOpen(!accordionOpen);
        }}
        aria-expanded={accordionOpen}
      >
        <h2 className="sans-serif font-medium text-xl lg:text-2xl">{title}</h2>
        <div className="shrink-0">
          <svg
            className={`fill-slate-400 dark:fill-slate-500 ${accordionOpen && 'rotate-90'}`}
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
          >
            <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z" />
          </svg>
        </div>
      </button>
      <div className={`${!accordionOpen ? 'hidden' : ''}`}>
        <div className="mt-6">{props.children}</div>
      </div>
    </div>
  )
}
