'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import testImage from "@/public/images/content-image-01.jpg"

const articles = [
  {
    category: "Technology",
    title: "Apple to Turn IPhones Into Payment Terminals in Fintech Push",
    description:
      "Apple Inc is introducing a new feature that will allow businesses to accept credit card and digital payments with just a tap on their iPhones, bypassing hardware systems such as Block Inc's Square terminals.",
    image: "/images/featured-article-01.jpeg",
    author: "Mark Jack",
    authorImage: "/images/author-01.jpeg",
    date: "Dec 16 2021",
    readTime: "6 min read",
  },
  // ... Add more articles here
];

const recentArticles = [
  {
    category: "Economic outlook",
    title: "Prepare to Shell Out for Warehouse Space -- If You Can Find It",
    image: "/images/recent-01.jpeg",
    author: "Taylor Adams",
    authorImage: "/images/author-02.jpeg",
    date: "Nov 2, 2020",
  },
  {
    category: "Technology",
    title: "Is Firefox Okay?",
    image: "/images/recent-02.jpeg",
    author: "Matt Burgess",
    authorImage: "/images/author-03.jpeg",
    date: "Feb 2, 2022",
  },
  {
    category: "Science",
    title: "DeepMind has Trained an AI to Control Nuclear Fusion",
    image: "/images/recent-03.jpeg",
    author: "Amit Katwala",
    authorImage: "/images/author-04.jpeg",
    date: "Nov 2, 2020",
  },
  {
    category: "Startup",
    title: "Driving while Baked? Inside the High-Tech Quest to find out",
    image: "/images/recent-04.jpeg",
    author: "Amanda Lewis",
    authorImage: "/images/author-05.jpeg",
    date: "Feb 22, 2022",
  },
  {
    category: "Entertainment",
    title: "Netflix is Making a Bioshock Movie",
    image: "/images/recent-05.jpeg",
    author: "Karina Bell",
    authorImage: "/images/author-06.jpeg",
    date: "Feb 19, 2022",
  },
  {
    category: "Startup",
    title: "Uber will let you see how many one- and five-star ratings you get",
    image: "/images/recent-06.jpeg",
    author: "Veronica Mars",
    authorImage: "/images/author-07.jpeg",
    date: "Feb 22, 2022",
  },
];

const Article = ({ article }: any) => (
    <article className="py-8 flex flex-col xl:flex-row xl:items-stretch">
      <a href="post.html" className="order-2 w-full sm:w-2/5 lg:order-1 lg:w-full xl:w-2/5 flex-shrink-0">
        <div className="group aspect-h-9 aspect-w-16 relative  overflow-hidden rounded-xl">
          <Image
            src={testImage}
            alt={article.title}
            className="rounded-xl object-cover object-center transition duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
      </a>
      <div className="order-1 w-full px-2 sm:mt-0 sm:max-w-sm sm:pl-0 sm:pr-5 lg:order-2 lg:mt-0 xl:ml-5 xl:mt-0 xl:flex-1 flex flex-col justify-center">
        <a href="category.html" className="transition-color text-xs font-medium uppercase tracking-widest text-red-700 duration-300 ease-in-out hover:text-red-600">
          {article.category}
        </a>
        <a href="post.html">
          <h3 className="mt-1 text-sm font-medium leading-normal tracking-normal text-gray-900 decoration-gray-800 decoration-2 transition duration-300 ease-in-out hover:underline">
            {article.title}
          </h3>
        </a>
        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center justify-center">
            <a href="author.html" className="rounded-lg bg-gray-50"></a>
            <div className="text-xs">
              <span className="text-gray-500">By </span>
              <a className="font-medium text-gray-700 hover:underline" href="author.html">
                {article.author}
              </a>
              <span className="text-gray-500 lg:hidden xl:inline-block"> · {article.date}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
  
  const HomePage = () => {
    return (
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-2xl lg:flex lg:max-w-screen-2xl lg:items-start">
          {/* Featured Article */}
          <article className="relative lg:sticky lg:top-8 lg:w-1/2 lg:h-screen">
            <a href="post.html" className="group aspect-h-9 aspect-w-16 relative z-10 block overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={testImage}
                alt={articles[0].title}
                className="rounded-2xl object-cover object-center transition duration-300 group-hover:scale-110"
              />
            </a>
            <div className="mt-6 md:align-middle">
              <a
                href="category.html"
                className="transition-color relative text-sm font-medium uppercase tracking-widest text-red-700 duration-300 ease-in-out hover:text-red-600"
              >
                {articles[0].category}
              </a>
              <a href="post.html" className="group mt-3 block">
                <h2 className="text-3xl font-medium tracking-normal text-gray-900 decoration-gray-800 decoration-3 transition duration-300 ease-in-out group-hover:underline md:tracking-tight lg:text-4xl lg:leading-tight">
                  {articles[0].title}
                </h2>
                <div>
                  <p className="mt-4 text-base leading-loose text-gray-600">
                    {articles[0].description}
                  </p>
                </div>
              </a>
              <div className="mt-4 flex items-center sm:mt-8">
                <a href="author.html" className="h-10 w-10 rounded-xl bg-gray-50">
                  <Image
                    src={testImage}
                    alt={articles[0].author}
                    className="lazy h-full w-full rounded-xl object-cover object-center transition duration-300 ease-in-out"
                  />
                </a>
                <div className="ml-3">
                  <a href="author.html" className="text-sm font-medium text-gray-800 hover:underline">
                    {articles[0].author}
                  </a>
                  <p className="text-sm text-gray-500">
                    <time dateTime="2021-12-16">{articles[0].date}</time>
                    <span aria-hidden="true"> &middot; </span>
                    <span>{articles[0].readTime}</span>
                  </p>
                </div>
              </div>
            </div>
          </article>
  
          {/* Recent Articles */}
          <div className="mt-12 sm:mt-16 lg:ml-12 lg:mt-0 lg:w-1/2 xl:ml-16">
            <h3 className="relative border-b border-gray-300/70 pb-2.5 text-2xl font-medium text-gray-900 before:absolute before:-bottom-px before:left-0 before:h-px before:w-24 before:bg-red-600 before:content-['']">
              Recent stories
            </h3>
  
            {/* Articles Container */}
            <div className="grid  lg:gap-x-5 xl:grid-cols-1">
              {recentArticles.map((article, index) => (
                <Article key={index} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HomePage;