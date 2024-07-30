import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  imageUrl: string;
  alt: string;
  title: string;
  subtitle: string;
  link: string;
  openInNewTab?: boolean;
}

const HomeCard: React.FC<CardProps> = ({ imageUrl, alt, title, subtitle, link, openInNewTab = false }) => {
  return (
    <Link href={link} passHref>
      <div className="pb-6 block overflow-hidden group cursor-pointer">
        <div className="relative w-full pb-[100%]">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={imageUrl}
            alt={alt}
            layout="fill"
          />
        </div>
        <div className="pt-2">
          <h3 className="serif text-lg font-semibold group-hover:underline">{title}</h3>
          <p className="text-black text-base sans-serif font-normal">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;