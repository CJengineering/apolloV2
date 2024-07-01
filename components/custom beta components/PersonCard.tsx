import React from 'react';
import SocialMediaLinks from './SocialMediaLinks';
import { TeamMember } from '@/app/interfaces';
import Link from 'next/link';
interface PersonalCardProps {
    author: TeamMember;
    socialPlatforms: string[];
}


const PersonalCard = ({ author, socialPlatforms }: PersonalCardProps) => {
  return (
    <Link href={`team/${author.slug}`}>
    <div className="">
      <div className="flex items-center justify-center">
        <div className="w-1/3">
          <img
          className="mx-auto object-cover"
          src={author.imageUrl}
          alt={author.name}
          />
        </div>
        {/* <div className="block w-2/3 pl-3">
          <h3 className="serif font-medium text-xl hover:underline">
            <Link href={`team/${author.slug}`}>
              <span className="" aria-hidden="true"></span>
              {author.name}
            </Link>
          </h3>
          <div>
            <p className="mono text-sm font-normal uppercase leading-tight">{author.position}</p>
          </div>
        </div> */}


        <div className="block w-2/3 pl-3">
          <h3 className="serif font-medium text-xl hover:underline">
              {author.name}
          </h3>
          <div>
            <p className="mono text-sm font-normal uppercase leading-tight">{author.position}</p>
          </div>
        </div>
        


        {/* <SocialMediaLinks platforms={socialPlatforms} /> */}
      </div>
    </div>
    </Link>
  );
};

export default PersonalCard;
