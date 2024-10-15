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
import ResponsiveYouTubeEmbed from "@/components/custom beta components/ResponsiveYouTubeEmbed";
import HomeCard from "@/components/CJ-components/components-CJ/basic components/HomeCard";
import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";

// START THE DATA FOR CARDS

const cardData = [
  {
    imageUrl: "/images/labs/jameel-fund/community.jpg",
    alt: "Community",
    title: "Community",
    subtitle:
      "",
    link: "https://www.youtube.com/watch?v=jpsKgN_m_WE",
    openInNewTab: false,
    clickAction: "External link",
  },
  {
    imageUrl: "/images/labs/jameel-fund/learn.jpg",
    alt: "Learn",
    title: "Learn",
    subtitle:
      "",
    link: "https://www.youtube.com/watch?v=XMtNKymV8C8",
    openInNewTab: false,
    clickAction: "External link",
  },
  {
    imageUrl: "/images/labs/jameel-fund/commitment.jpg",
    alt: "Commitment",
    title: "Commitment",
    subtitle:
      "",
    link: "https://www.youtube.com/watch?v=947BKAZok-s",
    openInNewTab: false,
    clickAction: "External link",
  },
  {
    imageUrl: "/images/labs/jameel-fund/humanity.jpg",
    alt: "Humanity",
    title: "Humanity",
    subtitle:
      "",
    link: "https://www.youtube.com/watch?v=MAzr-OIweik",
    openInNewTab: false,
    clickAction: "External link",
  },
];
// END THE DATA FOR CARDS

export default async function JameelFundProgrammePage({
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
  const jwafsId = "61ee828a15a31849afbde642";
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
        {/* <LanguageChanger />
        <TableRowSingle
          repository={dataForRow.repository}
          locale={params.locale}
        /> */}

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
          <div><ButtonCJ href={"https://www.imperial.ac.uk/research-and-innovation/research-office/funder-information/funding-opportunities/internal-funding-opportunities/the-jameel-fund/"} text={"Learn more at Imperial College"} styleType="secondary"></ButtonCJ></div>
        </div>
        
        {/* START DIVIDER */}
        <div className="w-full py-6 lg:py-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        {/* END DIVIDER */}

        <div><h2 className="header-section pb-6">Documentary films</h2></div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
         
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
      <div className="w-full mt-12 mb-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>

<div><h2 className="header-section mb-6">Research recipients</h2></div>
<div className="w-full ">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
        <PostAccordion title={"Round 1 in 2021"}>
        
        <div className="w-full lg:w-3/4">
          <p className="prose leading-normal dark:text-white mb-5">
            Each year, the Jameel Fund provides grants of up to $65,000 to propel short-term, high-impact project that aim to understand, prevent, diagnose and treat coronaviruses and other infectious diseases.
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            In 2021, the chosen projects included ground-breaking technology that enables rapid and effective RNA testing outside of laboratories, new methods to track variants, research into severe COVID-19 in children, and customisable respiratory protective equipment, highlighting the breadth of innovation happening at Imperial in the face of a global pandemic.
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            The projects are divided between Imperial College London and King Abdulaziz University in Jeddah, with the aim of encouraging international research collaboration in this field.
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            The project chosen from King Abdulaziz University were:
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Mohamed Ahmed Alfaleh</strong> (Faculty of Pharmacy): Retooling DPP4 immunoadhesins as decoy receptor to treat and prevent MERS-CoV infection
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Muhammad Yasir Wali</strong> (King Fahd Center for Medical Research): Alteration of nasopharyngeal microbiota with COVID-19 and identification of secondary respiratory infections.
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Hani Abdullah Alhadrami</strong> (College of Applied Medical Sciences): Nano Formulations of natural products-based SARS CoV-2 Mpro inhibitors as effective treatments for COVID-19.
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Ayat Tariq Zawawi</strong> (College of Applied Medical Sciences): The potential use of helminth immunomodulatory products for COVID-19.
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Thamir Alandijany</strong> (College of Applied Medical Sciences): Assessment of COVID-19 vaccine efficiency in inducing neutralizing immunity.
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Ahdab A. AlSaieedi</strong> (College of Applied Medical Sciences): Characterizing the TCR repertoire diversity in COVID19 and MERS patients.
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Leena Hussein Bajrai</strong> (College of Science): Insilico designing and evaluation of potential drugs against SARS-CoV-2.
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Rowa Y. Alhabbab</strong> (College of Applied Medical Sciences): Combining serological testing and RT-PCR test for efficient detection of COVID19.
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            The projects chosen from Imperial College London were:
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Dr Connor Myant</strong> (Dyson School of Design Engineering): Creating a 3D facial scanning mobile app for mass customisation of respiratory protective equipment (RPE) (e.g. masks and face shields)
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Professor Paul Freemont</strong> and <strong>Dr Michael Crone</strong> (Department of Infectious Disease): Developing rapid diagnostic screening
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Dr Vanessa Sancho-Shimizu</strong> (Department of Infectious Disease): Understanding severe illness in children linked to COVID-19
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Dr Jesus Rodriguez Manzano</strong> (Department of Infectious Disease): DragonFly – a frugal, rapid, and sustainable point-of-care colorimetric solution for multi-pathogen detection
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Dr Nishel Shah</strong> (Department of Metabolism, Digestion and Reproduction): Do pregnancy-related immune changes modify immunity post COVID-19 infection and vaccination?
          </p>
        </div>
        </PostAccordion>

        <PostAccordion title={"Round 2 in 2022"}>
        <div className="w-full lg:w-3/4">
          <p className="prose leading-normal dark:text-white mb-5">
            Each year, the Jameel Fund provides grants of up to $65,000 to propel short-term, high-impact project that aim to understand, prevent, diagnose and treat coronaviruses and other infectious diseases.
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            In 2021, the chosen projects included ground-breaking technology that enables rapid and effective RNA testing outside of laboratories, new methods to track variants, research into severe COVID-19 in children, and customisable respiratory protective equipment, highlighting the breadth of innovation happening at Imperial in the face of a global pandemic.
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            The projects are divided between Imperial College London and King Abdulaziz University in Jeddah, with the aim of encouraging international research collaboration in this field.
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            The projects chosen from King Abdulaziz University are:
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Dr Mohamed Ahmed Alfaleh</strong> (Department of Pharmaceutics): Tetravalent IgG-Fc fusion subunit vaccine against the two highly pathogenic human coronaviruses: MERSCoV and SARS-CoV-2
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Dr Ayat Zawawi</strong> (Department of Medical Laboratory Sciences): Molecular mechanisms of host innate antiviral immune evasion by SARS-CoV2
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Dr Maimonah Alghanmi</strong> (Department of Medical Laboratory Sciences): Isolation novel antibodies against SARS-CoV-2 for diagnostic applications using antibody phage display library
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Dr Tarfa Altorki</strong> (Department of Medical Laboratory Sciences): Understanding the humoral and cellular immune response to SARS-CoV-2 infection or vaccine using Nasal-Associated Lymphoid Tissues model
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Dr Ahmed Mohamed Sharif Hassan</strong> (Department of SIAU): Metagenomic of respiratory virome as an early warning and surveillance system for coronaviruses and other emerging and re-emerging zoonotic infections
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Dr Isra Alsaady</strong> (Department of Medical Laboratory Sciences): Characterisation of extracellular vesicles from MERS-CoV infected cells
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Dr Ahbad Abdulazim Alsaieedi</strong> (Department of Medical Laboratory Sciences): T-cell powerhouse: Exploring mitochondrial function and oxidative stress in COVID-19
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            The projects chosen from Imperial College London are:
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Dr Roya Haghighat-Khah</strong> and <strong>Professor Andrea Crisanti</strong> (Department of Life Sciences): Functional genomics for prognosis on clinical nasopharyngeal swab samples
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Professor Danny Altmann</strong> (Department of Immunology and Inflammation): Mechanisms of Long COVID variation over the menstrual cycle: does hormonal contraception ameliorate cyclical symptoms?
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Dr James Harker</strong> (National Heart & Lung Institute): Investigating the role and mechanism of respiratory epithelial dysfunction in long COVID
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Dr Cecilia Johansson</strong> (National Heart & Lung Institute): Understanding immunopathology after SARS-CoV-2 infection using a mouse model
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Dr Nishel Shah</strong> (Department of Metabolism, Digestion and Reproduction): Do pregnancy-related immune changes modify immunity post COVID-19 infection and vaccination?
          </p>
          <p className="prose leading-normal dark:text-white mb-5">
            <strong>Dr Aran Singanayagam</strong> (Department of Infectious Disease): Investigation into the role of airway microbial dysbiosis as a driver of post-viral lung fibrosis
          </p>
        </div>   
        </PostAccordion>
        
        <div className="w-full py-6">
        </div>

<div><h2 className="header-section mb-6">Related content</h2></div>
<div className="w-full ">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
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
          <PostAccordion title={"Media"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {newsProps.slice(2, 5).map((item) => (
                <NewsCard content={item} locale={params} />
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

        {/* <div>
          <h2> related photos by programme</h2>
          <div>
          <ContentPhotos images={cleanedRelatedPhotos} />
       
          </div>
        </div> */}
      </div>
    </>
  );
}
