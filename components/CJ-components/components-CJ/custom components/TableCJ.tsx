"use client";

import { RowData } from "@/app/interfaces";

import { TableRow } from "./table-row";



interface TableCJProps {
  rowData: RowData[];
  locale: string;
}

export default function TableCJ({ rowData, locale }: TableCJProps) {
  return (
    <div>
      <div className="text-small grid grid-cols-12 gap-9 border-y dark:border-slate-700">
        {/* Header */}
        <div className="py-2 col-span-5 align-middle text-left mono text-xs font-medium uppercase md:block">
          Name
        </div>
        <div className="hidden col-span-3 py-2 align-middle text-left mono text-xs font-medium uppercase md:block">
          Mission
        </div>
        <div className="hidden col-span-1 py-2 align-middle text-left mono text-xs font-medium uppercase md:block">
          Established
        </div>
        <div className="hidden col-span-2 py-2 align-middle text-left mono text-xs font-medium uppercase md:block">
          Key Partners
        </div>
        <div className="hidden col-span-1 py-2 align-middle text-left mono text-xs font-medium uppercase md:block"></div>
      </div>
      {/* Row */}
      {rowData.map((data, index) => (
        <TableRow key={index} repository={data.repository} locale={locale} />
      ))}
    </div>
  );
}
