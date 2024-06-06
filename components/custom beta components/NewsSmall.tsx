import React from 'react'
import { NewsMainProps } from './NewsMain'
import Image from 'next/image'

  
export default function NewsSmall({content}: {content: NewsMainProps}) {
    const formatDate = (date: Date | string): string => {
        if (date instanceof Date) {
          const day = date.getDate()
          const month = date.toLocaleString('en-US', { month: 'long' })
          const year = date.getFullYear()
          return ` ${day} ${month} ${year}`
        } else {
          return date
        }
      }
  return (
    <article className="py-8 sm:flex lg:flex-col xl:flex-row xl:items-center">
      {/* Image */}
      <a href={content.categoryLink} className="order-2 w-full sm:w-2/5 lg:order-1 lg:w-full xl:w-2/5">
        <div className="group aspect-square relative z-10  overflow-hidden  bg-gray-100">
          <Image
            src={content.postImage}
            className=" w-full h-full object-cover  transition duration-300 ease-in-out group-hover:scale-110"
            alt={content.title}
            width={1900}
            height={1900}
          />
        </div>
      </a>

      {/* Content */}
      <div className="order-1 mt-2 w-full px-2 sm:mt-0 sm:max-w-sm sm:pl-0 sm:pr-5 lg:order-2 lg:mt-4 xl:ml-5 xl:mt-0 xl:flex-1">
        <a
          href={content.categoryLink}
          className="transition-color text-xs font-medium uppercase tracking-widest text-red-700 duration-300 ease-in-out hover:text-red-600"
        >
          {content.tag}
        </a>

        <a href={content.categoryLink}>
          <h3 className="mt-2  font-medium leading-normal tracking-normal text-gray-900 decoration-gray-800 decoration-2 transition duration-300 ease-in-out hover:underline line-clamp-2">
            {content.title}
          </h3>
        </a>

        {/* Author */}
        <div className="mt-2 flex items-center justify-between">
          {/* Author meta */}
          <div className="flex items-center justify-center">
            
            <div className="flex text-tiny">
            
              <a className="font-medium text-gray-700 hover:underline" href={content.authorLink}>
                {content.authorName}
              </a>
              <div className='px-1'>|</div>
              <span className="text-gray-500 lg:hidden xl:inline-block">{`${formatDate(content.date)}`}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
