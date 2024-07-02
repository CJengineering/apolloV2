import Link from "next/link";
import React from "react";

interface NavLink {
  id: string;
  innerHTML: string;
}

interface NewsRightContentProps {
  source: string;
  datePublished: string;
  relatedProgrammes: { name: string; slug: string }[];
  relatedPeople: { name: string; slug: string }[];
}

const links: NavLink[] = [
  { id: "section1", innerHTML: "Section 1" },
  { id: "section2", innerHTML: "Section 2" },
];

const NewsRightContent: React.FC<NewsRightContentProps> = ({
  source,
  datePublished,
  relatedProgrammes,
  relatedPeople,
}) => {
  return (
    <div className="hidden xlc:block 2xl:w-64 lg:w-32 shrink-0 ">
      {links.length > 0 && (
        <nav className="">
          <div className="2xl:right-[2%]  xl:right-[1px] bottom-0  pt-10 w-48 overflow-y-auto pb-8 no-scrollbar">
            <div className="mb-3">
              <div className="text-xs font-normal mono uppercase">source</div>
              <div className="sans-serif text-base font-normal">{source}</div>
            </div>
            <div className="mb-3">
              <div className="text-xs font-normal mono uppercase">date published</div>
              <div className="sans-serif text-base font-normal">{source}</div>
                       
            </div>
            <div className="mb-3">
              <div className="text-xs font-normal mono uppercase">related lab</div>
              <div className="sans-serif text-base font-normal">   
              {relatedProgrammes.map((programme, index) => (
                  <Link
                    key={index}
                    href={`/programmes/${programme.slug}`}
                    className="underline hover:cursor-pointer mt-0"
                  >
                    {programme.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <div className="text-xs font-normal mono uppercase">relate people</div>
              <div className="sans-serif text-base font-normal">
              <ul>
                  {relatedPeople.map((person, index) => (
                    <li key={index}>
                      <Link
                        href={`/people/${person.slug}`}
                        className="underline hover:cursor-pointer mt-0"
                      >
                        {person.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NewsRightContent;
