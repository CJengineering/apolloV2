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
import { cardGaza, cardJameelInstitute, cardMITJameelClinic, imageMosaicJameelInstitute, imageMosaicMITJameelClinic, newsJameelInstitute, newsMITJameelClinic, statsGaza, statsJameelInstitute, statsMITJameelClinic, ImageLightbox, statsMITJWAFS, cardMITJWAFS, newsMITJWAFS, imageMosaicGazaProgramme, imageMosaicMITAbdulLatifWaterFood, statsJameelIndex, cardJameelIndex} from "@/app/data/annualreport2024";
import SectionHomeCard from "@/components/components V2/home/section-home-card";
import SectionDivider from "@/components/components V2/generic/section-divider";
import HomeCard from "@/components/CJ-components/components-CJ/basic components/HomeCard";
import ReportCard from "@/components/CJ-components/components-CJ/basic components/ReportCard";
import PostAccordion from "@/components/mdx/accordion";
import CarousselForComponents from "@/components/CJ-components/components-CJ/basic components/CarousselForComponents";
import Stats from "@/components/CJ-components/components-CJ/basic components/Stats";
import PressCardHome from "@/components/CJ-components/components-CJ/test components/PressCardHome";
import { NewsForReport } from "@/app/interfaces";
import ContentPhotos from "@/components/CJ-components/components-CJ/test components/content-photos";
import { url } from "inspector";
import photoNotFromCollectionMapper from "@/functions/transformers/photoNOTcollectionToLIghtBox";
import ResponsiveYouTubeEmbed from "@/components/custom beta components/ResponsiveYouTubeEmbed";
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

export default async function AnnualReport2024Page({
  params,
}: {
  params: { slug: string; locale: string };
}) {

const imageMosaicJI: ImageLightbox[] = imageMosaicJameelInstitute.map(photoNotFromCollectionMapper);
const imageMosaicGaza: ImageLightbox[] = imageMosaicGazaProgramme.map(photoNotFromCollectionMapper);
const imageMosaicMITJC: ImageLightbox[] = imageMosaicMITJameelClinic.map(photoNotFromCollectionMapper);
const imageMosaicMITJWAFS: ImageLightbox[] = imageMosaicMITAbdulLatifWaterFood.map(photoNotFromCollectionMapper);

  return (
    <>
      <div className="pt-20 lg:pt-10 lg:mb-12">
        <div className="flex flex-col text-left">
          <div className="">
          <div className="pb-12">
          <div className="w-full pb-6">
            <h1 className="header-article">Annual Report 2024</h1>
          </div>
          <div className="w-full">
            <div className="prose prose-xl leading-normal dark:prose-dark">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet velit eu ante sagittis convallis. Nulla vel pharetra ipsum. Pellentesque cursus, nibh a blandit volutpat, nisl nibh tempus purus, viverra tincidunt ligula sapien a arcu. Proin rhoncus urna eu auctor hendrerit. Nulla facilisis ex ligula, ut gravida velit faucibus eu. Fusce tempus pretium turpis, non posuere felis malesuada et. Nulla varius neque sit amet blandit iaculis.
              </p>
              <p>
              Nullam sed volutpat mauris. Nullam vel lorem id neque scelerisque viverra. Phasellus ut nisi quis arcu mattis sollicitudin a vel mauris. Integer posuere varius mauris. Quisque consequat scelerisque tortor, quis pulvinar nisi tempor in. Donec at felis nisi. Pellentesque hendrerit odio at purus vehicula volutpat.
              </p>
            </div>
            </div>
            </div>

            <div className="flex justify-center ">
        <div className="w-full">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
      </div>

{/* ////////////////////GAZA START//////////////////////////// */}

<PostAccordion title={"Gaza Mothers & Children Fund"}> 
            <div>
             <div className="mt-6">
              <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Impact</h3> */}
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {statsGaza.map((value, index) => (
          <Stats key={index} title={value.title} content={value.content} />
        ))}
        </div>
        </div>
                <div className="mt-6">
                <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Features</h3> */}
              </div>
              <div><ResponsiveYouTubeEmbed embedId="Aq2pvQWUeWA?si=QRMDUXpfepqOcn-N"></ResponsiveYouTubeEmbed></div>
            <div className="">
              <CarousselForComponents>
              {cardGaza.map((card, index) => (
                  <ReportCard
                  key={index}
                  imageUrl={card.imageUrl}
                  alt={card.alt}
                  title={card.title}
                  subtitle={card.subtitle}
                  link={card.link}
                  openInNewTab={card.openInNewTab}
                  clickAction={card.clickAction || ""}
                  isWithSubtitle date={""}                    />
                  ))}
              </CarousselForComponents>
            </div>
            <div className="w-full pt-12">
        {newsJameelInstitute.map((value, index) => (
          <PressCardHome key={index} content={value} locale="en"/>
        ))}
      </div>
      <div className="w-full mx-auto pt-12">
                  <ContentPhotos images={imageMosaicGaza} />
          </div>
            </div>
            </div>
            </PostAccordion>

{/* ////////////////////GAZA END//////////////////////////// */}      

{/* ////////////////////JAMEEL INSTITUTE START//////////////////////////// */}

            <PostAccordion title={"Jameel Institute"}> 
            <div>
             <div className="mt-6">
              <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Impact</h3> */}
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {statsJameelInstitute.map((value, index) => (
          <Stats key={index} title={value.title} content={value.content} />
        ))}
        </div>
        </div>
                <div className="mt-6">
                <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Features</h3> */}
              </div>
            <div className="">
              <CarousselForComponents>
              {cardJameelInstitute.map((card, index) => (
                  <ReportCard
                  key={index}
                  imageUrl={card.imageUrl}
                  alt={card.alt}
                  title={card.title}
                  subtitle={card.subtitle}
                  link={card.link}
                  openInNewTab={card.openInNewTab}
                  clickAction={card.clickAction || ""}
                  isWithSubtitle date={""}                    />
                  ))}
              </CarousselForComponents>
            </div>
            <div className="w-full pt-6">
        {newsJameelInstitute.map((value, index) => (
          <PressCardHome key={index} content={value} locale="en"/>
        ))}
      </div>
      <div className="w-full mx-auto py-6">
                  <ContentPhotos images={imageMosaicJI} />
          </div>
            </div>
            </div>
            </PostAccordion>

{/* ////////////////////JAMEEL INSTITUTE END//////////////////////////// */}

{/* ////////////////////MIT JAMEEL CLINIT START//////////////////////////// */}

<PostAccordion title={"MIT Jameel Clinic"}> 
            <div>
             <div className="mt-6">
              <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Impact</h3> */}
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {statsMITJameelClinic.map((value, index) => (
          <Stats key={index} title={value.title} content={value.content} />
        ))}
        </div>
        </div>
                <div className="mt-6">
                <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Features</h3> */}
              </div>
            <div className="">
              <CarousselForComponents>
              {cardMITJameelClinic.map((card, index) => (
                  <ReportCard
                  key={index}
                  imageUrl={card.imageUrl}
                  alt={card.alt}
                  title={card.title}
                  subtitle={card.subtitle}
                  link={card.link}
                  openInNewTab={card.openInNewTab}
                  clickAction={card.clickAction || ""}
                  isWithSubtitle date={""}                    />
                  ))}
              </CarousselForComponents>
            </div>
            <div className="w-full pt-6">
              
        {newsMITJameelClinic.map((value, index) => (
          <div className="py-3"><PressCardHome key={index} content={value} locale="en"/></div>
        ))}
        
      </div>
                 <div className="py-6"><ContentPhotos images={imageMosaicMITJC} /></div>
          </div>
            </div>
            </PostAccordion>
            
{/* ////////////////////MIT JAMEEL CLINIC END//////////////////////////// */}

{/* ////////////////////MIT J-WAFS START//////////////////////////// */}

<PostAccordion title={"MIT Abdul Latif Jameel Water & Food Systems Lab"}> 
            <div>
             <div className="mt-6">
              <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Impact</h3> */}
              </div>
              
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {statsMITJWAFS.map((value, index) => (
          <Stats key={index} title={value.title} content={value.content} />
        ))}
        </div>
        </div>
                <div className="mt-6">
                <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Features</h3> */}
              </div>
            <div className="">
              <CarousselForComponents>
              {cardMITJWAFS.map((card, index) => (
                  <ReportCard
                  key={index}
                  imageUrl={card.imageUrl}
                  alt={card.alt}
                  title={card.title}
                  subtitle={card.subtitle}
                  link={card.link}
                  openInNewTab={card.openInNewTab}
                  clickAction={card.clickAction || ""}
                  isWithSubtitle date={""}                    />
                  ))}
              </CarousselForComponents>
            </div>
            <div className="w-full pt-6">
              
        {newsMITJWAFS.map((value, index) => (
          <div className="py-3"><PressCardHome key={index} content={value} locale="en"/></div>
        ))}
        
      </div>
                 <div className="py-6"><ContentPhotos images={imageMosaicMITJWAFS} /></div>
          </div>
            </div>
            </PostAccordion>
            
{/* ////////////////////MIT J-WAFS END//////////////////////////// */}

{/* ////////////////////JAMEEL INDEX START//////////////////////////// */}

<PostAccordion title={"MIT Jameel Index"}> 
            <div>
             <div className="mt-6">
              <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Impact</h3> */}
              </div>
              <div><ResponsiveYouTubeEmbed embedId="i9ckXhjsbQs?si=s8wmIi0rodBpKBuj"></ResponsiveYouTubeEmbed></div>

        </div>
                <div className="mt-6">
                <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Features</h3> */}
              </div>
            <div className="">
              <CarousselForComponents>
              {cardJameelIndex.map((card, index) => (
                  <ReportCard
                  key={index}
                  imageUrl={card.imageUrl}
                  alt={card.alt}
                  title={card.title}
                  subtitle={card.subtitle}
                  link={card.link}
                  openInNewTab={card.openInNewTab}
                  clickAction={card.clickAction || ""}
                  isWithSubtitle date={""}                    />
                  ))}
              </CarousselForComponents>
            </div>
          </div>
            </div>
            </PostAccordion>
            
{/* ////////////////////JAMEEL INDEX END//////////////////////////// */}
</div>
          </div>
        </div>

    </>
  );
}
