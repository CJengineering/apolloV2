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
import PostAccordion from "@/components/mdx/accordion";
import LanguageChanger from "@/components/custom beta components/LanguageChanger";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import CarousselForComponents from "@/components/CJ-components/components-CJ/basic components/CarousselForComponents";
import peopleMapper from "@/functions/transformers/peopleMapper";

export default async function ClaraBarbierSerranoCustomPage({
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
  const claraBarbierSerranoId = "629cbfdeefc23d7d17fae7ad";

  const claraBarbierSerranoRaw = peopleRawData.items.find(
    (item) => item.id === claraBarbierSerranoId
  );

  {
    /**Related collections in raw state  */
  }
  const relatedMultimedia = filterRelatedMultimedia(multimediaRawData.items, {
    programme: claraBarbierSerranoRaw.id,
  });
  const relatedPost = filterRelatedPosts(postsRawData.items, {
    programme: claraBarbierSerranoRaw.id,
  });
  const relatedNews = filterRelatedNews(newsRawData.items, {
    programme: claraBarbierSerranoRaw.id,
  });
  const relatedEvents = filterRelatedEvents(eventsRawData.items, {
    programme: claraBarbierSerranoRaw.id,
  });
  const relatedFeatures = filterRelatedFeatures(
    featuresRawData.items,
    claraBarbierSerranoRaw.id
  );
  const relatedPrizes = filterRelatedPrizes(prizesRawData.items, {
    people: claraBarbierSerranoRaw.id,
  });
  const relatedAwards = filterRelatedAwards(awardsRawData.items, {
    programme: claraBarbierSerranoRaw.id,
  });
  const relatedJobs = filterRelatedAwards(jobsRawData.items, {
    programme: claraBarbierSerranoRaw.id,
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
  const cleanClaraBarbierSerrano = peopleMapper(
    claraBarbierSerranoRaw,
    partnersRawData.items,
    eventsRawData.items,
    programmesRawData.items,
    peopleRawData.items,
    multimediaRawData.items,

  );

  {
    /*map in to interface of different components   */
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



  return (
    <>
      <div className="pt-12">
            
        <LanguageChanger />
       
        <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-2">{cleanClaraBarbierSerrano.name}</h1>
      <p className="text-lg text-gray-600 mb-4">{cleanClaraBarbierSerrano.nameArabic}</p>
      
      <div className="mb-6">
        <p className="font-medium">Hero: <span className="font-normal">{cleanClaraBarbierSerrano.hero ? 'Yes' : 'No'}</span></p>
        <p className="font-medium">Collection Name: <span className="font-normal">{cleanClaraBarbierSerrano.collectionName}</span></p>
        <p className="font-medium">Role: <span className="font-normal">{cleanClaraBarbierSerrano.role}</span></p>
        <p className="font-medium">Role (Arabic): <span className="font-normal">{cleanClaraBarbierSerrano.roleArabic}</span></p>
      </div>
      
      <div className="mb-6">
        <p className="font-medium">Short Description:</p>
        <p className="text-gray-700">{cleanClaraBarbierSerrano.shortDescription}</p>
        <p className="font-medium mt-4">Short Description (Arabic):</p>
        <p className="text-gray-700">{cleanClaraBarbierSerrano.shortDescriptionArabic}</p>
      </div>

      <div className="mb-6">
        <p className="font-medium">Biography:</p>
        <p className="text-gray-700">{cleanClaraBarbierSerrano.biography}</p>
        <p className="font-medium mt-4">Biography (Arabic):</p>
        <p className="text-gray-700">{cleanClaraBarbierSerrano.biographyArabic}</p>
      </div>

      <div className="mb-6">
        <p className="font-medium">Events:</p>
        <p className="text-gray-700">{cleanClaraBarbierSerrano.events}</p>
        <p className="font-medium mt-4">Events (Arabic):</p>
        <p className="text-gray-700">{cleanClaraBarbierSerrano.eventsArabic}</p>
      </div>

      <div className="mb-6">
        <p className="font-medium">Research Area:</p>
        <p className="text-gray-700">{cleanClaraBarbierSerrano.researchAreaEnglish}</p>
        <p className="font-medium mt-4">Research Area (Arabic):</p>
        <p className="text-gray-700">{cleanClaraBarbierSerrano.researchAreasArabic}</p>
      </div>

      <div className="mb-6">
        <p className="font-medium">Type: <span className="font-normal">{cleanClaraBarbierSerrano.type.name}</span></p>
        <p className="font-medium">Country: <span className="font-normal">{cleanClaraBarbierSerrano.country}</span></p>
        <p className="font-medium">Slug: <span className="font-normal">{cleanClaraBarbierSerrano.slug}</span></p>
      </div>

      <div className="mb-6 flex space-x-4">
        <img className="w-24 h-24 object-cover rounded-lg" src={cleanClaraBarbierSerrano.heroImage.url} alt={cleanClaraBarbierSerrano.heroImage.alt} />
        <img className="w-24 h-24 object-cover rounded-lg" src={cleanClaraBarbierSerrano.profilePicture.url} alt={cleanClaraBarbierSerrano.profilePicture.alt} />
      </div>
      
      <div className="mb-6">
        <h3 className="font-semibold text-xl mb-2">Social Links:</h3>
        <div className="space-x-2">
          <a className="text-blue-500 hover:underline" href={cleanClaraBarbierSerrano.instagramLink}>Instagram</a>
          <a className="text-blue-500 hover:underline" href={cleanClaraBarbierSerrano.linkedinLink}>LinkedIn</a>
          <a className="text-blue-500 hover:underline" href={cleanClaraBarbierSerrano.twitterLink}>Twitter</a>
          <a className="text-blue-500 hover:underline" href={cleanClaraBarbierSerrano.facebook}>Facebook</a>
          <a className="text-blue-500 hover:underline" href={cleanClaraBarbierSerrano.youtubeLink}>YouTube</a>
          <a className="text-blue-500 hover:underline" href={cleanClaraBarbierSerrano.github}>GitHub</a>
          <a className="text-blue-500 hover:underline" href={cleanClaraBarbierSerrano.websiteLink}>Website</a>
          <a className="text-blue-500 hover:underline" href={cleanClaraBarbierSerrano.shop}>Shop</a>
        </div>
      </div>

      <div className="mb-6">
        <p className="font-medium">Push to GR: <span className="font-normal">{cleanClaraBarbierSerrano.pushToGr ? 'Yes' : 'No'}</span></p>
        <p className="font-medium">Arabic On/Off: <span className="font-normal">{cleanClaraBarbierSerrano.arabicOnOff ? 'Enabled' : 'Disabled'}</span></p>
      </div>
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
            <div className="">
            <CarousselForComponents>
              {cleanRelatedEvents.map((item) => (
                <>
                  <EventCard article={item}></EventCard>
                </>
              ))}
            </CarousselForComponents>
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
    </>
  );
}
