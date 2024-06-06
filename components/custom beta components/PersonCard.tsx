import React from 'react';
import SocialMediaLinks from './SocialMediaLinks';
import { TeamMember } from '@/app/interfaces';
import Link from 'next/link';
interface PersonalCardProps {
    author: TeamMember;
    socialPlatforms: string[];
}


const   PersonalCard = ({ author, socialPlatforms }: PersonalCardProps) => {
  return (
    <div className="relative rounded-3xl border border-gray-300/70 bg-transparent px-6 py-10 text-center transition duration-300 ease-in-out hover:border-gray-300/30 hover:shadow-lg sm:px-10">
      <div>
        <img
          className="mx-auto h-40 w-40 rounded-full object-cover xl:h-44 xl:w-44"
          src={author.imageUrl}
          alt={author.name}
        />
        <div className="mt-6 leading-6">
          <h3 className="text-xl font-medium text-gray-900">
            <Link href={`people/${author.slug}`}>
              <span className="absolute inset-0" aria-hidden="true"></span>
              {author.name} {author.order}
            </Link>
          </h3>
          <p className="mt-1 text-base text-red-600">{author.position}</p>
        </div>
        <SocialMediaLinks platforms={socialPlatforms} />
      </div>
    </div>
  );
};

export default PersonalCard;
