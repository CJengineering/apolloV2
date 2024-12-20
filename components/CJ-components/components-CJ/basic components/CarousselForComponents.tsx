 "use client";


import React, { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface CarouselProps {
  children: React.ReactNode[];
}

const CarouselForComponent = ({ children }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carousselKidRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    // Set screen width only on the client
    const handleResize = () => setScreenWidth(window.innerWidth - 30);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current && carousselKidRef.current) { 
      console.log("scrolling left the carousel ofsetWidth", carouselRef.current.offsetWidth,'this is kid ref',carousselKidRef.current?.offsetWidth,'scren width',screenWidth);
      carouselRef.current.scrollBy({
        left: -carousselKidRef.current?.offsetWidth+3,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if ( carouselRef.current&& carousselKidRef.current) {
      console.log("scrolling right the carousel ofsetWidth", carouselRef.current.offsetWidth,'this is kid ref',carousselKidRef.current?.offsetWidth,'scren width',screenWidth);
      carouselRef.current.scrollBy({
        left: carousselKidRef.current?.offsetWidth+3,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full md:bg-transparent ">
      {/* Arrows Container: Positioned at the top center */}
      <div className="top-0 left-0 right-0 z-10 flex justify-end space-x-4 mt-4">
        <button onClick={scrollLeft} className="rounded-full p-2 text-gray-500">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={scrollRight}
          className="rounded-full p-2 text-gray-500"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
      <div className=" ">
        <div
          ref={carouselRef}
          className={`carousel mx-a flex carousel-center bg-neutral custom-scrollbar gap-4 overflow-x-auto   md:max-w-[960px] lg:max-w-[900px] xl:max-w-[1030px] 2xl:max-w-[1313px]`}
          style={{
            maxWidth: screenWidth && screenWidth<= 768 ? `${screenWidth}px` : undefined, // Apply only on mobile
          }} >
          {children.map((child, index) => (
            <div
            ref={carousselKidRef}
              key={index}
              className="2xl:min-w-[350px] xl:min-w-[350px] lg:min-w-[300px] md:min-w-[250px] min-w-[250px]"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselForComponent;
