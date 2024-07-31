import { PublicationsCleanedFields } from "@/app/interfaces";
import Link from "next/link";
import React from "react";

export default function PublicationsCard({ content }: { content: PublicationsCleanedFields }) {
  return (
    <Link href={content.slug} className="group relative block overflow-hidden">
      <article className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pb-2">
        {/* Image Column */}
        <div className="col-span-1 relative hidden md:block" style={{ paddingBottom: "100%" }}>
          <img
            className="absolute top-0 left-0 w-full h-full object-cover object-center transition duration-300 ease-in-out group-hover:scale-140"
            src={content.thumbnail.url}
            alt="Publication cover"
          />
        </div>

        {/* TEXT COLUMN START */}
        <div className="col-span-2 flex flex-col justify-center space-y-2">
          
          {/* PROGRAM LABEL START */}
          <div className="text-left">
            {content.programmeS[0]?.shortname && (
              <span className="mono text-xs font-normal uppercase p-1 bg-slate-100 dark:bg-slate-800">
                {content.programmeS[0].shortname}
              </span>
            )}
          </div>
          {/* PROGRAM LABEL END */}

          {/* TITLE OF PUBLICATION START */}
          <div className="text-left">
            <h3 className="text-base serif font-medium group-hover:underline">{content.name}</h3>
          </div>
          {/* TITLE OF PUBLICATION END */}

          {/* PUBLISHED DATE START */}
          <div className="flex space-x-2">
            {/* PUBLISHED DATE */}
            <div className="text-left">
              <p className="sans-serif font-normal text-sm">
                <time dateTime={content.datePublished}>{content.datePublished}</time>
              </p>
            </div>
            {/* SOURCES */}
            <div className="text-left">
              <p className="sans-serif font-normal text-sm">
                |
              </p>
            </div>
            <div className="text-left">
              <p className="sans-serif font-normal text-sm">
                {content.source2}
              </p>
            </div>
          </div>
          {/* PUBLISHED DATE END */}

          {/* SUMMARY ARABIC START */}
          <div className="text-left">
            <p className="sans-serif text-sm font-normal">
              {content.summaryArabic}
            </p>
          </div>
          {/* SUMMARY ARABIC END */}

        </div>
        {/* TEXT COLUMN END */}

      </article>
    </Link>
  );
}
