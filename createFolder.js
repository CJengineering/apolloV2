const fs = require("fs");
const path = require("path");

// Array of folder and component names

const pagesName = [
  { slug: "ankur", id: "653aa9d9e15c2699b05288c5" },
  {
    slug: "jameel-c40-urban-planning-climate-labs",
    id: "651e71ae60bc5fd735493c6e",
  },
  { slug: "jpal-air-and-water-labs", id: "65030e90b5996638425ad4c0" },
  {
    slug: "pratham-jameel-second-chance-programme",
    id: "6501c82989796e35d454a650",
  },
  { slug: "climate-labs", id: "64ec4fe2dacb057e3f32c34a" },
  { slug: "j-pal-mena-scholars-fellowship", id: "64e3cb7a1b5b465661e84bb6" },
  { slug: "climavore-x-jameel-at-rca", id: "641990a10fc7af1ad465f836" },
  { slug: "bruvs-monaco", id: "63d3e03fbff9791377227c4b" },
  { slug: "jameel-arts-health-lab", id: "63ced896230e6863c19094b1" },
  {
    slug: "european-social-inclusion-inititative",
    id: "63b4304ed8cf9c7e39e1a20f",
  },
  { slug: "voxel-lab", id: "639c9ea23fc42b47b7a0297b" },
  { slug: "yazidi-cultural-archive", id: "636627a926b9af602935310f" },
  { slug: "j-pal-evidence-to-policy", id: "636556473321b5ce902b5569" },
  {
    slug: "jameel-institute-kenneth-c-griffin-initiative-for-economics-of-pandemic-preparedness",
    id: "6344877aa5240475ab88c44e",
  },
  {
    slug: "jameel-house-of-traditional-arts-in-cairo",
    id: "63440d3f2d8448b7438fc75d",
  },
  { slug: "gcc-health-and-liveability", id: "632483642ab423dcd3c1fe5d" },
  { slug: "jameel-observatory-crewsnet", id: "630f7f4b4cd649c47cb8beca" },
  { slug: "jameel-index", id: "62f256210e99ef31bd233d5c" },
  {
    slug: "jameel-poverty-action-lab-middle-east-and-north-africa",
    id: "627e379dd27c0445d4f75ac4",
  },
  { slug: "egypt-impact-lab", id: "627e3739d61c6b447a8f09c5" },
  { slug: "covid-19-excellence-fund", id: "620b7abec292cf23e19fae30" },
  { slug: "bab-rizq-jameel", id: "61ee828a15a318cff1bde6af" },
  { slug: "community-jameel", id: "61ee828a15a318b94dbde6ad" },
  { slug: "jameel-observatory", id: "61ee828a15a31822dcbde700" },
  { slug: "jameel-hardship-fund", id: "61ee828a15a318ede3bde682" },
  { slug: "jameel-toyota-scholarship", id: "61ee828a15a3186ba8bde681" },
  { slug: "bocelli-jameel-scholarship", id: "61ee828a15a3189441bde67d" },
  { slug: "scale-up-squared", id: "61ee828a15a3183aebbde659" },
  { slug: "ejada", id: "61ee828a15a3185f22bde645" },
  { slug: "sharjah-fund", id: "61ee828a15a318865fbde644" },
  { slug: "iraq-cultural-health-fund", id: "61ee828a15a3186c90bde643" },
  { slug: "jameel-fund", id: "61ee828a15a31849afbde642" },
  { slug: "jameel-management-centre", id: "61ee828a15a318a0b6bde641" },
  { slug: "jameel-institute", id: "61ee828a15a3189ea3bde640" },
  { slug: "jameel-clinic", id: "61ee828a15a3189014bde63f" },
  {
    slug: "abdul-latif-jameel-world-education-lab",
    id: "61ee828a15a3180d48bde63e",
  },
  {
    slug: "abdul-latif-jameel-water-and-food-systems-lab",
    id: "61ee828a15a3182b72bde63d",
  },
  { slug: "jameel-poverty-action-lab", id: "61ee828a15a318c663bde6fb" },
];

// specify your locale here

// Function to convert string to CamelCase
function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "");
}

// Base path for the folders
const basePath = path.join(__dirname, "app", "[locale]", "programmes");

// Create folders and files
pagesName.forEach((pageName, index) => {
  const folderPath = path.join(basePath, pageName.slug);
  const componentName = "Programme" + index + "page";
  const filePath = path.join(folderPath, "page.tsx");

  // Content for the page.tsx file
  const pageContent = `
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
import ContentPhotos from "../../../../components/CJ-components/components-CJ/test components/content-photos";
import PostAccordion from "@/components/mdx/accordion";
import LanguageChanger from "@/components/custom beta components/LanguageChanger";
import ContentContainer from "@/components/custom beta components/ContentContainer";

export default async function ${componentName}({
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
  const jwafsId = "${pageName.id}"
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
    <ContentContainer width="full" desktopWidth="large">
      <div className="pt-12">
        <LanguageChanger />
        <TableRowSingle
          repository={dataForRow.repository}
          locale={params.locale}
        />

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

        {/* 

        <div>
          <h2> related features </h2>
          <div>
            {cleanedFeatures.map((feature, index) => (
              <>
                <div key={index}>
                  <div>{feature.name}</div>
                  <div>{feature.dateDisplay}</div>
                  <div>
                    <img className="w-48" src={feature.square.url} alt="" />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div> */}

        <div>
          <PostAccordion title={"Events"}>
            <div className="grid grid-cols-3 gap-5">
              {eventProps.map((item) => (
                <>
                  <EventCard article={item}></EventCard>
                </>
              ))}
            </div>
          </PostAccordion>
        </div>
        {/* <div>
          <h2> related photos by programme</h2>
          <div>
          <ContentPhotos images={cleanedRelatedPhotos} />
       
          </div>
        </div> */}
      </div>
    </ContentContainer>
  );
}
`;

  // Create the folder
  fs.mkdirSync(folderPath, { recursive: true });

  // Write the page.tsx file
  fs.writeFileSync(filePath, pageContent.trim());

  console.log(`Created ${filePath}`);
});
