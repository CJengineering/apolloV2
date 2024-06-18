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
    .filter((member) => member.position === "Advisory Committee")
    .sort((a, b) => a.order - b.order);
  const alumnus = teamMembers
    .filter((member) => member.position === "Alumnus")
    .sort((a, b) => a.order - b.order);
  const sortedTeamMembers = [...teamMembers].sort((a, b) => a.order - b.order);
  return (
    <MainContainer isSideBar={false}>
      <ContentContainer>
      <h1 className="costa font-bold text-7xl py-24 text-center">Team</h1>
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
              Check out a selection of archival photos of the Jameel family from
              across the history of Community Jameel.
            </p>
          </Article>
        </SectionBanter>
        <SectionBanter title={"Team"}>
          <div className="grid w-full gap-6 md:grid-cols-3">
            {team.map((member) => (
              <PersonalCard
                key={member.order}
                author={member}
                socialPlatforms={[]}
              ></PersonalCard>
            ))}
          </div>
        </SectionBanter>
        <SectionBanter title=""></SectionBanter>
      </ContentContainer>
    </MainContainer>
  );
}
