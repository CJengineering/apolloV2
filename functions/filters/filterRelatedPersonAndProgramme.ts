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

 
  export default function filterNewsItems(rawNewsArray: Item[], targetProgramme: string, targetStrings: string[], targetId: string) {
    return rawNewsArray.filter(item => {
        // Check if the item matches the specific ID
        if (item.id === targetId) {
            return false;
        }

        // Check if the item has the specific programme
        if (item.fieldData.programme === targetProgramme) {
            return true;
        }

        // Check if the item has at least one of the target strings in its people array
        if (Array.isArray(item.fieldData.people)) {
            for (const person of item.fieldData.people) {
                if (targetStrings && targetStrings.includes(person)) {
                    return true;
                }
            }
        }

        return false;
    });
}
  