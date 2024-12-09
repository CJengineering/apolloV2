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
    <div className="mt-6">
      {/* <div className="mb-6 flex items-center space-x-2">
        <div className="mono uppercase text-sm font-normal">{source}</div>
        <span>•</span>
        <div className="mono uppercase text-sm font-normal">{datePublished}</div>
      </div> */}

      {/* <div className="mb-6">
        <div className="text-xs font-normal mono uppercase">media outlet</div>
        <div className="sans-serif text-base font-normal">
          <ul>
            {relatedProgrammes.map((programme, index) => (
              <li key={index}>
                <p>{source}</p>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      
      <div className="mb-6">
        <div className="text-xs font-normal mono uppercase">media outlet</div>
        <div className="sans-serif text-base font-normal">
          <ul>
            <li>
              <p>{source}</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-xs font-normal mono uppercase">programme</div>
        <div className="sans-serif text-base font-normal">
          <ul>
            {relatedProgrammes.map((programme, index) => (
              <li key={index}>
                <Link
                  key={index}
                  href={`/programmes/${programme.slug}`}
                  className="hover:cursor-pointer hover:underline mt-0"
                >
                  {programme.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {relatedPeople.length > 0 && (
        <div className="mb-3">
          <div className="text-xs font-normal mono uppercase">people</div>
          <div className="sans-serif text-base font-normal">
            <ul>
              {relatedPeople.map((person, index) => (
                <li key={index}>
                  <Link
                    key={index}
                    href={`/people/${person.slug}`}
                    className="hover:cursor-pointer hover:underline mt-0"
                  >
                    {person.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default NewsRightContent;
