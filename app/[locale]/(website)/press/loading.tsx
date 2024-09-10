import SectionBanter from "@/components/custom beta components/SectionBanter";

import ContentContainer from "@/components/custom beta components/ContentContainer";
import LogoLoader from "@/components/CJ-components/components-CJ/test components/LogoLoader";
import Spinner from "@/components/CJ-components/components-CJ/custom components/Spinner";

export default function NewsContentSkeleton() {
  return (
    <ContentContainer>
      <div className=" lg:min-w-[900px]">
        <div className="min-w-0">
          <div className="ml-20 md:ml-0 md:mt-10">
            <SectionBanter title={""}>
              <div className=" min-h-screen flex justify-center items-center">
                <Spinner />
              </div>
            </SectionBanter>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}
{
  /*     <MainContainer isSideBar={false}>
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
    </MainContainer> */
}
