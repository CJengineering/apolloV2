import ResponsiveYouTubeEmbed from "@/components/custom beta components/ResponsiveYouTubeEmbed";
import ResponsiveYouTubeEmbedCoverCustom from "@/components/custom beta components/ResponsiveYoutubeEmbedCoverCustom";

export function EventVideo({ embedCode, imageUrl, customCover }: { embedCode: string | null, imageUrl?: string , customCover?: boolean }) {
    if (!embedCode) {
      return null;
    }
    if(customCover){
      return (
        <div className="flex w-full">
          <ResponsiveYouTubeEmbedCoverCustom embedId={embedCode} coverImage={imageUrl || ""} />
        </div>
      );
    }
    else{
        return (
            <div className="flex w-full">
            <ResponsiveYouTubeEmbed embedId={embedCode} />
            </div>
        );
    }
  
 
}