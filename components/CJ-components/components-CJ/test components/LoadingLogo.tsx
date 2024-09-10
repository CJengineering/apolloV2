import SectionBanter from "@/components/custom beta components/SectionBanter";

import ContentContainer from "@/components/custom beta components/ContentContainer";
import LogoLoader from "@/components/CJ-components/components-CJ/test components/LogoLoader";
import Spinner from "../custom components/Spinner";

export default function LoadingLogo() {
  return (
    <ContentContainer>
      <div className=" lg:min-w-[900px]">
        <div className="min-w-0">
          <div className="ml-20 md:ml-0 md:mt-10">
            <SectionBanter title={""}>
              <div className=" min-h-screen flex justify-center items-center">
                {/* <LogoLoader /> */}
                <Spinner />
              </div>
            </SectionBanter>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}