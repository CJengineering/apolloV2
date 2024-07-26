import { EventFieldDataCleaned } from "@/app/interfaces";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const EventCardLarge: React.FC<{ article: EventFieldDataCleaned }> = ({ article }) => {
  return (
    <div className="relative flex flex-row w-full group">
      <div className="w-2/3 relative">
        <Link href={`${article.slug}`}>
          <div className="relative w-full h-0 pb-[50%] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-linear group-hover:scale-105">
              <Image
                src={article.heroImage.url}
                alt={article.heroImage.alt || article.name}
                className="object-cover"
                layout="fill"
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="w-1/3 flex flex-col pl-6">
        <div className="">
          {/* EVENT TITLE */}
          <div className="pb-3">
            <Link href={`${article.slug}`}>
            <h3 className="serif text-3xl font-medium transition duration-300 group-hover:underline">{article.name}</h3>
            </Link>
          </div>
          <div className="">
          <div className="flex space-x-1 pb-1">
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
          {article.time && (
            <p className="sans-serif py-1 text-base font-normal">{article.time}</p>
          )}
          {article.address && (
            <p className="sans-serif py-1 text-base font-normal">
              {article.address}
            </p>
          )}
          {article.rsvpLink && (
            <div className="mt-5 sm:mt-6">
              <a
                href={article.rsvpLink}
                target="_blank"
                className="mt-2 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-800 rounded hover:bg-blue-950"
              >
                <span className="mono uppercase">{article.buttonCtaText}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCardLarge;
