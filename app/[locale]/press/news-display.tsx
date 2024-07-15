'use client';
import { CompoundNewsCard, CompoundNewsCardDateLabel, CompoundNewsCardImageLink, CompoundNewsCardProgrammeLabel, CompoundNewsCardSourceLabel, CompoundNewsCardTitleLink } from "@/components/CJ-components/components-CJ/test components/CompoundNewsCard";
import { useNewsContext } from "./news-contect";
import { Suspense } from "react";
import Loading from "@/components/custom beta components/Loading";
import { CompoundNewsSmall, CompoundNewsSmallDateLabel, CompoundNewsSmallMetaContainer, CompoundNewsSmallSourceLabel, CompoundNewsSmallTitleLink } from "@/components/CJ-components/components-CJ/test components/CompoundNewsSmall";
import { NewsCardV2DatePublished, NewsCardV2ImageColumn, NewsCardV2ProgrammeLabel, NewsCardV2Provider, NewsCardV2TextColumn, NewsCardV2Title } from "@/components/CJ-components/components-CJ/test components/NewsCardV2";

export const NewsDisplay: React.FC<{ locale: string }> = ({ locale }) => {
    const { filteredNews } = useNewsContext();
  
    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-6">
          <div className="pb-6 lg:col-span-6">
            {filteredNews.slice(0, 1).map((news, index) => (
              <CompoundNewsCard key={index} locale={locale} content={news}>
                <CompoundNewsCardImageLink />
                <div className="mt-3 md:align-middle">
                  <div>
                    <CompoundNewsCardProgrammeLabel />
                  </div>
                  <CompoundNewsCardTitleLink />
                  <div className="flex pt-1">
                    <div>
                      <CompoundNewsCardDateLabel />
                    </div>
                    <div className="px-3 mono text-sm">•</div>
                    <div>
                      <CompoundNewsCardSourceLabel />
                    </div>
                  </div>
                </div>
              </CompoundNewsCard>
            ))}
          </div>
          <div className="lg:col-span-6 lg:pl-6">
            <Suspense fallback={<Loading />}>
              {filteredNews.slice(2, 7).map((news, index) => (
                <CompoundNewsSmall key={index} content={news} locale={locale}>
                  <div className="order-2 mt-2 w-full px-2 sm:mt-0 sm:max-w-sm sm:pl-0 sm:pr-5 lg:order-2 lg:mt-4 xl:ml-5 xl:mt-0 xl:flex-1">
                    <CompoundNewsSmallTitleLink />
                    <CompoundNewsSmallMetaContainer>
                      <CompoundNewsSmallDateLabel />
                      <span className="flex items-center justify-center px-1 mono text-xs">•</span>
                      <CompoundNewsSmallSourceLabel />
                    </CompoundNewsSmallMetaContainer>
                  </div>
                </CompoundNewsSmall>
              ))}
            </Suspense>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-6">
          <div className="pb-6 lg:col-span-6"></div>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <Suspense>
            {filteredNews.slice(7).map((news, index) => (
              <NewsCardV2Provider key={index} content={news}>
                <NewsCardV2ImageColumn />
                <NewsCardV2TextColumn>
                  <NewsCardV2ProgrammeLabel />
                  <NewsCardV2Title />
                  <NewsCardV2DatePublished />
                </NewsCardV2TextColumn>
              </NewsCardV2Provider>
            ))}
          </Suspense>
        </div>
      </>
    );
  };