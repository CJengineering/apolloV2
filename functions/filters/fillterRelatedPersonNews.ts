import { Item, NewsRawFields } from "@/app/interfaces";

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
  


 
  export default function (rawNewsArray:Item<NewsRawFields>[], searchId :string) {
    return rawNewsArray.filter(item => 
        item.fieldData.people && item.fieldData.people.includes(searchId)
    );
}


  