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
export default function FeatureCard({ content }: { content: NewsMainProps }) {
  return (
    <article className="relative  ">
      <a
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
      </a>

      <div className="mt-2 md:align-middle">
        <a
          href={content.categoryLink}
          className="mono font-normal uppercase relative text-sm"
        >
          {content.tag}
        </a>
        <a href={content.postLink} className="group mt-1 block">
          <h2 className="text-xl mono font-bold leading-6 tracking-tight decoration-3 transition duration-300 ease-in-out group-hover:underline md:tracking-tight lg:text-2xl lg:leading-tight ">
            {content.title}
          </h2>
          <div>
            <p
              className="mt-1 text-base sans-serif font-normal leading-6"
              dangerouslySetInnerHTML={{ __html: content.description }}
            ></p>
          </div>
        </a>
      </div>
    </article>
  );
}
