import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Share } from "./Share";
import { SocialButton } from "./SocialButtons";
import { ArticleProps } from "@/app/interfaces";
import { PostFieldsCleaned } from "@/app/interfaces";
import SecondaryNav from "../ui/secondary-nav";
import ContentContainer from "./ContentContainer";
interface ArticleBanterProps {
  post: PostFieldsCleaned
}
export default function ArticleBanter({ post }: ArticleBanterProps) {
  return (
<>

      <div className="pt-6 w-full mb-4">
      <h1 className="header-article leading-none pb-0 pt-12 lg:pb-4 lg:pt-4 lg:text-left">{post.name}</h1>
      </div>
      <div className="flex items-start">

      </div>
        <Image
          className=""
          src={post.mainImage.url}
          alt={post.name}
          height={1080}
          width={1920}
        />

      <div className="flex justify-around">
        <div className="">
          <div className="mx-auto pt-3">
          <div className="py-3">
            <div className="sans-serif text-base font-normal">{post.datePublished}</div>
            </div>            
            <div>
              <div className="sans-serif text-base sm:text-base font-normal">{post.location === 'N/A' ? '': post.location }</div>
              <div className="mx-auto leading-7 text-black dark:text-white prose prose-xl sans-serif font-normal dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
              </div>
            </div>
          </div>  
          <div className="pb-2"><span className="sans-serif text-base px-1 bg-slate-100">{post.programme.name}</span></div>
        </div>
        
        {/* <div className="sticky top-20 self-start">
          <SecondaryNav />
        </div> */}
      </div>
      </>
  );
}
