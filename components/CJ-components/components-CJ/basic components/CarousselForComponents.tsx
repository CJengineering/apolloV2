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
    <div className="relative mx-auto 2xl:w-[1200px] xl:w-[900px] lg:w-[700px] md:w-[500px] ">
    {/* Left Arrow: Hidden on mobile */}
    <div
      className="absolute left-2 top-1/2 z-10 -translate-y-1/2 transform hidden md:block"
      style={{ left: '-2rem' }}
    >
      <button
        onClick={scrollLeft}
        className="rounded-full bg-gray-700 p-2 text-white"
      >
        &#10094;
      </button>
    </div>

    {/* Right Arrow: Hidden on mobile */}
    <div
      className="absolute top-1/2 z-10 -translate-y-1/2 transform hidden md:block"
      style={{ right: '-2rem' }}
    >
      <button
        onClick={scrollRight}
        className="rounded-full bg-gray-700 p-2 text-white"
      >
        &#10095;
      </button>
    </div>

    <div
      ref={carouselRef}
      className="carousel flex carousel-center bg-neutral rounded-box custom-scrollbar gap-4 overflow-x-auto p-4"
    >
      {children.map((child, index) => (
        <div
          key={index}
          className="2xl:min-w-[400px] xl:min-w-[350px] lg:min-w-[300px] md:min-w-[250px] min-w-[300px] bg-white p-4 rounded shadow-lg"
        >
          {child}
        </div>
      ))}
    </div>
  </div>
  )
}

export default CarouselForComponent
