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
      <div className="relative z-20 w-full h-72 overflow-hidden">
        <Image
          src={article.thumbnail.url}
          alt={article.thumbnail.alt || article.name}
          className="w-full h-full object-cover transition-transform duration-1000 ease-linear group-hover:scale-105"
          layout="fill"
        />
      </div>
      <div className="flex w-full flex-1 flex-col justify-between">
        <div>
          {/* EVENT TITLE */}
          <div className="py-2">
            <h3 className="serif text-1xl font-medium group-hover:text-blue-800 transition-colors">
              {article.name}
            </h3>
          </div>
          <div className="">
            <div className="flex space-x-1">
              <div>
                <p className="mono text-xs font-normal uppercase">
                  {article.eventDate}
                </p>
              </div>
              {article.endDate && (
                <>
                  <div>
                    <p className="mono text-xs font-normal uppercase"> – </p>
                  </div>
                  <div>
                    <p className="mono text-xs font-normal uppercase">
                      {article.endDate}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
          {article.time && (
            <p className="mono text-xs font-normal uppercase">
              {article.time}
            </p>
          )}
          {article.address && (
            <p className="mono text-xs font-normal uppercase">
              {article.address}
            </p>
          )}
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
