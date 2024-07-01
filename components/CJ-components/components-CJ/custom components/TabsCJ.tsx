"use client";
import { Tab } from "@headlessui/react";
import CardProgramme from "../basic components/CardProgramme";
import testImage from "@/public/images/content-image-01.jpg";
import TableCJ from "./TableCJ";
import { CardProgrammeProps, RowData } from "@/app/interfaces";
const tableCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
interface TabsCJProps {
  rowData: RowData[];
  cardData: CardProgrammeProps[];
}
export default function TabsCJ({ rowData, cardData }: TabsCJProps) {
  return (
    <Tab.Group>
      <Tab.List className="flex justify-between gap-2">
        <Tab className="font-mono text-base font-medium w-full border border-gray-800 py-4 uppercase hover:bg-gray-600 hover:bg-opacity-10 focus:outline-none ui-selected:bg-orange-600">
          labs
        </Tab>
        <Tab className="font-mono text-base font-medium w-full border border-gray-800 py-4 uppercase hover:bg-gray-400 hover:bg-opacity-10 focus:outline-none ui-selected:bg-orange-600">
          all
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className="mt-3  w-full  grid lg:grid-cols-2 gap-4">
            {cardData.map((item, index) => (
              <CardProgramme
                key={index}
                imageUrl={item.imageUrl}
                programmeTitle={item.programmeTitle}
                programmeType={""}
                altText={item.altText}            />
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
  );
}
