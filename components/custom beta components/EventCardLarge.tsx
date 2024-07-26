import { EventFieldDataCleaned } from "@/app/interfaces";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const EventCardLarge: React.FC<{ article: EventFieldDataCleaned }> = ({ article }) => {
  return (
    <Link href={`${article.slug}`} key={article.slug} className="group relative flex flex-row w-full">
      <div className="w-2/3 aspect-w-2 aspect-h-1 relative z-20 overflow-hidden">
        <Image
          src={article.heroImage.url}
          alt={article.heroImage.alt || article.name}
          className="w-full h-full object-cover"
          width={1900}
          height={950}
        />
      </div>
      <div className="w-1/3 flex flex-col justify-between pl-6">
        <div>
          {/* EVENT TITLE */}
          <div className="pb-3">
            <h3 className="serif text-3xl font-medium">{article.name}</h3>
          </div>
          <div className="">
            <div className="flex space-x-1">
              <div>
                <p className="mono uppercase text-sm font-normal">{article.eventDate}</p>
              </div>
              {article.endDate && (
                <>
                  <div>
                    <p className="mono uppercase text-sm font-normal"> – </p>
                  </div>
                  <div>
                    <p className="mono uppercase text-sm font-normal">{article.endDate}</p>
                  </div>
                </>
              )}
            </div>
          </div>
          {article.time && (
            <p className="mono uppercase text-sm font-normal">{article.time}</p>
          )}
          {article.address && (
            <p className="mono uppercase text-sm font-normal">{article.address}</p>
          )}
        </div>
        <div className="mt-5 flex items-center sm:mt-6">
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
        </div>
      </div>
    </Link>
  );
};

export default EventCardLarge;
