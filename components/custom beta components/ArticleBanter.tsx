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
    <ContentContainer width="full" desktopWidth="medium">
<div className="flex justify-center">
  <div className="flex pt-12">
    <span className="mono text-sm font-normal uppercase">{post.programme.name}</span>
    <span className="mono text-sm font-normal uppercase px-3">•</span>
    <div className="mono text-sm font-normal uppercase">{post.datePublished}</div>
  </div>
</div>
      <div className="py-12 flex flex-col items-center justify-center mx-auto md:w-3/4">
      <h1 className="text-center text-4xl serif font-bold">{post.name}</h1>
      </div>
        <Image
          className=""
          src={post.mainImage.url}
          alt={post.name}
          height={1080}
          width={1920}
        />


      <div className="flex justify-around min-h-screen">
        <div className="px-5 lg:px-0">
          <div className="mx-auto mb-8  pb-8 pt-10 text-lg sm:pt-16">
             
            
            <div>
              <div className="mono text-sm font-normal uppercase">{post.location === 'N/A' ? '': post.location }</div>
              <div className="mx-auto leading-7 text-black dark:text-white prose prose-xl serif font-normal dark:prose-invert">
                <div
                  dangerouslySetInnerHTML={{ __html: post.body }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="sticky top-20 self-start">
          <SecondaryNav />
        </div> */}
      </div>
    </ContentContainer>
  );
}
