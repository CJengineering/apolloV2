import ResponsiveYouTubeEmbed from "./ResponsiveYouTubeEmbed";
import Image from "next/image";

const ArticleBody = ({ content, locale }: any) => (
    <div
      className={`prose pb-3 prose-2xl dark:prose-dark ${
        locale === "ar" ? "sans-serif-ar pl-0" : "sans-serif pl-0"
      }`}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
  
  // Component for displaying video or image

export default  ArticleBody
  