'use client'

import { useAppProvider } from '@/app/app-provider'
import { Transition } from '@headlessui/react'

export default function Hamburger() {
  const { sidebarOpen, setSidebarOpen } = useAppProvider()

  return (
    <button
      className="relative w-6 h-6 focus:outline-none"
      aria-controls="sidebar"
      aria-expanded={sidebarOpen}
      onClick={() => setSidebarOpen(!sidebarOpen)}
    >
      <span className="sr-only">Toggle Menu</span>
      <Transition
        show={!sidebarOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute inset-0"
      >
        <svg className="w-6 h-6 fill-slate-600 dark:fill-slate-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="5" width="16" height="2"></rect>
          <rect x="4" y="11" width="16" height="2"></rect>
          <rect x="4" y="17" width="16" height="2"></rect>
        </svg>
      </Transition>
      <Transition
        show={sidebarOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute inset-0"
      >
        <svg className="w-6 h-6 fill-slate-600 dark:fill-slate-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" />
        </svg>
      </Transition>
    </button>
  )
}