'use client'

import React, { useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

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
    <div className="relative w-full md:bg-transparent ">
      {/* Arrows Container: Positioned at the top center */}
      <div className="top-0 left-0 right-0 z-10 flex justify-end space-x-4 mt-4">
        <button
          onClick={scrollLeft}
          className="rounded-full p-2 text-gray-500"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={scrollRight}
          className="rounded-full p-2 text-gray-500"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      <div
        ref={carouselRef}
        className="carousel flex carousel-center bg-neutral custom-scrollbar gap-4 overflow-x-auto max-w-[340px] md:max-w-[960px] lg:max-w-[900px] xl:max-w-[1030px] 2xl:max-w-[1313px] "
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="2xl:min-w-[350px] xl:min-w-[350px] lg:min-w-[300px] md:min-w-[250px] min-w-[300px]"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarouselForComponent
