import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Share } from "./Share";
import { SocialButton } from "./SocialButtons";
import { ArticleProps } from "@/app/interfaces";
import SecondaryNav from "../ui/secondary-nav";

export default function ArticleBanter({ article }: ArticleProps) {
  return (
    <article className="pb-12 sm:pb-16 lg:pb-24">
      <div className="">
        <Image
          className=""
          src={article.image}
          alt={article.title}
          height={1080}
          width={1920}
        />
      </div>

      <div className="flex justify-around min-h-screen">
        <div className="px-5 lg:px-0">
          <div className="mx-auto mb-8  pb-8 pt-10 text-lg sm:pt-16">
            <Link
              href={article.category.url}
              className="relative mono text-xs font-medium uppercase"
            >
              {article.category.name}
            </Link>
            <h1 className="mt-3.5 costa text-4xl font-bold tracking-normal group-hover:underline sm:mt-5 sm:text-5xl sm:leading-tight md:tracking-tight lg:text-6xl">
              {article.title}
            </h1>
            <div className="mono text-sm pt-3">{article.date}</div>
            <div>
              <div className="mx-auto leading-7 text-black dark:text-white prose prose-xl serif font-normal dark:prose-invert">
                <div
                  dangerouslySetInnerHTML={{ __html: article.description }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-20 self-start">
          <SecondaryNav />
        </div>
      </div>
    </article>
  );
}
