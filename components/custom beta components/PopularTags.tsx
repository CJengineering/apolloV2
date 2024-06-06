import React from 'react';

interface PopularTagsProps {
  title: string;
  tags: string[];
}

const PopularTags: React.FC<PopularTagsProps> = ({ title, tags }) => {
  return (
    <div className="mt-8 w-full rounded-2xl bg-gray-50 p-5 sm:p-8">
      <h3 className="relative border-b border-gray-300/70 pb-2.5 text-2xl font-medium text-gray-900 before:absolute before:-bottom-px before:left-0 before:h-px before:w-24 before:bg-red-600 before:content-['']">
        {title}
      </h3>
      <div className="pt-5">
        <ul className="-m-1 flex flex-wrap justify-start">
          {tags.map(tag => (
            <li key={tag}>
              <a href="tag.html">
                <span className="m-1 inline-flex items-center rounded-full border border-gray-300/70 bg-transparent px-4 py-1 text-sm font-medium text-gray-800 transition duration-300 ease-in-out hover:text-red-700 sm:px-4 sm:py-1.5">
                  {tag}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularTags;
