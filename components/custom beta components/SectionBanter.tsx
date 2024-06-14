import React from 'react';

interface SyndicationPartnersProps {
  title: string;
  children?: React.ReactNode;
}

const SyndicationPartners: React.FC<SyndicationPartnersProps> = ({ title, children }) => {
  return (
    <section className="mt-6 min-w-full " id={title.replace(/\s+/g, '-').toLowerCase()}>
      <div className="w-full max-w-xl 0 sm:max-w-3xl lg:max-w-screen-2xl ">
        {/* Section Header */}
        <h2 className="relative border-b border-gray-200 pb-2.5 text-2xl font-medium text-gray-900 before:absolute before:-bottom-px before:left-0 before:h-px before:w-24 before:bg-red-600 before:content-['']">
          {title}
        </h2>

        {/* Logos */}
        <div className="py-12 min-w-full">

        {children}
        </div>
      </div>
    </section>
  );
};

export default SyndicationPartners;
