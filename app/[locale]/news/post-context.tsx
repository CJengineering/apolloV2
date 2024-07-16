"use client";

import { PostFieldsCleaned } from "@/app/interfaces";
// src/context/PostContext.tsx
import React, { createContext, useContext, useMemo, useState } from "react";

interface RelatedCollection {
  id: string;
  name: string;
}

interface PostContextProps {
  programmes: RelatedCollection[];
  people: RelatedCollection[];
  postsClean: PostFieldsCleaned[];
  filteredPosts: PostFieldsCleaned[];
  setProgrammeFilter: (programmes: RelatedCollection[]) => void;
  setPeopleFilter: (people: RelatedCollection[]) => void;
  postQuery: string;
  setPostQuery: (query: string) => void;
}

const PostContext = createContext<PostContextProps | undefined>(undefined);

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};

interface PostProviderProps {
  children: React.ReactNode;
  programmes: RelatedCollection[];
  people: RelatedCollection[];
  postsClean: PostFieldsCleaned[];
}

export const PostProvider: React.FC<PostProviderProps> = ({
  children,
  programmes,
  people,
  postsClean,
}) => {
  const [selectedProgrammes, setSelectedProgrammes] = useState<
    RelatedCollection[]
  >([]);
  const [selectedPeople, setSelectedPeople] = useState<RelatedCollection[]>([]);
  const [postQuery, setPostQuery] = useState("");

  const filteredPosts = useMemo(() => {
    let filtered = postsClean; // Start with the clean list of posts

    if (selectedProgrammes.length > 0 || selectedPeople.length > 0) {
      filtered = filtered.filter((post) => {
        const matchesProgramme =
          selectedProgrammes.length > 0
            ? selectedProgrammes.some(
                (programme) => post.programme.shortname === programme.name
              )
            : false;
        const matchesPeople =
          selectedPeople.length > 0
            ? selectedPeople.some((selectedPerson) =>
                post.people.some(
                  (person) => person.name === selectedPerson.name
                )
              )
            : false;

        return matchesProgramme || matchesPeople;
      });
    }

    // Further filter by the post query if it's not empty
    if (postQuery.trim() !== "") {
      filtered = filtered.filter((post) =>
        post.name.toLowerCase().includes(postQuery.toLowerCase())
      );
    }

    return filtered;
  }, [postsClean, selectedProgrammes, selectedPeople, postQuery]);

  const setProgrammeFilter = (programmes: RelatedCollection[]) => {
    setSelectedProgrammes(programmes);
  };

  const setPeopleFilter = (people: RelatedCollection[]) => {
    setSelectedPeople(people);
  };

  return (
    <PostContext.Provider
      value={{
        programmes,
        people,
        postsClean,
        filteredPosts,
        setProgrammeFilter,
        setPeopleFilter,
        postQuery,
        setPostQuery,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
