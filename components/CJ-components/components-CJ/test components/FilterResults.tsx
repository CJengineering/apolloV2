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
import { AgnosticComponentCollectionName, AgnosticComponentDateAndSourceContainer, AgnosticComponentDatePublished, AgnosticComponentImageColumn, AgnosticComponentProgramLabel, AgnosticComponentProvider, AgnosticComponentShortDescription, AgnosticComponentSource, AgnosticComponentTextColumn, AgnosticComponentTitle } from "./AgnosticComponent";
import { useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams()
  useEffect(() => {
    const urlKeyword = searchParams.get("name");
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
  const agnosticPropsArray = combinedArray.map((value) => agnosticMapper(value))
  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search..."
        className="mb-4 p-2 border border-gray-300 rounded"
      />      <h2 className="text-2xl">Agnostic component</h2>
      {searchParams.get("name")}
      <div className="grid grid-cols-1">
  
        {agnosticPropsArray.map((value) => (
          <AgnosticComponentProvider content={value}>
    
            <AgnosticComponentTextColumn>
            
              <AgnosticComponentProgramLabel />
              <AgnosticComponentTitle />
              <AgnosticComponentShortDescription/>
              <AgnosticComponentDateAndSourceContainer>
                <AgnosticComponentDatePublished />
                <span className="mono text-xs font-normal uppercase">•</span>
                <AgnosticComponentSource />
              </AgnosticComponentDateAndSourceContainer>
            </AgnosticComponentTextColumn>
          </AgnosticComponentProvider>
        ))}
      </div>
      <h2 className="text-2xl">Team Members</h2>

      <ul>
        {filteredTeamMembers.map((teamMember) => (
          <li key={teamMember.name}>{teamMember.name}</li>
        ))}
      </ul>
      <h2 className="text-2xl">Events</h2>
      <ul>
        {filteredEvents.map((event) => (
          <li key={event.name}>{event.name}</li>
        ))}
      </ul>
      <h2 className="text-2xl">Programmes</h2>
      <ul>
        {filteredProgrammes.map((programme) => (
          <li key={programme.name}>{programme.name}</li>
        ))}
      </ul>
      <h2 className="text-2xl">Posts</h2>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.name}>{post.name}</li>
        ))}
      </ul>
      <h2 className="text-2xl">People</h2>
      <ul>
        {filteredPeople.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
      <h2 className="text-2xl">Multimedia</h2>
      <ul>
        {filteredMultimedia.map((media) => (
          <li key={media.name}>{media.name}</li>
        ))}
      </ul>
      <h2 className="text-2xl">Features</h2>
      <ul>
        {filteredFeatures.map((feature) => (
          <li key={feature.name}>{feature.name}</li>
        ))}
      </ul>
      <h2 className="text-2xl">News</h2>
      <ul>
        {filteredNews.map((news) => (
          <li key={news.name}>{news.name}</li>
        ))}
      </ul>
      <h2 className="text-2xl">Publications</h2>
      <ul>
        {filteredPublications.map((publication) => (
          <li key={publication.name}>{publication.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterResults;
