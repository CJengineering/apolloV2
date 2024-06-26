import { NewsMainProps } from "@/app/interfaces";
import Link from "next/link";
import React from "react";


export default function PostCard({ content }: { content: NewsMainProps }) {
  return (
    <article className="relative  ">
      <Link
        href={content.postLink}
        className="groupe relative z-10 block overflow-hidden  bg-gray-100"
        style={{ paddingBottom: "56.25%", position: "relative" }}
      >
        <div className="aspect-h-9 aspect-w-16">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover object-center transition duration-300 ease-in-out group-hover:scale-140"
            src={content.postImage}
            alt="Featured article"
          />
        </div>
      </Link>

      <div className="mt-6 md:align-middle">
        <Link
          href={content.postLink}
          className="mono text-sm font-medium uppercase"
        >
          {content.tag}
        </Link>
        <Link href={content.postLink} className="group mt-3 block">
        <h2 className="text-xl costa font-bold tracking-normal transition duration-300 ease-in-out group-hover:underline lg:text-2xl xl:text-3xl lg:leading-tight">
            {content.title}
          </h2>
        </Link>

        <div className="mt-2 flex items-center">
          <div className="">
            <p className="mono text-sm font-medium uppercase">
              <time dateTime={content.date}>
             {content.date}
              </time>
              {/* <span aria-hidden="true"> &middot; </span> */}
           
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
