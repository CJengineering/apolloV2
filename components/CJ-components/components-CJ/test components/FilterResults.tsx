"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  TeamMember,
  EventFieldDataCleaned,
  ProgrammeCleanedFields,
  PostFieldsCleaned,
  PeopleCleanedFields,
  MultimediaCleanedFields,
  FeatureCleanedFields,
  NewsCleanedFields,
  PublicationsCleanedFields,
} from "@/app/interfaces";
import agnosticMapper from "@/functions/transformers/agnosticMapper";
import {
  AgnosticComponentCollectionName,
  AgnosticComponentDateAndSourceContainer,
  AgnosticComponentDatePublished,
  AgnosticComponentImageColumn,
  AgnosticComponentProgramLabel,
  AgnosticComponentProvider,
  AgnosticComponentShortDescription,
  AgnosticComponentSource,
  AgnosticComponentTextColumn,
  AgnosticComponentTitle,
} from "./AgnosticComponent";
import { useRouter, useSearchParams } from "next/navigation";
import Accordion from "../basic components/Accordion";
import PostAccordion from "@/components/mdx/accordion";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

interface FilterResultsProps {
  teamMembers: TeamMember[];
  events: EventFieldDataCleaned[];
  programmes: ProgrammeCleanedFields[];
  posts: PostFieldsCleaned[];
  people: PeopleCleanedFields[];
  multimedia: MultimediaCleanedFields[];
  features: FeatureCleanedFields[];
  news: NewsCleanedFields[];
  publications: PublicationsCleanedFields[];
}

const FilterResults: React.FC<FilterResultsProps> = ({
  teamMembers,
  events,
  programmes,
  posts,
  people,
  multimedia,
  features,
  news,
  publications,
}) => {
  const [keyword, setKeyword] = useState("");
  const keywordLower = keyword.toLowerCase();
  const searchParams = useSearchParams();
  const eventParam = searchParams.get("event");
  const peopleParam = searchParams.get("people");
  const programmeParam = searchParams.get("programme");
  const newsParam = searchParams.get("news");
  const multimediaParam = searchParams.get("multimedia");
  const pressParam = searchParams.get("press");
  const publicationParam = searchParams.get("publication");
  const noParams =
    !eventParam &&
    !peopleParam &&
    !programmeParam &&
    !newsParam &&
    !multimediaParam &&
    !pressParam &&
    !publicationParam;
  useEffect(() => {
    const urlKeyword = searchParams.get("event")|| searchParams.get("people") || searchParams.get("programme") || searchParams.get("news") || searchParams.get("multimedia") || searchParams.get("press") || searchParams.get("publication");
    if (urlKeyword) {
      setKeyword(urlKeyword);
    }
  }, [searchParams]);

  const containsKeyword = (obj: any): boolean => {
    for (let key in obj) {
      const value = (obj as any)[key];

      if (
        typeof value === "string" &&
        value.toLowerCase().includes(keywordLower)
      ) {
        return true;
      }

      if (Array.isArray(value)) {
        if (
          value.some(
            (item: any) => typeof item === "object" && containsKeyword(item)
          )
        ) {
          return true;
        }
      }

      if (typeof value === "object" && value !== null) {
        if (containsKeyword(value)) {
          return true;
        }
      }
    }
    return false;
  };

  const filteredTeamMembers = useMemo(
    () => teamMembers.filter(containsKeyword),
    [teamMembers, keywordLower]
  );
  const filteredEvents = useMemo(
    () => events.filter(containsKeyword),
    [events, keywordLower]
  );
  const filteredProgrammes = useMemo(
    () => programmes.filter(containsKeyword),
    [programmes, keywordLower]
  );
  const filteredPosts = useMemo(
    () => posts.filter(containsKeyword),
    [posts, keywordLower]
  );
  const filteredPeople = useMemo(
    () => people.filter(containsKeyword),
    [people, keywordLower]
  );
  const filteredMultimedia = useMemo(
    () => multimedia.filter(containsKeyword),
    [multimedia, keywordLower]
  );
  const filteredFeatures = useMemo(
    () => features.filter(containsKeyword),
    [features, keywordLower]
  );
  const filteredNews = useMemo(
    () => news.filter(containsKeyword),
    [news, keywordLower]
  );
  const filteredPublications = useMemo(
    () => publications.filter(containsKeyword),
    [publications, keywordLower]
  );
  const combinedArray = [
    ...filteredPeople,
    ...filteredNews,
    ...filteredEvents,
    ...filteredMultimedia,
    ...filteredPosts,
  ];
  const agnosticPropsArray = combinedArray.map((value) =>
    agnosticMapper(value)
  );
  const filtredPeopleMaped = filteredPeople.map((value) =>
    agnosticMapper(value)
  );
  const filtredNewsMaped = filteredNews.map((value) => agnosticMapper(value));
  const filtredEventsMaped = filteredEvents.map((value) =>
    agnosticMapper(value)
  );
  const filtredMultimediaMaped = filteredMultimedia.map((value) =>
    agnosticMapper(value)
  );
  const filtredPostsMaped = filteredPosts.map((value) => agnosticMapper(value));

  const filtredPublicationsMaped = filteredPublications.map((value) =>
    agnosticMapper(value)
  );
  const filtredProgrammesMaped = filteredProgrammes.map((value) =>
    agnosticMapper(value)
  );
  const router = useRouter();
  const refreshPage = () => {
    setKeyword("");
    router.push(window.location.pathname);
  };

  return (
    <div className="min-h-screen ">
      <div className="flex items-center ">

      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search..."
        className=" p-2 border border-gray-300 w-1/3 rounded"
      />
       <button onClick={refreshPage} className=" p-2 mx-2  bg-slate-700 rounded transition ease-in-out delay-50 text-white  hover:bg-slate-600 hover:text-orange-700 dark:hover:text-orange-400"><ArrowPathIcon  className="h-6 w-6 "></ArrowPathIcon></button>
      </div>
              
      {(peopleParam || noParams) && (
        <PostAccordion
         isOpen={searchParams.get('open') === 'true' ? true : false}
          title="People"
          itemsCount={`${filtredPeopleMaped.length}`}
        >
          {filtredPeopleMaped.map((value) => (
            <AgnosticComponentProvider content={value}>
              <AgnosticComponentTextColumn>
                <AgnosticComponentProgramLabel />
                <AgnosticComponentTitle />
                <AgnosticComponentShortDescription />
                <AgnosticComponentDateAndSourceContainer>
                  <AgnosticComponentDatePublished />
                  <span className="mono text-xs font-normal uppercase">•</span>
                  <AgnosticComponentSource />
                </AgnosticComponentDateAndSourceContainer>
              </AgnosticComponentTextColumn>
            </AgnosticComponentProvider>
          ))}
        </PostAccordion>
      )}
      {(programmeParam || noParams) && (
        <PostAccordion
          title="Programmes"
          isOpen={searchParams.get('open') === 'true' ? true : false}
          itemsCount={`${filtredProgrammesMaped.length}`}
        >
          {filtredProgrammesMaped.map((value) => (
            <AgnosticComponentProvider content={value}>
              <AgnosticComponentTextColumn>
                <AgnosticComponentProgramLabel />
                <AgnosticComponentTitle />
                <AgnosticComponentShortDescription />
                <AgnosticComponentDateAndSourceContainer>
                  <AgnosticComponentDatePublished />
               
                  <AgnosticComponentSource />
                </AgnosticComponentDateAndSourceContainer>
              </AgnosticComponentTextColumn>
            </AgnosticComponentProvider>
          ))}
        </PostAccordion>
      )}
      {(newsParam || noParams) && (
        <PostAccordion
          title="News"
          isOpen={searchParams.get('open') === 'true' ? true : false}
          itemsCount={`${filtredNewsMaped.length}`}
        >
          {filtredNewsMaped.map((value) => (
            <AgnosticComponentProvider content={value}>
              <AgnosticComponentTextColumn>
                <AgnosticComponentProgramLabel />
                <AgnosticComponentTitle />
                <AgnosticComponentShortDescription />
                <AgnosticComponentDateAndSourceContainer>
                  <AgnosticComponentDatePublished />
                  <span className="mono text-xs font-normal uppercase">•</span>
                  <AgnosticComponentSource />
                </AgnosticComponentDateAndSourceContainer>
              </AgnosticComponentTextColumn>
            </AgnosticComponentProvider>
          ))}
        </PostAccordion>
      )}
      {(pressParam || noParams) && (
        <PostAccordion
          title="Press"
          isOpen={searchParams.get('open') === 'true' ? true : false}
          itemsCount={`${filteredPosts.length}`}
        >
          {filtredPostsMaped.map((value) => (
            <AgnosticComponentProvider content={value}>
              <AgnosticComponentTextColumn>
                <AgnosticComponentProgramLabel />
                <AgnosticComponentTitle />
                <AgnosticComponentShortDescription />
                <AgnosticComponentDateAndSourceContainer>
                  <AgnosticComponentDatePublished />
                  <span className="mono text-xs font-normal uppercase">•</span>
                  <AgnosticComponentSource />
                </AgnosticComponentDateAndSourceContainer>
              </AgnosticComponentTextColumn>
            </AgnosticComponentProvider>
          ))}
        </PostAccordion>
      )}
      {(multimediaParam || noParams) && (
        <PostAccordion
          title="Multimedia"
          isOpen={searchParams.get('open') === 'true' ? true : false}
          itemsCount={`${filtredMultimediaMaped.length}`}
        >
          {filtredMultimediaMaped.map((value) => (
            <AgnosticComponentProvider content={value}>
              <AgnosticComponentTextColumn>
                <AgnosticComponentProgramLabel />
                <AgnosticComponentTitle />
                <AgnosticComponentShortDescription />
                <AgnosticComponentDateAndSourceContainer>
                  <AgnosticComponentDatePublished />
                  <span className="mono text-xs font-normal uppercase">•</span>
                  <AgnosticComponentSource />
                </AgnosticComponentDateAndSourceContainer>
              </AgnosticComponentTextColumn>
            </AgnosticComponentProvider>
          ))}
        </PostAccordion>
      )}
      {(publicationParam || noParams) && (
        <PostAccordion
        isOpen={searchParams.get('open') === 'true' ? true : false}
          title="Publications"
          itemsCount={`${filtredPublicationsMaped.length}`}
        >
          {filtredPublicationsMaped.map((value) => (
            <AgnosticComponentProvider content={value}>
              <AgnosticComponentTextColumn>
                <AgnosticComponentProgramLabel />
                <AgnosticComponentTitle />
                <AgnosticComponentShortDescription />
                <AgnosticComponentDateAndSourceContainer>
                  <AgnosticComponentDatePublished />
                  <span className="mono text-xs font-normal uppercase">•</span>
                  <AgnosticComponentSource />
                </AgnosticComponentDateAndSourceContainer>
              </AgnosticComponentTextColumn>
            </AgnosticComponentProvider>
          ))}
        </PostAccordion>
      )}
      {(eventParam || noParams) && (
        <PostAccordion
        isOpen={searchParams.get('open') === 'true' ? true : false}
          title="Events"
          itemsCount={`${filtredEventsMaped.length}`}
        >
          {filtredEventsMaped.map((value) => (
            <AgnosticComponentProvider content={value}>
              <AgnosticComponentTextColumn>
                <AgnosticComponentProgramLabel />
                <AgnosticComponentTitle />
                <AgnosticComponentShortDescription />
                <AgnosticComponentDateAndSourceContainer>
                  <AgnosticComponentDatePublished />
                  <span className="mono text-xs font-normal uppercase">•</span>
                  <AgnosticComponentSource />
                </AgnosticComponentDateAndSourceContainer>
              </AgnosticComponentTextColumn>
            </AgnosticComponentProvider>
          ))}
        </PostAccordion>
      )}
     
    
    </div>
  );
};

export default FilterResults;
