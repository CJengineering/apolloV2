import ContentPhotos from "../test components/content-photos";

export function EventImageGallery({
    imageGallery,
    cleanRelatedImages,
  }: {
    imageGallery: Array<{ url: string }>;
    cleanRelatedImages: Array<any>;
  }) {
    if (imageGallery.length === 0 || imageGallery[0].url === "") {
      return null;
    }
  
    return (
      <div>
        <div className="py-12">
          <div className="w-full h-[1px] bg-gray-300 block"></div>
        </div>
  
        <div>
          <ContentPhotos images={cleanRelatedImages} />
        </div>
      </div>
    );
  }