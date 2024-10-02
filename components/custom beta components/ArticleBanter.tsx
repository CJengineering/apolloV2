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
    <div>
    <h1 className={`header-article leading-7 sm:leading-none pb-0 pt-12 lg:pb-4 lg:pt-4 lg:text-left flex-grow ${locale === "ar" ? "sans-serif-ar" : "sans-serif"}`}>
      {locale === 'ar' ? post.arabicTitle : post.name}
    </h1>
    </div>
    <div className={`pb-0 pt-12 lg:pb-4 lg:pt-4 ${locale === 'ar' ? 'mr-auto' : 'ml-auto'}`}>
      <LanguageChanger />
    </div>
  </div>
        <div className="flex items-start"></div>
        <Image
          className=""
          src={post.mainImage.url}
          alt={post.name}
          height={1080}
          width={1920}
        />

        <div className="flex justify-around">
          <div className="">
            <div className="mx-auto">
              <div className="pt-6">
                <div className="sans-serif text-lg">{post.datePublished}</div>
              </div>
              <div>
                <div className="sans-serif text-lg">
                  {post.location === "N/A" ? "" : post.location}
                </div>
                <div className={`pl-0 prose prose-2xl dark:prose-dark ${locale === "ar" ? "sans-serif-ar" : "sans-serif"}`}>
                <div dangerouslySetInnerHTML={{ __html: locale === 'ar' ? post.bodyArabic : post.body }}></div>
                </div>
            </div>
          </div>
          <div className="pb-2">
          {locale !== 'ar' && (
  <div className="flex items-center">
    <div className="h-3 w-3 bg-[#ad243a] mr-2"></div>
    <div>Learn more about</div>
    <div className="flex items-center bg-slate-100 px-1 group ml-2">
      <div className="underline pr-1 hover:text-blue-800 hover:cursor-pointer">
        <Link href={`/programmes/${post.programme.slug}`}>
          {post.programme.name}
        </Link>
      </div>
      <div className="transition-transform duration-300 ease-in-out group-hover:translate-x-[2px] group-hover:text-blue-800">
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
