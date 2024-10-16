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
import ContentPhotos from "../../../../../../components/CJ-components/components-CJ/test components/content-photos";
import PostAccordion from "@/components/mdx/accordion";
import LanguageChanger from "@/components/custom beta components/LanguageChanger";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import { Metadata } from "next";

export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "COVID-19 Excellence Fund",
  description: "",
  ogType: "website",
  ogImage: "/images/metadata/JAMEEL_INSTITUTE__OG_1200x630.webp",
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "COVID-19", "Imperial College London"],

})


export default async function Programme20page({
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
  const jwafsId = "620b7abec292cf23e19fae30";
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
      <div className="pt-20 lg:pt-10 lg:mb-12">
        <div className="flex flex-col text-left">
          <div className="pb-6">
            <h1 className="header-article">{cleanSingleProgramme.name}</h1>
          </div>
          <div className="pb-6 w-full lg:w-2/3">
            <div
              className="prose prose-xl leading-normal dark:text-white"
              dangerouslySetInnerHTML={{ __html: cleanSingleProgramme.text }}
            />
          </div>
          <div>
            <ButtonCJ
              href="https://www.imperial.ac.uk/giving/community/your-impact/united-against-covid-19/excellence-fund/projects-supported-by-the-excellence-fund/"
              text={"Visit Imperial College London website"}
              styleType="secondary"
            ></ButtonCJ>{" "}
          </div>
        </div>

        <div className="w-full pt-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>

        <div className="">
            <PostAccordion title={"Awards"}>
            <div className="w-full lg:w-1/2">
            <p className="prose prose-xl font-bold leading-normal dark:text-white mb-5">
              Evaluating the timing and extent of community spread of COVID-19 in North West London
            </p>
            <p className="prose leading-normal dark:text-white mb-5">
              <strong>Dr Edward Mullins</strong> and <strong>Professor Christl Donnelly</strong>, School of Public Health
            </p>
            <p className="prose leading-normal dark:text-white mb-5">
              The study will anonymously test existing serum samples that were taken as part of routine antenatal care for pregnant women in the region over the period from December 2019 to June 2020. The results will provide insights to community transmission risks over the course of the pandemic, as well as inform policy on the management of pregnant women in a future wave of the pandemic.
            </p>
            <p className="prose prose-xl font-bold leading-normal dark:text-white mb-5">
              COVID-19 in human brain and its potential role in triggering long term neurological disease
            </p>
            <p className="prose leading-normal dark:text-white mb-5">
              <strong>Dr Javier Alegre-Abarrategui</strong>, Department of Brain Sciences
            </p>
            <p className="prose leading-normal dark:text-white mb-5">
              Neurological complications are common in respiratory viral infections, and there is growing concern that of the potential for COVID-19 to affect the nervous system as highlighted by reported symptoms such as a loss or change of taste and smell. <strong>Dr Alegre-Abarrategui</strong> will investigate the potential role that COVID-19 plays in neurological disease.
            </p>
            <p className="prose prose-xl font-bold leading-normal dark:text-white mb-5">
              Identifying new therapies for severe COVID-19
            </p>
            <p className="prose leading-normal dark:text-white mb-5">
              <strong>Professor Ian Adcock</strong>, National Heart and Lung Institute
            </p>
            <p className="prose leading-normal dark:text-white mb-5">
              This research will investigate the key driving signatures of fibrosis and necrosis in the lungs in COVID-19 patients and relate these to drug-response signatures. The study uses lung samples obtained from the ongoing DeVENT trial. This will identify whether it is possible to repurpose current drugs to treat specific groups of patients with severe COVID-19 patients in ICU or define pathways that are likely to respond to other currently available therapies.
            </p>
            <p className="prose prose-xl font-bold leading-normal dark:text-white mb-5">
              Understanding biological mechanisms underlying severe disease to identify potential new treatments
            </p>
            <p className="prose leading-normal dark:text-white mb-5">
              <strong>Dr James Peters</strong> and colleagues from the Centre for Inflammatory Disease and the Imperial NHS Trust Renal and Transplant Centre
            </p>
            <p className="prose leading-normal dark:text-white mb-5">
              This longitudinal study will look at patients with End-Stage Kidney Disease – a group at high risk of severe COVID-19 - measuring gene and protein expression signatures in immune cells to better understand the biological mechanisms underlying severe disease. The hope is that this might help identify existing drugs that could be repurposed as safer and more effective treatments for COVID-19 than dexamethasone, which is the only drug shown to reduce mortality in randomised trials to date.
            </p>
            <p className="prose prose-xl font-bold leading-normal dark:text-white mb-5">
              Developing a clinical tool for predicting risk of deterioration in COVID-19 patients
            </p>
            <p className="prose leading-normal dark:text-white mb-5">
              <strong>Professor Brendan Delaney</strong>, Department of Surgery and Cancer
            </p>
            <p className="prose leading-normal dark:text-white mb-5">
              The difference in patient response to COVID-19 infection is stark from mild to fatal. <strong>Professor Delaney</strong> is looking to develop and validate a score for predicting risk of deterioration in COVID-19 patients. The tool would help identify patients who need closer monitoring and escalation of care in primary care settings, such as GP surgeries. The project is a collaboration with <strong>Professor Trisha Greenhalgh</strong> from the Nuffield Department of Primary Care, University of Oxford.
            </p>
            <p className="prose prose-xl font-bold leading-normal dark:text-white mb-5">
              Developing a cheap, accurate, geo-tagged point-of-care test for COVID-19
            </p>
            <p className="prose leading-normal dark:text-white mb-5">
              <strong>Dr Jethro Herberg</strong>, Department of Infectious Disease, and <strong>Dr Pantelis Georgiou</strong>, Department of Electrical and Electronic Engineering, in partnership with the Rosetrees Trust
            </p>
            <p className="prose leading-normal dark:text-white mb-5">
              Using Lacewing technology - a mobile-phone-linked handheld molecular diagnostic system – <strong>Drs Herberg</strong> and <strong>Georgiou</strong> aim to create a cheap, accurate, geo-tagged point-of-care test for COVID-19. The uniqueness of their approach is that they will use the host response to discriminate a variety of infections with similar symptoms to COVID-19, in addition to SARS-CoV-2. This test will guide diagnosis, treatment and surveillance in the ongoing COVID-19 pandemic, producing rapid public health impact.
            </p>
            <p className="prose prose-xl font-bold leading-normal dark:text-white mb-5">
              Innovative PPE – custom-made masks for frontline healthcare workers
            </p>
            <p className="prose leading-normal dark:text-white mb-5">
              <strong>Dr Connor Myant</strong>, Dyson School of Design Engineering
            </p>
            <p className="prose leading-normal dark:text-white mb-5">
              This project will develop an automated design-through-manufacturing pipeline that would allow for custom-made masks to be deployed to frontline healthcare workers at scale. <strong>Dr Myant’s</strong> project will deliver a design platform that would see healthcare workers scanning their own face using a smartphone so that custom-fit PPE can be automatically designed for them. This aims to tackle the problem of poor-fitting PPE causing injury and discomfort to healthcare professionals and putting them at a greater risk of infection.
            </p>
            </div>
            </PostAccordion>
          </div>
        </div>
    </>
  );
}
