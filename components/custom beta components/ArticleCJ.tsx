import { PostFieldsCleaned } from "@/app/interfaces";
import ArticleHeader from "./ArticleCJHeader";
import ArticleBody from "./ArticleCJBody";
import HeroMedia from "./ArticleCJHeroMedia";
import ArticleMetadata from "./ArticleCJMetadata";
import ProgrammeButton from "./ArticleCJButton";
interface ArticleCJProps {
  post: PostFieldsCleaned;
  styleType?: string;
  locale: string;
}

export default function ArticleCJ({ post, styleType, locale }: ArticleCJProps) {
  const title = locale === "ar" ? post.arabicTitle : post.name;
  const arabicVideoLink = post.heroVideoArabicYoutubeVideoId
    ? post.heroVideoArabicYoutubeVideoId
    : post.heroVideoYoutubeEmbedId;
  const videoLink =
    locale === "ar" ? arabicVideoLink : post.heroVideoYoutubeEmbedId;
  const content = locale === "ar" ? post.bodyArabic : post.body;
  const bulletPoints =
    locale === "ar" ? post.bulletPointsArabic : post.bulletPointsEnglish;

  return (
    <div className={locale === "ar" ? "rtl" : ""}>
      <div className="w-full xl:w-2/3">
        <ArticleHeader
          title={title}
          isArabic={post.isPostArabic}
          locale={locale}
        />

        {bulletPoints && <ArticleBody content={bulletPoints} locale={locale} />}

        <HeroMedia
          isVideo={post.videoAsHeroYesNo}
          videoId={videoLink}
          imageUrl={post.mainImage.url}
          alt={post.name}
        />

        <ArticleMetadata
          date={locale === "ar" ? post.datePublishedArabic : post.datePublished}
          location={locale === "ar" ? post.locationArabic : post.location}
          locale={locale}
        />

        <ArticleBody content={content} locale={locale} />

        <ProgrammeButton programme={post.programme} locale={locale} />
      </div>
    </div>
  );
}
