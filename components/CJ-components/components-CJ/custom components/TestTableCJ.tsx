"use client";
import Image from "next/image";
import React from "react";
import Header2 from "../typography/Header2";
import { Disclosure } from "@headlessui/react";
import SocialMediaList from "../basic components/SocialMediaList";
import CardSquaredImage from "../basic components/CardSquared";

import ListSmall from "../basic components/ListSmall";
import ListContent from "../basic components/ListContent";
import ButtonCJ from "../basic components/ButtonCJ";
import Stats from "../basic components/Stats";

import testImage from "@/public/images/content-image-01.jpg";
import {
  ListContentProps,
  RowData,
  SocialMediaLinks,
  StatProps,
} from "@/app/interfaces";
import { rowDataExample } from "@/app/fake data/fakeProgrammes";

function TableRow({ repository }: RowData) {
  const data = { news: ["name one", "name two"] };
  const socialMediaData: SocialMediaLinks = {
    instagram: {
      url: "https://instagram.com/yourprofile",
      name: "Instagram",
    },
    youtube: {
      url: "https://youtube.com/yourchannel",
      name: "YouTube",
    },
  };
  return (
    <div className="border-b-[1px]">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className=" w-full">
              <div className="min-w-full grid grid-cols-5 md:gap-9 md:grid md:grid-cols-5 border-gray-300">
                <div
                  className={`col-span-4 py-3 text-left md:col-span-1 ${
                    open ? "opacity-100" : "opacity-100"
                  }`}
                >
                  <h2 className="costa font-bold text-2xl uppercase">
                    {repository.top.name}
                  </h2>
                </div>

                <div
                  className={`hidden py-3 align-middle text-left md:block md:col-span-1 md:align-middle ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="sans-serif font-normal">
                    {repository.top.mission}
                  </div>
                </div>

                <div
                  className={`hidden align-middle items-center py-3 text-left md:block md:col-span-1 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="text-sm sans-serif font-normal">
                    {repository.top.year}
                  </div>
                </div>

                <div
                  className={`hidden items-center py-3 text-left md:block ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="text-sm">
                    {repository.top.partners.join(", ")}
                  </div>
                </div>

                <div className="flex justify-end items-center py-3 text-right">
                  <div
                    className={
                      open ? "rotate-45 transform text-3xl" : "text-3xl"
                    }
                  >
                    +
                  </div>
                </div>
              </div>
            </Disclosure.Button>

            <Disclosure.Panel className="mb-4">
              <div className="grid lg:grid-cols-2 lg:gap-16">
                <div>
                  <div><Image className=" object-fit w-24" width={400} height={400} src={repository.content.logo?.url || ''} alt="" /></div> 
                  <div className="pb-6">
                    <div
                      className="sans-serif lg:text-3xl leading font-normal"
                      dangerouslySetInnerHTML={{
                        __html: repository.content.fullDescription,
                      }}
                    ></div>
                  </div>

                  <div className="pb-6">
                    <SocialMediaList  socialMediaLinks={repository.content.socialMediaLinks} />
                  </div>
                  <div className="pb-6">
                    <ButtonCJ href={"#"} text={"Discover"} styleType="primary"></ButtonCJ>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-y-4">
                  <div>
                    <div className="grid grid-cols-2 py-4 lg:grid-cols-2">
                      <div className="grid col-span-1 gap-y-4">
                        <div>
                          <ListSmall
                            data={repository.content.research?.data || {}}
                          />
                        </div>
                        <div>
                          <ListSmall
                            data={repository.content["key partners"]?.data}
                          />
                        </div>
                        <div>
                          <ListSmall
                            data={repository.content.headquarters?.data || {}}
                          />
                        </div>
                      </div>
                      <div className="grid col-span-1 gap-y-4">
                        <div>
                          <ListSmall
                            data={repository.content.leadership?.data}
                          />
                        </div>
                        <div>
                          <ListSmall
                            data={repository.content.established?.data || {}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mono font-bold text-base uppercase pb-1">
                      impact
                    </div>
                    <div className="grid grid-cols-2 gap-3 gap-y-9">
                      {repository.content.stats.map((stat: StatProps) => (
                        <Stats
                          key={stat.title}
                          title={stat.title}
                          content={stat.content}
                        />
                      ))}
                    </div>
                  </div>

                  {/* <div>
                    <div className="py-2"></div>
                    <div className="text-base font-bold uppercase mono">news</div>
                    <div className="block">
                      {repository.content.listContent.map(
                        (content: ListContentProps) => (
                          <ListContent
                            key={content.title}
                            title={content.title}
                            source={content.source}
                            date={content.date}
                          />
                        ),
                      )}
                    </div>
                  </div> */}
                  <div className="py-2"></div>
                  <div className="">
                    <div className="mono font-bold text-base uppercase pb-1">
                      features
                    </div>
                    <div className=" grid grid-cols-3 pb-6">
                      {repository.content.features.map((feature, index) => (
                        <CardSquaredImage
                          key={index}
                          imageUrl={feature.image.imageUrl}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default function TestTableCJ({ rowData = rowDataExample }) {
  return (
    <div className="overflow-x-auto">
      <div className="text-small grid grid-cols-5 min-w-full gap-9 border-y-[1px]">
        {/* Header */}
        <div className="py-2 align-middle text-left mono text-xs font-medium uppercase md:block">
          Name
        </div>
        <div className="hidden py-2 align-middle text-left mono text-xs font-medium uppercase md:block">
          Mission
        </div>
        <div className="hidden py-2 align-middle text-left mono text-xs font-medium uppercase md:block">
          Established
        </div>
        <div className="hidden py-2 align-middle text-left mono text-xs font-medium uppercase md:block">
          Key Partners
        </div>
        <div className="hidden py-2 align-middle text-left mono text-xs font-medium uppercase md:block"></div>
      </div>
      {/* Row */}
      {rowData.map((data, index) => (
        <TableRow key={index} repository={data.repository} />
      ))}
    </div>
  );
}
