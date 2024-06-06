import { get } from "http";
import getCollectionsAll from "../api/getCollectionsAll";
import getItem from "../api/getItem";
import getCorrespondingValue from "./getCollectionName";

interface NewsMainProps {
    tag: string;
    title: string;
    description: string;
    authorName: string;
    date: string;
    readTime: string;
    postLink: string;
    categoryLink: string;
    authorLink: string;
    postImage: string;
    authorImage: string;
  }
  
  interface FieldData {
    "date-published": string;
    "external-link": string;
    "push-to-gr": boolean;
    "featured": boolean;
    "remove-from-news-grid": boolean;
    "excerpt": string;
    "summary": string;
    "name": string;
    "thumbnail-alt-text": string;
    "arabic-title": string;
    "slug": string;
    'thumbnail': Image;
    "hero-image": Image;
    "programme-s": string[];
    people: string[];
    sources: string;
    programme: string;
  }
  
  interface Image {
    fileId: string;
    url: string;
    alt: string | null;
  }
  
  interface Item {
    id: string;
    cmsLocaleId: string | null;
    lastPublished: string | null;
    lastUpdated: string;
    createdOn: string;
    isArchived: boolean;
    isDraft: boolean;
    fieldData: FieldData;
 
  }
  
  function calculateReadTime(text: string): string {
    const wordsPerMinute = 200;
    const numberOfWords = text ? text.split(/\s+/).length : 0;
    const minutes = Math.ceil(numberOfWords / wordsPerMinute);
    return `${minutes} min read`;
  }
  const formatDate = (date: Date | string): string => {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    if (date instanceof Date && !isNaN(date.valueOf())) {
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'long' });
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    } else {
      return 'Invalid Date';
    }
  }
  
  export default   function mapItemToNewsMainProps(item: Item, arraySource: Item[],arrayProgramme:Item[]): NewsMainProps {

  const matchSource = arraySource.find((source) => source.id === item.fieldData.sources);
  const macthProgramme = arrayProgramme.find((programme) => programme.id === item.fieldData.programme);
    return {
      tag: macthProgramme? macthProgramme.fieldData.name :'New York Times',
      title: item.fieldData.name || '',
      description: item.fieldData.excerpt || 'No Description',
      authorName: matchSource? matchSource.fieldData.name :"cj",
      date: item.fieldData["date-published"] 
        ? formatDate(item.fieldData["date-published"])
        : 'No Date',
      readTime: calculateReadTime(item.fieldData.excerpt || ''),
      postLink: item.fieldData["external-link"] || '#',
      categoryLink: item.fieldData.slug 
        ? `/news/${item.fieldData.slug}` 
        : '#',
      authorLink: `/news/${item.fieldData.slug}`, // Placeholder link
      postImage: item.fieldData.thumbnail?.url || '/path/to/default/image.jpg',  
      authorImage: "/path/to/author/image.jpg", // Placeholder image URL
    };
  }