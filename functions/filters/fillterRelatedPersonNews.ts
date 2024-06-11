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

 
  export default function (rawNewsArray:Item[], searchId :string) {
    return rawNewsArray.filter(item => 
        item.fieldData.people && item.fieldData.people.includes(searchId)
    );
}


  