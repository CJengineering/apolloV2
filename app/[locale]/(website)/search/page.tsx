import FilterResults from "@/components/CJ-components/components-CJ/test components/FilterResults";
import WebflowPage from "@/components/CJ-components/components-CJ/test components/testWebflowPage";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import { getData } from "@/functions/api/getData";
import { filterByKeyword } from "@/functions/filters/filterByKeyWord";
import eventMapper from "@/functions/transformers/eventMapper";
import featureMapper from "@/functions/transformers/featureMapper";
import multimediaMapper from "@/functions/transformers/multimediaMapper";
import newsMapper from "@/functions/transformers/newsMapper";
import peopleMapper from "@/functions/transformers/peopleMapper";
import postMapper from "@/functions/transformers/postMapper";
import programmeMapper from "@/functions/transformers/programmeMapper";
import publicationMapper from "@/functions/transformers/publicationMapper";
import teamProfileMapper from "@/functions/transformers/teamProfileMapper";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";

import React from "react";

export default async function SearchPage() {
  const porgrammeId = getIdByDisplayName("Programmes");
  const peopleId = getIdByDisplayName("People");
  const featureId = getIdByDisplayName("Features");
  const publicationId = getIdByDisplayName("Publications");
  const eventId = getIdByDisplayName("Events");
  const newsId = getIdByDisplayName("News");
  const postsId = getIdByDisplayName("Posts");
  const multimediaId = getIdByDisplayName("Multimedia");
  const teamId = getIdByDisplayName("Team");
  const partnersId = getIdByDisplayName("Partners");
  const sourceId = getIdByDisplayName("Sources");
  const tagsId = getIdByDisplayName("Tags");
  const categroriesId = getIdByDisplayName("Categories");

  const programmeRaw = await getData(porgrammeId);
  const peopleRaw = await getData(peopleId);
  const featureRaw = await getData(featureId);
  const publicationRaw = await getData(publicationId);
  const eventRaw = await getData(eventId);
  const newsRaw = await getData(newsId);
  const postsRaw = await getData(postsId);
  const multimediaRaw = await getData(multimediaId);
  const teamRaw = await getData(teamId);
  const partnersRaw = await getData(partnersId);
  const sourcesRaw = await getData(sourceId);
  const tagRaw = await getData(tagsId);
  const categoriesRaw = await getData(categroriesId);

  const programmeClean = programmeRaw.items.map((item) =>
    programmeMapper(
      item,
      peopleRaw.items,
      partnersRaw.items,
      programmeRaw.items
    )
  );
  const eventClean = eventRaw.items.map((item) =>
    eventMapper(item, partnersRaw.items, programmeRaw.items, peopleRaw.items)
  );
  const peopleClean = peopleRaw.items.map((item) =>
    peopleMapper(
      item,
      partnersRaw.items,
      eventRaw.items,
      programmeRaw.items,
      peopleRaw.items,
      multimediaRaw.items
    )
  );
  const featureClean = featureRaw.items.map((item) =>
    featureMapper(
      item,

      programmeRaw.items
    )
  );
  const newsClean = newsRaw.items.map((item) =>
    newsMapper(
      item,

      programmeRaw.items,
      peopleRaw.items,
      sourcesRaw.items,
      tagRaw.items,
      eventRaw.items
    )
  );

  const cleanMultimedia = multimediaRaw.items.map((item) =>
    multimediaMapper(
      item,
      programmeRaw.items,
      eventRaw.items,
      sourcesRaw.items,
      peopleRaw.items
    )
  );
  const postsClean = postsRaw.items.map((item) =>
    postMapper(
      item,
      categoriesRaw.items,
      eventRaw.items,
      programmeRaw.items,
      peopleRaw.items
    )
  );
  const teamsClean = teamRaw.items.map((item) => teamProfileMapper(item));
  const publicationsClean = publicationRaw.items.map((item) =>
    publicationMapper(
      item,
      programmeRaw.items,
      peopleRaw.items,
      partnersRaw.items,
      sourcesRaw.items
    )
  );

  const results = filterByKeyword(
    "Esther",
    teamsClean,
    eventClean,
    programmeClean,
    postsClean,
    peopleClean,
    cleanMultimedia,
    featureClean,
    newsClean,
    publicationsClean
  );

  const content = {
    slug: "/sample-slug",
    imageSrc: "/path/to/image.jpg",
    programShortname: "Program Shortname",
    title: "Sample Title",
    datePublished: "2024-07-23",
    collectionName: "news",
    source: "Sample Source",
  };

  return (
    <ContentContainer width="full" desktopWidth="medium">
      <div>
        <h1 className="header-page pb-10 pt-20 lg:pb-10 lg:pt-10 lg:text-left">Search</h1>
      </div>
      <div className="w-full min-h-[90vh] ">
        <FilterResults
          teamMembers={teamsClean}
          events={eventClean}
          programmes={programmeClean}
          posts={postsClean}
          people={peopleClean}
          multimedia={cleanMultimedia}
          features={featureClean}
          news={newsClean}
          publications={publicationsClean}
        />
      </div>
    </ContentContainer>
  );
}
