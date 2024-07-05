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
import MainContainer from "@/components/custom beta components/MainContainer";
import ContentContainer from "@/components/custom beta components/ContentContainer";

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
  {
    /* DATA FETCHING */
  }

  const data = await getData("61ee828a15a3182ecebde53f");
  const teamMembersRaw = data.items;
  const teamMembers = teamMembersRaw.map((item) => teamProfileMapper(item));
  const leadership = teamMembers
    .filter((member) => member.filter === "e8c50df05a5d6400ebdebb14e61040fa")
    .sort((a, b) => a.order - b.order);
  const team = teamMembers
    .filter((member) => member.filter === "fe9cb4ecfb6b2b3673fb682e3ae1b662")
    .sort((a, b) => a.order - b.order);
  const advisoryCommittee = teamMembers
    .filter((member) => member.filter === "2e13032295d06cb32ab76c38a07299fc")
    .sort((a, b) => a.order - b.order);
  const alumnus = teamMembers
    .filter((member) => member.position === "Alumnus")
    .sort((a, b) => a.order - b.order);
  const sortedTeamMembers = [...teamMembers].sort((a, b) => a.order - b.order);
  
  return (
<>
      <ContentContainer width="full" desktopWidth="large">
      <h1 className="costa font-bold text-5xl md:text-7xl py-12 md:py-24 text-center">
          Team
        </h1>   
      <div className="pb-12">
          <h2 className="serif font-semibold text-3xl pb-6">Core</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <PersonalCard
              key={member.order}
              author={member}
              socialPlatforms={[]}
              ></PersonalCard>
            ))}
          </div>
        </div>
    <div className="flex flex-col pb-12">
      <div className="w-full h-px bg-gray-200"></div> {/* Separation Bar */}
    </div>
        <div className="pb-12">
          <h2 className="serif font-semibold text-3xl pb-6">Advisory Committee</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {advisoryCommittee.map((member) => (
              <PersonalCard
                key={member.order}
                author={member}
                socialPlatforms={["Twitter", "Linkedin"]}
              ></PersonalCard>
            ))}
          </div>
        </div>

        <div className="flex flex-col pb-12">
      <div className="w-full h-px bg-gray-200"></div> {/* Separation Bar */}
    </div>
        <div>
          <h2 className="serif font-semibold text-3xl">Jameel Family</h2>
          <p className="serif font-normal text-base mb-6">
              Check out a selection of <a href="https://www.communityjameel.org/about/people/family-album" className="underline">archival photos</a> of the Jameel family from across the history of Community Jameel.
            </p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {leadership.map((member) => (
              <PersonalCard
                key={member.order}
                author={member}
                socialPlatforms={["Twitter", "Linkedin"]}
              ></PersonalCard>
            ))}
          </div>
        </div>




            <div className="pb-24"></div>

      </ContentContainer>
  
      </>
  );
}
