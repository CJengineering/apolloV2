import MediaCard from "@/components/CJ-components/components-CJ/basic components/MediaCard";
import TableRowSingle from "@/components/CJ-components/components-CJ/custom components/TableRowSIngle";

import EventCard from "@/components/custom beta components/EventCard";
import MainContainer from "@/components/custom beta components/MainContainer";
import NewsCard from "@/components/custom beta components/NewsCard";
import PostCard from "@/components/custom beta components/PostCard";
import { getData } from "@/functions/api/getData";
import filterRelatedAwards from "@/functions/filters/filterRelatedAwards";
import { filterRelatedEvents } from "@/functions/filters/filterRelatedEvents";
import filterRelatedFeatures from "@/functions/filters/filterRelatedFeatures";
import filterRelatedMultimedia from "@/functions/filters/filterRelatedMultimedia";
import { filterRelatedNews } from "@/functions/filters/filterRelatedNews";
import { filterRelatedPosts } from "@/functions/filters/filterRelatedPosts";
import filterRelatedPrizes from "@/functions/filters/filterRelatedPrizes";
import eventMapper from "@/functions/transformers/eventMapper";
import featureMapper from "@/functions/transformers/featureMapper";
import { mapEventFieldDataToEventCard } from "@/functions/transformers/mapEventFieldToEventCard";
import multimediaMapper from "@/functions/transformers/multimediaMapper";
import { mapMultimediaToMediaCard } from "@/functions/transformers/multimediaToCardMultimedia";

import newsMapper from "@/functions/transformers/newsMapper";
import { newsToNewsCard } from "@/functions/transformers/newsToNewsCard";
import mapItemToNewsMainProps from "@/functions/transformers/newsTransformer";
import photoMapper from "@/functions/transformers/photoRawToLightBox";
import { mapProgrammeToCardProgramme } from "@/functions/transformers/porgrammeToCardProgramme";
import postMapper from "@/functions/transformers/postMapper";
import { postToPostCard } from "@/functions/transformers/postToPostCard";
import { mapProgrammeToRowData } from "@/functions/transformers/programmeCleanIntoRowTable";
import programmeMapper from "@/functions/transformers/programmeMapper";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { get } from "http";
import { Divide } from "lucide-react";
import React from "react";
import ContentPhotos from "../../../../../components/CJ-components/components-CJ/test components/content-photos";
import PostAccordion from "@/components/mdx/accordion";
import LanguageChanger from "@/components/custom beta components/LanguageChanger";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";
import Image from "next/image";
import HomeCard from "@/components/CJ-components/components-CJ/basic components/HomeCard";

// START INITIATIVES

const cardData = [
  {
    imageUrl: "/images/labs/iraq-cultural-health-fund/ark-re-imagined-poster.webp",
    alt: "Ocean Space Iraq Pavilion 2021 Venice Biennale",
    title: "Ocean Space x Iraq Pavilion",
    subtitle: "Ocean Space hosts the Iraq Pavilion at the International Architecture Exhibition of the 2021 Venice Biennale",
    link: "https://www.ocean-space.org/activities/ark-re-imagined-the-expeditionary-pavilion-1",
    openInNewTab: false,
    clickAction: "External link",
  },
  {
    imageUrl: "/images/labs/iraq-cultural-health-fund/ark-re-imagined-project-overview.webp",
    alt: "Project overview",
    title: "Project overview",
    subtitle: "Exploring the Ancient Craft Traditions of Mesopotamia through Art and Design",
    link: "https://jwafs.mit.edu/SolutionsGrants",
    openInNewTab: false,
    clickAction: "External link",
  },
  {
    imageUrl: "/images/labs/iraq-cultural-health-fund/fast.webp",
    alt: "Documentary film",
    title: "Documentary film",
    subtitle: "Ark Re-imagined: The Expeditionary Pavilion",
    link: "https://www.youtube.com/watch?v=A0oQgpqR0fY",
    openInNewTab: false,
    clickAction: "External link",
  },
];
// END INITIATIVES

export default async function IraqCulturalArchivePage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const peopleCollectionID = getIdByDisplayName("People");
  const programmeCollectionID = getIdByDisplayName("Programmes");
  const partnersCollectionID = getIdByDisplayName("Partners");
  const newsCollectionID = getIdByDisplayName("News");
  const eventsCollectionID = getIdByDisplayName("Events");
  const postsCollectionID = getIdByDisplayName("Posts");
  const multimediaCollectionID = getIdByDisplayName("Multimedia");
  const sourcesCollectionID = getIdByDisplayName("Sources");
  const featuresCollectionID = getIdByDisplayName("Features");
  const awardsCollectionID = getIdByDisplayName("Awards");
  const jobsCollectionID = getIdByDisplayName("Jobs");
  const photosCollectionID = getIdByDisplayName("Photos");
  const prizesCollectionID = getIdByDisplayName("Prizes");
  const categoryId = getIdByDisplayName("Categories");
  const tagId = getIdByDisplayName("Tags");

  {
    /**Get the data from the collection */
  }

  const programmesRawData = await getData(programmeCollectionID);
  const peopleRawData = await getData(peopleCollectionID);
  const partnersRawData = await getData(partnersCollectionID);
  const multimediaRawData = await getData(multimediaCollectionID);
  const postsRawData = await getData(postsCollectionID);
  const newsRawData = await getData(newsCollectionID);
  const eventsRawData = await getData(eventsCollectionID);
  const sourcesRawData = await getData(sourcesCollectionID);
  const featuresRawData = await getData(featuresCollectionID);
  const awardsRawData = await getData(awardsCollectionID);
  const jobsRawData = await getData(jobsCollectionID);
  const photosRawData = await getData(photosCollectionID);
  const prizesRawData = await getData(prizesCollectionID);
  const categoriesRawData = await getData(categoryId);
  const tagsRawData = await getData(tagId);

  {
    /**Get the single programme by id from webflow */
  }
  const jwafsId = "61ee828a15a3186c90bde643";
  const jwafsSlug = params.slug;
  const singleProgramme = programmesRawData.items.find(
    (item) => item.id === jwafsId
  );

  {
    /**Related collections in raw state  */
  }
  const relatedMultimedia = filterRelatedMultimedia(multimediaRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedPost = filterRelatedPosts(postsRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedNews = filterRelatedNews(newsRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedEvents = filterRelatedEvents(eventsRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedFeatures = filterRelatedFeatures(
    featuresRawData.items,
    singleProgramme.id
  );
  const relatedPrizes = filterRelatedPrizes(prizesRawData.items, {
    people: singleProgramme.id,
  });
  const relatedAwards = filterRelatedAwards(awardsRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedJobs = filterRelatedAwards(jobsRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedPhotos = photosRawData.items;
  {
    /**Missing to add 
    prizes jobs people photos learns
    
    */
  }

  {
    /**Map the data  the related raw data into clean fields */
  }

  const cleanRelatedPosts = relatedPost.map((item) =>
    postMapper(
      item,
      categoriesRawData.items,
      eventsRawData.items,
      programmesRawData.items,
      peopleRawData.items
    )
  );
  const cleanRelatedEvents = relatedEvents.map((item) =>
    eventMapper(
      item,
      programmesRawData.items,
      peopleRawData.items,
      peopleRawData.items
    )
  );
  const cleanedFeatures = relatedFeatures.map((item) =>
    featureMapper(item, programmesRawData.items)
  );
  const cleanedRelatedPhotos = relatedPhotos.map((item) =>
    photoMapper(item, programmesRawData.items, peopleRawData.items)
  );
  const cleanRelatedNews = relatedNews.map((item) =>
    newsMapper(
      item,
      programmesRawData.items,
      peopleRawData.items,
      sourcesRawData.items,
      tagsRawData.items,
      eventsRawData.items
    )
  );
  const cleanRelatedMultimedia = relatedMultimedia.map((item) =>
    multimediaMapper(
      item,
      programmesRawData.items,
      eventsRawData.items,
      sourcesRawData.items,
      peopleRawData.items
    )
  );
  {
    /**Clean Individual Programme */
  }
  const cleanSingleProgramme = programmeMapper(
    singleProgramme,
    peopleRawData.items,
    partnersRawData.items,
    programmesRawData.items
  );

  {
    /*map in to interface of different compoenents   */
  }

  const multimediaProps = cleanRelatedMultimedia.map(mapMultimediaToMediaCard);
  const newsProps: any[] = relatedNews.map((item) =>
    newsMapper(
      item,
      programmesRawData.items,
      peopleRawData.items,
      sourcesRawData.items,
      tagsRawData.items,
      eventsRawData.items
    )
  );
  const postProps = cleanRelatedPosts;
  const eventProps = cleanRelatedEvents.map(mapEventFieldDataToEventCard);

  const dataForRow = mapProgrammeToRowData(
    cleanSingleProgramme,
    cleanedFeatures
  );

  return (
    <>
      <div className="pt-20 lg:pt-10">
        <div className="flex flex-col text-left">
          <div className="pb-6">
            <h1 className="header-article">{cleanSingleProgramme.name}</h1>
          </div>
          <div className="w-2/3">
            <div
              className="prose prose-xl leading-normal dark:text-white"
              dangerouslySetInnerHTML={{ __html: cleanSingleProgramme.text }}
            />
          </div>
          {/* <div><ButtonCJ href={"https://www.imperial.ac.uk/research-and-innovation/research-office/funder-information/funding-opportunities/internal-funding-opportunities/the-jameel-fund/"} text={"Learn more at CULTURUNNERS"} styleType="secondary"></ButtonCJ></div> */}
        </div>
        <div className="py-3"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0">
          <div className="flex items-center justify-start py-6 lg:py-2">
            <div className="text-sm font-bold items-center">
              IN <br></br>PARTNERSHIP<br></br> WITH
            </div>
          </div>

          {/* 1 */}
          <div className="flex items-center justify-start py-6 lg:py-2">
            <a href="" target="" rel="">
              <Image
                src="/images/logos/yazda_logo.png"
                alt="Yazda logo"
                width={100}
                height={100}
                className="object-contain transition duration-300 hover:filter hover:grayscale"
              />
            </a>
          </div>

          {/* 2 */}
          <div className="flex items-center justify-start py-6 lg:py-2">
            <a
              href="https://www.culturunners.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logos/culturunners_logo.png"
                alt="CULTURUNNERS logo"
                width={100}
                height={100}
                className="object-contain transition duration-300 hover:filter hover:grayscale"
              />
            </a>
          </div>

          {/* 3 */}
          <div className="flex items-center justify-start py-6 lg:py-2">
            <a
              href="https://www.imarabe.org/fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logos/institut-du-monde-arab_logo.svg"
                alt="Institut du Monde Arab logo"
                width={80}
                height={80}
                className="object-contain transition duration-300 hover:filter hover:grayscale"
              />
            </a>
          </div>

          {/* 4 */}
          <div className="flex items-center justify-start py-6 lg:py-2">
            <a
              href="https://www.un.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logos/un-logo.svg"
                alt="United Nations logo"
                width={80}
                height={80}
                className="object-contain transition duration-300 hover:filter hover:grayscale"
              />
            </a>
          </div>

          {/* 5 */}
          <div className="flex items-center justify-start py-6 lg:py-2">
            <a
              href="https://artsandculture.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logos/google-arts-and-culture_logo.svg"
                alt="Google Arts & Culture logo"
                width={100}
                height={100}
                className="object-contain transition duration-300 hover:filter hover:grayscale"
              />
            </a>
          </div>
        </div>

        {/* START DIVIDER */}
        <div className="w-full py-6 lg:py-10">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* END DIVIDER */}

        <div className="pb-6">
          <h2 className="header-section">Programmes</h2>
        </div>

        {/* START PROGRAMME SECTION */}
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-4/12">
            <Image
              src="/images/labs/iraq-cultural-health-fund/yazidi-cultural-archives.webp"
              alt="Yazidi Cultural Archive"
              width={1000}
              height={1000}
            />
          </div>
          <div className="lg:pl-6 lg:w-8/12">
            <div>
              <h3 className="text-3xl pb-6">Yazidi Cultural Archive</h3>
            </div>
            <p className="prose leading-normal dark:text-white mb-5">
              The Yazidi Cultural Archives, which are globally accessible and
              available in English and Arabic, comprise four online exhibitions
              created by 16 Yazidi women working in collaboration with Yazda, a
              community-led organisation that protects and champions Yazidis and
              other religious and ethnic minority communities, together with
              Community Jameel,{" "}
              <a href="https://www.culturunners.com/" target="_blank">
                CULTURUNNERS
              </a>
              , the Office of the UN Secretary-General’s Envoy on Technology,{" "}
              <a href="https://www.un.org/techenvoy/" target="_blank">
                the Office of the UN Secretary-General’s Envoy on Technology
              </a>
              , and{" "}
              <a href="https://www.nobodys-listening.com/" target="_blank">
                Nobody’s Listening
              </a>
              . The archives are published by the UN on the{" "}
              <a href="https://artsandculture.google.com/" target="_blank">
                Google’s Arts and Culture platform
              </a>
              . An evaluation of the impact of the archives on the psychological
              wellbeing of participants is being supported by{" "}
              <a
                href="https://steinhardt.nyu.edu/arts-health-nyu"
                target="_blank"
              >
                New York University (NYU) Arts and Health initiative
              </a>
              and the{" "}
              <a href="https://www.who.int/" target="_blank">
                World Health Organisation (WHO) Arts and Health programme
              </a>
              .
            </p>
            <div>
              <ButtonCJ
                href="https://artsandculture.google.com/story/the-art-of-yazidi-survival-united-nations/PwURZsXemMfbcw?hl=en"
                text={"Visit Google Arts & Culture"}
                styleType="secondary"
              ></ButtonCJ>{" "}
            </div>
          </div>
        </div>

        {/* END PROGRAMME SECTION */}

        <div className="py-6"></div>

        {/* START PROGRAMME SECTION */}

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-4/12">
            <Image
              src="/images/labs/iraq-cultural-health-fund/ark-re-imagine.webp"
              alt="Yazidi Cultural Archive"
              width={1000}
              height={1000}
            />
          </div>
          <div className="lg:pl-6 lg:w-8/12">
            <div>
              <h3 className="text-3xl pb-6">Ark Re-imagined</h3>
            </div>
            <p className="prose leading-normal dark:text-white mb-5">
              'Ark Re-imagined: the Expeditionary Pavilion' – the first-ever
              Iraqi national participation at the Biennale Architettura in
              Venice – is a project by artist
              <a
                href="https://www.instagram.com/salimrashad/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rashad Salim
              </a>
              , commissioned by the Ministry of Culture, Tourism and Antiquities
              of Iraq, curated by
              <a
                href="https://www.safinaprojects.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safina Projects
              </a>
              , and produced by Community Jameel and CULTURUNNERS as piloti del
              padiglione.
            </p>
            <div>
              <ButtonCJ
                href="https://www.safinaprojects.org/ark-re-imagined"
                text={"Visit Safina Projects to learn more"}
                styleType="secondary"
              ></ButtonCJ>{" "}
            </div>
          </div>
        </div>

        {/* END PROGRAMME SECTION */}

        {/* START DIVIDER */}
        <div className="w-full py-6 lg:py-10">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* END DIVIDER */}

        <div>
          <h2 className="header-section pb-6">Features</h2>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <HomeCard
              key={index}
              imageUrl={card.imageUrl}
              alt={card.alt}
              title={card.title}
              subtitle={card.subtitle}
              link={card.link}
              openInNewTab={card.openInNewTab}
              clickAction={card.clickAction || ""}
            />
          ))}
        </div>

         {/* START DIVIDER */}
         <div className="w-full pt-12 pb-0">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* END DIVIDER */}
      </div>

      <div className="">
        <PostAccordion title={"News"}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {postProps.slice(0, 8).map((post) => (
              <PostCard key={post.name} content={post} />
            ))}
          </div>
        </PostAccordion>
      </div>
      <div className="">
        <PostAccordion title={"Press"}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {newsProps.slice(2, 5).map((item) => (
              <NewsCard content={item} locale={params} />
            ))}
          </div>
        </PostAccordion>
      </div>
      <div className="">
        <PostAccordion title={"Multimedia"}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {multimediaProps.map((item) => (
              <div key={item.alt} className="">
                <MediaCard {...item} />
              </div>
            ))}
          </div>
        </PostAccordion>
      </div>
      <div>
        <PostAccordion title={"Events"}>
          <div className="grid grid-cols-3 gap-5">
            {cleanRelatedEvents.map((item) => (
              <>
                <EventCard article={item}></EventCard>
              </>
            ))}
          </div>
        </PostAccordion>
      </div>
    </>
  );
}
