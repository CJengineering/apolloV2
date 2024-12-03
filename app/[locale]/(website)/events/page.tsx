import type { Metadata } from "next";

import { notFound } from "next/navigation";

import image from "@/public/images/to_sort/mapCJ.webp";

import cancerImage from "@/public/images/imagesCJ/FACT Alliance_J-WAFS.png";

import { getData } from "@/functions/api/getData";
import eventMapper from "@/functions/transformers/eventMapper";

import EventCardSmall from "@/components/custom beta components/EventCardSmall";
import {
  EventFieldData,
  EventFieldDataCleaned,
  Item,
  NewsMainProps,
  PartnersRawFields,
  ProgrammeRawFields,
} from "@/app/interfaces";

import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { EventProvider } from "./event-context";
import FilterComponentForEvents from "@/components/CJ-components/components-CJ/test components/FilterComponentForEvents";
import EventsDisplay from "./event-display";
import ContainerFixedWidth from "@/components/CJ-components/components-CJ/layout/ContainerFixedWidth";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import { fetchAll } from "@/functions/api/fetchAll";
export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "Events",
  description:
    "Community Jameel hosts and collaborates on events across the globe. Check out what's on and look back at some of our past events.",
  ogType: "website",
  ogImage: "/images/metadata/EVENTS.webp",
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "Community", "Events", "What's on"],
});

export default async function WhatsOnContent({
  params,
}: {
  params: {
    topic: string;
    slug: string;
  };
}) {
  {
    /** DATA FETCHING  */
  }
  const ids = ["Programmes" ];
  const dataFetches = ids.map((id) => getData(getIdByDisplayName(id)));
  const [ programmeData,] =
    await Promise.all(dataFetches);

  const eventsCleanResponse =  await fetchAll("events")
  const eventsClean : EventFieldDataCleaned[] = eventsCleanResponse.map(item => item.field_data)
   
  const eventsFeatured = eventsClean.filter((event) => event.featured);

  const eventFuture = eventsClean.filter(
    (event) =>
      new Date(event.endDate) > new Date() && !event.featured && !event.isDraft
  );
  interface RelatedCollection {
    id: string;
    name: string;
  }
  const programmesForFilter: RelatedCollection[] = programmeData.items.map(
    (item) => ({
      id: item.id || "",
      name: item.fieldData.shortname || "",
    })
  );
  // Filter past events and check isDraft is false
  const eventPast = eventsClean.filter(
    (event) => new Date(event.endDate) < new Date() && !event.isDraft
  );
  return (
    <>
      <h1 className="header-page pb-8 lg:text-left">Events</h1>
      <div>
        <div className="">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Map over the featured events first */}
            {eventsFeatured.map((article, index) => (
              <EventCardSmall key={`featured-${index}`} article={article} />
            ))}

            {/* Then map over the future events */}
            {eventFuture.map((article, index) => (
              <EventCardSmall key={`upcoming-${index}`} article={article} />
            ))}
          </div>
        </div>

        <div>
          <div className="pb-6">
            <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
          </div>
          <div className="pb-3">
            <h2 className="header-section pb-3">Past events</h2>
          </div>
          <EventProvider
            programmes={programmesForFilter}
            EventsClean={eventPast}
          >
            <ContainerFixedWidth>
              <div className=" relative">
                <FilterComponentForEvents />
              </div>
              <EventsDisplay />
            </ContainerFixedWidth>
          </EventProvider>
          {/* <div className="grid md:grid-cols-3 gap-6">
            {eventPast.map((article, index) => (
              <EventCardSmall key={index} article={article} />
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}
