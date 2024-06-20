"use client";
import { RowData, StatProps } from "@/app/interfaces";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import ListSmall from "../basic components/ListSmall";
import CardSquaredImage from "../basic components/CardSquared";
import Stats from "../basic components/Stats";
import SocialMediaList from "../basic components/SocialMediaList";
import ButtonCJ from "../basic components/ButtonCJ";
import React from "react";

export default function TableRowSingle({ repository }: RowData) {
  return (
    <div className=" border-b-[1px]">
      <>
        <div className="grid px-2  md:grid-cols-2 md:gap-16">
          <div>
            <div>
              <Image
                className="dark:hidden object-fit w-64 py-9 "
                width={400}
                height={300}
                src={repository.content.logo?.url || ""}
                alt=""
              />
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
                  <ButtonCJ
                    href={repository.content.button.href}
                    text={repository.content.button.text}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="py-4"></div>
            <div>
              <div className="grid grid-cols-2 gap-x-9 gap-y-6 lg:grid-cols-2">
                <div>
                  <ListSmall data={repository.content.research?.data || {}} />
                </div>
                <div>
                  <ListSmall
                    data={repository.content.established?.data || {}}
                  />
                </div>
                <div>
                  <ListSmall
                    data={repository.content.headquarters?.data || {}}
                  />
                </div>
                <div>
                  <ListSmall data={repository.content["key partners"]?.data} />
                </div>
                <div>
                  <ListSmall data={repository.content.leadership?.data} />
                </div>
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
              <h2>features</h2>
              <div className="pt-4 pb-8 grid grid-cols-3 gap-3">
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
      </>
    </div>
  );
}
