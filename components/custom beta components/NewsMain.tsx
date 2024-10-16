import { NewsCleanedFields } from "@/app/interfaces";
import React from "react";

export default function NewsMain({ content }: { content: NewsCleanedFields }) {
  return (
    <article className="relative  lg:sticky lg:top-24     lg:w-1/2 lg:self-start">
      <a
        href={content.slug}
        className="groupe relative z-10 block overflow-hidden  bg-gray-100"
        style={{ paddingBottom: "56.25%", position: "relative" }}
      >
        <div className="aspect-h-9 aspect-w-16">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover object-center transition duration-300 ease-in-out group-hover:scale-140"
            src={content.heroImage.url}
            alt="Featured article"
          />
        </div>
      </a>

      <div className="mt-6 md:align-middle">
        <a
          href={content.slug}
          className="transition-color relative text-sm font-medium uppercase tracking-widest text-red-700 duration-300 ease-in-out hover:text-red-600"
        >
          {"tag to check"}
        </a>
        <a href={content.slug} className="group mt-3 block">
          <h2 className="text-3xl font-medium tracking-normal text-gray-900 decoration-gray-800 decoration-3 transition duration-300 ease-in-out group-hover:underline md:tracking-tight lg:text-4xl lg:leading-tight">
            {content.name}
          </h2>
          <div>
            <p className="mt-4 text-base leading-loose text-gray-600">
              {content.summary}
            </p>
          </div>
        </a>

        <div className="mt-4 flex items-center sm:mt-8">
          <div className="">
            <a
              href={content.sources.slug}
              className="text-sm font-medium text-gray-800 hover:underline"
            >
              {content.sources.name}
            </a>
            <p className="text-sm text-gray-500">
              <time dateTime={content.datePublished}>
                {content.datePublished}
              </time>
              <span aria-hidden="true"> &middot; </span>
              <span>{"6 min"} read</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
