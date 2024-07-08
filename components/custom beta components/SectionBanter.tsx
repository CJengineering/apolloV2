import React from 'react';

interface SectionBanterProps {
  title: string;
  children?: React.ReactNode;
  type?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6';
}

const SectionBanter: React.FC<SectionBanterProps> = ({ title, children, type = 'h1' }) => {
  const HeadingTag = type;
  
  // Define font size based on heading type
  const fontSizeClass = type === 'h1' ? 'text-4xl md:text-5xl' : 
                        type === 'h2' ? 'text-3xl md:text-4xl' : 
                        type === 'h3' ? 'text-2xl md:text-3xl' : 
                        type === 'h4' ? 'text-xl md:text-2xl' : 
                        type === 'h5' ? 'text-lg md:text-xl' : 
                        'text-base md:text-lg'; // for h6

  return (
    <section className="min-w-full" id={title.replace(/\s+/g, '-').toLowerCase()}>
      <div className="w-full max-w-xl sm:max-w-3xl lg:max-w-screen-2xl">
        {/* Section Header */}
        <HeadingTag className={`costa font-bold ${fontSizeClass}`}>{title}</HeadingTag>
        {/* Logos */}
        <div className="min-w-full">{children}</div>
      </div>
    </section>
  );
};

export default SectionBanter;
