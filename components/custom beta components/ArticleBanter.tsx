import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Share } from "./Share";
import { SocialButton } from "./SocialButtons";
import { ArticleProps } from "@/app/interfaces";

export default function ArticleBanter({ article }: ArticleProps) {
  return (
    <article className="pb-12 sm:pb-16 lg:pb-24">
      {/* Post Header */}
      <header>
        {/* Image */}
        <div className="">
          <Image
            className=""
            src={article.image}
            alt={article.title}
            height={1080}
            width={1920}
          />
        </div>

        {/* Post Header Content */}
        <div className="px-5 lg:px-0">
          {/* Article Information */}
          <div className="mx-auto mb-8 max-w-prose pb-8 pt-10 text-lg sm:pt-16">
            <Link
              href={article.category.url}
              className="relative mono text-xs font-medium uppercase"
            >
              {article.category.name}
            </Link>
            <h2 className="mt-3.5 costa text-4xl font-bold tracking-normal group-hover:underline sm:mt-5 sm:text-5xl sm:leading-tight md:tracking-tight lg:text-6xl">
              {article.title}
            </h2>
            <div>
              <div className="mx-auto serif font-normal prose prose-base prose-a:font-normal sm:prose-xl">
                <div
                  dangerouslySetInnerHTML={{ __html: article.description }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </article>
  );
}
