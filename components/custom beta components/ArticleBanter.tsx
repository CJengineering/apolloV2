import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Share } from "./Share";
import { SocialButton } from "./SocialButtons";
import { ArticleProps } from "@/app/interfaces";

export default function ArticleBanter({ article }: ArticleProps) {
  return (
    <article className="bg-gray-50 pb-12 sm:pb-16 lg:pb-24">
      {/* Post Header */}
      <header>
        {/* Image */}
        <div className="  bg-gray-100 sm:aspect-h-1">
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
          <div className="mx-auto mb-8 max-w-prose border-b border-gray-300/70 pb-8 pt-10 text-lg sm:pt-16">
            <Link
              href={article.category.url}
              className="relative text-sm font-medium uppercase tracking-widest text-red-700 transition-colors duration-300 ease-in-out hover:text-red-600"
            >
              {article.category.name}
            </Link>
            <h2 className="mt-3.5 text-4xl font-medium tracking-normal text-gray-900 decoration-red-300 decoration-3 transition duration-300 ease-in-out group-hover:underline sm:mt-5 sm:text-5xl sm:leading-tight md:tracking-tight lg:text-6xl">
              {article.title}
            </h2>
            <div>
              <div className="prose mx-auto sm:prose-lg first-letter:text-4xl first-letter:font-bold first-letter:tracking-[.15em] prose-a:transition prose-a:duration-300 prose-a:ease-in-out hover:prose-a:text-red-700 prose-img:rounded-xl">
                <div
                  dangerouslySetInnerHTML={{ __html: article.description }}
                ></div>
              </div>
            </div>

            {/* Author meta */}
          </div>
        </div>
      </header>
    </article>
  );
}
