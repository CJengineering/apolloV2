import React from "react";
import image from "@/public/images/mapCJ.webp";
import whiteLogo from "@/public/images/CJ_LOGO_SUBTITLE_ENGLISH_WHITE_PNG.png";
import Image from "next/image";

const HeaderBeta = () => {
  return (
    <header>
      {/* Image */}
      <div className=" relative aspect-h-2 aspect-w-3 w-full sm:aspect-h-1">
        <Image
          src={image}
          alt="Post Header"
          className="object-cover object-center"
        />
        <Image
          src={whiteLogo}
          alt="Post Header"
          className="absolute bottom-3 right-4 w-1/2 sm:w-1/3"
        />
      </div>

      {/* Post Header Content */}
      <div className=" lg:px-0">
        {/* Article Information */}
        <div className="mx-auto max-w-full border-b border-gray-300/70 pb-8 pt-10 text-lg sm:pt-16">
          <h2 className="mt-3.5 text-4xl font-medium tracking-normal costa text-gray-900 decoration-red-300 decoration-3 transition duration-300 ease-in-out group-hover:underline sm:mt-5 sm:text-5xl sm:leading-tight md:tracking-tight lg:text-6xl">
            Advancing science and learning for communities to thrive
          </h2>

          <div></div>

          {/* Author meta */}
        </div>
      </div>
    </header>
  );
};

export default HeaderBeta;
