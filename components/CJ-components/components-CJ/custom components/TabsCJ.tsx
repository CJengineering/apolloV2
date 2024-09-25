"use client";
import { Tab } from "@headlessui/react";
import CardProgramme from "../basic components/CardProgramme";
import testImage from "@/public/images/content-image-01.jpg";
import TableCJ from "./TableCJ";
import { CardProgrammeProps, RowData } from "@/app/interfaces";
import { getCookie } from "@/functions/utils/cookies";
import LanguageChanger from "@/components/custom beta components/LanguageChanger";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
const tableCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
interface TabsCJProps {
  rowData: RowData[];
  cardData: CardProgrammeProps[];
}
export default function TabsCJ({ rowData, cardData }: TabsCJProps) {
  const [screenWidth, setScreenWidth] = useState(0);
  const parentRef = useRef<HTMLDivElement>(null)
  const [parentWidth, setParentWidth] = useState(0);
  const params = useParams();
  const locale = params.locale as string 
  useEffect(() => {
    // Set the screen width when the component mounts
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth); // Update width on resize

    return () => {
      window.removeEventListener("resize", updateWidth); // Clean up
    };
  }, []);
  useEffect(() => {
    // Observe changes in parent div width
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0].contentRect) {
        setParentWidth(entries[0].contentRect.width);
      }
    });

    if (parentRef.current) {
      resizeObserver.observe(parentRef.current);
    }

    return () => {
      if (parentRef.current) {
        resizeObserver.unobserve(parentRef.current);
      }
    };
  }, [parentRef]);
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
      <Tab.Panels className={'min-w-full overflow-hidden'}>
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
          <div className={`mt-3 sm:w-full w-[${screenWidth -30}px] `}  style={screenWidth <= 500 ? { width: screenWidth - 30 + 'px' } : {}} >
 
        
            <TableCJ rowData={rowData} locale={locale}></TableCJ>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
