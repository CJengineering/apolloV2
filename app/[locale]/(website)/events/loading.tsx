import SectionBanter from "@/components/custom beta components/SectionBanter";

import ContentContainer from "@/components/custom beta components/ContentContainer";
import LogoLoader from "@/components/CJ-components/components-CJ/test components/LogoLoader";
import Spinner from "@/components/CJ-components/components-CJ/custom components/Spinner";

export default function NewsContentSkeleton() {
  return (
    <div className=" lg:min-w-[100vh]  flex justify-center min-w-[400px]  ">
      <div className="min-h-screen w-full  flex justify-center items-center">
        <div className="flex justify-center items-center w-full h-full">
          <Spinner />
        </div>
      </div>
    </div>
 
  );
}