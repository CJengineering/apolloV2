import React from 'react'

export default function HeroSkeleton() {
  return (
    <section className="relative bg-gray-300 py-16 sm:py-24 lg:py-36 animate-pulse">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gray-400">
        <div className="h-full w-full bg-gray-400"></div>
        <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true"></div>
    
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-xl px-5 sm:px-12 md:max-w-3xl lg:max-w-screen-xl lg:px-8">
        <div className="flex w-full items-center justify-between">
          <div className="max-w-xl">
            <div className="mt-3 h-8 bg-gray-400 sm:mt-4 sm:h-10 lg:h-12"></div>
            <div className="mt-2 h-4 bg-gray-400 w-1/3"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
