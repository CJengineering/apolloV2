'use client'

import React, { useRef } from 'react'

interface CarouselProps {
  images: string[]
}

const Carousel = ({ images }: CarouselProps) => {
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
    <div className="relative mx-auto max-w-md">
      <div
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 transform"
        style={{ left: '-2rem' }}
      >
        <button
          onClick={scrollLeft}
          className="rounded-full bg-gray-700 p-2 text-white"
        >
          &#10094;
        </button>
      </div>
      <div className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform">
        <button
          onClick={scrollRight}
          className="rounded-full bg-gray-700 p-2 text-white"
        >
          &#10095;
        </button>
      </div>
      <div
        ref={carouselRef}
        className="carouselDaisy carousel-center bg-neutral rounded-box  custom-scrollbar space-x-4 overflow-x-auto p-4"
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item flex-shrink-0">
            <img
              src={image}
              className="rounded-box"
              alt={`Carousel item ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
