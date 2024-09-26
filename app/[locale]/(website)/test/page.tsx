import Spinner from "@/components/CJ-components/components-CJ/custom components/Spinner";
import LogoLoader from "@/components/CJ-components/components-CJ/test components/LogoLoader";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import SectionBanter from "@/components/custom beta components/SectionBanter";
import React from "react";

export default function page() {
  return (

    <div className=" lg:min-w-[100vh]">
    <div className="min-w-0">
      <div className=" min-h-screen flex justify-center items-center">
        {/* <Spinner /> */}
        <iframe
                width="300"
                height="315"
                src="https://www.youtube.com/embed/hDRgtbx_eJs?si=sSmTQfD1Nl8SY7vh"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
      </div>
    </div>
  </div>
 
  );
}
