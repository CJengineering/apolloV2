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
import CarousselForComponents from "@/components/CJ-components/components-CJ/basic components/CarousselForComponents";
import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";
import HomeCard from "@/components/CJ-components/components-CJ/basic components/HomeCard";
import Stats from "@/components/CJ-components/components-CJ/basic components/Stats";
import ResponsiveYouTubeEmbed from "@/components/custom beta components/ResponsiveYouTubeEmbed";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import { Metadata } from "next";

// START THE DATA FOR CARDS

const cardData = [
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/henna-mun-bocelli_hydepark_1x1.jpg",
    alt: "Maestro Andrea Bocelli and Henna Mun live duo at Hyde Park",
    title: "Maestro Andrea Bocelli and Henna Mun live duo at Hyde Park",
    subtitle:
    "On 5 July 2024, Maestro Andre Bocelli and Henna Mun perform 'Tace il labbro' at Hyde Park in London",
    link: "https://www.youtube.com/embed/VLiZ7XFAtBg?si=aoDRlu6RZiFCNSA1",
    openInNewTab: false,
    clickAction: "Video embed code",
  },
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/laura-mekhail_1x1.jpg",
    alt: "Maestro Andrea Bocelli and Laura Mekhail sing 'Canto della terra' in AlUla",
    title: "Maestro Andrea Bocelli and Laura Mekhail perform duo at AlUla",
    subtitle:"On 27 January 2023, at the Maraya in AlUla, Saud Arabia, Andrea Bocelli and Laura Mekhail perform 'Canto della terra' as a duet",
    link: "https://www.youtube.com/embed/I4Vs7YwgfCs?si=_yvdpGP9eGfxKkXo",
    openInNewTab: false,
    clickAction: "Video embed code",
  },
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/clara-barbier-serrano_lourdes_1x1.jpg",
    alt: "Maestro Andrea Bocelli and Clara Barbier Serrano sing 'Panis angelicus' live at Lourdes",
    title: "Maestro Andrea Bocelli and Clara Barbier Serrano sing 'Panis angelicus' live at Lourdes",
    subtitle: "Performing live on 16 July 2023 at the Sanctuary of Our Lady of Lourdes in France",
    link: "https://www.youtube.com/embed/M78msoCnWbM?si=KrCWZI-BpLQ0cxHl",
    openInNewTab: false,
    clickAction: "Video embed code",
  },
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/laura-mekhail_hayy_1x1.jpg",
    alt: "Laura Mekhail live at Hayy Jameel in Jeddah",
    title: "Laura Mekhail live at Hayy Jameel in Jeddah",
    subtitle: "28 January 2023, Laura Mekhail, the 2021 Bocelli-Jameel scholar, sings Fairuz and more at Hayy Jameel in Jeddah",  
    link: "https://www.youtube.com/embed/rE4kW1kEloU?si=z3fB4Co4FiHLEz9e",
    openInNewTab: false,
    clickAction: "Video embed code",
  },
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/laura-mekhail_pyramids_1x1.jpg",
    alt: "Laura Mekhail live at the Pyramids of Giza in Egypt",
    title: "Laura Mekhail live at the Pyramids of Giza in Egypt",
    subtitle: "In shadow of the Pyramids of Giza on 4 October 2022, Laura Mekhail performs classical European and twentieth-century Arab composers, including 'Ya zahratan fi khayali' by Farid al-Atrash",
    link: "https://www.youtube.com/embed/es754up3ggg?si=A-MrmC4MPs1qRKCo",
    openInNewTab: false,
    clickAction: "Video embed code",
  },
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/clara-barbier-serrano_hayy_1x1.jpg",
    alt: "Clara Barbier Serrano performs opera at Hayy Jameel in Jeddah",
    title: "Clara Barbier Serrano performs opera at Hayy Jameel in Jeddah",
    subtitle:"On 22 January 2022, Clara Barbier Serrano gave an unforgettable opera recital at Hayy Jameel, the new Art Jameel centre in Jeddah, Saudi Arabia.",
    link: "https://www.youtube.com/embed/DN8T5-4LK0I?si=5eVP6m1okcDjjrlG",
    openInNewTab: false,
    clickAction: "Video embed code",
  },
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/laura-clara_paris_1x1.jpg",
    alt: "Clara Barbier Serrano and Laura Mekhail live beneath the Eiffel Tower in Paris",
    title: "Clara Barbier Serrano and Laura Mekhail live beneath the Eiffel Tower in Paris",
    subtitle:"Highlights of a recital by Clara Barbier Serrano and Laura Mekhail beneath the Eiffel Tower in Paris, France, on 24 June 2022.",
    link: "https://www.youtube.com/embed/nAhRrmYAyao?si=62zzo0UxJxyaQExM",
    openInNewTab: false,
    clickAction: "Video embed code",
  },
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/laura-mekhail_soloalula_1x1.jpg",
    alt: "Laura Mekhail live solo at Maraya in AlUla",
    title: "Laura Mekhail live solo at Maraya in AlUla",
    subtitle:"Laura Mekhail performas 'What the world needs now is love' in AlUla",
    link: "https://www.youtube.com/embed/-Nz8X8ralWw?si=UADiornBTRdwizVP",
    openInNewTab: false,
    clickAction: "Video embed code",
  },
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/laura-mekhail_dubaiopera_1x1.jpg",
    alt: "Laura Mekhail live at Dubai Opera",
    title: "Laura Mekhail live at Dubai Opera",
    subtitle:"Laura Mekhail sings Fairuz's 'Aatini al nay wa ghanni' at Dubai Opera",
    link: "https://www.youtube.com/embed/fuoFBz6uHLY?si=DHbquFaqVWfQOBtM",
    openInNewTab: false,
    clickAction: "Video embed code",
  },
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/laura-mekhail_film_1x1.jpg",
    alt: "Laura Mekhail",
    title: "Film: Laura Mekhail",
    subtitle: "Documentary portrait film discovering Laura Mekahil the 2021 Bocelli-Jameel scholar from Al-Minya, Egypt.",
    link: "https://www.youtube.com/embed/V2g97hsT-Gk?si=ubaV3mziQOnaTYhs",
    openInNewTab: false,
    clickAction: "Video embed code",
  },
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/seonwoo-lee_1x1.jpg",
    alt: "Film: Seonwoo Lee",
    title: "Film: Seonwoo Lee",
    subtitle: "Documentary protrait film peering into the life of South Korean soprano Seonwoo Lee, the 2022 Bocelli-Jameel scholar.",  
    link: "https://www.youtube.com/embed/pwXppWajZz0?si=yN7MjqflNrkx1P7Z",
    openInNewTab: false,
    clickAction: "Video embed code",
  },
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/anastasia-koorn_1x1.jpg",
    alt: "Film: Anatasia Koorn",
    title: "Film: Anatasia Koorn",
    subtitle:
    "Short documentary film exploring the life of Anastasia Koorn, the 2023 Bocelli-Jameel scholar from the United States.",
    link: "https://www.youtube.com/embed/F-tUViVD5F8?si=XKHusrFe2BnQXU6n",
    openInNewTab: false,
    clickAction: "Video embed code",
  },
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/henna-mun_1x1.jpg",
    alt: "Film: Henna Munn",
    title: "Film: Henna Munn",
    subtitle:
    "'Opera is storytelling, moving people's emotions' | A portrait film about Henna Mun, the 2023 Bocelli-Jameel scholar from South Korea.",
    link: "https://www.youtube.com/embed/LVb5AE75Y28?si=dCl5fIQ2MjWvoy9W",
    openInNewTab: false,
    clickAction: "Video embed code",
  },

];
// END THE DATA FOR CARDS

export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "Andrea Bocelli Foundation-Community Jameel Scholarship at RCA",
  description:
    "The Andrea Bocelli Foundation-Community Jameel scholarship supports talented students at the Royal College of Music, offering world-class training and the chance to perform with Bocelli.",
  ogType: "website",
  ogImage:
    "/images/labs/bocelli-jameel-scholarship/bocelli-jameel-scholarship_og.jpg",
  twitterCard: "summary_large_image",
  keywords: [
    "Community Jameel",
    "Jameel",
    "Community",
    "Andrea Bocelli",
    "Royal College of Music",
    "Clara Barbier Serrano",
    "Laura Mekhail",
    "Seonwoo Lee",
    "Anastasia Koorn",
    "Henna Mun",
  ],
});

export default async function BocelliJameelScholarshipPerformancesPage({
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
  const jwafsId = "61ee828a15a3189441bde67d";
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

          <div className="w-full lg:w-2/3 pb-6">
            <h1 className="header-article">Bocelli-Jameel scholars performances and films</h1>
          </div>
          
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      </div>
    </>
  );
}
