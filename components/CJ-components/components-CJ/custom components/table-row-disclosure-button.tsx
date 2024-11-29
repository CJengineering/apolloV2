import { RowTopData } from "@/app/interfaces";
import { Disclosure } from "@headlessui/react";

export function TableRowDisclosureButton({
    top,
    isArabic,
    open,
  }: {
    top: RowTopData;
    isArabic: boolean;
    open: boolean;
  }) {
    return (
      <Disclosure.Button className="w-full hover:bg-slate-100 dark:hover:bg-slate-800 group ">
        <div className="min-w-full items-center grid grid-cols-12 md:gap-9 md:grid md:grid-cols-12 border-gray-300 ">
          <div
            className={`py-3 text-left col-span-11 md:col-span-5 ${
              open ? "opacity-100" : "opacity-100"
            }`}
          >
            <h2 className="sans-serif align-middle text-xl md:text-1xl uppercase pl-2 group-hover:underline">
              {isArabic ? top.nameArabic : top.name}
            </h2>
          </div>
  
          <div
            className={`hidden py-3 align-middle col-span-3 text-left md:block md:col-span-3 md:align-middle ${
              open ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="text-sm sans-serif leading-5">
              {isArabic ? top.missionArabic : top.mission}
            </div>
          </div>
  
          <div
            className={`hidden py-3 items-center md:col-span-1 text-left md:block ${
              open ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="text-sm sans-serif leading-5">{top.year}</div>
          </div>
  
          <div
            className={`hidden items-center py-3 md:col-span-2 text-left md:block ${
              open ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="text-sm sans-serif leading-5">
              {isArabic ? top.partnersArabic.join(", ") : top.partners.join(", ")}
            </div>
          </div>
  
          <div className="flex justify-end col-span-1 items-center py-3 text-right pr-2">
            <div className={open ? "rotate-45 transform text-3xl" : "text-3xl"}>
              +
            </div>
          </div>
        </div>
      </Disclosure.Button>
    );
  }