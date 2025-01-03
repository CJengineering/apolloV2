// Import necessary modules
import React, { FC } from 'react';
import ContentContainer from "@/components/custom beta components/ContentContainer";
import { getData } from "@/functions/api/getData";
import legalMapper from "@/functions/transformers/legalMapper";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import Link from "next/link";
import Logo from '@/components/ui/logo';

// Define the interface for a ColourRow
interface ColourRow {
  bgColor: string;
  hex: string;
  rgb: string;
}

// Define the ColourTable component
const ColourTable: FC = () => {
  const rows: ColourRow[] = [
    { bgColor: '#d02146', hex: '#d02146', rgb: 'rgb(209, 33, 70)' }, 
    { bgColor: '#ff00c1', hex: '#ff00c1', rgb: 'rgb(255, 0, 193)' },
    { bgColor: '#9600ff', hex: '#9600ff', rgb: 'rgb(150, 0, 255)' },
    { bgColor: '#4900ff', hex: '#4900ff', rgb: 'rgb(73, 0, 255)' },
    { bgColor: '#00b8ff', hex: '#00b8ff', rgb: 'rgb(0, 184, 255)' },
    { bgColor: '#00fff9', hex: '#00fff9', rgb: 'rgb(0, 255, 249)' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full lg:w-2/3 table-auto border-collapse">
        <thead>
          <tr>
            <th className="py-3 border-b border-t border-gray-200 dark:border-gray-400 text-left sans-serif text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Colour
            </th>
            <th className="pl-3 py-3 border-b border-t border-gray-200  dark:border-gray-400 text-left sans-serif text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Hex
            </th>
            <th className="pl-3 py-3 border-b border-t border-gray-200  dark:border-gray-400 text-left sans-serif text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              RGB
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td
                className="pl-3 py-4 border-gray-200"
                style={{ backgroundColor: row.bgColor }}
              ></td>
              <td className="pl-3 py-4 border-gray-200">{row.hex}</td>
              <td className="pl-3 py-4 border-gray-200">{row.rgb}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Export the page component
export default async function Page() {
  const getIdLegal = getIdByDisplayName("Legals");
  const getDatalegal = await getData(getIdLegal);

  // If cleanLegalData is unused, consider removing it
  // const cleanLegalData = getDatalegal.items.map((item) => legalMapper(item));

  return (
   
       <div className="w-full">
        <h1 className="header-page pb-6">
          Brand
        </h1>

        {/* Logo Section */}
        <div className="pb-6">
          <div className="pb-6">
            <h2 className="header-section">Logo</h2>
          </div>
          <div><Logo></Logo></div>
          <br />
          <div className="prose prose-xl leading-normal dark:prose-dark">
          <p>Our logo was inspired by our founder and chairman, Mohammed Jameel KBE. The heart-shaped Arabic calligram reads <span className="font-bold">لأننا نحبكم</span>, which translates to English as <span className="font-bold">Because we love you</span>.</p>
          <p>This message of love underpins the Jameel family’s commitment to humanity and the community we serve.</p>
          <p>You can download our logo in different colours and formats <a href="/images/cj_logo/COMMUNITY_JAMEEL_LOGOS.zip" target="_blank" rel="noopener noreferrer">here</a>.</p>
          </div>
        </div>

        {/* Fonts Section */}
        <div className="pb-6">
          <div className="pb-3">
            <h2 className="header-section">Fonts</h2>
          </div>
          <div className="prose prose-xl leading-normal dark:prose-dark">
          <p>For digital and print communications, we use Arial. It is clear and modern and, as a standard font, is available on PCs and Macs and translates well across formats.</p>
          <p>If you want to make an implicit connection to our brand, use <span className="costa font-bold">Costa Bold</span>. This is the font in our logo and is synonymous with our identity. It should be used sparingly and principally for headings.</p>
          </div>
        </div>

        {/* Colours Section */}
        <div className="pb-6">
          <div className="pb-3">
            <h2 className="header-section">Colours</h2>
          </div>
          <div className="prose prose-xl leading-normal dark:prose-dark">
          <p>Our main colour is a <span className="font-bold text-[#d02146]">dark red</span> to reflect the heart that underpins our identity.</p>
          <p>We also use colours that evoke the long dawns and dusks on the shores of the Red Sea in Jeddah.</p>
          </div>
        </div>

        

        {/* Colour Table */}
        <ColourTable />
      </div>

  );
}
