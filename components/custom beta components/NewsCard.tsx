import React from "react";
import Image from "next/image";
export interface NewsMainProps {
  tag: string;
  title: string;
  description: string;
  authorName: string;
  date: string;
  readTime: string;
  postLink: string;
  categoryLink: string;
  authorLink: string;
  postImage: string;
  authorImage: string;
}
export default function NewsCard({ content }: { content: NewsMainProps }) {
  return (
    <article className="relative  ">
      <a
        href={content.categoryLink}
        className="groupe relative z-10 block overflow-hidden  bg-gray-100"
        style={{ paddingBottom: "56.25%", position: "relative" }}
      >
        <div className="aspect-h-9 aspect-w-16">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover object-center transition duration-300 ease-in-out group-hover:scale-140"
            src={content.postImage}
            width={500}
            height={500}
            alt="Featured article"
          />
        </div>
      </a>

      <div className="mt-6 md:align-middle">
        <a
          href={content.categoryLink}
          className="transition-color relative text-sm font-medium uppercase tracking-widest text-red-700 duration-300 ease-in-out hover:text-red-600"
        >
          {content.tag}
        </a>
        <a href={content.categoryLink} className="group mt-3 block">
          <h2 className=" text-xl costa font-medium tracking-normal text-gray-900 decoration-gray-800 decoration-3 transition duration-300 ease-in-out group-hover:underline md:tracking-tight lg:text-2xl xl:text-3xl lg:leading-tight">
            {content.title}
          </h2>
    
        </a>

        <div className="mt-4 flex items-center sm:mt-8">
          <div className="">
            <a
              href={content.authorLink}
              className="text-sm font-medium text-gray-800 hover:underline"
            >
              {content.authorName}
            </a>
            <p className="text-sm text-gray-500">
              <time dateTime={content.date}>
                {content.date}
              </time>
              <span aria-hidden="true"> &middot; </span>
              <span>{content.readTime} read</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
