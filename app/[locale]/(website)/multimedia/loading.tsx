import SectionBanter from "@/components/custom beta components/SectionBanter";

import ContentContainer from "@/components/custom beta components/ContentContainer";
import LogoLoader from "@/components/CJ-components/components-CJ/test components/LogoLoader";
import Spinner from "@/components/CJ-components/components-CJ/custom components/Spinner";

export default function NewsContentSkeleton() {
  return (
    <>
          <div className=" lg:min-w-[900px]">
        <div className="min-w-0">
          <div className=" min-h-screen flex justify-center items-center">
            <Spinner />
          </div>
        </div>
      </div>
    </>
  );
}