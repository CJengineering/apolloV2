import React from "react";
import Image from "next/image";
import { BeakerIcon, BoltIcon, VideoCameraIcon, RocketLaunchIcon, NewspaperIcon, MegaphoneIcon, MicrophoneIcon, UserGroupIcon, BookOpenIcon, TrophyIcon, PlayCircleIcon, PaperClipIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'

interface newLocaleProps {
  locale: string;

}
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
  arabicTitle: string;
}
export default function NewsCard({ content, locale }: { content: NewsMainProps , locale: newLocaleProps}) {
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
            loading="lazy"
            width={500}
            height={500}
            alt="Featured article"
          />
        </div>
      </a>

      <div className="mt-6 md:align-middle">
        <div className="flex">
          <a href={content.categoryLink} className="mono text-sm font-medium uppercase">{content.tag}</a>
          <div className="mono text-sm font-medium uppercase px-3"><span aria-hidden="true">|</span></div>
          <a href={content.categoryLink} className="mono text-sm font-medium uppercase">news</a>
        
        </div>
        <a href={content.categoryLink} className="group mt-3 block">
          <h2 className="text-xl costa font-bold tracking-normal transition duration-300 ease-in-out group-hover:underline lg:text-2xl xl:text-3xl lg:leading-tight">
            {locale.locale == 'ar' ? content.arabicTitle :content.title}
          </h2>
    
        </a>

        <div className="mt-2 block">
          <div className="flex">
            <div><p className="mono text-sm font-medium uppercase">{content.authorName}</p></div>
            <div className="mono text-sm font-medium uppercase px-3"><span aria-hidden="true">|</span></div>
            <div><p className="mono text-sm font-medium uppercase"><time dateTime={content.date}>{content.date}</time>
              {/* <span>{content.readTime}</span> */}
            </p></div>
          </div>
        </div>
      </div>
    </article>
  );
}
