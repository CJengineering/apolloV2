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

function TableRow({ repository }: RowData) {
  const dataChecks = [
    repository.content.research?.data,
    repository.content.established?.data,
    repository.content.headquarters?.data,
    repository.content["key partners"]?.data,
    repository.content.leadership?.data,
  ];
  return (
    <div className=" border-b-[1px]">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full  hover:bg-slate-100 dark:hover:bg-slate-800">
              <div className="min-w-full items-center grid grid-cols-12 md:gap-9  md:grid md:grid-cols-12 border-gray-300">
                <div
                  className={`py-3 text-left col-span-11 md:col-span-5 ${
                    open ? "opacity-100" : "opacity-100"
                  }`}
                >
                  <h2 className="mono  align-middle font-bold text-xl md:text-2xl uppercase pl-2">
                    {repository.top.name}
                  </h2>
                </div>

                <div
                  className={`hidden py-3 align-middle  col-span-3 text-left md:block md:col-span-3 md:align-middle ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="text-sm sans-serif font-normal leading-5">
                    {repository.top.mission}
                  </div>
                </div>

                <div
                  className={`hidden py-3 items-center md:col-span-1 text-left md:block ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="text-sm sans-serif font-normal leading-5">
                    {repository.top.year}
                  </div>
                </div>

                <div
                  className={`hidden items-center py-3 md:col-span-2 text-left md:block ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="text-sm sans-serif font-normal leading-5">
                    {repository.top.partners.join(", ")}
                  </div>
                </div>

                <div className="flex justify-end col-span-1 items-center py-3 text-right pr-2">
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
              <div className="grid px-2  md:grid-cols-2 md:gap-16">
                <div>
                  <div>
                    {repository.content.logo?.url && (
                      <Image
                        className="dark:hidden object-fit w-64 py-9 "
                        width={400}
                        height={300}
                        src={repository.content.logo?.url || ""}
                        alt=""
                      />
                    )}
                  </div>
                  <div>
                    <Image
                      className="dark:block hidden object-fit w-64 "
                      width={400}
                      height={300}
                      src={repository.content.logoDark?.url || ""}
                      alt=""
                    />
                  </div>
                  <div className="mt-6">
                    <div
                      className="sans-serif text-xl md:w-11/12 md:text-3xl leading font-normal"
                      dangerouslySetInnerHTML={{
                        __html: repository.content.fullDescription,
                      }}
                    ></div>
                  </div>

                  <div className="py-6"></div>

                  <div className="grid grid-cols-2 py-4">
                    <div className="flex items-center">
                      <div>
                        <SocialMediaList
                          socialMediaLinks={repository.content.socialMediaLinks}
                        />
                      </div>
                      <div className="ml-3">
                        {repository.content.button.href && (
                          <ButtonCJ
                            href={repository.content.button.href}
                            text={repository.content.button.text}
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
                      {dataChecks.map(
                        (data, index) =>
                          data &&
                          Object.keys(data).length > 0 &&
                          data[Object.keys(data)[0]].length > 0 &&
                          data[Object.keys(data)[0]][0] !== "" && (
                            <div key={index}>
                              <ListSmall data={data} />
                            </div>
                          )
                      )}
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

                  <div className="">
                    {repository.content.features.length > 0 && (
                      <>
                        <h2>features</h2>
                        <div className="pt-4 pb-8 grid grid-cols-3 gap-3">
                          {repository.content.features.map((feature, index) => (
                            <CardSquaredImage
                              key={index}
                              imageUrl={feature.image.imageUrl}
                            />
                          ))}
                        </div>
                      </>
                    )}
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
interface TableCJProps {
  rowData: RowData[];
}
export default function TableCJ({ rowData }: TableCJProps) {
  return (
    <div className="">
      <div className="text-small grid grid-cols-12 gap-9 border-y-[1px]">
        {/* Header */}
        <div className="py-2 col-span-5 align-middle text-left mono text-xs font-medium uppercase md:block">
          Name
        </div>
        <div className="hidden col-span-3 py-2 align-middle text-left mono text-xs font-medium uppercase md:block">
          Mission
        </div>
        <div className="hidden col-span-1 py-2 align-middle text-left mono text-xs font-medium uppercase md:block">
          Established
        </div>
        <div className="hidden col-span-2 py-2 align-middle text-left mono text-xs font-medium uppercase md:block">
          Key Partners
        </div>
        <div className="hidden  col-span-1 py-2 align-middle text-left mono text-xs font-medium uppercase md:block"></div>
      </div>
      {/* Row */}
      {rowData.map((data, index) => (
        <TableRow key={index} repository={data.repository} />
      ))}
    </div>
  );
}
