"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";
import { EventFieldDataCleaned } from "@/app/interfaces";

type EventCardContextType = {
  article: EventFieldDataCleaned;
};

const EventCardContext = createContext<EventCardContextType | undefined>(
  undefined
);

function useEventCardContext() {
  const context = useContext(EventCardContext);
  if (!context) {
    throw new Error(
      "useEventCardContext must be used within an EventCardProvider"
    );
  }
  return context;
}

type EventCardProviderProps = PropsWithChildren<{
  article: EventFieldDataCleaned;
}>;

const CompoundEventCard = ({ article, children }: EventCardProviderProps) => {
  return (
    <EventCardContext.Provider value={{ article }}>
      <article
        key={article.slug}
        className="group relative flex flex-col flex-wrap rounded-2xl transition duration-300 ease-in-out hover:shadow-xl"
      >
        {children}
      </article>
    </EventCardContext.Provider>
  );
};
CompoundEventCard.displayName = "CompoundEventCard";
const ImageLink = () => {
    const { article } = useEventCardContext();
    return (
      <div className="aspect-h-1 aspect-w-2 relative z-20 w-full overflow-hidden rounded-t-2xl bg-gray-50">
        <a href={`/events/${article.slug}`} className="bg-red-400">
          <img
            src={article.heroImage.url}
            alt={article.heroImage.alt || article.name}
            className="w-full h-full object-cover"
          />
        </a>
      </div>
    );
  };
  ImageLink.displayName = "ImageLink";
  
  const ProgrammeLink = () => {
    const { article } = useEventCardContext();
    return (
      <a
        href={`/events/${article.slug}`}
        className="transition-color relative text-tiny font-medium uppercase tracking-widest text-red-700 duration-300 ease-in-out hover:text-red-600"
      >
        {article.programmeLabel}
      </a>
    );
  };
  ProgrammeLink.displayName = "ProgrammeLink";
  
  const TitleLink = () => {
    const { article } = useEventCardContext();
    return (
      <h3 className="mt-3 text-xl font-medium leading-tight text-gray-900 decoration-gray-800 decoration-2 transition duration-300 ease-in-out hover:underline sm:text-2xl lg:text-xl xl:text-2xl">
        <a href={article.locationLink}>
          <span className="absolute inset-0" aria-hidden="true"></span>
          {article.name}
        </a>
      </h3>
    );
  };
  TitleLink.displayName = "TitleLink";
  
  const TeaserText = () => {
    const { article } = useEventCardContext();
    return (
      <p className="mt-4 block text-base leading-relaxed text-gray-500">
        {article.teaserText}
      </p>
    );
  };
  TeaserText.displayName = "TeaserText";
  
  const EventDetails = () => {
    const { article } = useEventCardContext();
    return (
      <>
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
      </>
    );
  };
  EventDetails.displayName = "EventDetails";
  
  const Organisers = () => {
    const { article } = useEventCardContext();
    return (
      <div className="mt-5 flex items-center sm:mt-6">
        <div className="ml-3">
          <p className="relative text-sm font-medium text-gray-700">
            <strong>Organisers:</strong>
          </p>
          <ul className="text-sm text-gray-500">
            {article.organisers.map((organiser, index) => (
              <li key={index}>{organiser.name}</li>
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
    );
  };
  Organisers.displayName = "Organisers";
  
  const ContentContainer = ({ children }: PropsWithChildren) => (
    <div className="box-border flex w-full flex-1 flex-col justify-between rounded-b-2xl border-b-2 border-l-2 border-r-2 border-gray-100 bg-white p-6 transition duration-300 ease-in-out group-hover:border-transparent xl:p-7">
      {children}
    </div>
  );
  ContentContainer.displayName = "ContentContainer";
  export {
   CompoundEventCard,
    ImageLink as EventCardImageLink,
    ProgrammeLink as EventCardProgrammeLink,
    TitleLink as EventCardTitleLink,
    TeaserText as EventCardTeaserText,
    EventDetails as EventCardEventDetails,
    Organisers as EventCardOrganisers,
    ContentContainer as EventCardContentContainer,
  };
   
  
