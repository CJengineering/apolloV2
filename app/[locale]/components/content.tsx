import Accordion from "@/components/CJ-components/components-CJ/basic components/Accordion";
import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";
import CardHorizontal from "@/components/CJ-components/components-CJ/basic components/CardHorizontal";
import CardProgramme from "@/components/CJ-components/components-CJ/basic components/CardProgramme";
import CardSquaredImage from "@/components/CJ-components/components-CJ/basic components/CardSquared";
import CarousselMIT from "@/components/CJ-components/components-CJ/basic components/CarousselMIT";
import ListContent from "@/components/CJ-components/components-CJ/basic components/ListContent";
import ListSmall from "@/components/CJ-components/components-CJ/basic components/ListSmall";
import SocialMediaList from "@/components/CJ-components/components-CJ/basic components/SocialMediaList";
import Stats from "@/components/CJ-components/components-CJ/basic components/Stats";
import TableCJ from "@/components/CJ-components/components-CJ/custom components/TableCJ";
import TabsCJ from "@/components/CJ-components/components-CJ/custom components/TabsCJ";
import SectionUnderline from "@/components/CJ-components/components-CJ/layout/SectionUnderline";
import SourceContainer from "@/components/CJ-components/components-CJ/layout/SourceContainer";
import Header4 from "@/components/CJ-components/components-CJ/typography/Header4";
import cancerImage from "@/public/images/imagesCJ/FACT Alliance_J-WAFS.png";
import NewsMain from "@/components/custom beta components/NewsMain";
import testImage from "@/public/images/content-image-01.jpg";
import NewsSmall from "@/components/custom beta components/NewsSmall";
import SocialMedia from "@/components/custom beta components/SocialMedia";
import PopularTags from "@/components/custom beta components/PopularTags";
import EventCard from "@/components/custom beta components/EventCard";
import HeroBanter from "@/components/custom beta components/HeroBanter";
import SyndicationPartners from "@/components/custom beta components/SectionBanter";
import LogoLink from "@/components/custom beta components/LogoLink";
import laravelLogo from "@/public/images/logos/laravel.svg";
import PersonalCard from "@/components/custom beta components/PersonCard";
import { ListOrdered } from "lucide-react";

import CodeBlock from "@/components/CJ-components/components-CJ/basic components/CodeBlock";
import { EventCardProps, NewsMainProps } from "@/app/interfaces";
import ModalVideo from "@/components/mdx/modal-video";
import ModalVideoYoutube from "@/components/custom beta components/ModalVideoYoutube";
const author = {
  name: "Mark Jackson",
  imageUrl: "https://via.placeholder.com/150.png?text=Mark+Jackson",
  position: "Senior Writer",
  order: 1,
};

const socialPlatforms = [
  "Twitter",
  "Facebook",
  "Instagram",
  "Linkedin",
  "Github",
];
const data = { news: ["name one", "name two"] };
const events: EventCardProps[] = [
  {
    id: "1",
    name: "Prepare to Shell Out for Warehouse Space -- If You Can Find It",
    description:
      "The demand for warehouse space is skyrocketing as e-commerce continues to grow.",
    programme: "Economic outlook",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Warehouse+Space",
    source: {
      name: "Taylor Adams",
      imageUrl: "https://via.placeholder.com/150.png?text=Taylor+Adams",
      date: "2023-05-29",
      readTime: "5 min read",
    },
  },
  {
    id: "2",
    name: "Tech Giants are Investing in Renewable Energy",
    description:
      "Tech companies are leading the way in renewable energy investments to combat climate change.",
    programme: "Technology",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Renewable+Energy",
    source: {
      name: "Jordan Lee",
      imageUrl: "https://via.placeholder.com/150.png?text=Jordan+Lee",
      date: "2023-05-28",
      readTime: "7 min read",
    },
  },
  {
    id: "3",
    name: "The Future of Remote Work",
    description:
      "Remote work is here to stay. Learn how companies are adapting to this new trend.",
    programme: "Workplace",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Remote+Work",
    source: {
      name: "Alex Morgan",
      imageUrl: "https://via.placeholder.com/150.png?text=Alex+Morgan",
      date: "2023-05-27",
      readTime: "6 min read",
    },
  },
  {
    id: "4",
    name: "Advancements in AI Technology",
    description:
      "AI technology is evolving rapidly, impacting various industries around the world.",
    programme: "Artificial Intelligence",
    imageUrl: "https://via.placeholder.com/600x400.png?text=AI+Technology",
    source: {
      name: "Sam Taylor",
      imageUrl: "https://via.placeholder.com/150.png?text=Sam+Taylor",
      date: "2023-05-26",
      readTime: "8 min read",
    },
  },
  {
    id: "5",
    name: "How to Improve Cybersecurity in Your Organization",
    description:
      "Cybersecurity is more important than ever. Here are some tips to keep your organization safe.",
    programme: "Cybersecurity",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Cybersecurity",
    source: {
      name: "Morgan Brown",
      imageUrl: "https://via.placeholder.com/150.png?text=Morgan+Brown",
      date: "2023-05-25",
      readTime: "5 min read",
    },
  },
];

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
const heroProps = {
  backgroundImageUrl:
    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
  overlayColor: "bg-gray-800/80",
  subTitle: "About Banter",
  title:
    "Illuminating today's stories on culture, business, and science through great journalism.",
};
const articleData: NewsMainProps = {
  tag: "Technology",
  arabicTitle: "Technology in narabic",
  title: "Apple to Turn IPhones Into Payment Terminals in Fintech Push",
  description:
    "Apple Inc is introducing a new feature that will allow businesses to accept credit card and digital payments with just a tap on their iPhones, bypassing hardware systems such as Block Inc's Square terminals.",
  source: "Mark Jack",
  datePublished: "2021-12-16",
  readTime: "6 min",
  postLink: "post.html",
  categoryLink: "category.html",
  authorLink: "author.html",
  postImage: cancerImage.src,
  authorImage:
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
};
const imageLinks = [
  "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
  "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
  "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
  "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
  "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
  "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
  "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg",
];
const popularTags = [
  "Trends",
  "Tips",
  "Ideas",
  "Security",
  "Gaming",
  "Climate",
  "Culture",
  "Books",
  "Gear",
  "Reviews",
];

const socialMediaLinks = {
  instagram: {
    url: "https://instagram.com/yourprofile",
    name: "Instagram",
  },
  youtube: {
    url: "https://youtube.com/yourchannel",
    name: "YouTube",
  },
};
const components = [
  {
    key: "component1",
    element: (
      <CardProgramme
        imageUrl={testImage.src}
        programmeTitle="J-PAL"
        programmeType="abdul latif jameel poverty action lab"
        altText={""}
        order = {'1'}
      />
    ),
  },
  {
    key: "component2",
    element: (
      <CardProgramme
        imageUrl={testImage.src}
        programmeTitle="J-PAL"
        altText="J-PAL"
        programmeType="abdul latif jameel poverty action lab"
        order = {'2'}
      />
    ),
  },
  {
    key: "component3",
    element: (
      <CardProgramme
        imageUrl={testImage.src}
        programmeTitle="J-PAL"
        altText="J-PAL"
        programmeType="abdul latif jameel poverty action lab"
        order = {'3'}
      />
    ),
  },
  {
    key: "component4",
    element: (
      <CardProgramme
        imageUrl={testImage.src}
        programmeTitle="J-PAL"
        programmeType="abdul latif jameel poverty action lab"
        altText={""}
        order = {'4'}
      />
    ),
  },
  {
    key: "component5",
    element: (
      <CardProgramme
        imageUrl={testImage.src}
        programmeTitle="J-PAL"
        programmeType="abdul latif jameel poverty action lab"
        altText={""}
        order = {'5'}
      />
    ),
  },
  {
    key: "component6",
    element: (
      <CardProgramme
        imageUrl={testImage.src}
        programmeTitle="J-PAL"
        programmeType="abdul latif jameel poverty action lab"
        altText={""}
        order = {'6'}
      />
    ),
  },
  {
    key: "component7",
    element: (
      <CardProgramme
        imageUrl={testImage.src}
        programmeTitle="J-PAL"
        programmeType="abdul latif jameel poverty action lab"
        altText={""}
        order = {'7'}
      />
    ),
  },
];
const carouselContent = components.map((component) => (
  <div key={component.key}>{component.element}</div>
));

export default async function HomeComponents() {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-9 sm:px-6 lg:px-8">
        <h1 className={`font-ibmMono text-4xl`}>Basic icons</h1>
        <ul role="list" className="">
          <li className="py-9">
            <div className="block">
              <div className="w-[400px]">
                <div>
                  <h2 className="mb-3 font-ibmMono text-2xl text-red-600 ">
                    CardProgramme
                  </h2>
                  it has an image, a title and a subtitle
                </div>
                <div className="">
                  <CardProgramme
                    imageUrl={testImage.src}
                    altText={""}
                    programmeTitle="J-PAL"
                    programmeType="abdul latif jameel poverty action lab"
                      order="1"
                  />
                </div>
              </div>
              <div className="flex"></div>
            </div>
          </li>
          <li className="py-9">
            <div className="block">
              <div className="w-[400px]">
                <div>
                  <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                    Card 16:9
                  </h2>
                  <p className="mb-6">
                    The Card 16:9 component has an aspect ratio of 16:9 and has
                    a width that adapts to the constraints of its parent
                    wrapper. It also has an icon at the top right which can be
                    changed dynamically based on the type of content it relates
                    to.
                  </p>
                </div>
                <div className="">
                  <CardHorizontal imageUrl={testImage} />
                </div>
              </div>
              <div className=""></div>
            </div>
          </li>

          <li className="py-9">
            <div className="block">
              <div className="w-[400px]">
                <div>
                  <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                    Card 1:1
                  </h2>
                  <p className="mb-6">
                    The Card 1:1 component has an aspect ratio of 1:1 and has a
                    width that adapts to the constraints of its parent wrapper.
                    It also has an icon at the top right which can be changed
                    dynamically based on the type of content it relates to.
                  </p>
                </div>
                <div className="">
                  <CardSquaredImage imageUrl={testImage} />
                </div>
              </div>
              <div className="flex"></div>
            </div>
          </li>
          <li className="py-9">
            <div className="block">
              <div className="w-[400px]">
                <div>
                  <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                    Card 1:1 + text on right
                  </h2>
                  <Header4>Text</Header4>
                </div>
                <div className="">
                  <SectionUnderline>
                    <CardSquaredImage imageUrl={testImage} />
                    <h1 className="text-3xl">Section Underline</h1>
                  </SectionUnderline>
                </div>
              </div>
              <div className="flex"></div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex gap-5">
              <div className="w-[400px]">
                <div className="">
                  <SourceContainer
                    source="New York Times"
                    date={new Date(2024, 1, 16)}
                  />
                  <SourceContainer source="BBC News" date="16 February 2024" />
                </div>
              </div>
              <div className="flex">
                <div>
                  <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                    Card programme
                  </h2>
                  <p className="mb-6 ">Now its just Image card</p>
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex gap-5">
              <div className="w-[400px]">
                <div className="">
                  <ButtonCJ href={"#"} text={"Click Me"} />
                </div>
              </div>
              <div className="flex">
                <div>
                  <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                    Card programme
                  </h2>
                  <p className="mb-6 ">Now its just Image card</p>
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex gap-5">
              <div className="w-[400px]">
                <div className="">
                  <Stats title="$21M" content="research grants" />
                </div>
              </div>
              <div className="flex">
                <div>
                  <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                    Card programme
                  </h2>
                  <p className="mb-6 ">Now its just Image card</p>
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className="gap-5">
              <div className="w-full">
                <div className="">
                  <TableCJ rowData={[]} locale="en" />
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div className="w-[400px]">
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  List item (text only)
                </h2>
                <p className="mb-6 ">
                  The List item (text only) component contains a title and
                  subtext which can contain one or more pieces of dynamic data
                  from the content type from which the list item s data is
                  pulled.
                </p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-[400px]">
                <div className="">
                  <ListContent
                    title="Comparison of mammography AI algorithms with a clinical risk model for 5-year breast cancer risk prediction: An observational study"
                    source="Nature"
                    date="2023"
                  />
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full">
                <div className="">
                  <ListSmall data={data} />
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full">
                <div className="">
                  <SocialMediaList socialMediaLinks={socialMediaLinks} />
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full">
                <div className="">
                  <TabsCJ rowData={[]} cardData={[]} />
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full">
                <div className="">
                  <Accordion
                    panelContent={<div>SOME ELEMMENTS</div>}
                    topElement={<h1>Title or Component</h1>}
                    bgColor="bg-gray-200"
                  ></Accordion>
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className=" w-full md:w-2/3">
                <div className="">
                  <CarousselMIT
                    content={carouselContent}
                    widthMobile="200"
                    width="300"
                  />
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className=" ">
                <div className="">
                  <div className="border-solid border-4 border-indigo-600  "></div>
                  <h2 className="text-4xl bold costa py-8">
                    Banter Components
                  </h2>
                  <div className="border-solid border-4 border-indigo-600  "></div>
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className=" ">
                <div className=" flex p-4 border-dotted border-r-gray-100 border-2 "></div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className=" ">
                <div className=" flex p-4 border-dotted border-r-gray-100 border-2 "></div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-1/2 ">
                <div className=" flex p-4 border-dotted border-r-gray-100 border-2 ">
                  <div className="grid grid-cols-1"></div>
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full ">
                <div className=" flex p-4 border-dotted border-r-gray-100 border-2 ">
                  <SocialMedia
                    title={"Social Media"}
                    platforms={["Twitter", "Facebook", "Instagram", "Linkedin"]}
                  />
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full ">
                <div className=" flex p-4 border-dotted border-r-gray-100 border-2 ">
                  <PopularTags title="Popular Tags" tags={popularTags} />
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full ">
                <div className=" flex p-4 border-dotted border-r-gray-100 border-2 ">
                  <div className="grid grid-cols-2 gap-3">
                    {events.map((article) => (
                      <EventCard key={article.id} article={article} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" gap-5">
              <div className="w-full ">
                <div className="  p-4 border-dotted border-r-gray-100 border-2 ">
                  <EventCard key={articles[0].id} article={events[0]} />
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" ">
              <div className="w-full ">
                <div className=" p-4 border-dotted border-r-gray-100 border-2 ">
                  <HeroBanter content={heroProps} />
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" ">
              <div className="w-full ">
                <div className=" p-4 border-dotted border-r-gray-100 border-2 ">
                  <SyndicationPartners title="Title of the section">
                    <div className="w-full h-48 flex items-center justify-center bg-gray-50 text-center">
                      Any type of compoenent{" "}
                    </div>
                  </SyndicationPartners>
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" ">
              <div className="w-full ">
                <div className=" p-4 border-dotted border-r-gray-100 border-2 ">
                  <SyndicationPartners title="Title of the section">
                    <div className="mx-auto  max-w-screen-xl ">
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                        <LogoLink href="#">
                          <img src={laravelLogo.src} alt="Partner Logo 2" />
                        </LogoLink>
                        <LogoLink href="#">
                          <img src={laravelLogo.src} alt="Partner Logo 2" />
                        </LogoLink>
                        <LogoLink href="#">
                          <img src={laravelLogo.src} alt="Partner Logo 2" />
                        </LogoLink>
                      </div>
                    </div>
                  </SyndicationPartners>
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" ">
              <div className="w-full ">
                <div className=" p-4 border-dotted border-r-gray-100 border-2 ">
                  <SyndicationPartners title="Title of the section">
               
                  </SyndicationPartners>
                </div>
              </div>
            </div>
          </li>
          <li className="py-9">
            <div className="flex">
              <div>
                <h2 className={`mb-3 font-ibmMono text-2xl text-red-600 `}>
                  Card programme
                </h2>
                <p className="mb-6 ">Now its just Image card</p>
              </div>
            </div>
            <div className=" ">
              <div className="w-full ">
                <div className=" p-4 border-dotted border-r-gray-100 border-2 ">
                  <ModalVideoYoutube
                    thumbWidth={400}
                    thumbHeight={440}
                    thumbAlt={""}
                    videoUrl={"https://www.youtube.com/watch?v=i7g4IrbJ_WU"}
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
