import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Share } from "./Share";
import { SocialButton } from "./SocialButtons";
import { ArticleProps } from "@/app/interfaces";
import { PostFieldsCleaned } from "@/app/interfaces";
import SecondaryNav from "../ui/secondary-nav";
import ContentContainer from "./ContentContainer";
interface ArticleBanterProps {
  post: PostFieldsCleaned,
  styleType?: string
}
export default function ArticleBanter({ post, styleType }: ArticleBanterProps) {
  return (
<>

      <div className="pt-6 w-full mb-4">
      <h1 className="header-article leading-7 sm:leading-none pb-0 pt-12 lg:pb-4 lg:pt-4 lg:text-left">{post.name}</h1>
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
          <div className="mx-auto">
          <div className="pt-6">
            <div className="sans-serif text-lg">{post.datePublished}</div>
            </div>            
            <div>
              <div className="sans-serif text-lg">{post.location === 'N/A' ? '': post.location }</div>
              <div className="mx-auto leading-7 text-black dark:text-white prose prose-xl sans-serif font-normal dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
              </div>
            </div>
          </div>  
          <div className="pb-2">

          <div className="flex items-center">
  <div className="flex items-center bg-slate-100 px-1">
    {/* <span className="text-base sans-serif pr-1">To learn more visit</span> */}
    <div className="underline pr-1 hover:text-blue-800 hover:cursor-pointer">
      <Link href={`/programmes/${post.programme.slug}`}>{post.programme.name}</Link>
    </div>
    <div>
    <ArrowRightIcon className="h-4 w-4" />
  </div>
  </div>

</div>


          </div>
        </div>
        
        {/* <div className="sticky top-20 self-start">
          <SecondaryNav />
        </div> */}
      </div>
      </>
  );
}
