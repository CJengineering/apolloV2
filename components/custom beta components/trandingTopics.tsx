import React from 'react';
import testImage from "@/public/images/content-image-01.jpg"

const topics = [
  { id: 1, title: 'Technology', imageUrl: '/images/topic-01.jpeg' },
  { id: 2, title: 'Startup', imageUrl: '/images/topic-02.jpeg' },
  { id: 3, title: 'Entertainment', imageUrl: '/images/topic-03.jpeg' },
  { id: 4, title: 'Productivity', imageUrl: '/images/topic-04.jpeg' },
  { id: 5, title: 'Innovation', imageUrl: '/images/topic-05.jpeg' },
  { id: 6, title: 'Science', imageUrl: '/images/topic-06.jpeg' },
];

const TrendingTopics = () => {
  return (
    <section className="w-full bg-gray-50 pb-14 pt-12 sm:py-20 lg:pt-24">
      <div className="mx-auto max-w-xl px-4 sm:max-w-3xl sm:px-6 md:px-8 lg:max-w-screen-2xl">
        {/* Section Header */}
        <h3 className="relative border-b border-gray-300/70 pb-2.5 text-2xl font-medium text-gray-900 before:absolute before:-bottom-px before:left-0 before:h-px before:w-24 before:bg-red-600 before:content-['']">
          Trending topics
        </h3>

        {/* Topics */}
        <div className="relative mt-8 sm:mt-9">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6 lg:gap-4 xl:gap-6">
            {topics.map(topic => (
              <div
                key={topic.id}
                className="group relative z-0 h-40 translate-y-0 transform cursor-pointer overflow-hidden rounded-2xl shadow-md transition duration-300 ease-in-out hover:-translate-y-1"
              >
                <a href="category.html" className="absolute inset-0 z-10 h-full w-full rounded-2xl shadow-md"></a>
                <div
                  className="absolute inset-0 h-full w-full bg-gray-100 bg-cover bg-center bg-no-repeat"
                  style={{ zIndex: -1, backgroundImage: `url(${testImage})` }}
                ></div>
                <div className="absolute inset-x-0 bottom-0 w-full pb-6">
                  <div className="flex w-full justify-center">
                    <span className="inline-flex items-center rounded-md bg-white/90 px-3 py-1 text-sm font-medium text-gray-800 backdrop-blur-lg">
                      {topic.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
