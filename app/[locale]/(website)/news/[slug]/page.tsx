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
import { FieldsPostRaw, Item, NewsRawFields } from "@/app/interfaces";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import local from "next/font/local";
type Props = {
  params: { slug : string, locale: string };

}
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug= params.slug
  const locale = params.locale;

 
  const newsId = getIdByDisplayName("Posts");
  const productTest = await getData(newsId);
  const teamMembersRaw = productTest.items;
  const memberRaw :Item<FieldsPostRaw>[] = teamMembersRaw.filter(
    (item) => item.fieldData.slug === slug
  );
  const seoTitleArabic = memberRaw[0].fieldData["seo-title-arabic"] ? memberRaw[0].fieldData["seo-title-arabic"] : '';
  const seoTitleEnglish = memberRaw[0].fieldData["seo-title"] ? memberRaw[0].fieldData["seo-title"] : '';
  const name = locale === 'ar'? seoTitleArabic : seoTitleEnglish;

  const seoDescriptionArabic = memberRaw[0].fieldData["seo-title-arabic"] ? memberRaw[0].fieldData["seo-meta-arabic"] : '';
  const seoDescriptionEnglish = memberRaw[0].fieldData["seo-meta"] ? memberRaw[0].fieldData["seo-meta"] : '';
  const description = locale === 'ar'? seoDescriptionArabic : seoDescriptionEnglish;
  // optionally access and extend (rather than replace) parent metadata
  
 
  return customMetaDataGenerator({
    useRawTitle: true,
      title: name || '',
      description: description,
      ogImage: memberRaw[0].fieldData["open-graph-image"]?.url || '',
    })
 
  
}
const addType = (items: any[], type: string) =>
  items.map((item) => ({ ...item, type }));

export default async function page({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const categoryId = getIdByDisplayName("Categories");
  const categoriesRaw = await getData(categoryId);
  const rawPosts = await getData("61ee828a15a3183262bde542");
  const programesRaw = await getData("61ee828a15a3183d2abde540");
  const eventsRaw = await getData("6225fe8b1f52b40001a99d66");
  const peopleRaw = await getData("62271a6df4ceb0027d91e6c4");

  const post = rawPosts.items.find(
    (post) => post.fieldData.slug === params.slug
  );
  const cleanPost = postMapper(
    post,
    categoriesRaw.items,
    eventsRaw.items,
    programesRaw.items,
    peopleRaw.items
  );
  const article = transformPostFieldsToArticleProps(cleanPost);

  const relatedPeople = cleanPost.people.map((person) => {
    return {
      name: person.name,
      href: person.slug,
    };
  });
  const cleanRelatedImages = cleanPost.imageCarousel.map(
    photoNotFromCollectionMapper
  );
  const combinedItems = [
    ...addType(rawPosts.items, "announcements"),
    ...addType(programesRaw.items, "programme"),
    ...addType(eventsRaw.items, "event"),
    ...addType(peopleRaw.items, "people"),
  ];
  const relatedPostsRaw = findRelatedPosts(post, rawPosts.items);
  const relatedPostsCleaned = relatedPostsRaw.map((post) =>
    postMapper(
      post,
      categoriesRaw.items,
      eventsRaw.items,
      programesRaw.items,
      peopleRaw.items
    )
  );
  combinedItems.sort(
    (a, b) =>
      new Date(b.fieldData.datePublished).getTime() -
      new Date(a.fieldData.datePublished).getTime()
  );
  const latestItems = combinedItems.slice(0, 6);
  const result = latestItems.map((item) => ({
    name: item.fieldData.name,
    href: item.fieldData.slug,
    type: item.type,
  }));

  return (
<>
  <div className="">
    <ArticleBanter post={cleanPost} locale ={params.locale} />
  </div>
  <div className="pt-9 pb-7">
        <hr className="border-gray-200" />
      </div>
  <div className="pb-6">
        <h2 className="header-section">Photos</h2>
      </div>
  {relatedPostsCleaned.length > 0 && (
    <>
      <div className="w-full mx-auto">
        {cleanPost.imageCarousel.length > 0 &&
          cleanPost.imageCarousel[0].url !== "" && (
            <ContentPhotos images={cleanRelatedImages} />
          )}
      </div>

      <div className="pt-9 pb-7">
        <hr className="border-gray-200" />
      </div>

      <div className="pb-6">
        <h2 className="header-section">Related</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {relatedPostsCleaned.map((post) => (
          <PostCard key={post.name} content={post} noImage={true} noTitle={true} />
        ))}
      </div>
    </>
  )}
</>

  );
}
