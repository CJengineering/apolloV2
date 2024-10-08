"use client";
import {
  CompoundNewsCard,
  CompoundNewsCardDateLabel,
  CompoundNewsCardImageLink,
  CompoundNewsCardProgrammeLabel,
  CompoundNewsCardSourceLabel,
  CompoundNewsCardTitleLink,
} from "@/components/CJ-components/components-CJ/test components/CompoundNewsCard";
import { useNewsContext } from "./news-contect";
import { Suspense } from "react";
import Loading from "@/components/custom beta components/Loading";
import {
  CompoundNewsSmall,
  CompoundNewsSmallDateLabel,
  CompoundNewsSmallMetaContainer,
  CompoundNewsSmallSourceLabel,
  CompoundNewsSmallTitleLink,
} from "@/components/CJ-components/components-CJ/test components/CompoundNewsSmall";
import {
  NewsCardV2DatePublished,
  NewsCardV2ImageColumn,
  NewsCardV2ProgrammeLabel,
  NewsCardV2Provider,
  NewsCardV2TextColumn,
  NewsCardV2Title,
} from "@/components/CJ-components/components-CJ/test components/NewsCardV2";
import LogoLoader from "@/components/CJ-components/components-CJ/test components/LogoLoader";
import {
  NewsCardSourceDate,
  NewsCardSourceDateAndSourceContainer,
  NewsCardSourceDatePublished,
  NewsCardSourceDivider,
  NewsCardSourceProgrammeLabel,
  NewsCardSourceProvider,
  NewsCardSourceSource,
  NewsCardSourceTextColumn,
  NewsCardSourceTitle,
} from "@/components/CJ-components/components-CJ/test components/NewsCardSource";
import NewsCard from "@/components/custom beta components/NewsCard";

export const NewsDisplay: React.FC<{ locale: string }> = ({ locale }) => {
  const { filteredNews } = useNewsContext();

  return (
    <>
      {/*            {filteredNews.map((news, index) => (
              <NewsCardV2Provider key={index} content={news}>
             
                <NewsCardV2TextColumn>
                  <NewsCardV2ProgrammeLabel />
                  <NewsCardV2Title />
                  <NewsCardV2DatePublished />
                </NewsCardV2TextColumn>
              </NewsCardV2Provider>
            ))}
             */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-1">
        <Suspense>
          {/* {filteredNews.map((news, index) => (
            <NewsCardSourceProvider key={index} content={news}>
              <NewsCardSourceTextColumn>
                <NewsCardSourceProgrammeLabel />
                <NewsCardSourceTitle /> 
             
              
              
              
                 
              
              </NewsCardSourceTextColumn>
            </NewsCardSourceProvider>
          ))} */}
          {filteredNews.map((news, index) => (
            <NewsCard content={news} locale={""} />)
          )
            }
        </Suspense>
      </div>
    </>
  );
};
