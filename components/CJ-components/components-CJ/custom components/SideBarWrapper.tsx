'use client'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SidebarDummy from '../test components/SidebarDummy'
import TestSidebar from '../test components/TestSidebar'
import SideBarCustom from '../basic components/SideBarCustom'

export default function SideBarWrapper() {
  const [isShowing, setIsShowing] = useState(true)

  return (
    <div className="m-w-[290px] hidden md:block ">
      <button
        className="fixed left-16 top-5 z-30"
        onClick={() => setIsShowing((isShowing) => !isShowing)}
      >
        <ChevronRightIcon
          className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
            isShowing ? 'rotate-180 text-gray-500' : 'text-gray-400'
          }`}
          aria-hidden="true"
        />
      </button>
      <Transition show={isShowing}>
        <div className="w-[300px]">
          <SideBarCustom />
        </div>
      </Transition>
    </div>
  )
}
