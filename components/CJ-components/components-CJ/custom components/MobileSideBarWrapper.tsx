'use client'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SidebarDummy from '../test components/SidebarDummy'
import TestSidebar from '../test components/TestSidebar'
import SideBarCustom from '../basic components/SideBarCustom'

export default function MobileSideBarWrapper() {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <div className='fixed w-[300px]  md:hidden z-50 '>
      <button className='fixed top-5 left-0 z-10' onClick={() => setIsShowing((isShowing) => !isShowing)}>
      <ChevronLeftIcon
            className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isShowing ?   'text-gray-400':'rotate-180 text-gray-500'}`}
            aria-hidden="true"
          />
      </button>
      <Transition show={isShowing}>
        <SideBarCustom />
      </Transition>
    </div>
  )
}
