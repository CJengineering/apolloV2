import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { Share } from "./Share";
import { SocialButton } from "./SocialButtons";
import { ArticleProps } from "@/app/interfaces";
import { PostFieldsCleaned } from "@/app/interfaces";
import SecondaryNav from "../ui/secondary-nav";
import ContentContainer from "./ContentContainer";
import LanguageChanger from "./LanguageChanger";
import ButtonCJ from "../CJ-components/components-CJ/basic components/ButtonCJ";
import ResponsiveYouTubeEmbed from "./ResponsiveYouTubeEmbed";
interface ArticleBanterProps {
  post: PostFieldsCleaned;
  styleType?: string;
  locale: string;
}
export default function ArticleBanter({
  post,
  styleType,
  locale,
}: ArticleBanterProps) {
  return (
    <>
      <div className={locale === "ar" ? "rtl" : ""}>
        <div className="w-full  lg:w-2/3">

 
        <div
          className={`pt-6 w-full mb-4   flex ${
            locale === "ar" ? "justify-between" : "justify-between"
          }`}
        >
          <div className="w-full ">
            <h1
              className={`header-article  leading-7 sm:leading-tight pb-0 pt-12 lg:pb-0 lg:pt-4 flex-grow  ${
                locale === "ar"
                  ? "sans-serif-ar text-right"
                  : "sans-serif text-left"
              }`}
            >
              {locale === "ar" ? post.arabicTitle : post.name}
            </h1>
          </div>
          <div
            className={`pb-0 pt-12 lg:pb-4 lg:pt-4 ${
              locale === "ar" ? "order-1 ml-0 mr-auto" : "order-2 mr-0 ml-auto"
            }`}
          >
            {post.isPostArabic && <LanguageChanger />}
          </div>
        </div>
        {(post.bulletPointsArabic || post.bulletPointsEnglish) && (
          <div>
            <div
              className={`prose prose-2xl  dark:prose-dark ${
                locale === "ar" ? "sans-serif-ar pl-0" : "sans-serif pl-0"
              }`}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    locale === "ar"
                      ? post.bulletPointsArabic
                      : post.bulletPointsEnglish,
                }}
              ></div>
            </div>
          </div>
        )}
        {post.videoAsHeroYesNo ? (
          <div className="flex items-start w-full">
            <ResponsiveYouTubeEmbed embedId={post.heroVideoYoutubeEmbedId} />
          </div>
        ) : (
          <div className="flex items-start w-full ">
            <Image
              className=""
              src={post.mainImage.url}
              alt={post.name}
              height={1080}
              width={1920}
            />
          </div>
        )}

        <div className="flex">
          <div className="">
            <div className="mx-auto">
              <div className="pt-6">
                <div
                  className={`pl-0 text-[1.1rem] ${
                    locale === "ar" ? "sans-serif-ar " : "sans-serif"
                  }`}
                >
                  {locale === "ar"
                    ? post.datePublishedArabic
                    : post.datePublished}
                </div>
              </div>
              <div>
                <div
                  className={`pl-0 text-[1.1rem] ${
                    locale === "ar" ? "sans-serif-ar " : "sans-serif"
                  }`}
                >
                  {locale === "ar" ? post.locationArabic : post.location}
                </div>
                <div
                  className={`prose prose-2xl dark:prose-dark   ${
                    locale === "ar" ? "sans-serif-ar   " : "sans-serif pl-0"
                  }`}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: locale === "ar" ? post.bodyArabic : post.body,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="pb-2">
              {locale !== "ar" && (
                <div className="flex items-center">
                  <ButtonCJ
                    text={post.programme.name}
                    href={`/programmes/${post.programme.slug}`}
                    styleType="secondary"
                  />
                  {/* <div className="h-5 w-5 bg-[#be0336] mr-2"></div> */}
                  {/* <div className="flex items-center bg-slate-200 dark:bg-slate-700 px-1 group ml-2">
      <div className="underline pr-1 hover:text-blue-800 hover:cursor-pointer dark:hover:text-blue-400">
        
        
        <Link href={`/programmes/${post.programme.slug}`}>
          {post.programme.name}
        </Link>
      </div>
      <div className="transition-transform duration-300 ease-in-out group-hover:translate-x-[2px] group-hover:text-blue-800 dark:group-hover:text-blue-400">
        <ArrowRightIcon className="h-4 w-4" />
      </div>
    </div> */}
                </div>
              )}
            </div>
          </div>

          {/* <div className="sticky top-20 self-start">
          <SecondaryNav />
        </div> */}
        </div>
        </div>
      </div>
    </>
  );
}
