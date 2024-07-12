import ContentContainer from "@/components/custom beta components/ContentContainer";
import MainContainer from "@/components/custom beta components/MainContainer";
import ArticleSkleleton from "@/components/skeletons/ArticleSkleleton";
import React from "react";

export default function loadingArticle() {
  return (
    <MainContainer isSideBar={false}>
      <ContentContainer>
        <div className="lg:min-w-[900px]">
          <ArticleSkleleton />
        </div>
      </ContentContainer>
    </MainContainer>
  );
}
