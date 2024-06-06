import React from 'react';
import whiteLogo from "@/public/images/CJ_LOGO_SUBTITLE_ENGLISH_WHITE_PNG.png";
import Image from "next/image";
interface HeroBanterProps {
  backgroundImageUrl: string;
  overlayColor: string;
  subTitle: string;
  title: string;
}

const HeroBanter = ({ content }:{content:HeroBanterProps}) => {
  return (
    <section className="relative bg-gray-700/60 bg-cover bg-center py-16 sm:py-24 lg:py-36">
      {/* Image */}
      <div className="absolute inset-0">
        <Image className="h-full w-full object-cover" src={content.backgroundImageUrl} alt="" width={1980} height={1080}/>
        <div className={`absolute inset-0 ${content.overlayColor} mix-blend-multiply`} aria-hidden="true"></div>
        <Image
          src={whiteLogo}
          alt="Post Header"
          
          className="absolute bottom-3 right-4 w-3  sm:w-1/6"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-xl px-5 sm:px-12 md:max-w-3xl lg:max-w-screen-xl lg:px-8">
        <div className="flex w-full items-center justify-between">
          <div className="max-w-xl">
            <h1 className="mt-3 text-3xl costa font-medium tracking-normal text-white sm:mt-4 sm:text-4xl md:tracking-tight lg:text-5xl lg:leading-tight">
              {content.title}
            </h1>
            <p className="text-xs uppercase tracking-widest text-red-300">
              {content.subTitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanter;
