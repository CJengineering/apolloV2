"use client";
import { Tab } from "@headlessui/react";
import CardProgramme from "../basic components/CardProgramme";
import testImage from "@/public/images/content-image-01.jpg";
import TableCJ from "./TableCJ";
import { CardProgrammeProps, RowData } from "@/app/interfaces";
import { getCookie } from "@/functions/utils/cookies";
import LanguageChanger from "@/components/custom beta components/LanguageChanger";
import { useParams } from "next/navigation";
const tableCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
interface TabsCJProps {
  rowData: RowData[];
  cardData: CardProgrammeProps[];
}
export default function TabsCJ({ rowData, cardData }: TabsCJProps) {
  const params = useParams();
  const locale = params.locale as string 

  return (
    <Tab.Group>
      <Tab.List className="flex justify-between gap-4">
        <Tab className="font-mono text-base font-medium w-full border border-slate-700 py-4 uppercase hover:bg-gray-600 hover:bg-opacity-10 focus:outline-none ui-selected:bg-orange-600">
          labs
        </Tab>
        <Tab className="font-mono text-base font-medium w-full border border-slate-700 py-4 uppercase hover:bg-gray-400 hover:bg-opacity-10 focus:outline-none ui-selected:bg-orange-600">
          all
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className="mt-3 w-full grid lg:grid-cols-3 gap-4">
            {cardData.map((item, index) => (
              <CardProgramme
                key={index}
                imageUrl={item.imageUrl}
                programmeTitle={item.programmeTitle}
                programmeType={""}
                slug={item.slug}
                altText={item.altText}    
                order ={item.order}        />
            ))}
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="mt-3">
            <TableCJ rowData={rowData} locale={locale}></TableCJ>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
