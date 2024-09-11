"use client";
import React from "react";
import { RowData, StatProps } from "@/app/interfaces";
import Image from "next/image";
import ListSmall from "../basic components/ListSmall";
import CardSquaredImage from "../basic components/CardSquared";
import Stats from "../basic components/Stats";
import SocialMediaList from "../basic components/SocialMediaList";
import ButtonCJ from "../basic components/ButtonCJ";
import FeatureCardTable from "../test components/FeatureCardTable";
import { title } from "process";
import { divide } from "cypress/types/lodash";

interface TableRowSingleProps {
  repository: RowData["repository"];
  locale: string;
}

export default function TableRowSingle({
  repository,
  locale,
}: TableRowSingleProps) {
  const isArabic = locale === "ar";

  return (
    <div className="border-b dark:border-slate-700 pb-9">
      <div className="grid px-2 md:grid-cols-2 md:gap-16">
        <div>
          <div>
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
          </div>
          <div className="mt-6">
            <div
              className="sans-serif text-xl md:w-11/12 md:text-3xl leading font-normal"
              dangerouslySetInnerHTML={{
                __html: isArabic
                  ? repository.content.fullDescriptionArabic
                  : repository.content.fullDescription,
              }}
            ></div>
          </div>

          <div className="py-6"></div>

          <div className="grid grid-cols-2  py-4">
            <div className="flex    items-center">
              <div>
                <SocialMediaList
                  socialMediaLinks={repository.content.socialMediaLinks}
                />
              </div>
              <div className="ml-3   flex space-x-4">
                {repository.content.button.text && (
                  <ButtonCJ
                    href={repository.content.button.href}
                    text={repository.content.button.text}
                    styleType="primary"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="py-4"></div>
          <div>
            <div className="grid grid-cols-2 gap-x-9 gap-y-6 lg:grid-cols-2">
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
            </div>
          </div>

          <div className="py-4"></div>
          <div className="grid grid-cols-2 gap-x-9 gap-y-6">
            {repository.content.stats.map((stat: StatProps) => (
              <Stats
                key={stat.title}
                title={stat.content}
                content={stat.title}
              />
            ))}
          </div>
          <div className="py-4"></div>
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
