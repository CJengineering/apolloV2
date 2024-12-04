import React from "react";
import dynamic from "next/dynamic";
import { tableJPal } from "@/app/data/Yearly_Project_Counts_by_Continent";
const ChahrtTest = dynamic(
  () =>
    import(
      "@/components/CJ-components/components-CJ/test components/ChahrtTest"
    ),
  { ssr: false }
);
const StreamGraph = dynamic(
  () =>
    import(
      "@/components/CJ-components/components-CJ/test components/StreamGraph"
    ),
  { ssr: false }
);
const categories: string[] = tableJPal.map((row) => row.Year.toString());
const transformedData = Object.keys(tableJPal[0])
  .filter((key) => key !== "Year") // Exclude the Year key
  .map((continent) => ({
    name: continent,
    data: tableJPal.map((entry) => entry[continent as keyof typeof entry]), // Collect the data for each continent
  }));

export default function page() {
  return (
    <>
      <div>Stream Graph of J-Pal RCT</div>
      <div className="w-[1080px]">
        <StreamGraph categories={categories} data={transformedData} />
      </div>
    </>
  );
}
