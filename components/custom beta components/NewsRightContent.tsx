import Link from "next/link";
import React from "react";

interface NavLink {
  id: string;
  innerHTML: string;
}

interface NewsRightContentProps {
  source: string;
  datePublished: string;
  relatedProgrammes: { name: string; href: string }[];
  relatedPeople: { name: string; href: string }[];
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
    <div className="hidden xl:block w-48 shrink-0">
      {links.length > 0 && (
        <nav>
          <div className="fixed bottom-0 h-[calc(100vh-5rem)] pt-10 w-48 overflow-y-auto pb-8 no-scrollbar">
            <div className="border-l border-slate-200 dark:border-slate-800 py-2">
              <div className="text-xs font-[650] text-slate-400 uppercase pl-4 dark:text-slate-200">
                Source
              </div>
              <div className="relative block font-normal text-slate-600 pl-4 before:absolute before:-left-px before:top-2 before:bottom-2 before:w-0.5">
                {source}
              </div>
            </div>
            <div className="border-l border-slate-200 dark:border-slate-800 py-2">
              <div className="text-xs font-[650] text-slate-400 uppercase pl-4 dark:text-slate-200">
                Date published
              </div>
              <div className="relative block font-normal text-slate-600 pl-4 before:absolute before:-left-px before:top-2 before:bottom-2 before:w-0.5">
                {datePublished}
              </div>
            </div>
            <div className="border-l border-slate-200 dark:border-slate-800 py-2">
              <div className="text-xs font-[650] text-slate-400 uppercase pl-4 dark:text-slate-200">
                Related programmes
              </div>
              <div className="relative block font-normal text-slate-600 pl-4 before:absolute before:-left-px before:top-2 before:bottom-2 before:w-0.5">
                {relatedProgrammes.map((programme, index) => (
                  <Link
                    key={index}
                    href={programme.href}
                    className="underline hover:cursor-pointer mt-0"
                  >
                    {programme.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-l border-slate-200 dark:border-slate-800 mt-2">
              <div className="text-xs font-[650] text-slate-400 uppercase pl-4 dark:text-slate-200">
                Related people
              </div>
              <div className="relative block font-normal text-slate-600 pl-4 before:absolute before:-left-px before:top-2 before:bottom-2 before:w-0.5">
                <ul>
                  {relatedPeople.map((person, index) => (
                    <li key={index}>
                      <Link
                        href={person.href}
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
