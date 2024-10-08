import Image from "next/image";
import Link from "next/link";
import { NewsCleanedFields } from "@/app/interfaces";

interface newLocaleProps {
  locale: string;
}

export default function MediaCardHome({
  content,
  locale,
}: {
  content: NewsCleanedFields;
  locale: newLocaleProps | string;
}) {
  return (
    <Link href={content.slug} className="group relative block overflow-hidden">
      <article className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pb-6">
        {/* Image Column */}
        {/* <div className="col-span-1 relative hidden md:block" style={{ paddingBottom: "100%" }}>
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover object-center transition duration-300 ease-in-out group-hover:scale-140"
            src={content.thumbnail.url}
            alt="Featured article"
            layout="fill"
          />
        </div> */}

        {/* TEXT COLUMN START */}
        <div className="col-span-2 flex flex-col justify-center space-y-2">
          
          {/* PROGRAM LABEL START */}
          <div className="text-left">
              <p className="sans-serif font-bold text-lg">
                {content.sources.name}
              </p>
            </div>
          

          {/* PROGRAM LABEL END */}

          {/* TITLE OF POST ITEM START */}
          <div className="text-left">
            <h3 className="text-lg sans-serif group-hover:underline">
              {locale == "ar" ? content.arabicTitle : content.name}
            </h3>
          </div>
          {/* TITLE OF POST ITEM END */}

          {/* PUBLISHED DATE AND SOURCES CONTAINER */}
          <div className="flex space-x-2">
            {/* PUBLISHED DATE */}
            <div className="text-left">
              <p className="sans-serif font-normal text-sm">
                <time dateTime={content.datePublished}>{content.datePublished}</time>
              </p>
            </div>
            {/* SOURCES */}
            <div className="text-left">
              <p className="sans-serif font-normal text-sm">
                |
              </p>
            </div>

            <div className="text-left">
  <p className="sans-serif font-normal text-sm">
    {content.programme.shortname && (
      <>{content.programme.shortname}</>
    )}
  </p>
</div>

          </div>
          {/* END PUBLISHED DATE AND SOURCES CONTAINER */}
        </div>
        {/* TEXT COLUMN END */}
      </article>
    </Link>
  );
}
