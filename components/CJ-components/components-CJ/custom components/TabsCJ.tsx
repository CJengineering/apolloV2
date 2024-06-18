'use client'
import { Tab } from '@headlessui/react'
import CardProgramme from '../basic components/CardProgramme'
import testImage from "@/public/images/content-image-01.jpg"
import TableCJ from './TableCJ'
import { CardProgrammeProps, RowData } from '@/app/interfaces'
const tableCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
interface TabsCJProps {
  rowData: RowData[]
  cardData: CardProgrammeProps[]
}
export default function TabsCJ({rowData, cardData}: TabsCJProps) {
  return (
    <Tab.Group>
      <Tab.List className="flex   justify-between gap-2">
        <Tab className=" w-full border-[1px] border-solid border-gray-600 py-4 uppercase focus:outline-none ui-selected:bg-orange-600">
          labs
        </Tab>
        <Tab className=" w-full border-[1px] border-solid border-gray-600 py-4 uppercase focus:outline-none ui-selected:bg-orange-600">
          all
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className="mt-3 min-w-full grid lg:grid-cols-2 gap-4">
            {cardData.map((item, index) => (
              <CardProgramme
                key={index}
                imageUrl={item.imageUrl}
                altText= {item.altText}
                programmeTitle={item.programmeTitle}
                programmeType={item.programmeType}
              />
            ))}
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="mt-3">
            <TableCJ rowData={rowData}></TableCJ>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}
