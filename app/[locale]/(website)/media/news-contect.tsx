"use client";

import { NewsCardFields, NewsCleanedFields } from "@/app/interfaces";
import { fetchAll } from "@/functions/api/fetchAll";
import { use } from "chai";
// src/context/NewsContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface RelatedCollection {
  id: string;
  name: string;
}

interface NewsContextProps {
  programmes: RelatedCollection[];
  sources: RelatedCollection[];
  newsArrayCleaned: NewsCleanedFields[] | NewsCardFields[];
  filteredNews: NewsCleanedFields[] | NewsCardFields[];
  newsQuery: string;
  setProgrammeFilter: (programmes: RelatedCollection[]) => void;
  setSourceFilter: (sources: RelatedCollection[]) => void;
  setNewsQuery: (query: string) => void;
}

const NewsContext = createContext<NewsContextProps | undefined>(undefined);

export const useNewsContext = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNewsContext must be used within a NewsProvider");
  }
  return context;
};

interface NewsProviderProps {
  children: React.ReactNode;
  programmes: RelatedCollection[];
  sources: RelatedCollection[];
  newsArrayCleaned: NewsCleanedFields[] | NewsCardFields[];
}

export const NewsProvider: React.FC<NewsProviderProps> = ({
  children,
  programmes,
  sources,
  newsArrayCleaned,
}) => {
  const [selectedProgrammes, setSelectedProgrammes] = useState<
    RelatedCollection[]
  >([]);
  const [selectedSources, setSelectedSources] = useState<RelatedCollection[]>(
    []
  );
  const [newsQuery, setNewsQuery] = useState("");
  const [fetchedNews, setFetchedNews] = useState<
    NewsCleanedFields[] | NewsCardFields[]
  >(newsArrayCleaned);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const rowsD = await fetchAll("newsV3") as any; // Fetch new news
       console.log( 'is esefefct fetchin--')
        
        const news : NewsCardFields[] = rowsD.map(mapToNewsCardFields);
        setFetchedNews(news); // Update state with fetched news
        console.log( 'is mapped')
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);
  const filteredNews = useMemo(() => {
    let filtered = fetchedNews; // Start with the full list of news

    if (selectedProgrammes.length > 0 && selectedSources.length > 0) {
      // Filter by both programmes and sources
      filtered = filtered.filter(
        (news) =>
          selectedProgrammes.some(
            (programme) => news.programme.shortname === programme.name
          ) &&
          selectedSources.some((source) => news.sources.name === source.name)
      );
    } else if (selectedProgrammes.length > 0) {
      // Filter by programmes only
      filtered = filtered.filter((news) =>
        selectedProgrammes.some(
          (programme) => news.programme.shortname === programme.name
        )
      );
    } else if (selectedSources.length > 0) {
      // Filter by sources only
      filtered = filtered.filter((news) =>
        selectedSources.some((source) => news.sources.name === source.name)
      );
    }

    // Further filter by the news name using the search query, if it's not empty
    if (newsQuery.trim() !== "") {
      filtered = filtered.filter((news) =>
        news.name.toLowerCase().includes(newsQuery.toLowerCase())
      );
    }

    return filtered;
  }, [fetchedNews, selectedProgrammes, selectedSources, newsQuery]);

  const setProgrammeFilter = (programmes: RelatedCollection[]) => {
    setSelectedProgrammes(programmes);
  };

  const setSourceFilter = (sources: RelatedCollection[]) => {
    setSelectedSources(sources);
  };

  return (
    <NewsContext.Provider
      value={{
        programmes,
        sources,
        newsArrayCleaned: fetchedNews,
        filteredNews,
        setProgrammeFilter,
        setSourceFilter,
        newsQuery,
        setNewsQuery,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

function mapToNewsCardFields(row: any): NewsCardFields {
  return {
    slug: row.slug || "",
    thumbnail: {
      url: row.thumbnailUrl || "",
      alt: row.thumbnailAltText || "Default Alt Text", // Fallback alt text
    },
    thumbnailAltText: row.thumbnailAltText || "",
    sources: {
      name: row.sourcesName || "",
      arabicName: row.sourcesArabicName || "",
      shortname: undefined, // This field is not present in the SQL query
      slug: row.sourcesSlug || "",
      url: row.sourcesUrl || "",
    },
    arabicTitle: row.arabicTitle || "",
    name: row.name || "",
    datePublished: row.datePublished || "",
    datePublishedArabic: row.datePublishedArabic || "",
    programme: {
      name: row.programmeName || "",
      arabicName: row.programmeArabicName || "",
      shortname: row.programmeShortname || "",
      slug: row.programmeSlug || "",
      url: row.programmeUrl || "",
    },
  };
}
