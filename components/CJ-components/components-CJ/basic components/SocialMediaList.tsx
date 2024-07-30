import React from "react";
import { SocialMediaLinks } from "@/app/interfaces";
const IconBase = ({ path, ...props }: { path: string; [key: string]: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
    className="w-6 h-6 fill-current text-slate-500 dark:text-gray-400 transition duration-300 ease-in-out hover:text-orange-700 dark:hover:text-orange-400"
  >
    <path d={path} />
  </svg>
);

const socialIcons: { [key: string]: string } = {
  Twitter:
    "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
  Facebook:
    "M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z",
  Instagram:
    "M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z",
  Linkedin:
    "M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z",
  Github:
    "M256 32C115 32 0 147 0 288c0 113.2 73.29 209.1 174.9 243.1 12.8 2.36 17.5-5.56 17.5-12.2 0-6-0.22-21.9-0.34-43-71.17 15.5-86.19-34.3-86.19-34.3-11.6-29.4-28.5-37.3-28.5-37.3-23.3-16 1.8-15.7 1.8-15.7 25.7 1.8 39.3 26.3 39.3 26.3 22.9 39.3 60 28 74.6 21.4 2.3-16.6 8.9-28 16.2-34.4-56.8-6.4-116.6-28.4-116.6-126.4 0-27.9 10-50.8 26.2-68.7-2.6-6.4-11.3-32.2 2.5-67 0 0 21.3-6.8 69.8 26 20.2-5.6 41.8-8.4 63.3-8.5 21.5 0.1 43.1 2.9 63.3 8.5 48.5-32.8 69.7-26 69.7-26 13.9 34.8 5.2 60.6 2.5 67 16.3 17.9 26.2 40.8 26.2 68.7 0 98.3-59.9 120-116.9 126.2 9.1 7.8 17.2 23.2 17.2 46.8 0 33.8-0.3 61.1-0.3 69.5 0 6.7 4.6 14.7 17.6 12.2C438.7 497.1 512 401.2 512 288 512 147 397 32 256 32z",
  Youtube:
    "M459.37 151.95c-5.45-20.55-21.59-36.7-42.14-42.15C387.32 96 256 96 256 96s-131.32 0-161.23 13.8c-20.55 5.45-36.7 21.6-42.15 42.15C32 181.86 32 256 32 256s0 74.14 20.62 104.05c5.45 20.55 21.6 36.7 42.15 42.15C124.68 416 256 416 256 416s131.32 0 161.23-13.8c20.55-5.45 36.7-21.6 42.14-42.15C480 330.14 480 256 480 256s0-74.14-20.63-104.05zM204.8 320.16V191.84L320 256l-115.2 64.16z",
};
export default function SocialMediaList({
  socialMediaLinks,
}: {
  socialMediaLinks: SocialMediaLinks;
}) {
  const renderLink = (name: string, url: string) => {
    const iconPath = socialIcons[name.charAt(0).toUpperCase() + name.slice(1)];
    if (!iconPath) return null;

    return (
      <a
        key={name}
        className="pr-2"
        href={url}
        target="_blank"
        aria-label={name.charAt(0).toUpperCase() + name.slice(1)}
      >
        <IconBase path={iconPath} />
      </a>
    );
  };

  return (
    <div className="flex">
      {socialMediaLinks.instagram &&
        renderLink(
          socialMediaLinks.instagram.name,
          socialMediaLinks.instagram.url
        )}
      {socialMediaLinks.youtube &&
        renderLink(socialMediaLinks.youtube.name, socialMediaLinks.youtube.url)}
      {socialMediaLinks.facebook &&
        renderLink(
          socialMediaLinks.facebook.name,
          socialMediaLinks.facebook.url
        )}
      {socialMediaLinks.linkedin &&
        renderLink(
          socialMediaLinks.linkedin.name,
          socialMediaLinks.linkedin.url
        )}
      {socialMediaLinks.twitter &&
        renderLink(socialMediaLinks.twitter.name, socialMediaLinks.twitter.url)}
    </div>
  );
}
