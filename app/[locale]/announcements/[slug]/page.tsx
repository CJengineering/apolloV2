import ArticleBanter from "@/components/custom beta components/ArticleBanter";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import MainContainer from "@/components/custom beta components/MainContainer";
import RightContent from "@/components/custom beta components/RightContent";
import { getData } from "@/functions/api/getData";
import postMapper from "@/functions/transformers/postMapper";
import { transformPostFieldsToArticleProps } from "@/functions/transformers/transformPostFieldsToArticleProps";
import React from "react";
const addType = (items: any[], type: string) => items.map(item => ({ ...item, type }));


export default async function page({
  params,
}: {
  params: { locale: string; slug: string };
}) {

    const rawPosts = await getData("61ee828a15a3183262bde542");
    const programesRaw = await getData("61ee828a15a3183d2abde540");
    const eventsRaw = await getData("6225fe8b1f52b40001a99d66");
    const peopleRaw = await getData("62271a6df4ceb0027d91e6c4");

   const post = rawPosts.items.find((post) => post.fieldData.slug === params.slug);
   const cleanPost = postMapper(post, eventsRaw.items, programesRaw.items, peopleRaw.items);
   const article = transformPostFieldsToArticleProps(cleanPost);

   const relatedPeople = cleanPost.people.map((person) => {
        return {
        name: person.name,
        href: person.slug,
        };
    });
    const combinedItems = [
        ...addType(rawPosts.items, 'announcements'),
        ...addType(programesRaw.items, 'programme'),
        ...addType(eventsRaw.items, 'event'),
        ...addType(peopleRaw.items, 'people'),
      ];
    
      combinedItems.sort((a, b) => new Date(b.fieldData.datePublished).getTime() - new Date(a.fieldData.datePublished).getTime());
      const latestItems = combinedItems.slice(0, 6);
      const result = latestItems.map(item => ({
        name: item.fieldData.name,
        href: item.fieldData.slug,
        type: item.type
      }));

  return (
    <MainContainer isSideBar={false}>
      <ContentContainer>
      
        <ArticleBanter article={article.article}/>
        <RightContent source={""} datePublished={cleanPost.datePublished} relatedContent={result} relatedPeople={relatedPeople}></RightContent>
      </ContentContainer>
    </MainContainer>
  );
}
