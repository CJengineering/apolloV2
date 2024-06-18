import React from 'react';

interface SyndicationPartnersProps {
  title: string;
  children?: React.ReactNode;
}

const SyndicationPartners: React.FC<SyndicationPartnersProps> = ({ title, children }) => {
  return (
    <section className="min-w-full " id={title.replace(/\s+/g, '-').toLowerCase()}>
      <div className="w-full max-w-xl sm:max-w-3xl lg:max-w-screen-2xl ">
        {/* Section Header */}
        <h1 className="costa font-bold text-3xl md:text-4xl">{title}</h1>
        {/* Logos */}
        <div className="min-w-full">{children}</div>
      </div>
    </section>
  );
};

export default SyndicationPartners;
