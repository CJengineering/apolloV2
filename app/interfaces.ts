import { StaticImageData } from "next/image";

export interface ButtonCJProps {
  children: React.ReactNode;
}
export interface CardProgrammeProps {
  imageUrl: StaticImageData | string;
  programmeTitle: string;
  programmeType: string;
}
export type CardHorizontalImageProps = {
  imageUrl: StaticImageData | string;
};

export interface ListContentProps {
  title: string;
  source: string;
  date: string | Date;
}
export interface ListSmallProps {
  data?: { [key: string]: string[] | undefined } | undefined;
}

export interface StatProps {
  title: string;
  content: string;
}
export interface SocialMediaLink {
  url: string;
  name: string;
}
export interface SocialMediaLinks {
  instagram?: SocialMediaLink;
  youtube?: SocialMediaLink;
  linkedin?: SocialMediaLink;
  facebook?: SocialMediaLink;
  twitter?: SocialMediaLink;
}
export interface Image {
  url: string;
}
export interface ListSmallData {
  [key: string]: string[];
}

export interface RowTopData {
  name: string;
  description: string;
  mission: string;
  year: string;
  partners: string[];
}
export interface RowContentData {
  research?: ListSmallProps;
  established?: ListSmallProps;
  headquarters?: ListSmallProps;
  leadership?: ListSmallProps;
  "key initiatives"?: ListSmallProps;
  "key partners"?: ListSmallProps;
  fullDescription: string;
  socialMediaLinks: SocialMediaLinks;
  stats: StatProps[];
  listContent: ListContentProps[];
  features:
    | [
        {
          image: CardHorizontalImageProps;
          title: string;
        }
      ]
    | [];
}

export interface RowData {
  repository: {
    top: RowTopData;
    content: RowContentData;
  };
}
export interface NavItem {
  name: string;
  href: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  current: boolean;
  children?: NavSubItem[];
}

export interface NavSubItem {
  name: string;
  href: string;
  current?: boolean; // Optional, as not all subItems might use it
}

export interface TeamMember {
  id?: string;
  name: string;
  imageUrl: string;
  slug?: string;
  position: string;
  order: number;
  paragraphDescription?: string;
  metaDescription?: string;
  altTextImage?: string;
  photo?: TeamMemberPhoto;
  filter?: string;
}
interface TeamMemberPhoto {
  url: string;
  alt: string;
}

export interface AuthorCardProps {
  author: TeamMember;
  socialPlatforms: string[];
}
export interface FieldDataTeamProfile {
  newsOnOff: boolean;
  position: string;
  name: string;
  slug: string;
  filter: string;
  order: number;
  "paragraph-description": string;
  "meta-decscription": string;
  photo: Image;
}

export interface Image {
  fileId: string;
  url: string;
  alt: string | null;
}

export interface Item<T> {
  id: string;
  cmsLocaleId: string | null;
  lastPublished: string | null;
  lastUpdated: string;
  createdOn: string;
  isArchived: boolean;
  isDraft: boolean;
  fieldData: T;
}

export type EventFieldData = {
  "push-to-gr": boolean;
  "programme-label": string;
  "related-programme-s": string[];
  thumbnail: {
    fileId: string;
    url: string;
    alt: string | null;
  };
  "hero-image": {
    fileId: string;
    url: string;
    alt: string | null;
  };
  "open-graph-image": {
    fileId: string;
    url: string;
    alt: string | null;
  };
  "hero-image-caption": string;
  featured: boolean;
  "arabic-title": string;
  "seo-meta-description": string;
  "seo-title": string;
  "teaser-text": string;
  "signup-embed": string;
  "short-description-2": string;
  "event-date": string;
  "end-date": string;
  time: string;
  address: string;
  "location-link": string;
  "livestream-link": string;
  "attendance-type": string;
  "contact-details": string;
  "button-cta-text": string;
  "rsvp-link": string;
  "trailer-livestream-highlights-video-link": string;
  "video-2": string;
  "video-3": string;
  tags: string[];
  "related-people": string[];
  organisers: string[];
  partners: string[];
  "participants-affiliated-institutions": string[];
  "rich-text": string;
  "image-gallery": string[];
  "gallery-photo-credits": string;
  "news-on-off": boolean;
  "custom-code-for-hiding-weglot": string;
  group: string;
  name: string;
  slug: string;
};
export interface EventFieldDataCleaned {
  pushToGr: boolean;
  programmeLabel: string;
  isDraft: boolean;
  relatedProgrammes: string[];
  thumbnail: {
    fileId: string;
    url: string;
    alt: string | null;
  };
  heroImage: {
    fileId: string;
    url: string;
    alt: string | null;
  };
  openGraphImage: {
    fileId: string;
    url: string;
    alt: string | null;
  };
  heroImageCaption: string;
  featured: boolean;
  arabicTitle: string;
  seoMetaDescription: string;
  seoTitle: string;
  teaserText: string;
  signupEmbed: string;
  shortDescription2: string;
  eventDate: string;
  endDate: string;
  time: string;
  address: string;
  locationLink: string;
  livestreamLink: string;
  attendanceType: string;
  contactDetails: string;
  buttonCtaText: string;
  rsvpLink: string;
  trailerLivestreamHighlightsVideoLink: string;
  video2: string;
  video3: string;
  tags: string[];
  relatedPeople: string[];
  organisers: string[];
  partners: string[];
  participantsAffiliatedInstitutions: string[];
  richText: string;
  imageGallery: string[];
  galleryPhotoCredits: string;
  newsOnOff: boolean;
  customCodeForHidingWeglot: string;
  group: string;
  name: string;
  slug: string;
}

export interface ProgrammeRawFields {
  "push-to-gr"?: string;
  type?: string;
  "link-to-page"?: string;
  "name-arabic"?: string;
  shortname?: string;
  "short-name-arabic"?: string;
  byline?: string;
  "byline-arabic"?: string;
  description?: string;
  "short-description-arabic"?: string;
  text?: string;
  "summary-arabic"?: string;
  "field-english"?: string;
  "field-arabic"?: string;
  "year-established"?: string;
  "year-closed"?: string;
  "headquarters-english"?: string;
  "headquarters-arabic"?: string;
  "logo-svg-native-size"?: string;
  "logo-svg-square-overlay"?: string;
  logo?: string;
  card?: string;
  hero?: string;
  "open-graph"?: string;
  "main-video"?: string;
  features?: string[];
  partners?: string[];
  "related-programmes"?: string[];
  longitude?: string;
  latitude?: string;
  website?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  facebook?: string;
  tiktok?: string;
  order?: string;
  colour?: string;
  name?: string;
  slug?: string;
}
export interface PartnersRawFields {
  "arabic-name"?: string;
  website?: string;
  logo?: string;
  "short-description"?: string;
  "short-description-arabic"?: string;
  group?: string;
  tags?: string[];
  name?: string;
  slug?: string;
}
export interface EventCardProps {
  id: string;
  name: string;
  description: string;
  programme: string;
  imageUrl: string;
  source: {
    name: string;
    imageUrl: string;
    date: string;
    readTime: string;
  };
}
export interface PhotoFieldsRaw {
  "name-arabic"?: string;
  "main-image"?: { fileId: string; url: string; alt: string |'' };
  "alt-text"?: string;
  date?: string;
  description?: string;
  "description-arabic"?: string;
  source?: string;
  "programme-label"?: string;
  "programmes-multi-reference"?: string[];
  tags?: string[];
  "people-multi-reference"?: string[];
  "location-2"?: string;
  "location-arabic"?: string;
  "high-resolution"?: string;
  name?: string;
  slug?: string;
}
export interface ImageLightbox {
  src: string;
  alt: string;
  location: string;
  year: number;
  people: string;
}

export interface LightboxProps {
  image: ImageLightbox;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}
