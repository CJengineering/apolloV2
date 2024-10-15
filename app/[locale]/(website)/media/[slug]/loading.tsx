import Spinner from "@/components/CJ-components/components-CJ/custom components/Spinner";
import LogoLoader from "@/components/CJ-components/components-CJ/test components/LogoLoader";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import MainContainer from "@/components/custom beta components/MainContainer";
import SectionBanter from "@/components/custom beta components/SectionBanter";
import ArticleSkleleton from "@/components/skeletons/ArticleSkleleton";
import React from "react";

export default function loadingArticle() {
  return (
  
  
        <div className=" lg:min-w-[900px]">
        <div className="min-w-0">
          <div className=" min-h-screen flex justify-center items-center">
            <Spinner />
          </div>
        </div>
      </div>

  
  );
}
