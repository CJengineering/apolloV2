import { Metadata } from "next";

interface PageSEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: "website" | "article" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other" | undefined
  ogImage?: string;
  twitterCard?: string;
  useRawTitle?: boolean;
  keywords?: string[];
}
export function customMetaDataGenerator({
  title,
  description,
  ogType = "website",
  ogImage,
  useRawTitle,

  keywords = ["an array", "of default", "keywords"],
}: PageSEOProps): Metadata {
  // Create Site Title
  const siteTitle = "Community Jameel";
  const fullTitle = useRawTitle ? `${title} | ${siteTitle}`: title;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title: fullTitle,
      description,
      type: ogType,

      images: [
        {
          url: ogImage || "https://www.communityjameel.org/images/og-image.jpg",
        },
      ],
    },
  };
}