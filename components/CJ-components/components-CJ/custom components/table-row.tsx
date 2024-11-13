import { ListSmallProps, RowData } from "@/app/interfaces";
import { Disclosure } from "@headlessui/react";
import { TableRowDisclosureButton } from "./table-row-disclosure-button";
import { TableRowLogoLightImage } from "./table-row-logo-light-image";
import { TableRowLogoDarkImage } from "./table-row-logo-dark-image";
import { TableRowFullDescription } from "./table-row-full-description";
import VerticalSpaceDivider from "@/components/components V2/generic/vertical-space-divider";
import { TableRowSocialContent } from "./table-row-social-content";
import { TableRowMetaDataContent } from "./table-row-meta-data-description";
import { TableRowKPI } from "./table-row-kpi";
import FeatureCardTable from "../test components/FeatureCardTable";

interface TableRowProps {
  repository: RowData["repository"];
  locale: string;
}

export function TableRow({ repository, locale }: TableRowProps) {
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
    <div className="border-b-[1px] dark:border-slate-700">
      <Disclosure>
        {({ open }) => (
          <>
            <TableRowDisclosureButton
              top={repository.top}
              isArabic={isArabic}
              open={open}
            ></TableRowDisclosureButton>

            <Disclosure.Panel className="mb-4 ">
              <div className="grid xl:grid-cols-2 xl:gap-16">
                <div className="pl-2">
                  <TableRowLogoLightImage
                    content={repository.content}
                  ></TableRowLogoLightImage>
                  <TableRowLogoDarkImage
                    content={repository.content}
                  ></TableRowLogoDarkImage>

                  <TableRowFullDescription
                    content={repository.content}
                    isArabic={isArabic}
                  ></TableRowFullDescription>

                  <VerticalSpaceDivider padding={3} />

                  <TableRowSocialContent
                    content={repository.content}
                    slug={repository.top.slug}
                  ></TableRowSocialContent>
                </div>

                <div className="">
                  <VerticalSpaceDivider padding={4} />
                  <TableRowMetaDataContent
                    dataChecks={dataChecks}
                  ></TableRowMetaDataContent>
                  <VerticalSpaceDivider padding={4} />
                  <TableRowKPI stats={repository.content.stats}></TableRowKPI>

                  <div className="">
                    {repository.content.features.length > 0 && (
                      <div className="pt-4 pb-8 grid lg:grid-cols-3 gap-3">
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
