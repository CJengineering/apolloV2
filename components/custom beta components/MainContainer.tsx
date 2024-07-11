import { notFound } from "next/navigation";

import Hamburger from "@/components/ui/hamburger";

import Footer from "@/components/ui/footer";
import SecondaryNav from "../ui/secondary-nav";

interface MainContainerProps {
  children: React.ReactNode;
  isSideBar?: boolean;
}
interface BreadCrumpProps {
  name: string;
  title: string;
}

function BreadCrump(props: BreadCrumpProps) {
  return (
    <div className="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
      <span className="text-slate-600 dark:text-slate-400">{props.name}</span>
      <svg
        className="fill-slate-400 shrink-0 mx-2 dark:fill-slate-500"
        width="8"
        height="10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
      </svg>
      <span className="text-slate-800 font-medium truncate dark:text-slate-200">
        {props.title}
      </span>
    </div>
  );
}

export default async function MainContainer({
  children,
  isSideBar,
}: MainContainerProps) {
  const post = {
    title: "Community  Jameel",
    summary:
      "A deep dive into how async/await works in JavaScript, with examples and best practices.",
    topic: {
      name: "Home",
      slug: "javascript",
    },
  };

  if (!post) notFound();

  return (
    <>
      <div className="flex-grow mx-auto max-w-screen-sm  lg:max-w-screen-lg xl:max-w-screen-xl ">
        <div className="md:hidden mt-4 flex items-center mb-4 ">
          <Hamburger />

          <BreadCrump name={post.topic.name} title={post.title}></BreadCrump>
        </div>

 
        <div className="md:mt-8">{children}</div>

     
      </div>
    </>
  );
}
