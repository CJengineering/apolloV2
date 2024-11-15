import ResponsiveYouTubeEmbed from "./ResponsiveYouTubeEmbed";
import Image from "next/image";
const HeroMedia = ({ isVideo, videoId, imageUrl, alt }: any) => (
    <div className="flex items-start w-full">
      {isVideo ? (
        <ResponsiveYouTubeEmbed embedId={videoId} />
      ) : (
        <Image src={imageUrl} alt={alt} height={1080} width={1920} />
      )}
    </div>
  );
export default HeroMedia