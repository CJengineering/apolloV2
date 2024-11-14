"use client";
import React from "react";
import { ListSmallProps, RowData, StatProps } from "@/app/interfaces";
import FeatureCardTable from "../test components/FeatureCardTable";
import { TableRowLogoLightImage } from "./table-row-logo-light-image";
import { TableRowLogoDarkImage } from "./table-row-logo-dark-image";
import { TableRowFullDescription } from "./table-row-full-description";
import VerticalSpaceDivider from "@/components/components V2/generic/vertical-space-divider";
import { TableRowSocialContent } from "./table-row-social-content";
import { TableRowMetaDataContent } from "./table-row-meta-data-description";
import { TableRowKPI } from "./table-row-kpi";

interface TableRowSingleProps {
  repository: RowData["repository"];
  locale: string;
}

export default function TableRowSingle({
  repository,
  locale,
}: TableRowSingleProps) {
  const isArabic = locale === "ar";
  const dataChecks: Array<ListSmallProps["data"]> = [
    isArabic
      ? repository.content.researchArabic?.data
      : repository.content.research?.data,
    isArabic
      ? repository.content.established?.data
      : repository.content.established?.data,
    isArabic
      ? repository.content.headquartersArabic?.data
      : repository.content.headquarters?.data,
    isArabic
      ? repository.content["key partnersArabic"]?.data
      : repository.content["key partners"]?.data,
    isArabic
      ? repository.content.leadershipArabic?.data
      : repository.content.leadership?.data,
  ];
  return (
    <div className="border-b dark:border-slate-700 pb-9 ">
      <div className="grid pr-2 md:grid-cols-2 md:gap-16">
        <div>
          {/* <div>
            {repository.content.logo?.url && (
              <Image
                className="dark:hidden object-fit w-64 py-9"
                width={400}
                height={300}
                src={repository.content.logo?.url || ""}
                alt={repository.content.logo?.alt || ""}
              />
            )}
          </div>
          <div>
            <Image
              className="dark:block hidden object-fit w-64"
              width={400}
              height={300}
              src={repository.content.logoDark?.url || ""}
              alt={repository.content.logoDark?.alt || ""}
            />
          </div> */}
          <TableRowLogoLightImage
            content={repository.content}
          ></TableRowLogoLightImage>
          <TableRowLogoDarkImage
            content={repository.content}
          ></TableRowLogoDarkImage>
          {/* <div className="mt-6">
            <div
              className="sans-serif text-xl md:w-11/12 sm:text-2xl leading-normal"
              dangerouslySetInnerHTML={{
                __html: isArabic
                  ? repository.content.fullDescriptionArabic
                  : repository.content.fullDescription,
              }}
            ></div>
          </div> */}
          <TableRowFullDescription
            content={repository.content}
            isArabic={isArabic}
          ></TableRowFullDescription>

          <VerticalSpaceDivider padding={3} />

          {/* <div className="grid grid-cols-2  py-4">
            <div className="flex items-center">
              <div>
                <SocialMediaList
                  socialMediaLinks={repository.content.socialMediaLinks}
                />
              </div>
              <div className="ml-3 flex space-x-4">
                {repository.content.button.text && (
                  <ButtonCJ
                    href={repository.content.button.href}
                    text={repository.content.button.text}
                    styleType="primary"
                    openInNewTab={true}
                  />
                )}
              </div>
            </div>
          </div> */}
          <TableRowSocialContent
            content={repository.content}
            slug={repository.top.slug}
          ></TableRowSocialContent>
        </div>

        <div>
          <VerticalSpaceDivider padding={4} />
          <div>
            {/* <div className="grid grid-cols-2 gap-x-9 gap-y-6 lg:grid-cols-2">
              {repository.content.research?.data?.research[0].name !== "" && (
                <div>
                  <ListSmall
                    data={
                      isArabic
                        ? repository.content.researchArabic?.data
                        : repository.content.research?.data
                    }
                  />
                </div>
              )}
              <div>
                <ListSmall
                  data={
                    isArabic
                      ? repository.content.established?.data
                      : repository.content.established?.data
                  }
                />
              </div>
              <div>
                <ListSmall
                  data={
                    isArabic
                      ? repository.content.headquartersArabic?.data
                      : repository.content.headquarters?.data
                  }
                />
              </div>
              <div>
                <ListSmall
                  data={
                    isArabic
                      ? repository.content["key partnersArabic"]?.data
                      : repository.content["key partners"]?.data
                  }
                />
              </div>
              <div>
                <ListSmall
                  data={
                    isArabic
                      ? repository.content.leadershipArabic?.data
                      : repository.content.leadership?.data
                  }
                />
              </div>
            </div> */}
            <TableRowMetaDataContent
              dataChecks={dataChecks}
            ></TableRowMetaDataContent>
          </div>

          <VerticalSpaceDivider padding={4} />
          {/* <div className="grid grid-cols-2 gap-x-9 gap-y-6">
            {repository.content.stats.map((stat: StatProps) => (
              <Stats
                key={stat.title}
                title={stat.content}
                content={stat.title}
              />
            ))}
          </div> */}
          <TableRowKPI stats={repository.content.stats}></TableRowKPI>
          <VerticalSpaceDivider padding={4} />
          <div>
            <div className="pt-4 pb-8 grid grid-cols-3 gap-3">
              {repository.content.features.map((feature, index) => (
                <FeatureCardTable
                  image={{
                    imageUrl: feature.image.imageUrl,
                    type: feature.image.type,
                    title: feature.title,
                  }}
                  title={feature.title}
                  clickAction={feature.clickAction}
                  customLink={feature.customLink}
                  isLightBox={false}
                  isTab={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
