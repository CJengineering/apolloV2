import React from "react";

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
export default function PostCard({ content }: { content: NewsMainProps }) {
  return (
    <article className="relative  ">
      <a
        href={`announcements/${content.postLink}`}
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
      </a>

      <div className="mt-6 md:align-middle">
        <a
          href={content.categoryLink}
          className="mono text-sm font-medium uppercase"
        >
          {content.tag}
        </a>
        <a href={`announcements/${content.postLink}`} className="group mt-3 block">
        <h2 className="text-xl costa font-bold tracking-normal transition duration-300 ease-in-out group-hover:underline lg:text-2xl xl:text-3xl lg:leading-tight">
            {content.title}
          </h2>
        </a>

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
