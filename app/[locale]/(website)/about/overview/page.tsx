import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";

export const metadata: Metadata = customMetaDataGenerator({
  title: "Overview",
  description:
    "Community Jameel supports a community of scientists, humanitarians, technologists and creatives. Working together through centres, funds, scholarships and projects, we are advancing science to help communities thrive in a rapidly changing world.",
  ogType: "website",
  ogImage:
    "https://uploads-ssl.webflow.com/612cdb8a4fac760705621df5/61e6a0e2e87bc0f8945a1f63_COPYRIGHT.jpg",
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "Community"],
});

export default async function OverviewContent({
  params,
}: {
  params: {
    topic: string;
    slug: string;
  };
}) {
  const post = {
    title: "Community Jameel",
    summary:
      "Community Jameel advances science and learning for communities to thrive.  ",
    topic: {
      name: "Home",
      slug: "javascript",
    },
    prev: {
      name: "Promises in JavaScript",
      slug: "promises-in-javascript",
    },
    next: {
      name: "JavaScript Event Loop",
      slug: "javascript-event-loop",
    },
  };

  if (!post) notFound();

  return (
    <>
  
        <div className="w-full">
          <div>
          <h1 className="header-page pb-0 pt-20 lg:pb-0 lg:pt-10 lg:text-left">
            Overview
          </h1>
          </div>
          <article className="leading-7 text-black dark:text-white prose prose-lg serif font-normal dark:prose-invert">
            <div className="text-rich-text w-richtext">
              <p className="prose prose-2xl sans-serif leading-normal text-black dark:text-white ">
                Community Jameel advances science and learning for communities
                to thrive.
              </p>
              <p className="prose prose-lg sans-serif leading-normal  dark:text-white">
                An independent, global organisation, Community Jameel launched
                in 2003 to continue the tradition of philanthropy and community
                service established by the Jameel family of Saudi Arabia in
                1945.
              </p>
              <p className="prose prose-lg sans-serif leading-normal dark:text-white">
                We support scientists, humanitarians, technologists and
                creatives to understand and address pressing human challenges.
                The work enabled and supported by Community Jameel has led to
                significant breakthroughs, including the{" "}
                <a href="https://www.jclinic.mit.edu/" className="link">
                  MIT Jameel Clinic
                </a>
                's discovery of the new antibiotics halicin and abaucin,
                critical modelling of the spread of COVID-19 conducted by the{" "}
                <a
                  href="https://www.imperial.ac.uk/jameel-institute"
                  className="link"
                >
                  Jameel Institute
                </a>{" "}
                at Imperial College London, and a Nobel Prize-winning
                experimental approach to alleviating global poverty championed
                by the co-founders of the{" "}
                <a href="https://www.povertyactionlab.org/" className="link">
                  Abdul Latif Jameel Poverty Action Lab
                </a>{" "}
                (J-PAL).
              </p>
              <p className="prose prose-lg sans-serif leading-normal  dark:text-white">
                Community Jameel is separate and distinct<strong> </strong>
                from{" "}
                <a href="https://www.communityjameelsaudi.org/">
                  Community Jameel Saudi
                </a>
                , a civil society organisation registered with number 59 with
                the Ministry of Human Resources and Social Development in the
                Kingdom of Saudi Arabia.{" "}
              </p>
              <p className="prose sans-serif prose-2xl text-black font-medium dark:text-white">
                A tradition since 1945...
              </p>
              <p className="prose prose-lg sans-serif leading-normal  dark:text-white">
                In 2020, the Jameel family marked 75 years of business and
                philanthropy by committing to advancing the United Nations
                Sustainable Development Goals. For more about the past 75 years,
                and the family's vision for the future, visit{" "}
                <a
                  href="http://www.jameel75.com"
                  target="_blank"
                  className="link"
                >
                  jameel75.com
                </a>
                .
              </p>
            </div>
          </article>


          
        </div>

        <article>
          <div className="flex justify-start py-6">
            <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-lg">
              <Link href="/community" className="flex items-center group">
                <p className="prose sans-serif prose-2xl dark:text-white group-hover:underline ">
                  Community
                </p>
                <ArrowRightIcon className="w-5 h-5 ml-2 text-black dark:text-white" />
              </Link>
              <Link href="/about/team" className="flex items-center group">
                <p className="prose sans-serif prose-2xl dark:text-white group-hover:underline">
                  Team
                </p>
                <ArrowRightIcon className="w-5 h-5 ml-2 text-black dark:text-white" />
              </Link>
              <Link
                href="https://jameel75.com/en"
                target="_blank"
                className="flex items-center group"
              >
                <p className="prose sans-serif prose-2xl  dark:text-white group-hover:underline">
                  Jameel 75
                </p>
                <ArrowRightIcon className="w-5 h-5 ml-2 text-black dark:text-white" />
              </Link>
            </div>
          </div>
        </article>
        <div className="py-24"></div>

    </>
  );
}
