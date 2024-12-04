import PersonalCard from "@/components/custom beta components/PersonCard";
import { getData } from "@/functions/api/getData";
import teamProfileMapper from "@/functions/transformers/teamProfileMapper";
import { Metadata } from "next";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import SectionDivider from "@/components/components V2/generic/section-divider";
import { TeamMember } from "@/app/interfaces";
import Image from 'next/image';
export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "Team",
  description:
    "Community Jameel supports a community of scientists, humanitarians, technologists and creatives. Working together through centres, funds, scholarships and projects, we are advancing science to help communities thrive in a rapidly changing world.",
  ogType: "website",
  ogImage:
    "https://cdn.prod.website-files.com/612cdb8a4fac760705621df5/674f2b2d1bcc7279c4a8abe9_FAMILY_OPEN_GRAPH.webp",
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "Community", "Team"],
});

function SectionFamilyTeam({ leadership }: { leadership: TeamMember[] }) {
  return (
    <section>
       
      <p className="sans-serif font-normal text-base mb-6">
        Check out a selection of{" "}
        <a
          href="/about/family-album"
          className="custom-underline hover:text-blue-00"
        >
          archival photos
        </a>{" "}
        of the Jameel family from across the history of Community Jameel.
      </p>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {leadership.map((member) => (
          <PersonalCard
            key={member.order}
            author={member}
            socialPlatforms={["Twitter", "Linkedin"]}
          ></PersonalCard>
        ))}
      </div>
    </section>
  );
}

export default async function PeopleContent({
  params,
}: {
  params: {
    topic: string;
    slug: string;
    order: number;
  };
}) {
  const data = await getData("61ee828a15a3182ecebde53f");
  const teamMembers = data.items.map(teamProfileMapper);

  const filterAndSortMembers = (
    members: any[],
    filterKey: string,
    filterValue: string
  ) =>
    members
      .filter((member) => member[filterKey] === filterValue)
      .sort((a, b) => a.order - b.order);

  const leadership = filterAndSortMembers(
    teamMembers,
    "filter",
    "e8c50df05a5d6400ebdebb14e61040fa"
  );
  const team = filterAndSortMembers(
    teamMembers,
    "filter",
    "fe9cb4ecfb6b2b3673fb682e3ae1b662"
  );
  const advisoryCommittee = filterAndSortMembers(
    teamMembers,
    "filter",
    "2e13032295d06cb32ab76c38a07299fc"
  );
  const alumnus = filterAndSortMembers(teamMembers, "position", "Alumnus");
  const sortedTeamMembers = [...teamMembers].sort((a, b) => a.order - b.order);

  return (
    <>
        <div className="pt-[53px] sm:pt-[68px] md:pt-[36px] lg:pt-2"><Image src="https://cdn.prod.website-files.com/612cdb8a4fac760705621df5/674f2b2d2fd2c4071a040b12_FAMILY_HERO_IMAGE.webp" alt="Jameel Family" width={940} height={540} /></div>
      <h1 className="sans-serif font-bold text-4xl lg:text-6xl pt-3 pb-3 lg:pt-6 ">Jameel Family</h1>
        <SectionFamilyTeam leadership={leadership}></SectionFamilyTeam>
      <div className="pb-24"></div>
    </>
  );
}
