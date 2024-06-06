import { EventCardProps, EventFieldDataCleaned } from "@/app/interfaces";
import React from "react";



const EventCard: React.FC<{ article: EventCardProps }> = ({ article }) => {
  return (
    <article
      key={article.id}
      className="group relative flex flex-col flex-wrap rounded-2xl transition duration-300 ease-in-out hover:shadow-xl"
    >
      <div className="aspect-h-1 aspect-w-2 relative z-20 w-full overflow-hidden rounded-t-2xl bg-gray-50">
        <a href="post.html" className="bg-red-400">
          <img
            src={article.imageUrl}
            alt={article.name}
            className="w-full h-full object-cover"
          />
        </a>
      </div>
      <div className="box-border flex w-full flex-1 flex-col justify-between rounded-b-2xl border-b-2 border-l-2 border-r-2 border-gray-100 bg-white p-6 transition duration-300 ease-in-out group-hover:border-transparent xl:p-7">
        <div>
          <a
            href="category.html"
            className="transition-color relative text-tiny font-medium uppercase tracking-widest text-red-700 duration-300 ease-in-out hover:text-red-600"
          >
            {article.programme}
          </a>
          <h3 className="mt-3 text-xl font-medium leading-tight text-gray-900 decoration-gray-800 decoration-2 transition duration-300 ease-in-out hover:underline sm:text-2xl lg:text-xl xl:text-2xl">
            <a href="post.html">
              <span className="absolute inset-0" aria-hidden="true"></span>
              {article.name}
            </a>
          </h3>
          <p className="mt-4 block text-base leading-relaxed text-gray-500">
            {article.description}
          </p>
        </div>
        <div className="mt-5 flex items-center sm:mt-6">
          <a
            href="author.html"
            className="relative h-10 w-10 animate-pulse rounded-xl bg-gray-50"
          >
            <img
              src={article.source.imageUrl}
              alt={article.source.name}
              className="lazy h-full w-full rounded-xl object-cover object-center opacity-0 transition duration-300 ease-in-out"
            />
          </a>
          <div className="ml-3">
            <a
              href="author.html"
              className="relative text-sm font-medium text-gray-700 hover:underline"
            >
              {article.source.name}
            </a>
            <p className="text-sm text-gray-500">
              <time dateTime={article.source.date}>
                {new Date(article.source.date).toDateString()}
              </time>
              <span aria-hidden="true"> &middot; </span>
              <span>{article.source.readTime}</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
