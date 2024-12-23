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
import { cardGaza, cardJameelInstitute, cardMITJameelClinic, imageMosaicJameelInstitute, imageMosaicMITJameelClinic, newsJameelInstitute, newsMITJameelClinic, statsGaza, statsJameelInstitute, statsMITJameelClinic, statsMITJWAFS, cardMITJWAFS, newsMITJWAFS, imageMosaicGazaProgramme, imageMosaicMITAbdulLatifWaterFood, statsJameelIndex, cardJameelIndex, statsJameelObservatoryForFoodSecurityEarlyAction, cardJameelObservatoryForFoodSecurityEarlyAction, statsJameelObservatoryCREWSnet, cardJameelObservatoryCREWNSnet, newsJameelObservatoryCREWNSnet, statsCLIMAVORExJameelAtRCA, cardCLIMAVORExJameelAtRCA, newsCLIMAVORExJameelAtRCA, imageMosaicJameelObservatoryForFoodSecurityEarlyAction, imageMosaicCLIMAVORExJameelAtRCA, statsJPAL, cardJPAL, newsJPAL, cardJPALAWL, statsJPALAWL, newsJPALAWL, imageMosaicJPALAWL, newsC40, cardC40, statsC40, statsAnkur, cardAnkur, imageMosaicAnkur, imageMosaicC40, newsGaza, statsPrathamJameel, cardPrathamJameel, imageMosaicPrathamJameel, statsJameeToyotaScholarship, cardJameelToyotaScholarship, imageMosaicJameelToyotaScholarship, imageMosaicEjada, cardEjada, statsEjada, cardJameelArtsAndHealth, statsJameelArtsAndHealth, newsJameelArtsAndHealth, imageMosaicJameelArtsAndHealth, statsJameelHouses, cardJameelHouses, imageMosaicJameelHouses, newsJameelHouses, statsAtelierJameel, cardAtelierJameel, imageMosaicAtelierJameel, cardBoecelliJameel, statsBocelliJameel, imageMosaicBocelliJameel, imageMosaicJPAL} from "@/app/data/annualreport2024";
import SectionHomeCard from "@/components/components V2/home/section-home-card";
import SectionDivider from "@/components/components V2/generic/section-divider";
import HomeCard from "@/components/CJ-components/components-CJ/basic components/HomeCard";
import ReportCard from "@/components/CJ-components/components-CJ/basic components/ReportCard";
import PostAccordion from "@/components/mdx/accordion";
import CarousselForComponents from "@/components/CJ-components/components-CJ/basic components/CarousselForComponents";
import Stats from "@/components/CJ-components/components-CJ/basic components/Stats";
import PressCardHome from "@/components/CJ-components/components-CJ/test components/PressCardHome";
import { ImageLightbox, NewsForReport } from "@/app/interfaces";
import ContentPhotos from "@/components/CJ-components/components-CJ/test components/content-photos";
import { url } from "inspector";
import photoNotFromCollectionMapper from "@/functions/transformers/photoNOTcollectionToLIghtBox";
import ResponsiveYouTubeEmbed from "@/components/custom beta components/ResponsiveYouTubeEmbed";
export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "Community Jameel | A look back at 2024",
  description:
    "Community Jameel's work in 2024, from emergency humanitarian relief to climate action, water and food systems, disease modelling, AI and health, learning, traditional arts and arts and health.",
  ogType: "website",
  ogImage:
    "https://cdn.prod.website-files.com/612cdb8a4fac760705621df5/67657e024b52c1e8ca648a2e_END_OF_YEAR_2024_OG.webp",
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "Community", "A year in review 2024", "2024"],
});

export default async function AnnualReport2024Page({
  params,
}: {
  params: { slug: string; locale: string };
}) {

  // const imagesGaza: ImageLightbox[] = imageMosaicGazaProgramme.map(photoNotFromCollectionMapper);
  // const imagesJI: ImageLightbox[] = imageMosaicJameelInstitute.map(photoNotFromCollectionMapper);
  // const imagesMITJC: ImageLightbox[] = imageMosaicMITJameelClinic.map(photoNotFromCollectionMapper);
  // const imagesMITJWAFS: ImageLightbox[] = imageMosaicMITAbdulLatifWaterFood.map(photoNotFromCollectionMapper);  
  const imagesJOFSEA: ImageLightbox[] = imageMosaicJameelObservatoryForFoodSecurityEarlyAction.map(photoNotFromCollectionMapper);
  // const imagesJOCREWSNET: ImageLightbox[] = imageJameelObservatoryCREWSnet.map(photoNotFromCollectionMapper);
  const imagesCLIMAVORE: ImageLightbox[] = imageMosaicCLIMAVORExJameelAtRCA.map(photoNotFromCollectionMapper);
  const imagesJPAL: ImageLightbox[] = imageMosaicJPAL.map(photoNotFromCollectionMapper);
  const imagesJPALAWL: ImageLightbox[] = imageMosaicJPALAWL.map(photoNotFromCollectionMapper);
  const imagesC40: ImageLightbox[] = imageMosaicC40.map(photoNotFromCollectionMapper);
  const imagesAnkur: ImageLightbox[] = imageMosaicAnkur.map(photoNotFromCollectionMapper);
  const imagesPratham: ImageLightbox[] = imageMosaicPrathamJameel.map(photoNotFromCollectionMapper);
  const imagesJTS: ImageLightbox[] = imageMosaicJameelToyotaScholarship.map(photoNotFromCollectionMapper);
  const imagesEjada: ImageLightbox[] =  imageMosaicEjada.map(photoNotFromCollectionMapper);
  const imagesJAHL: ImageLightbox[] =  imageMosaicJameelArtsAndHealth.map(photoNotFromCollectionMapper);
  const imagesJameelHouses: ImageLightbox[] =  imageMosaicJameelHouses.map(photoNotFromCollectionMapper);
  const imagesAtelierJameel: ImageLightbox[] =  imageMosaicAtelierJameel.map(photoNotFromCollectionMapper);
  const imagesBJS: ImageLightbox[] =  imageMosaicBocelliJameel.map(photoNotFromCollectionMapper);
  


  return (
    <>
      <div className="pt-20 lg:pt-10 lg:mb-12">
        <div className="flex flex-col text-left">
          <div className="">
          <div className="pb-12">
          <div className="w-full pb-6">
            <h1 className="header-article">A look back at 2024</h1>
          </div>
          <div className="pb-12 w-full lg:w-3/4"><ResponsiveYouTubeEmbed embedId="6NYZ4AE4dt8?si=HvcyM_C75vTWbCoK"></ResponsiveYouTubeEmbed></div>
          <div className="w-full">
            <div className="prose prose-xl leading-normal dark:prose-dark">
              <p>
              In 2024, Community Jameel continued to advance its mission across emergency humanitarian relief, climate action, water and food systems, disease modelling, AI and health, learning, traditional arts and arts and health, making significant strides through its global programme and partnerships. The MIT Jameel Clinic led breakthroughs in AI-driven medical research, while collaborations with Imperial College London and Save the Children supported vital emergency responses and healthcare training. The Jameel Observatory-CREWSnet expanded its reach, enhancing resilience to climate shocks in vulnerable regions, and the MIT Jameel Toyota Scholarship marked its 30th year of empowering students worldwide.
              </p>
              <p>
              This year also celebrated the preservation of culture and the transformative power of the arts. The Jameel Houses of Traditional Arts expanded its footprint to Dumfries House in Scotland and Atelier Jameel delivered impactful programmes supporting artisans and craft communities. Meanwhile, the Jameel Arts & Health Lab fostered global dialogue on the intersection of arts and wellbeing, with initiatives ranging from Scotland to Dubai. As 2024 draws to a close, Community Jameel’s commitment to innovation, collaboration, and human flourishing has enriched lives and strengthened communities worldwide, setting the stage for an even more impactful 2025.
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

<PostAccordion title={"Emergency humanitarian relief"}> 
            <div>
             <div className="my-12">
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

      {/* <div className="w-full mx-auto pt-12">
                  <ContentPhotos images={imagesGaza} />
          </div> */}
            </div>
            </div>
            </PostAccordion>

{/* ////////////////////GAZA END//////////////////////////// */}      

{/* ////////////////////JAMEEL INSTITUTE START//////////////////////////// */}

            <PostAccordion title={"Jameel Institute"}> 
            <div>
            <div className="my-12">

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {statsJameelInstitute.map((value, index) => (
                <Stats key={index} title={value.title} content={value.content} />
              ))}
        </div>
        </div>
              <div className="pb-6"><ResponsiveYouTubeEmbed embedId="SWA0DEKRvz8?si=XDsW_ZqpmpnJRs8T"></ResponsiveYouTubeEmbed></div>
                <div className="mt-6">
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
          <div className="py-2"><PressCardHome key={index} content={value} locale="en"/></div>
        ))}
      </div>
      {/* <div className="w-full mx-auto py-6">
                  <ContentPhotos images={imagesJI} />
          </div> */}
            </div>
            </div>
            </PostAccordion>

{/* ////////////////////JAMEEL INSTITUTE END//////////////////////////// */}

{/* ////////////////////MIT JAMEEL CLINIC START//////////////////////////// */}

<PostAccordion title={"MIT Jameel Clinic"}> 
            <div>
            <div className="my-12">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {statsMITJameelClinic.map((value, index) => (
          <Stats key={index} title={value.title} content={value.content} />
        ))}
        </div>
        </div>
        <div className=""><ResponsiveYouTubeEmbed embedId="A7MyaFdk64g?si=yJxEW1EAJmI0F6nh"></ResponsiveYouTubeEmbed></div>
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
                 {/* <div className="py-6"><ContentPhotos images={imagesMITJC} /></div> */}
          </div>
            </div>
            </PostAccordion>
            
{/* ////////////////////MIT JAMEEL CLINIC END//////////////////////////// */}

{/* ////////////////////MIT J-WAFS START//////////////////////////// */}

<PostAccordion title={"MIT Abdul Latif Jameel Water & Food Systems Lab"}> 
            <div>
            <div className="my-12">
              <div className="pb-12"><ResponsiveYouTubeEmbed embedId="M4_cprod9Co?si=j4NzlQCvdKmRtaUu"></ResponsiveYouTubeEmbed></div>

              
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
                 {/* <div className="py-6"><ContentPhotos images={imagesMITJWAFS} /></div> */}
          </div>
            </div>
            </PostAccordion>
            
{/* ////////////////////MIT J-WAFS END//////////////////////////// */}

{/* ////////////////////JAMEEL INDEX START//////////////////////////// */}

<PostAccordion title={"MIT Jameel Index"}> 
            <div>
            <div className="my-12">
              <div><ResponsiveYouTubeEmbed embedId="i9ckXhjsbQs?si=s8wmIi0rodBpKBuj"></ResponsiveYouTubeEmbed></div>

        </div>
                <div className="mt-6">
                <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Features</h3> */}
              </div>
          </div>
          <div className="mb-6"><ButtonCJ href="https://jameelindex.mit.edu" text="Explore the Jameel Index" styleType="primary"></ButtonCJ></div>
            </div>
            </PostAccordion>
            
{/* ////////////////////JAMEEL INDEX END//////////////////////////// */}

{/* ////////////////////JAMEEL OBSERVATORY FOR FOOD SECURITY EARLY ACTION START//////////////////////////// */}

<PostAccordion title={"Jameel Observatory for Food Security Early Action"}> 
            <div>
            <div className="my-12">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {statsJameelObservatoryForFoodSecurityEarlyAction.map((value, index) => (
          <Stats key={index} title={value.title} content={value.content} />
        ))}
        </div>
        </div>
              <div className=""><ResponsiveYouTubeEmbed embedId="NT9QllV96Pw?si=Rp6HCsmxu1mSgdvL"></ResponsiveYouTubeEmbed></div>

                <div className="mt-6">
                <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Features</h3> */}
              </div>
            <div className="">
              <CarousselForComponents>
              {cardJameelObservatoryForFoodSecurityEarlyAction.map((card, index) => (
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
                 <div className="pt-6"><ContentPhotos images={imagesJOFSEA} /></div>
                 <div className="pb-6"><p className="sans-serif">Photos by Nick Danziger</p></div>
          </div>
            </div>
            </PostAccordion>

{/* ////////////////////JAMEEL OBSERVATORY FOR FOOD SECURITY EARLY ACTION END//////////////////////////// */}

{/* ////////////////////JAMEEL OBSERVATORY CREWSnet START//////////////////////////// */}

<PostAccordion title={"Jameel Observatory CREWSnet"}> 
            <div>
             <div className="mt-6">
              <div className="pb-12">
             <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

{statsJameelObservatoryCREWSnet.map((value, index) => (
<Stats key={index} title={value.title} content={value.content} />
))}
</div>
</div>      
<div className=""><ResponsiveYouTubeEmbed embedId="8ZrWM8rbtkA?si=XdU0V5y79PNGSL5C"></ResponsiveYouTubeEmbed></div>


        </div>
                <div className="mt-6">
                <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Features</h3> */}
              </div>
            {/* <div className="">
              <CarousselForComponents>
              {cardJameelObservatoryCREWNSnet.map((card, index) => (
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
            </div> */}
            <div className="w-full pt-6">
              
        {newsJameelObservatoryCREWNSnet.map((value, index) => (
          <div className="py-3"><PressCardHome key={index} content={value} locale="en"/></div>
        ))}
        
      </div>
      {/* <div className="py-6"><ContentPhotos images={imagesJOCREWSNET} /></div> */}
      
      </div>
      </div>
      </PostAccordion>

{/* ////////////////////JAMEEL OBSERVATORY CREWSNET END//////////////////////////// */}

{/* ////////////////////CLIMAVORE x JAMEEL AT RCA//////////////////////////// */}

<PostAccordion title={"CLIMAVORE x Jameel at RCA"}> 
            <div>
             <div className="mt-6">
              <div className="mb-12">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

{statsCLIMAVORExJameelAtRCA.map((value, index) => (
<Stats key={index} title={value.title} content={value.content} />
))}
</div>
</div>
              <div className="pb-6"><ResponsiveYouTubeEmbed embedId="OfRczfzmMoE?si=I9a3EZNfgk6BRMQx"></ResponsiveYouTubeEmbed></div>
              <div className="mb6">

        </div>
        </div>
                <div className="mt-6">
                <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Features</h3> */}
              </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cardCLIMAVORExJameelAtRCA.map((card, index) => (
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
            </div>
            <div className="w-full pt-6">
              
        {newsCLIMAVORExJameelAtRCA.map((value, index) => (
          <div className="py-3"><PressCardHome key={index} content={value} locale="en"/></div>
        ))}

<div className="pt-6"><ContentPhotos images={imagesCLIMAVORE} /></div>
        
      </div>
      
      </div>
      </div>
      </PostAccordion>

{/* ////////////////////CLIMAVORE x JAMEEL AT RCA END//////////////////////////// */}


{/* ////////////////////JPAL START//////////////////////////// */}

<PostAccordion title={"Abdul Latif Jameel Poverty Action Lab (J-PAL)"}> 
            <div>
             <div className="mt-6">
              <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Impact</h3> */}
              </div>
              <div className="pb-12"><ResponsiveYouTubeEmbed embedId="4FLeNSqLxdQ?si=ewIxpbIysSu0SDmr"></ResponsiveYouTubeEmbed></div>

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {statsJPAL.map((value, index) => (
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
              {cardJPAL.map((card, index) => (
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
              
        {newsJPAL.map((value, index) => (
          <div className="py-3"><PressCardHome key={index} content={value} locale="en"/></div>
        ))}
        
      </div>
      <div className="py-6"><ContentPhotos images={imagesJPAL} /></div>
      </div>
      </div>
      </PostAccordion>

{/* ////////////////////J-PAL END//////////////////////////// */}

{/* ////////////////////JPAL AWL START//////////////////////////// */}

<PostAccordion title={"J-PAL Air and Water Labs"}> 
            <div>
             <div className="mt-6">
              <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Impact</h3> */}
              </div>
              <div className="pb-12"><ResponsiveYouTubeEmbed embedId="339UyvRg9hg?si=4VADPL4iGFctHRID"></ResponsiveYouTubeEmbed></div>

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {statsJPALAWL.map((value, index) => (
          <Stats key={index} title={value.title} content={value.content} />
        ))}
        </div>
        </div>
                <div className="mt-6">
                <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Features</h3> */}
              </div>
            <div className="">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cardJPALAWL.map((card, index) => (
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
              </div>
            </div>
            <div className="w-full pt-6">
              
        {newsJPALAWL.map((value, index) => (
          <div className="py-3"><PressCardHome key={index} content={value} locale="en"/></div>
        ))}
        
      </div>
      </div>
      </div>
      </PostAccordion>

{/* ////////////////////JPAL AWL END//////////////////////////// */}

{/* ////////////////////JAMEEL C40 START//////////////////////////// */}

<PostAccordion title={"Jameel C40 Urban Climate Labs"}> 
            <div>
             <div className="mt-6">
              <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Impact</h3> */}
              </div>
              <div className="pb-12"><ResponsiveYouTubeEmbed embedId="MTJlwYOmX8k?si=pieMkK3hunDECKoY"></ResponsiveYouTubeEmbed></div>

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {statsC40.map((value, index) => (
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
              {cardC40.map((card, index) => (
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
              
        {newsC40.map((value, index) => (
          <div className="py-3"><PressCardHome key={index} content={value} locale="en"/></div>
        ))}
        
      </div>
      {/* <div className="py-6"><ContentPhotos images={imagesC40} /></div> */}
      </div>
      </div>
      </PostAccordion>

{/* ////////////////////JAMEEL C40 END//////////////////////////// */}

{/* ////////////////////ANKUR START//////////////////////////// */}

<PostAccordion title={"Ankur"}> 
            <div>
             <div className="mt-6">
              <div className="mb-3">
<div className="pb-12">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

{statsAnkur.map((value, index) => (
<Stats key={index} title={value.title} content={value.content} />
))}
</div>
</div>
              <div className="pb-6"><ResponsiveYouTubeEmbed embedId="XTnup49AZcM?si=029LVnboKT47xe_3"></ResponsiveYouTubeEmbed></div>
              </div>
              

        </div>
                <div className="mt-6">
                <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Features</h3> */}
              </div>
            {/* <div className="">
              <CarousselForComponents>
              {cardAnkur.map((card, index) => (
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
            </div> */}
      <div className="py-6"><ContentPhotos images={imagesAnkur} /></div>
      </div>
      </div>
      </PostAccordion>

{/* ////////////////////ANKUR END//////////////////////////// */}

{/* ////////////////////PRATHAM-JAMEEL START //////////////////////////// */}

<PostAccordion title={"Pratham-Jameel Second Chance"}> 
            <div>
             <div className="mt-6">
              <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Impact</h3> */}
              </div>
              <div className="pb-12"><ResponsiveYouTubeEmbed embedId="Z9On8kB-DJg?si=BSp1P_mYXTmyOAiJY"></ResponsiveYouTubeEmbed></div>
<div className="mb-12">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {statsPrathamJameel.map((value, index) => (
          <Stats key={index} title={value.title} content={value.content} />
        ))}
        </div>
        </div>
        </div>
                <div className="mt-6">
                <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Features</h3> */}
              </div>
            <div className="">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cardPrathamJameel.map((card, index) => (
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
              </div>
            </div>
            <div className="w-full pt-6">
              
        {newsC40.map((value, index) => (
          <div className="py-3"><PressCardHome key={index} content={value} locale="en"/></div>
        ))}
        
      </div>
      <div className="py-6"><ContentPhotos images={imagesPratham} numberColumns="3" /></div>
      </div>
      </div>
      </PostAccordion>

{/* //////////////////// PRATHAM-JAMEEL END //////////////////////////// */}

{/* ////////////////////JAMEEL TOYOTA SCHOLARSHIP START //////////////////////////// */}

<PostAccordion title={"MIT Jameel Toyota Scholarship"}> 
            <div>
             <div className="mt-6">
              <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Impact</h3> */}
              </div>
              <div className="pb-12"><ResponsiveYouTubeEmbed embedId="QfwB8A75cqU?si=F6JKAm3wdEHNrQEE"></ResponsiveYouTubeEmbed></div>

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {statsJameeToyotaScholarship.map((value, index) => (
          <Stats key={index} title={value.title} content={value.content} />
        ))}
        </div>
        </div>
                <div className="mt-6">
                <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Features</h3> */}
              </div>
            <div className="">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cardJameelToyotaScholarship.map((card, index) => (
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
              </div>
            </div>

      <div className="py-6"><ContentPhotos images={imagesJTS} /></div>
      </div>
      </div>
      </PostAccordion>

{/* //////////////////// MIT JAMEEL TOYOTA SCHOLARSHIP END //////////////////////////// */}

{/* ////////////////////EJADA START //////////////////////////// */}

<PostAccordion title={"Ejada"}> 
            <div>
             <div className="mt-6">
             <div className="mb-12">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {statsEjada.map((value, index) => (
          <Stats key={index} title={value.title} content={value.content} />
        ))}
        </div>
        </div>
              <div className=""><ResponsiveYouTubeEmbed embedId="48OzqMQkY9U?si=gRZ1352DZdIxC24K"></ResponsiveYouTubeEmbed></div>
              
        </div>
                <div className="mt-6">
                <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Features</h3> */}
              </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="">
              {cardEjada.map((card, index) => (
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
            </div>
            </div>
      </div>
      </div>
      </PostAccordion>

{/* //////////////////// EJADA END //////////////////////////// */}

{/* ////////////////////JAMEEL ARTS AND HEALTH LAB START//////////////////////////// */}

<PostAccordion title={"Jameel Arts & Health Lab"}> 
            <div>
             <div className="mt-6">
              <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Impact</h3> */}
              </div>
              <div className="pb-12"><ResponsiveYouTubeEmbed embedId="ywDD1Rr3YlE?si=tBDNURYSRRV_r2-o"></ResponsiveYouTubeEmbed></div>

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {statsJameelArtsAndHealth.map((value, index) => (
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
              {cardJameelArtsAndHealth.map((card, index) => (
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
              
        {newsJameelArtsAndHealth.map((value, index) => (
          <div className="py-3"><PressCardHome key={index} content={value} locale="en"/></div>
        ))}
        
      </div>
      <div className="py-6"><ContentPhotos images={imagesJAHL} /></div>
      </div>
      </div>
      </PostAccordion>

{/* ////////////////////JAMEEL ARTS AND HEALTH LAB END//////////////////////////// */}

{/* ////////////////////JAMEEL HOUSES START//////////////////////////// */}

<PostAccordion title={"Jameel Houses of Traditional Arts"}> 
            <div>
             <div className="mt-6">
              <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Impact</h3> */}
              </div>
              <div className="pb-12"><ResponsiveYouTubeEmbed embedId="dn9mZchjKHw?si=qhPvYDOggzetOpj3"></ResponsiveYouTubeEmbed></div>

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">

              {statsJameelHouses.map((value, index) => (
          <Stats key={index} title={value.title} content={value.content} />
        ))}
        </div>
        </div>
                <div className="mt-6">
                <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Features</h3> */}
              </div>
            <div className="">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cardJameelHouses.map((card, index) => (
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
                  </div>
            </div>
            {/* <div className="w-full pt-6">
              
        {newsJameelHouses.map((value, index) => (
          <div className="py-3"><PressCardHome key={index} content={value} locale="en"/></div>
        ))}
        
      </div> */}
      {/* <div className="py-6"><ContentPhotos images={imagesJameelHouses} /></div> */}
      </div>
      </div>
      </PostAccordion>

{/* ////////////////////JAMEEL HOUSES END//////////////////////////// */}

{/* ////////////////////ATELIER JAMEEL START//////////////////////////// */}

<PostAccordion title={"Atelier Jameel"}> 
            <div>
             <div className="mt-6">
              <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Impact</h3> */}
              </div>
              
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">

              {statsAtelierJameel.map((value, index) => (
          <Stats key={index} title={value.title} content={value.content} />
        ))}
        </div>
        <div className="pb-6"><ResponsiveYouTubeEmbed embedId="JLzaKJyffjI?si=SQmQVE8SDwBQCxNt"></ResponsiveYouTubeEmbed></div>

        </div>
                <div className="mt-6">
            <div className="pb-12">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cardAtelierJameel.map((card, index) => (
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
                  </div>
            </div>
            {/* <div className="w-full pt-6">
              
        {newsJameelHouses.map((value, index) => (
          <div className="py-3"><PressCardHome key={index} content={value} locale="en"/></div>
        ))}
        
      </div> */}
      <div className="py-6"><ContentPhotos images={imagesAtelierJameel} /></div>
      </div>
      </div>
      </PostAccordion>

{/* ////////////////////ATELIER JAMEEL END//////////////////////////// */}

{/* ////////////////////BOCELLI JAMEEL SCHOLARSHIP END//////////////////////////// */}

<PostAccordion title={"Bocelli Jameel Scholarship at RCM"}> 
            <div>
             <div className="mt-6">
              <div className="mb-3">
                {/* <h3 className="text-2xl sans-serif">Impact</h3> */}
              </div>
              <div className="pb-12"><ResponsiveYouTubeEmbed embedId="KCMG2btSzJI?si=cHeTH6dby5zEWZMd"></ResponsiveYouTubeEmbed></div>

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {statsBocelliJameel.map((value, index) => (
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
              {cardBoecelliJameel.map((card, index) => (
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
              
        {newsJameelArtsAndHealth.map((value, index) => (
          <div className="py-3"><PressCardHome key={index} content={value} locale="en"/></div>
        ))}
        
      </div>
      <div className="py-6"><ContentPhotos images={imagesBJS} /></div>
      </div>
      </div>
      </PostAccordion>

{/* ////////////////////BOCELLI JAMEEL SCHOLARSHIP END//////////////////////////// */}

</div>
          </div>
        </div>

    </>
  );
}
