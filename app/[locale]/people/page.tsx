import { notFound } from "next/navigation";
import Hamburger from "@/components/ui/hamburger";
import Footer from "@/components/ui/footer";
import HeroBanter from "@/components/custom beta components/HeroBanter";
import image from "@/public/images/mapCJ.webp";
import fady from "@/public/images/fadyCJ.jpeg";
import SectionBanter from "@/components/custom beta components/SectionBanter";
import PersonalCard from "@/components/custom beta components/PersonCard";
import Article from "@/components/mdx/article";
import { getData } from "@/functions/api/getData";
import teamProfileMapper from "@/functions/transformers/teamProfileMapper";
import { cp } from "fs";

const author = {
  name: "First Lastname",
  imageUrl: fady.src,
  position: "Senior position",
  order: 1,
};

export default async function PeopleContent({
  params,
}: {
  params: {
    topic: string;
    slug: string;
    order: number;
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
  };
  const heroProps = {
    backgroundImageUrl: image.src,
    overlayColor: "bg-gray-400/80",
    subTitle: "Community Jameel",
    title: "People",
  };

  if (!post) notFound();
     {/* DATA FETCHING */}

     const data = await getData("61ee828a15a3182ecebde53f");
     const teamMembersRaw = data.items;
     const teamMembers = teamMembersRaw.map((item) => teamProfileMapper((item)));
     const leadership = teamMembers.filter((member) => member.filter === "e8c50df05a5d6400ebdebb14e61040fa").sort((a, b) => a.order - b.order);
     const team = teamMembers.filter((member) => member.filter === "fe9cb4ecfb6b2b3673fb682e3ae1b662").sort((a, b) => a.order - b.order);
     const advisoryCommittee = teamMembers.filter((member) => member.position === "Advisory Committee").sort((a, b) => a.order - b.order);
     const alumnus      = teamMembers.filter((member) => member.position === "Alumnus").sort((a, b) => a.order - b.order);
     const sortedTeamMembers = [...teamMembers].sort((a, b) => a.order - b.order);
  return (
    <>
      {/* Page header */}

      <div className=" xl:space-x-12">
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

            <SectionBanter title={"Jameel Family"}>
              <div className="grid gap-6 md:grid-cols-3">
                {leadership.map((member) => (
                  
                  <PersonalCard
                    author={member}
                    socialPlatforms={["Twitter", "Linkedin"]}
                  ></PersonalCard>
                ))}

             
              </div>
              <Article>
                <p className="mt-6">
                  Check out a selection of archival photos of the Jameel family
                  from across the history of Community Jameel.
                </p>
              </Article>
            </SectionBanter>
            <SectionBanter title={"Team"}>
              <div className="grid w-full gap-6 md:grid-cols-3">
                {team.map((member) => (
                  <PersonalCard
                  key={member.order}
                    author={member}
                    socialPlatforms={[  ]}
                  ></PersonalCard>
                ))}
               
              </div>
            </SectionBanter>
            <SectionBanter title=""></SectionBanter>
          </div>

          <Footer />
        </div>

        {/*        <SecondaryNav />*/}
      </div>
    </>
  );
}
