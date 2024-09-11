'use client'

import React, { useRef } from 'react'

interface CarouselProps {
  children: React.ReactNode[]
}

const CarouselForComponent = ({ children }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: 'smooth',
      })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="relative  2xl:w-full ">
      {/* Arrows Container: Positioned at the top center */}
      <div className="top-0 left-0 right-0 z-10 flex justify-end space-x-4 mt-4">
        <button
          onClick={scrollLeft}
          className="rounded-full  p-2 text-gray-500"
        >
          &#10094;
        </button>
        <button
          onClick={scrollRight}
          className="rounded-full  p-2 text-gray-500"
        >
          &#10095;
        </button>
      </div>

      <div
        ref={carouselRef}
        className="carousel flex carousel-center bg-neutral rounded-box custom-scrollbar gap-4 overflow-x-auto "
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="2xl:min-w-[350px] xl:min-w-[350px] lg:min-w-[300px] md:min-w-[250px] min-w-[300px] bg-white  "
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarouselForComponent
