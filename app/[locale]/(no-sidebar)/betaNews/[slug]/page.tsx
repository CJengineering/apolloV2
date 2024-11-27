import ArticleBanter from "@/components/custom beta components/ArticleBanter";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import MainContainer from "@/components/custom beta components/MainContainer";
import RightContent from "@/components/custom beta components/RightContent";
import { getData } from "@/functions/api/getData";
import postMapper from "@/functions/transformers/postMapper";
import { transformPostFieldsToArticleProps } from "@/functions/transformers/transformPostFieldsToArticleProps";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { get } from "http";
import React from "react";
import ContentPhotos from "../../../../../components/CJ-components/components-CJ/test components/content-photos";
import photoNotFromCollectionMapper from "@/functions/transformers/photoNOTcollectionToLIghtBox";
import { findRelatedPosts } from "@/functions/findFunctions/findRelatedPostsFromPosts";
import PostCard from "@/components/custom beta components/PostCard";
import SectionBanter from "@/components/custom beta components/SectionBanter";
import { Metadata, ResolvingMetadata } from "next";
import {
  FieldsPostRaw,
  Item,
  NewsRawFields,
  PostFieldsCleaned,
} from "@/app/interfaces";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import local from "next/font/local";
import ArticleCJ from "@/components/custom beta components/ArticleCJ";
import { getDataInternalServer } from "@/functions/api/getDataInternalServer";
import { fetchAll } from "@/functions/api/fetchAll";
import { fetchSingleItem } from "@/functions/api/fetchSingleNews";
import { findRelatedPostsClean } from "@/functions/findFunctions/findRelatedPostsClean";
type Props = {
  params: { slug: string; locale: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  const slug= params.slug
  const locale = params.locale;
  const post = await fetchSingleItem("postSingle", params.slug);
  const cleanPost: PostFieldsCleaned = post.field_data;



 
  const seoTitleArabic = cleanPost.seoTitleArabic ?cleanPost.seoTitleArabic : '';
  const seoTitleEnglish = cleanPost.seoTitle? cleanPost.seoTitle : '';


  const seoDescriptionArabic = cleanPost.seoTitleArabic ? cleanPost.seoTitleArabic : '';
  const seoDescriptionEnglish = cleanPost.seoMeta ?cleanPost.seoMeta : '';
  const description = locale === 'ar'? seoDescriptionArabic : seoDescriptionEnglish;
  const arabicCJ = "مجتمع جميل"
  const arabicConstruction = `${seoTitleArabic} | ${arabicCJ}`
  const englishConstruction = `${seoTitleEnglish} | Community Jameel`
  // optionally access and extend (rather than replace) parent metadata
  const finalTitle = locale ==='ar'? arabicConstruction : englishConstruction

  return customMetaDataGenerator({
    useRawTitle: false,
    isArabic: true,
      title: finalTitle,
      description: description,
      ogImage: cleanPost.openGraphImage || '',
    })

}

export default async function page({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  // NEW FETCH LOGIC

  const rowsD = await fetchAll("posts");
  const cleanPosts: PostFieldsCleaned[] = rowsD.map((row) => row.field_data);
  const post = await fetchSingleItem("postSingle", params.slug);
  const cleanPost: PostFieldsCleaned = post.field_data;
  //END new fetch logic

  const cleanRelatedImages = cleanPost.imageCarousel.map(
    photoNotFromCollectionMapper
  );

  const relatedPostsCleaned = findRelatedPostsClean(cleanPost, cleanPosts);

  return (
    <>
      <div className="">
        {JSON.stringify(relatedPostsCleaned.length)}
        <ArticleCJ post={cleanPost} locale={params.locale} />
      </div>
      <div className="pt-9 pb-7">
        <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-700"></div>
      </div>
      {cleanRelatedImages.length > 1 && (
        <>
          <div className="pb-6">
            <h2 className="header-section">Photos</h2>
          </div>
          <div className="w-full mx-auto">
            {cleanPost.imageCarousel.length > 0 &&
              cleanPost.imageCarousel[0].url !== "" && (
                <ContentPhotos images={cleanRelatedImages} />
              )}
          </div>

          <div className="pt-9 pb-7">
            <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-700"></div>
          </div>
        </>
      )}
      {relatedPostsCleaned.length > 0 && (
        <>
          <div className="pb-6">
            <h2 className="header-section">Related</h2>
          </div>
          <div className="grid md:grid-cols-1 gap-4">
            {relatedPostsCleaned.map((post) => (
              <PostCard
                key={post.name}
                content={post}
                noImage={true}
                noTitle={true}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
