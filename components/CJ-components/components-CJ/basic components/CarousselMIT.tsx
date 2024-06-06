'use client'

import React, { useRef } from 'react'
interface PropsCarousselMIT {
  content: React.ReactNode[]
  width?: string
  widthMobile:string
}

const CarouselMIT: React.FC<PropsCarousselMIT> = ({
  content,
  width,
  widthMobile
}: PropsCarousselMIT) => {
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
    <div className="custom-scrollbar w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="scrollbar-hide flex space-x-4 overflow-x-scroll"
      >
        {content.map((content, index) => (
          <div key={index} className="  bg-red-100 ">
            <div  className={`w-[${widthMobile}px] md:w-[${width}px]`}>{content}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={scrollLeft}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          &#10094;
        </button>
        <button
          onClick={scrollRight}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          &#10095;
        </button>
      </div>
    </div>
  )
}

export default CarouselMIT
