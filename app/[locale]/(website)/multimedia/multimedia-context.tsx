"use client";


import { MultimediaCleanedFields } from "@/app/interfaces";
// src/context/MultimediaContext.tsx
import React, { createContext, useContext, useMemo, useState } from "react";

interface RelatedCollection {
  id: string;
  name: string;
}

interface MultimediaContextProps {
  programmes: RelatedCollection[];
  people: RelatedCollection[];
  multimediasClean: MultimediaCleanedFields[];
  filteredMultimedias: MultimediaCleanedFields[];
  setProgrammeFilter: (programmes: RelatedCollection[]) => void;
  setPeopleFilter: (people: RelatedCollection[]) => void;
  multimediaQuery: string;
  setMultimediaQuery: (query: string) => void;
}

const MultimediaContext = createContext<MultimediaContextProps | undefined>(undefined);

export const useMultimediaContext = () => {
  const context = useContext(MultimediaContext);
  if (!context) {
    throw new Error("useMultimediaContext must be used within a MultimediaProvider");
  }
  return context;
};

interface MultimediaProviderProps {
  children: React.ReactNode;
  programmes: RelatedCollection[];
  people: RelatedCollection[];
  multimediasClean: MultimediaCleanedFields[];
}

export const MultimediaProvider: React.FC<MultimediaProviderProps> = ({
  children,
  programmes,
  people,
  multimediasClean,
}) => {
  const [selectedProgrammes, setSelectedProgrammes] = useState<
    RelatedCollection[]
  >([]);
  const [selectedPeople, setSelectedPeople] = useState<RelatedCollection[]>([]);
  const [multimediaQuery, setMultimediaQuery] = useState("");
  const filteredMultimedias = useMemo(() => {
    let filtered = multimediasClean; 
  
    
    if (selectedProgrammes.length > 0 && selectedPeople.length > 0) {
      // Filter by both programmes and people
      filtered = filtered.filter((multimedia) => 
        selectedProgrammes.some((programme) => multimedia.programmeLabel.name === programme.name) &&
        selectedPeople.some((selectedPerson) => 
          multimedia.relatedPeople.some((person) => person.name === selectedPerson.name)
        )
      );
    } else if (selectedProgrammes.length > 0) {
      // Filter by programmes only
      filtered = filtered.filter((multimedia) =>
        selectedProgrammes.some((programme) => multimedia.programmeLabel.name === programme.name)
      );
    } else if (selectedPeople.length > 0) {
      // Filter by people only
      filtered = filtered.filter((multimedia) =>
        selectedPeople.some((selectedPerson) => 
          multimedia.relatedPeople.some((person) => person.name === selectedPerson.name)
        )
      );
    }
    // Further filter by the Multimedia query if it's not empty
    if (multimediaQuery.trim() !== "") {
      filtered = filtered.filter((multimedia) =>
        multimedia.name.toLowerCase().includes(multimediaQuery.toLowerCase())
      );
    }
  
    return filtered;
  }, [multimediasClean, selectedProgrammes, selectedPeople, multimediaQuery]);
  

  const setProgrammeFilter = (programmes: RelatedCollection[]) => {
    setSelectedProgrammes(programmes);
  };

  const setPeopleFilter = (people: RelatedCollection[]) => {
    setSelectedPeople(people);
  };

  return (
    <MultimediaContext.Provider
      value={{
        programmes,
        people,
        multimediasClean,
        filteredMultimedias,
        setProgrammeFilter,
        setPeopleFilter,
        multimediaQuery,
        setMultimediaQuery,
      }}
    >
      {children}
    </MultimediaContext.Provider>
  );
};
