import ContentContainer from "@/components/custom beta components/ContentContainer";
import MainContainer from "@/components/custom beta components/MainContainer";
import SectionBanter from "@/components/custom beta components/SectionBanter";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import NewsCardSkeleton from "@/components/skeletons/NewsCardSkeleton";
import Search from "@/components/ui/search";
import React from "react";

export default function loading() {
  return (
    <MainContainer isSideBar={false}>
      <ContentContainer>
        <div className=" lg:min-w-[900px]">
          <div className="min-w-0">
            <div className="md:mt-10">
              <HeroSkeleton />
              <SectionBanter title={""}>
                <div className=" relative mb-4">
                  <Search></Search>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3 ">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                    <NewsCardSkeleton key={index} />
                  ))}
                </div>
              </SectionBanter>
            </div>
          </div>
        </div>
      </ContentContainer>
    </MainContainer>
  );
}
