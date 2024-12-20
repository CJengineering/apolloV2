import ContentContainer from "@/components/custom beta components/ContentContainer";
import { getData } from "@/functions/api/getData";
import legalMapper from "@/functions/transformers/legalMapper";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import Image from "next/image";
import React from "react";
import TrailerModalButton from "@/components/CJ-components/components-CJ/custom components/TrailerModalButton";
import { Metadata } from "next";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";
import {cardMITJWAFS  } from "@/app/data/annualreport2024";
import SectionHomeCard from "@/components/components V2/home/section-home-card";
import SectionDivider from "@/components/components V2/generic/section-divider";
import HomeCard from "@/components/CJ-components/components-CJ/basic components/HomeCard";
import PostAccordion from "@/components/mdx/accordion";
import CarousselForComponents from "@/components/CJ-components/components-CJ/basic components/CarousselForComponents";
export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "Community Jameel Studios",
  description:
    "Community Jameel Studios produces award-winning films and video content about how science and learning can help communities thrive.",
  ogType: "website",
  ogImage:
    "https://cdn.prod.website-files.com/612cdb8a4fac760705621df5/674dfdfb6d3debc818f1c510_COMMUNITY_JAMEEL_STUDIOS_OG.webp",
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "Community", "Studios"],
});

export default async function ReportsPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  return (
    <>
      <div className="pt-20 lg:pt-10 lg:mb-12">
        <div className="flex flex-col text-left">
          <div className="w-full pb-6">
            <h1 className="header-article">Annual Report 2024</h1>
          </div>
          <div className="w-full">
            <div className="prose prose-xl leading-normal dark:prose-dark">
              <p>
                x
              </p>
              <p>
               y
              </p>
            </div>

            <SectionDivider />
            <div>
              <div className="mb-3">
                <h2 className="header-section">Films</h2>
              </div>

              <section className="flex justify-center ">
                <div>
            <div className="">
              <CarousselForComponents>
              {cardMITJWAFS.map((card, index) => (
                    <HomeCard
                      key={index}
                      imageUrl={card.imageUrl}
                      alt={card.alt}
                      title={card.title}
                      subtitle={card.subtitle}
                      link={card.link}
                      openInNewTab={card.openInNewTab}
                      clickAction={card.clickAction || ""}
                      isWithSubtitle
                    />
                  ))}
              </CarousselForComponents>
            </div>
            </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
