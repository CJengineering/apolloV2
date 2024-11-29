"use client";
import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import {
  BeakerIcon,
  BoltIcon,
  RocketLaunchIcon,
  NewspaperIcon,
  MegaphoneIcon,
  MicrophoneIcon,
  UserGroupIcon,
  TrophyIcon,
  PlayCircleIcon,
  PaperClipIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
const ImageContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    className="
  relative h-32 w-32 lg:pb-[100%] lg:w-full group hover:cursor-pointer"
  >
    {children}
    <div className="absolute inset-0 bg-blue-950 mix-blend-screen opacity-0 transition-opacity duration-[2100ms] group-hover:opacity-100 z-10"></div>
  </div>
);

// Define possible types
type IconType =
  | "News"
  | "Event"
  | "Launch"
  | "Watch"
  | "Listen"
  | "Award"
  | "Jobs"
  | "Product"
  | "Research"
  | "Spinout";

// Update the interface to use the IconType
export type CardHorizontalImageProps = {
  imageUrl: StaticImageData | string;
  title?: string;
  type?: string; // Use string for generality
};

// Map types to icons
const iconMapping: Record<IconType, React.ComponentType> = {
  News: MegaphoneIcon,
  Event: CalendarDaysIcon,
  Launch: RocketLaunchIcon,
  Watch: PlayCircleIcon,
  Listen: MicrophoneIcon,
  Award: TrophyIcon,
  Jobs: UserGroupIcon,
  Product: PaperClipIcon,
  Research: BeakerIcon,
  Spinout: BoltIcon,
};

export default function FeatureCardAsHome({
  type,
  imageUrl,
  title,
}: CardHorizontalImageProps) {
  const titleToUse = title || "";
  const IconComponent =
    type && iconMapping[type as IconType]
      ? iconMapping[type as IconType]
      : null;

  return (
    <div className="group flex flex-row items-center lg:block ">
      <div className="col-span-5 ">
        <div className="relative h-32 w-32 md:h-auto md:w-full  ">
          <div className="aspect-square overflow-hidden ">
            <Image
              className="w-full h-full object-cover transition-transform duration-500 ease-linear group-hover:scale-105 "
              src={imageUrl}
              alt=""
              width={400}
              height={400}
              unoptimized
            />

            <div className="absolute inset-0 bg-black opacity-50"></div>

            {IconComponent && (
              <div className="absolute left-3 top-3 h-5 w-5 text-white">
                <IconComponent />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="pt-1 ml- md:ml-0">
        <p className="sans-serif text-base group-hover:underline font-medium ">
          {titleToUse}
        </p>
      </div>
    </div>
  );
}
