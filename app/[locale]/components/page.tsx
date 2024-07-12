import CardHorizontal from "@/components/CJ-components/components-CJ/basic components/CardHorizontal";
import CardHorizontalImage from "@/components/CJ-components/components-CJ/basic components/CardHorizontal";
import MediaCard from "@/components/CJ-components/components-CJ/basic components/MediaCard";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import EventCard from "@/components/custom beta components/EventCard";
import EventCardV1 from "@/components/custom beta components/EventCardV1";
import FeatureCard from "@/components/custom beta components/FeatureCard";
import NewsCard from "@/components/custom beta components/NewsCard";
import NewsRightContent from "@/components/custom beta components/NewsRightContent";
import NewsSmall from "@/components/custom beta components/NewsSmall";
import PersonalCard from "@/components/custom beta components/PersonCard";
import PostCard from "@/components/custom beta components/PostCard";
import SectionBanter from "@/components/custom beta components/SectionBanter";
import Logo from "@/components/ui/logo";
import { getData } from "@/functions/api/getData";
import eventMapper from "@/functions/transformers/eventMapper";
import featureMapper from "@/functions/transformers/featureMapper";
import multimediaMapper from "@/functions/transformers/multimediaMapper";
import newsMapper from "@/functions/transformers/newsMapper";
import postMapper from "@/functions/transformers/postMapper";
import teamProfileMapper from "@/functions/transformers/teamProfileMapper";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { t } from "i18next";
import React from "react";
import image from "../../../public/images/imagesCJ/FACT Alliance_J-WAFS.png";
import CardProgramme from "@/components/CJ-components/components-CJ/basic components/CardProgramme";
import programmeMapper from "@/functions/transformers/programmeMapper";
import CardSquared from "@/components/CJ-components/components-CJ/basic components/CardSquared";
import {
  CompoundNewsCard,
  CompoundNewsCardImageLink,
  CompoundNewsCardProgrammeLabel,
  CompoundNewsCardTitleLink,
} from "@/components/CJ-components/components-CJ/test components/CompoundNewsCard";
import {
  CompoundNewsSmall,
  CompoundNewsSmallDateLabel,
  CompoundNewsSmallImageLink,
  CompoundNewsSmallMetaContainer,
  CompoundNewsSmallSourceLabel,
  CompoundNewsSmallTitleLink,
} from "@/components/CJ-components/components-CJ/test components/CompoundNewsSmall";
import {
  CompoundEventCard,
  EventCardContentContainer,
  EventCardEventDetails,
  EventCardImageLink,
  EventCardOrganisers,
  EventCardProgrammeLink,
  EventCardTeaserText,
  EventCardTitleLink,
} from "@/components/CJ-components/components-CJ/test components/CompoundEventCard";
import {
  CompoundUnifiedComponent,
  UnifiedComponentCollection,
  UnifiedComponentRelatedProgrammes,
  UnifiedComponentSlug,
  UnifiedComponentThumbnail,
  UnifiedComponentTitle,
} from "@/components/CJ-components/components-CJ/test components/CompoundUnifiedComponent";

// This is a component documentation component
interface ComponentDocProps {
  name: string;
  description: string;
  width: string;

  children: React.ReactNode;
}
const ComponentDoc = ({
  name,
  description,

  children,
  width,
}: ComponentDocProps) => (
  <div className="mb-8 p-6 border border-gray-300 rounded shadow">
    <h2 className="text-2xl font-semibold mb-4">{name}</h2>
    <div className={`p-4 border-t border-gray-200 rounded mb-4  w-[${width}]`}>
      {children}
    </div>
    <h3 className="text-xl font-semibold mb-2">Usage</h3>

    <p className="text-gray-700 mt-4">{description}</p>
  </div>
);

export default async function HomeSecond({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  // This is the Data fetching functions

  // Getting the ids
  //Get Names

  const progremmeId = getIdByDisplayName("Programmes");
  const peopleId = getIdByDisplayName("People");
  const sourcesId = getIdByDisplayName("Sources");
  const tagsId = getIdByDisplayName("Tags");
  const eventsId = getIdByDisplayName("Events");
  const newsId = getIdByDisplayName("News");
  const partnersId = getIdByDisplayName("Partners");
  const postsId = getIdByDisplayName("Posts");
  const multimediaId = getIdByDisplayName("Multimedia");
  const awardId = getIdByDisplayName("Awards");
  const teamId = getIdByDisplayName("Team");
  const categoryId = getIdByDisplayName("Categories");
  const featureId = getIdByDisplayName("Features");

  // Data fetching
  const newsAll = await getData(newsId);
  const sourcesAll = await getData(sourcesId);
  const peopleAll = await getData(peopleId);
  const programmeAll = await getData(progremmeId);
  const eventAll = await getData(eventsId);
  const tagsAll = await getData(tagsId);
  const partnersAll = await getData(partnersId);
  const postsAll = await getData(postsId);
  const multimediaAll = await getData(multimediaId);
  const awardAll = await getData(awardId);
  const teamAll = await getData(teamId);
  const categoryAll = await getData(categoryId);
  const featureAll = await getData(featureId);

  //mapping the data

  const newsCleanedAll = newsAll.items.map((item) =>
    newsMapper(
      item,
      programmeAll.items,
      peopleAll.items,
      sourcesAll.items,
      tagsAll.items,
      eventAll.items
    )
  );
  const teamCleanedAll = teamAll.items.map((item) => teamProfileMapper(item));

  const postCleanedAll = postsAll.items.map((item) =>
    postMapper(
      item,
      categoryAll.items,
      eventAll.items,
      programmeAll.items,
      peopleAll.items
    )
  );
  const programmeCeanedAll = programmeAll.items.map((item) =>
    programmeMapper(
      item,
      peopleAll.items,
      partnersAll.items,
      programmeAll.items
    )
  );
  const mediaCleanedAll = multimediaAll.items.map((item) =>
    multimediaMapper(
      item,
      programmeAll.items,
      eventAll.items,
      sourcesAll.items,
      peopleAll.items
    )
  );
  const featureCleanedAll = featureAll.items.map((item) =>
    featureMapper(item, programmeAll.items)
  );

  const eventCleanedAll = eventAll.items.map((item) =>
    eventMapper(item, partnersAll.items, programmeAll.items, peopleAll.items)
  );

  const compoundComponents = [
    {
      name: "CompoundNewsCard",
      width: "400px",
      description:
        "Remove the component you don't need and if component has Container in the name it's just used as a container so it can be replace by any other container div",
      component: (
        <CompoundNewsCard content={newsCleanedAll[0]} locale={params.locale}>
          <CompoundNewsCardImageLink />
          <div className="mt-6 md:align-middle">
            <CompoundNewsCardProgrammeLabel />
            <CompoundNewsCardTitleLink />
          </div>
        </CompoundNewsCard>
      ),
    },
    {
      name: "CompoundNewsSmall",
      width: "400px",
      description:
        "Remove the component you don't need and if component has Container in the name it's just used as a container so it can be replace by any other container div",
      component: (
        <CompoundNewsSmall content={newsCleanedAll[0]} locale={params.locale}>
          <CompoundNewsSmallImageLink />
          <div className="order-2 mt-2 w-full px-2 sm:mt-0 sm:max-w-sm sm:pl-0 sm:pr-5 lg:order-2 lg:mt-4 xl:ml-5 xl:mt-0 xl:flex-1">
            <CompoundNewsSmallSourceLabel />
            <CompoundNewsSmallTitleLink />
            <CompoundNewsSmallMetaContainer>
              <CompoundNewsSmallDateLabel />
            </CompoundNewsSmallMetaContainer>
          </div>
        </CompoundNewsSmall>
      ),
    },
    {
      name: "CompoundEventCard",
      width: "400px",
      description:
        "Remove the component you don't need and if component has Container in the name it's just used as a container so it can be replace by any other container div",
      component: (
        <CompoundEventCard article={eventCleanedAll[0]}>
          <EventCardImageLink />
          <EventCardContentContainer>
            <div>
              <EventCardProgrammeLink />
              <EventCardTitleLink />
              <EventCardTeaserText />
              <EventCardEventDetails />
            </div>
            <EventCardOrganisers />
          </EventCardContentContainer>
        </CompoundEventCard>
      ),
    },
    {
      name: "CompoundUnifiedComponent",
      width: "400px",
      description:
        "Must be used as a blue print can accepts multimedia, events, news, posts, publications",
      component: (
        <CompoundUnifiedComponent data={eventCleanedAll[0]}>
          <UnifiedComponentTitle />
          <UnifiedComponentThumbnail />
          <UnifiedComponentSlug />
          <UnifiedComponentCollection />
          <UnifiedComponentRelatedProgrammes />
        </CompoundUnifiedComponent>
      ),
    },
  ];

  const componentsCard = [
    {
      name: "NewsCard",
      width: "400px",
      description: "News card component used for displaying news articles.",
      component: (
        <NewsCard content={newsCleanedAll[0]} locale={params.locale} />
      ),
    },
    {
      name: "NewsSmall",
      width: "400px",
      description: "News Small use in related news section.",
      component: <NewsSmall content={newsCleanedAll[0]} />,
    },
    {
      name: "NewsRightContent",
      width: "400px",
      description: "Is used inside news slug page ",
      component: (
        <NewsRightContent
          source={newsCleanedAll[0].sources.name}
          datePublished={newsCleanedAll[0].datePublished}
          relatedProgrammes={newsCleanedAll[0].programmeS}
          relatedPeople={newsCleanedAll[0].people}
        />
      ),
    },
    {
      name: "NewsRightContent",
      width: "400px",
      description: "Is used inside news slug page ",
      component: (
        <NewsRightContent
          source={newsCleanedAll[0].sources.name}
          datePublished={newsCleanedAll[0].datePublished}
          relatedProgrammes={newsCleanedAll[0].programmeS}
          relatedPeople={newsCleanedAll[0].people}
        />
      ),
    },
    {
      name: "PersonalCard",
      width: "400px",
      description: "Is used inside teams page  ",
      component: (
        <PersonalCard author={teamCleanedAll[0]} socialPlatforms={[]} />
      ),
    },
    {
      name: "PostCard",
      width: "400px",
      description: "Is used inside posts which will be news  ",
      component: <PostCard content={postCleanedAll[0]} />,
    },
    {
      name: "EventCard",
      width: "400px",
      description: "Is used inside event  page  ",
      component: <EventCardV1 article={eventCleanedAll[0]} />,
    },
    {
      name: "MediaCard",
      width: "400px",
      description: "Is used inside event  page  ",
      component: (
        <MediaCard
          imageUrl={mediaCleanedAll[0].thumbnail.url}
          alt={mediaCleanedAll[0].thumbnail.alt}
          source={mediaCleanedAll[0].sources.name}
          name={mediaCleanedAll[0].name}
          slug={mediaCleanedAll[0].slug}
        />
      ),
    },
    {
      name: "FeatureCard",
      width: "400px",
      description: "Is used for feature  ",
      component: <FeatureCard content={featureCleanedAll[5]} />,
    },
    {
      name: "CardHorizontal",
      width: "400px",
      description: "Is used inside event  page  ",
      component: <CardHorizontal imageUrl={image} />,
    },
    {
      name: "CardProgramme",
      width: "400px",
      description: "used in Community page ",
      component: (
        <CardProgramme
          imageUrl={programmeCeanedAll[30].logoSvgSquareOverlay.url}
          programmeTitle={programmeCeanedAll[30].name}
          programmeType={programmeCeanedAll[30].type}
          order={programmeCeanedAll[30].order}
          altText={programmeCeanedAll[30].logoSvgOriginalRatio.alt}
        />
      ),
    },
    {
      name: "CardProgramme",
      width: "400px",
      description: "used in Community page ",
      component: (
        <CardSquared
          imageUrl={programmeCeanedAll[30].logoSvgSquareOverlay.url}
        />
      ),
    },
  ];

  return (
    <ContentContainer width="full" desktopWidth="large">
      <div className="h-8"></div>
      <SectionBanter title={"All components"} type="h1">
        <p className="mt-6">
          In this page are displayed all components of the Apollo project with
          real data from Webflow
        </p>
      </SectionBanter>
      <div className="h-8"></div>
      <SectionBanter title={"Data Fetching"} type="h2">
        <h1 className="text-xl font-bold text-center mb-4">
          Application Data Management Documentation
        </h1>

        <div className="mb-8">
          <h2 className="text-lg font-semibold">
            Step 1: Retrieve IDs for Collections
          </h2>
          <p className="text-gray-700">
            Initialize constants to store IDs for various data collections:
          </p>
          <pre className="bg-black text-green-500 font-mono p-4 rounded border border-gray-700 overflow-x-auto">
            <code>{`const programmeId = getIdByDisplayName("Programmes");
const peopleId = getIdByDisplayName("People");
const sourcesId = getIdByDisplayName("Sources");
const tagsId = getIdByDisplayName("Tags");
const eventsId = getIdByDisplayName("Events");
const newsId = getIdByDisplayName("News");
const partnersId = getIdByDisplayName("Partners");
const postsId = getIdByDisplayName("Posts");
const multimediaId = getIdByDisplayName("Multimedia");
const awardId = getIdByDisplayName("Awards");`}</code>
          </pre>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold">Step 2: Fetch Data</h2>
          <p className="text-gray-700">
            Fetch data asynchronously from each collection using their IDs:
          </p>
          <pre className="bg-black text-green-500 font-mono p-4 rounded border border-gray-700 overflow-x-auto">
            <code>{`const dataWeb = await getData(newsId);
const sourcesAll = await getData(sourcesId);
const peopleAll = await getData(peopleId);
const programmeAll = await getData(programmeId);
const eventAll = await getData(eventsId);
const tagsAll = await getData(tagsId);
const partnersAll = await getData(partnersId);
const postsAll = await getData(postsId);
const multimediaAll = await getData(multimediaId);
const awardAll = await getData(awardId);`}</code>
          </pre>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold">Step 3: Process Data</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Extract raw data items (e.g., <code>dataWeb.items</code>).
            </li>
            <li>Apply filter functions to find related collections.</li>
            <li>
              Pass the filtered data through a mapper function to transform the
              data into a clean, user-friendly format. This step involves
              replacing numeric IDs with more descriptive string versions such
              as names and slugs.
            </li>
          </ul>
        </div>

        <p className="text-gray-600 italic">
          Following these structured steps will ensure efficient data management
          across the application.
        </p>
      </SectionBanter>
      <div className="h-16"></div>
      <SectionBanter title={"Card Components"}>
        <p className="my-6">
          Card componennts used for News, Press, Events, Multimedia, People,
          Programmes, Partners, Sources, and Posts
        </p>
        <div className="h-8"></div>
        <div className="">
          {componentsCard.map((comp, index) => (
            <ComponentDoc
              key={index}
              name={comp.name}
              width={comp.width}
              description={comp.description}
            >
              {comp.component}
            </ComponentDoc>
          ))}
        </div>
      </SectionBanter>
      <SectionBanter title={"Compound Card "}>
        <p className="my-6">
          These cards has multiple components inside them to conditionnaly
          render the content
        </p>
        <div className="h-8"></div>
        <div className="">
          {compoundComponents.map((comp, index) => (
            <ComponentDoc
              key={index}
              name={comp.name}
              width={"400px"}
              description={comp.description}
            >
              {comp.component}
            </ComponentDoc>
          ))}
        </div>
      </SectionBanter>
    </ContentContainer>
  );
}
