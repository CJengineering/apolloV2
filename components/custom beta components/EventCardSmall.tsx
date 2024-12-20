import { EventFieldDataCleaned } from "@/app/interfaces";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const EventCardSmall: React.FC<{ article: EventFieldDataCleaned }> = ({ article }) => {
  return (
    <Link
      href={`${article.slug}`}
      key={article.slug}
      className="group relative flex flex-col flex-wrap"
    >
      <div className="relative w-full h-72 overflow-hidden">
        <Image
          src={article.thumbnail.url}
          alt={article.thumbnail.alt || article.name}
          className="w-full h-full object-cover transition-transform duration-1000 ease-linear group-hover:scale-105"
         height={300}
          width={300}
        />
      </div>
      <div className="flex w-full flex-1 flex-col justify-between pb-6">
        <div>
          {/* EVENT TITLE */}
          <div className="py-2">
            <h3 className="sans-serif text-lg duration-300 group-hover:underline">
              {article.name}
            </h3>
          </div>
          <div className="pb-1">
          <div className="flex space-x-1">
          <p className="sans-serif text-base font-normal">
          {article.eventDate}
          </p>
          {(article.endDate !== article.eventDate) && (
          <>
          <p className="sans-serif text-base font-normal"> – </p>
        <p className="sans-serif text-base font-normal">
        {article.endDate}
      </p>
    </>
  )}
</div>
          </div>
          <div className="pb-1">
          {article.time && (
            <p className="sans-serif text-base font-normal">
              {article.time}
            </p>
          )}
          </div>
          <div>
          {article.address && (
            <p className="sans-serif text-base font-normal">
              {article.address}
            </p>
          )}
          </div>
        </div>
        {/* <div className="mt-5 flex items-center sm:mt-6">
          {article.rsvpLink && (
            <div className="">
              <a
                href={article.rsvpLink}
                className="mt-2 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-800 rounded hover:bg-blue-950"
              >
                <span className="mono uppercase">{article.buttonCtaText}</span>
              </a>
            </div>
          )}  
        </div> */}
      </div>
    </Link>
  );
};

export default EventCardSmall;
