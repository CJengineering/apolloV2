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
interface ArticleBanterProps {
  post: PostFieldsCleaned;
  styleType?: string;
  locale: string;
}
export default function ArticleBanter({ post, styleType, locale }: ArticleBanterProps) {
  return (
    <>
    <div className={locale === "ar" ? "rtl" : ""}>
    <div className="pt-6 w-full mb-4 flex">
    <div className="w-full lg:w-3/4">
    <h1 className={`header-article leading-7 sm:leading-none pb-0 pt-12 lg:pb-4 lg:pt-4 flex-grow ${locale === "ar" ? "sans-serif-ar text-right " : "sans-serif text-left"}`}>
      {locale === 'ar' ? post.arabicTitle : post.name}
    </h1>
    </div>
    <div className={`pb-0 pt-12 lg:pb-4 lg:pt-4 ${locale === 'ar' ? 'mr-6' : 'ml-6'}`}>
      <LanguageChanger />
    </div>
  </div>
        <div className="flex items-start w-full lg:w-4/5">
        <Image
          className=""
          src={post.mainImage.url}
          alt={post.name}
          height={1080}
          width={1920}
        />
</div>
        <div className="flex">
          <div className="">
            <div className="mx-auto">
              <div className="pt-6">
                <div className={`{locale === 'ar' ? 'sans-serif-ar : 'sans-serif text-lg'}`}>{locale === 'ar' ? post.datePublishedArabic : post.datePublished}</div>
              </div>
              <div>
                <div className={`{locale === 'ar' ? 'sans-serif-ar : 'sans-serif text-lg'}`}>
                  {locale === 'ar' ? post.locationArabic : post.location === "N/A" ? "" : post.location}
                </div>
                <div className={`pl-0 prose prose-2xl dark:prose-dark ${locale === "ar" ? "sans-serif-ar" : "sans-serif"}`}>
                <div dangerouslySetInnerHTML={{ __html: locale === 'ar' ? post.bodyArabic : post.body }}></div>
                </div>
            </div>
          </div>
          <div className="pb-2">
          {locale !== 'ar' && (
  <div className="flex items-center">
    <div className="h-5 w-5 bg-[#be0336] mr-2"></div>
    <div className="flex items-center bg-slate-200 dark:bg-slate-700 px-1 group ml-2">
      <div className="underline pr-1 hover:text-blue-800 hover:cursor-pointer dark:hover:text-blue-400">
        <Link href={`/programmes/${post.programme.slug}`}>
          {post.programme.name}
        </Link>
      </div>
      <div className="transition-transform duration-300 ease-in-out group-hover:translate-x-[2px] group-hover:text-blue-800 dark:group-hover:text-blue-400">
        <ArrowRightIcon className="h-4 w-4" />
      </div>
    </div>
  </div>
)}


          </div>
        </div>

        {/* <div className="sticky top-20 self-start">
          <SecondaryNav />
        </div> */}
      </div>
      </div>
    </>
  );
}
