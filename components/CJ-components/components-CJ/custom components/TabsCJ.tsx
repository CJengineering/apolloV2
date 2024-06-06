'use client'
import { Tab } from '@headlessui/react'
import CardProgramme from '../basic components/CardProgramme'
import testImage from "@/public/images/content-image-01.jpg"
import TableCJ from './TableCJ'
const tableCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export default function TabsCJ() {
  return (
    <Tab.Group>
      <Tab.List className="flex justify-between gap-2">
        <Tab className="hover: w-full border-[1px]  border-solid border-gray-600 py-4 uppercase focus:outline-none ui-selected:bg-orange-600 ">
          labs
        </Tab>
        <Tab className="w-full border-[1px] border-solid  border-gray-600 py-4 uppercase focus:outline-none ui-selected:bg-orange-600 ">
          all
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className="mt-3 grid  lg:grid-cols-3 gap-4">
            {tableCount.map((item, index) => (
              <CardProgramme
                key={index}
                imageUrl={testImage}
                programmeTitle={'J-PAL'}
                programmeType={'The Abdul Latif Jameel Poverty Action Lab'}
              />
            ))}
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="mt-3">
            <TableCJ></TableCJ>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}
