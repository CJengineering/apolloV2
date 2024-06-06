import { EventFieldDataCleaned } from "@/app/interfaces";
import React from "react";



const EventCardV1: React.FC<{ article: EventFieldDataCleaned }> = ({ article }) => {
  return (
    <article
      key={article.slug}
      className="group relative flex flex-col flex-wrap rounded-2xl transition duration-300 ease-in-out hover:shadow-xl"
    >
      <div className="aspect-h-1 aspect-w-2 relative z-20 w-full overflow-hidden rounded-t-2xl bg-gray-50">
        <a href={article.locationLink} className="bg-red-400">
          <img
            src={article.heroImage.url}
            alt={article.heroImage.alt || article.name}
            className="w-full h-full object-cover"
          />
        </a>
      </div>
      <div className="box-border flex w-full flex-1 flex-col justify-between rounded-b-2xl border-b-2 border-l-2 border-r-2 border-gray-100 bg-white p-6 transition duration-300 ease-in-out group-hover:border-transparent xl:p-7">
        <div>
          <a
            href={article.locationLink}
            className="transition-color relative text-tiny font-medium uppercase tracking-widest text-red-700 duration-300 ease-in-out hover:text-red-600"
          >
            {article.programmeLabel}
          </a>
          <h3 className="mt-3 text-xl font-medium leading-tight text-gray-900 decoration-gray-800 decoration-2 transition duration-300 ease-in-out hover:underline sm:text-2xl lg:text-xl xl:text-2xl">
            <a href={article.locationLink}>
              <span className="absolute inset-0" aria-hidden="true"></span>
              {article.name}
            </a>
          </h3>
          <p className="mt-4 block text-base leading-relaxed text-gray-500">
            {article.teaserText}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            <strong>Start Date:</strong> {article.eventDate}
          </p>
          <p className="text-sm text-gray-500">
            <strong>End Date:</strong> {article.endDate}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            <strong>Time:</strong> {article.time}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            <strong>Location:</strong> {article.address}
          </p>
        </div>
        <div className="mt-5 flex items-center sm:mt-6">
          <div className="ml-3">
            <p className="relative text-sm font-medium text-gray-700">
              <strong>Organisers:</strong>
            </p>
            <ul className="text-sm text-gray-500">
              {article.organisers.map((organiser, index) => (
                <li key={index}>{organiser}</li>
              ))}
            </ul>
            <a
              href={article.rsvpLink}
              className="mt-2 inline-block text-sm font-medium text-red-700 hover:underline"
            >
              {article.buttonCtaText}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EventCardV1;
