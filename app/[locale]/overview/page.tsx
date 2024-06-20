import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

import Hamburger from "@/components/ui/hamburger";

import Footer from "@/components/ui/footer";

import HeroBanter from "@/components/custom beta components/HeroBanter";
import image from "@/public/images/mapCJ.webp";
import SectionBanter from "@/components/custom beta components/SectionBanter";

import cancerImage from "@/public/images/imagesCJ/FACT Alliance_J-WAFS.png";

import CardHorizontal from "@/components/CJ-components/components-CJ/basic components/CardHorizontal";
import Link from "next/link";
import MainContainer from "@/components/custom beta components/MainContainer";
import ContentContainer from "@/components/custom beta components/ContentContainer";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) return;

  const { title, summary: description } = post;

  return {
    title,
    description,
  };
}

export default async function OverviewContent({
  params,
}: {
  params: {
    topic: string;
    slug: string;
  };
}) {
  const post = {
    title: "Community  Jameel",
    summary:
      "A deep dive into how async/await works in JavaScript, with examples and best practices.",
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
  const heroProps = {
    backgroundImageUrl: image.src,
    overlayColor: "bg-gray-400/80",
    subTitle: "Community Jameel",
    title: "Overview",
  };

  if (!post) notFound();

  return (
    <MainContainer isSideBar={false}>
      <ContentContainer>
        <HeroBanter content={heroProps} />

        <SectionBanter title={""}>
          <article className="prose w-full text-slate-600 dark:text-slate-400 max-w-none prose-p:leading-normal prose-headings:text-slate-800 dark:prose-headings:text-slate-200 prose-a:font-medium prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 dark:prose-strong:text-slate-100 prose-code:text-slate-800 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 dark:prose-code:text-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700 prose-headings:scroll-mt-24">
            <div className="text-rich-text w-richtext">
              <p>
                Community Jameel advances science and learning for communities
                to thrive.{" "}
              </p>
              <p>
                An independent, global organisation, Community Jameel launched
                in 2003 to continue the tradition of philanthropy and community
                service established by the Jameel family of Saudi Arabia in
                1945.
              </p>
              <p>
                We support scientists, humanitarians, technologists and
                creatives to understand and address pressing human challenges.
                The work enabled and supported by Community Jameel has led to
                significant breakthroughs, including the{" "}
                <a href="https://www.jclinic.mit.edu/" className="link">
                  MIT&nbsp;Jameel Clinic
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
                  Abdul Latif Jameel Poverty Action&nbsp;Lab
                </a>{" "}
                (J-PAL).
              </p>
              <p>
                Community Jameel is separate and distinct<strong> </strong>
                from{" "}
                <a href="https://www.communityjameelsaudi.org/">
                  Community Jameel Saudi
                </a>
                , a civil society organisation registered with number 59 with
                the Ministry of Human Resources and Social Development in the
                Kingdom of Saudi Arabia.{" "}
              </p>
              <h2>A tradition since 1945</h2>
              <p>
                In 2020, the Jameel family marked 75 years of business and
                philanthropy by committing to advancing the United Nations
                Sustainable Development Goals. For more about the past 75 years,
                and the family's vision for the future, visit&nbsp;
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
        </SectionBanter>
        <SectionBanter title="">
          <div className="flex gap-6">
            <Link href={"/community"} className=" group cursor-pointer">
              <CardHorizontal imageUrl={image} />
              <div className="costa group-hover:text-purple-500 group-hover:">
                Community
              </div>
            </Link>
            <Link href={"/community"} className=" group cursor-pointer">
              <CardHorizontal imageUrl={image} />
              <div className="costa group-hover:text-purple-500">People</div>
            </Link>
            <Link href={"/community"} className=" group cursor-pointer">
              <CardHorizontal imageUrl={image} />
              <div className="costa group-hover:text-purple-500">Jameel 75</div>
            </Link>
          </div>
        </SectionBanter>
      </ContentContainer>
    </MainContainer>
  );
}
