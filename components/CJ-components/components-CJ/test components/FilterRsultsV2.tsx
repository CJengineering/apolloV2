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

const FilterResultsV2: React.FC<FilterResultsProps> = ({
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
  const pressParam = searchParams.get("media");
  const publicationParam = searchParams.get("publication");
  const [searchInitiated, setSearchInitiated] = useState(false);
  const noParams =
    !eventParam &&
    !peopleParam &&
    !programmeParam &&
    !newsParam &&
    !multimediaParam &&
    !pressParam &&
    !publicationParam;
  useEffect(() => {
    const urlKeyword =
      searchParams.get("event") ||
      searchParams.get("people") ||
      searchParams.get("programme") ||
      searchParams.get("news") ||
      searchParams.get("multimedia") ||
      searchParams.get("media") ||
      searchParams.get("publication");
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
    ...filteredNews,
    ...filteredPeople,
    ...filteredEvents,
    ...filteredMultimedia,
    ...filteredPosts,
 
  ];
  const agnosticPropsArray = combinedArray
    .map((value) => agnosticMapper(value))
    .sort(
        (a, b) =>
          new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime()
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
  const [rotate, setRotate] = useState(false);
  const router = useRouter();
  const refreshPage = () => {
    setKeyword("");
    router.push(window.location.pathname);
    setRotate(true);
    setSearchInitiated(false);
    setTimeout(() => setRotate(false), 500); // Adjust the timeout duration as needed
  };
  const handleSearch = () => {
    if (keyword.trim()) {
      setSearchInitiated(true); // Set search initiated when search button is pressed
    }
  };
  return (
    <div className="  2xl:w-[1283px] xl:w-[1030px] md:w-[774px]   ">
      <div className="flex items-center pb-6 w-full ">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search..."
          className=" flex-grow border sans-serif text-base  border-gray-300  text-slate-400 dark:text-gray-600 rounded focus:outline-none focus:border-1 focus:border-blue-700 focus:text-black"
        />
         <button
          onClick={handleSearch} // Trigger search when clicked
          className="p-2 ml-3 bg-blue-700 rounded transition ease-in-out delay-50 text-white hover:bg-blue-900 hover:text-orange-300 dark:hover:text-orange-400"
        >
          Search
        </button>
        <button
          onClick={refreshPage}
          className="p-2 ml-3 bg-blue-700 rounded transition ease-in-out delay-50 text-white hover:bg-blue-900 hover:text-orange-300 dark:hover:text-orange-400"
        >
          <ArrowPathIcon
            className={`h-6 w-6 p-1 transition-transform duration-500 ${
              rotate ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
   
  
      {( searchInitiated && keyword )&&
        agnosticPropsArray.map((value,index) => (
          <AgnosticComponentProvider content={value} key={value.slug}>
        
            {/* Assuming each item has a unique 'id' */}
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
      {/* {(eventParam || noParams) && (
        <PostAccordion
          title="Media"
          isOpen={searchParams.get('open') === 'true'}
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

      {(eventParam || noParams) && (
        <PostAccordion
          title="Events"
          isOpen={searchParams.get('open') === 'true'}
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
      {(pressParam || noParams) && (
        <PostAccordion
          title="News"
          isOpen={searchParams.get('open') === 'true'}
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
      {(publicationParam || noParams) && (
        <PostAccordion
          title="Publications"
          isOpen={searchParams.get('open') === 'true'}
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
      {(multimediaParam || noParams) && (
        <PostAccordion
          title="Multimedia"
          isOpen={searchParams.get('open') === 'true'}
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
      {(peopleParam || noParams) && (
        <PostAccordion
          title="People"
          isOpen={searchParams.get('open') === 'true'}
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
      )} */}
      {/* {(programmeParam || noParams) && (
        <PostAccordion
          title="Programmes"
          isOpen={searchParams.get("open") === "true"}
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
      )} */}
    </div>
  );
};

export default FilterResultsV2;
