import { Globe, Microscope, Newspaper } from "lucide-react";
import React from "react";

export default function HomeIcons() {
  return (
    <div className="flex justify-around py-10 px-5 lg:px-0 mx-auto max-w-full border-b border-gray-300/70 sm:py-16">
      <div className="flex flex-col cursor-pointer items-center group">
        <Globe className="w-16 h-16 text-gray-700 group-hover:text-red-600 transition duration-300 ease-in-out" />
        <span className="mt-2 text-lg font-medium text-gray-700 group-hover:text-red-600 transition duration-300 ease-in-out">
          Overview
        </span>
      </div>
      <div className="flex flex-col cursor-pointer items-center group">
        <Microscope className="w-16 h-16 text-gray-700 group-hover:text-red-600 transition duration-300 ease-in-out" />
        <span className="mt-2 text-lg font-medium text-gray-700 group-hover:text-red-600 transition duration-300 ease-in-out">
          Community
        </span>
      </div>
      <div className="flex flex-col cursor-pointer items-center group">
        <Newspaper className="w-16 h-16 text-gray-700 group-hover:text-red-600 transition duration-300 ease-in-out" />
        <span className="mt-2 text-lg font-medium text-gray-700 group-hover:text-red-600 transition duration-300 ease-in-out">
          News
        </span>
      </div>
    </div>
  );
}
