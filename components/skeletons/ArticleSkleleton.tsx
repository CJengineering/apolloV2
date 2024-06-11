import React from 'react'

export default function ArticleSkleleton() {
  return (
    <div className="animate-pulse">
    {/* Hero Image */}
    <div className="relative bg-gray-300 h-64 sm:h-80 md:h-96 lg:h-128">
      <div className="absolute inset-0 bg-gray-400"></div>
    </div>

    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="flex flex-col md:flex-row">
        {/* Main Content */}
        <div className="flex-1 md:pr-8">
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="h-10 bg-gray-300 rounded w-3/4 mb-6"></div>

          {/* Text Content Placeholder */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="w-full md:w-1/4 mt-8 md:mt-0">
          <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
