import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx/mdx";
import TopicTitle from "@/components/ui/topic-title";
import Hamburger from "@/components/ui/hamburger";
import Feedback from "@/components/ui/feedback";
import PageNavigation from "@/components/ui/page-navigation";
import Footer from "@/components/ui/footer";
import SecondaryNav from "@/components/ui/secondary-nav";
import HeaderBeta from "@/components/custom beta components/headerBeta";
import HomeIcons from "@/components/custom beta components/homeIcons";
import HomePageBeta from "@/components/custom beta components/homePageBeta";
import TrandingTopics from "@/components/custom beta components/trandingTopics";
import EventSection from "@/components/custom beta components/eventSection";
import HeroBanter from "@/components/custom beta components/HeroBanter";
import image from "@/public/images/mapCJ.webp";
import SectionBanter from "@/components/custom beta components/SectionBanter";
import NewsMain, {
  NewsMainProps,
} from "@/components/custom beta components/NewsMain";
import cancerImage from "@/public/images/imagesCJ/FACT Alliance_J-WAFS.png";
import FeatureCard from "@/components/custom beta components/FeatureCard";
import NewsSmall from "@/components/custom beta components/NewsSmall";
import CardHorizontal from "@/components/CJ-components/components-CJ/basic components/CardHorizontal";
import Link from "next/link";
const articleData: NewsMainProps = {
  tag: "Technology",
  title: "Apple to Turn IPhones Into Payment Terminals in Fintech Push",
  description:
    "Apple Inc is introducing a new feature that will allow businesses to accept credit card and digital payments with just a tap on their iPhones, bypassing hardware systems such as Block Inc's Square terminals.",
  authorName: "Mark Jack",
  date: "2021-12-16",
  readTime: "6 min",
  postLink: "post.html",
  categoryLink: "category.html",
  authorLink: "author.html",
  postImage: cancerImage.src,
  authorImage:
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
};
const articles = [
  {
    id: "1",
    title: "Prepare to Shell Out for Warehouse Space -- If You Can Find It",
    description:
      "The demand for warehouse space is skyrocketing as e-commerce continues to grow.",
    category: "Economic outlook",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Warehouse+Space",
    author: {
      name: "Taylor Adams",
      imageUrl: "https://via.placeholder.com/150.png?text=Taylor+Adams",
      date: "2023-05-29",
      readTime: "5 min read",
    },
  },
  {
    id: "2",
    title: "Tech Giants are Investing in Renewable Energy",
    description:
      "Tech companies are leading the way in renewable energy investments to combat climate change.",
    category: "Technology",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Renewable+Energy",
    author: {
      name: "Jordan Lee",
      imageUrl: "https://via.placeholder.com/150.png?text=Jordan+Lee",
      date: "2023-05-28",
      readTime: "7 min read",
    },
  },
  {
    id: "3",
    title: "The Future of Remote Work",
    description:
      "Remote work is here to stay. Learn how companies are adapting to this new trend.",
    category: "Workplace",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Remote+Work",
    author: {
      name: "Alex Morgan",
      imageUrl: "https://via.placeholder.com/150.png?text=Alex+Morgan",
      date: "2023-05-27",
      readTime: "6 min read",
    },
  },
  {
    id: "4",
    title: "Advancements in AI Technology",
    description:
      "AI technology is evolving rapidly, impacting various industries around the world.",
    category: "Artificial Intelligence",
    imageUrl: "https://via.placeholder.com/600x400.png?text=AI+Technology",
    author: {
      name: "Sam Taylor",
      imageUrl: "https://via.placeholder.com/150.png?text=Sam+Taylor",
      date: "2023-05-26",
      readTime: "8 min read",
    },
  },
  {
    id: "5",
    title: "How to Improve Cybersecurity in Your Organization",
    description:
      "Cybersecurity is more important than ever. Here are some tips to keep your organization safe.",
    category: "Cybersecurity",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Cybersecurity",
    author: {
      name: "Morgan Brown",
      imageUrl: "https://via.placeholder.com/150.png?text=Morgan+Brown",
      date: "2023-05-25",
      readTime: "5 min read",
    },
  },
];
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
    <>
      {/* Page header */}

      <article className="flex xl:space-x-12">
        {/* Main area */}
        <div className="min-w-0">
          {/* Mobile hamburger + breadcrumbs */}
          <div className="md:hidden mt-4 flex items-center mb-4 ">
            <Hamburger />

            {/* Breadcrumbs */}
            <div className="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
              <span className="text-slate-600 dark:text-slate-400">
                {post.topic.name}
              </span>
              <svg
                className="fill-slate-400 shrink-0 mx-2 dark:fill-slate-500"
                width="8"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
              </svg>
              <span className="text-slate-800 font-medium truncate dark:text-slate-200">
                {post.title}
              </span>
            </div>
          </div>

          {/* Article content */}
          <div className="md:mt-10">
            <HeroBanter content={heroProps} />

            <SectionBanter title={""}>
              <article className="prose w-full text-slate-600 dark:text-slate-400 max-w-none prose-p:leading-normal prose-headings:text-slate-800 dark:prose-headings:text-slate-200 prose-a:font-medium prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 dark:prose-strong:text-slate-100 prose-code:text-slate-800 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 dark:prose-code:text-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700 prose-headings:scroll-mt-24">
                <div className="text-rich-text w-richtext">
                  <p>
                    Community Jameel advances science and learning for
                    communities to thrive.{" "}
                  </p>
                  <p>
                    An independent, global organisation, Community Jameel
                    launched in 2003 to continue the tradition of philanthropy
                    and community service established by the Jameel family of
                    Saudi Arabia in 1945.
                  </p>
                  <p>
                    We support scientists, humanitarians, technologists and
                    creatives to understand and address pressing human
                    challenges. The work enabled and supported by Community
                    Jameel has led to significant breakthroughs, including the{" "}
                    <a href="https://www.jclinic.mit.edu/" className="link">
                      MIT&nbsp;Jameel Clinic
                    </a>
                    's discovery of the new antibiotics halicin and abaucin,
                    critical modelling of the spread of COVID-19 conducted by
                    the{" "}
                    <a
                      href="https://www.imperial.ac.uk/jameel-institute"
                      className="link"
                    >
                      Jameel Institute
                    </a>{" "}
                    at Imperial College London, and a Nobel Prize-winning
                    experimental approach to alleviating global poverty
                    championed by the co-founders of the{" "}
                    <a
                      href="https://www.povertyactionlab.org/"
                      className="link"
                    >
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
                    , a civil society organisation registered with number 59
                    with the Ministry of Human Resources and Social Development
                    in the Kingdom of Saudi Arabia.{" "}
                  </p>
                  <h2>A tradition since 1945</h2>
                  <p>
                    In 2020, the Jameel family marked 75 years of business and
                    philanthropy by committing to advancing the United Nations
                    Sustainable Development Goals. For more about the past 75
                    years, and the family's vision for the future, visit&nbsp;
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
                  <div className="costa group-hover:text-purple-500 group-hover:">Community</div>
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
          </div>

          {/* Feedback */}

          {/* Page navigation */}

          {/* Content footer */}
          <Footer />
        </div>

        {/* Secondary navigation */}
        {/*        <SecondaryNav />*/}
      </article>
    </>
  );
}
