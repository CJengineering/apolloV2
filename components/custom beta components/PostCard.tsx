import { NewsMainProps, PostFieldsCleaned } from "@/app/interfaces";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { is } from "cypress/types/bluebird";

export default function PostCard({
  content,
  noImage,
  noTitle,
}: {
  content: PostFieldsCleaned;
  noImage?: boolean;
  noTitle?: boolean;
}) {
  return (
    <Link href={content.slug} className="group relative block overflow-hidden">
      <article className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pb-2">
        {/* Image Column */}
        {!noImage && (
          <div
            className="col-span-1 relative hidden md:block"
            style={{ paddingBottom: "100%" }}
          >
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover object-center transition duration-300 ease-in-out group-hover:scale-140"
              src={content.thumbnail.url}
              alt="Featured article"
              width={500}
              height={500}
            />
          </div>
        )}

        {/* TEXT COLUMN START */}
        <div className="col-span-2 flex flex-col justify-center">
          {!noTitle && ( <div className="text-left">
            <p>
              {content.programme.shortname && (
                <span className="sans-serif text-2xl font-bold">
                  {content.programme.shortname}
                </span>
              )}
            </p>
          </div>)}
         
          {/* TITLE OF POST ITEM START */}
          <div className="text-left pb-2">
            <h3 className="title-list group-hover:underline">{content.name}</h3>
          </div>
          {/* TITLE OF POST ITEM END */}

          {/* PUBLISHED DATE START */}
          <div className="text-left">
            <p className="sans-serif text-sm">
              <time dateTime={content.datePublished}>
                {content.datePublished}
              </time>
            </p>
          </div>
          {/* PUBLISHED DATE END */}

          {/* PROGRAM LABEL START */}

          {/* PROGRAM LABEL END */}
        </div>
        {/* TEXT COLUMN END */}
      </article>
    </Link>
  );
}
