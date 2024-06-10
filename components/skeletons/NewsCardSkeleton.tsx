import React from "react";

export default function NewsCardSkeleton() {
  return (
    <article className="relative animate-pulse">
      <div
        className="relative z-10 block overflow-hidden bg-gray-100"
        style={{ paddingBottom: "56.25%", position: "relative" }}
      >
        <div className="absolute inset-0 bg-gray-300"></div>
      </div>

      <div className="mt-6 md:align-middle">
        <div className="h-4 bg-gray-300 w-1/4 mt-2"></div>
        <div className="h-8 bg-gray-300 w-3/4 mt-3"></div>

        <div className="mt-4 flex items-center sm:mt-8">
          <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="ml-3">
            <div className="h-4 bg-gray-300 w-1/2"></div>
            <div className="h-4 bg-gray-300 w-1/4 mt-1"></div>
          </div>
        </div>
      </div>
    </article>
  );
}
