import React from 'react'
import NavBarDummy from '../test components/NavbarDummy'
import TestSidebar from '../test components/TestSidebar'
import SideBarWrapper from '../custom components/SideBarWrapper'
import SideBarCustom from '../basic components/SideBarCustom'
import MobileSideBarWrapper from '../custom components/MobileSideBarWrapper'
import TopNavBar from '../custom components/TopNavBar'

export default function LayoutMain({
  mainContent,
  tocContent,
}: {
  mainContent: React.ReactNode
  tocContent: React.ReactNode
}) {
  return (
    <div>
     <TopNavBar></TopNavBar>
      <div className="flex h-full">
          <SideBarWrapper />
          <MobileSideBarWrapper />
        <div className="relative mx-auto flex h-full">
          <main className="  w-[320px] max-w-[1440px] sm:w-[600px] md:w-[720px] lg:w-[720px] xl:w-[980px] 2xl:w-[1440px] 2xl:min-w-[1200px] ">
            <div className="  w-full flex h-full flex-col   md:flex-row">
              <div
                className={` w-100 ${tocContent ? 'md:w-[25%] ' : 'hidden'}} md:hidden `}
              >
                {tocContent}
              </div>
              <div
                className={` ${tocContent ? 'lg:w-[75%] 2x:w-[75%] md:w-[75%] xl:w-[75%]' : 'w-[100%]'}}`}
              >
                {mainContent}
              </div>

              <div
                className={`hidden  md:block ${tocContent ? 'md:w-[25%]' : 'hidden'}} `}
              >
                {tocContent}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
