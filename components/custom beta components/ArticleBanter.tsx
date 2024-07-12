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

      <div className="pt-3 md:pt-12 flex flex-col items-start md:w-5/6">
      <h1 className="text-left text-2xl md:text-4xl serif font-medium">{post.name}</h1>
      </div>
      <div className="flex items-start">
  <div className="flex mt-3 mb-12 md:mt-6">
  <span className="mono text-sm font-normal uppercase">news</span>
  <span className="mono text-sm font-normal uppercase mx-3">•</span>
    <span className="mono text-sm font-normal uppercase bg-slate-100 px-1">{post.programme.name}</span>
    <span className="mono text-sm font-normal uppercase mx-3">•</span>
    <div className="mono text-sm font-normal uppercase">{post.datePublished}</div>
  </div>
</div>
        <Image
          className=""
          src={post.mainImage.url}
          alt={post.name}
          height={1080}
          width={1920}
        />

      <div className="flex justify-around min-h-screen">
        <div className="lg:px-0">
          <div className="mx-auto pt-12 text-lg">            
            <div>
              <div className="mono text-sm font-normal uppercase">{post.location === 'N/A' ? '': post.location }</div>
              <div className="mx-auto leading-7 text-black dark:text-white prose prose-xl serif font-normal dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
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
