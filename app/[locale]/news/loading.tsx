import Footer from "@/components/ui/footer";
import SectionBanter from "@/components/custom beta components/SectionBanter";
import Search from "@/components/ui/search";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import NewsCardSkeleton from "@/components/skeletons/NewsCardSkeleton";

export default function NewsContentSkeleton() {
  return (
    <>
      <div className="">
        {/* Main area */}
        <div className="min-w-0">
          {/* Mobile hamburger + breadcrumbs */}

          {/* Article content */}
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
          <Footer />
        </div>
        {/*        <SecondaryNav />*/}
      </div>
    </>
  );
}
