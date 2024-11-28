"use client";

import { PostFieldsCleaned } from "@/app/interfaces";
import { fetchAll } from "@/functions/api/fetchAll";
// src/context/PostContext.tsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

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
console.log('PostContext',PostContext)

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
  const [fetchedPosts, setFetchedPosts] = useState<PostFieldsCleaned[]>(postsClean);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const rowsD = await fetchAll("posts"); // Fetch new posts
        const updatedPosts = rowsD.map((row: any) => row.field_data);
        setFetchedPosts(updatedPosts); // Update state with fetched posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);
  const filteredPosts = useMemo(() => {
    let filtered = fetchedPosts
  
    if (selectedProgrammes.length > 0 && selectedPeople.length > 0) {
      // Filter by both programmes and people
      filtered = filtered.filter((post) => 
        selectedProgrammes.some((programme) => post.programme.shortname === programme.name) &&
        selectedPeople.some((selectedPerson) => 
          post.people.some((person) => person.name === selectedPerson.name)
        )
      );
    } else if (selectedProgrammes.length > 0) {
      // Filter by programmes only
      filtered = filtered.filter((post) =>
        selectedProgrammes.some((programme) => post.programme.shortname === programme.name)
      );
    } else if (selectedPeople.length > 0) {
      // Filter by people only
      filtered = filtered.filter((post) =>
        selectedPeople.some((selectedPerson) => 
          post.people.some((person) => person.name === selectedPerson.name)
        )
      );
    }
  
    // Further filter by the post query if it's not empty
    if (postQuery.trim() !== "") {
      filtered = filtered.filter((post) =>
        post.name.toLowerCase().includes(postQuery.toLowerCase())
      );
    }
  
    return filtered;
  }, [fetchedPosts, selectedProgrammes, selectedPeople, postQuery]);
  

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
        postsClean: fetchedPosts,
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
