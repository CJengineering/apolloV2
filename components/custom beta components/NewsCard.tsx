import Image from "next/image";

import { NewsCleanedFields, NewsMainProps } from "@/app/interfaces";

interface newLocaleProps {
  locale: string;
}

export default function NewsCard({
  content,
  locale,
}: {
  content: NewsCleanedFields;
  locale: newLocaleProps | string;
}) {
  return (
    <article className="relative  ">
      <a
        href={content.slug}
        className="groupe relative z-10 block overflow-hidden  bg-gray-100"
        style={{ paddingBottom: "56.25%", position: "relative" }}
      >
        <div className="aspect-h-9 aspect-w-16">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover object-center transition duration-300 ease-in-out group-hover:scale-140"
            src={content.thumbnail.url}
            loading="lazy"
            width={500}
            height={500}
            alt="Featured article"
          />
        </div>
      </a>

      <div className="mt-6 md:align-middle">
        <div className="flex">
          <a
            href={content.name}
            className="mono text-sm font-normal cursor-pointer uppercase"
          >
            {content.programme.name}
          </a>
          {/* <div className="mono text-sm font-medium uppercase px-3"><span aria-hidden="true">|</span></div> */}
          {/* <a href={content.categoryLink} className="mono text-sm font-normal uppercase">news</a>*/}
        </div>
        <a href={content.slug} className="group mt-3 block">
          <h2 className="text-base sans-serif font-medium tracking-normal transition duration-300 ease-in-out group-hover:underline lg:text-2xl xl:text-2xl lg:leading-tight">
            {locale == "ar" ? content.arabicTitle : content.name}
          </h2>
        </a>

        <div className="mt-2 block">
          <div className="flex">
            <div>
              <p className="mono text-sm font-normal uppercase">
                {content.sources.name}
              </p>
            </div>
            <div className="mono text-sm font-normal uppercase px-3">
              <span aria-hidden="true">|</span>
            </div>
            <div>
              <p className="mono text-sm font-normal uppercase">
                <time dateTime={content.datePublished}>
                  {content.datePublished}
                </time>
                {/* <span>{content.readTime}</span> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
