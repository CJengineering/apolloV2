'use client';

import { NewsCleanedFields } from '@/app/interfaces';
// src/context/NewsContext.tsx
import React, { createContext, useContext, useMemo, useState } from 'react';

interface RelatedCollection {
  id: string;
  name: string;
}



interface NewsContextProps {
  programmes: RelatedCollection[];
  sources: RelatedCollection[];
  newsArrayCleaned: NewsCleanedFields[];
  filteredNews: NewsCleanedFields[];
  setProgrammeFilter: (programmes: RelatedCollection[]) => void;
  setSourceFilter: (sources: RelatedCollection[]) => void;
}

const NewsContext = createContext<NewsContextProps | undefined>(undefined);

export const useNewsContext = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNewsContext must be used within a NewsProvider');
  }
  return context;
};

interface NewsProviderProps {
  children: React.ReactNode;
  programmes: RelatedCollection[];
  sources: RelatedCollection[];
  newsArrayCleaned: NewsCleanedFields[];

}

export const NewsProvider: React.FC<NewsProviderProps> = ({ children, programmes, sources, newsArrayCleaned }) => {
  const [selectedProgrammes, setSelectedProgrammes] = useState<RelatedCollection[]>([]);
  const [selectedSources, setSelectedSources] = useState<RelatedCollection[]>([]);

  const filteredNews = useMemo(() => {
    if (selectedProgrammes.length === 0 && selectedSources.length === 0) {
      return newsArrayCleaned;
    }
    return newsArrayCleaned.filter(news => {
      const matchesProgramme = selectedProgrammes.length > 0 ? selectedProgrammes.some(programme => news.programme.shortname === programme.name): false;
      const matchesSource = selectedSources.length > 0 ? selectedSources.some(source => news.sources.name === source.name):false ;
      return matchesProgramme || matchesSource;
    });
  }, [newsArrayCleaned, selectedProgrammes, selectedSources]);

  const setProgrammeFilter = (programmes: RelatedCollection[]) => {
    setSelectedProgrammes(programmes);
  };

  const setSourceFilter = (sources: RelatedCollection[]) => {
    setSelectedSources(sources);
  };

  return (
    <NewsContext.Provider value={{ programmes, sources, newsArrayCleaned, filteredNews, setProgrammeFilter, setSourceFilter }}>
      {children}
    </NewsContext.Provider>
  );
};

