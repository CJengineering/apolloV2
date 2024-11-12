import PersonalCard from "@/components/custom beta components/PersonCard";
import { getData } from "@/functions/api/getData";
import teamProfileMapper from "@/functions/transformers/teamProfileMapper";
import { Metadata } from "next";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import SectionDivider from "@/components/components V2/generic/section-divider";
import { TeamMember } from "@/app/interfaces";
export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "Team",
  description:
    "Community Jameel supports a community of scientists, humanitarians, technologists and creatives. Working together through centres, funds, scholarships and projects, we are advancing science to help communities thrive in a rapidly changing world.",
  ogType: "website",
  ogImage:
    "https://uploads-ssl.webflow.com/612cdb8a4fac760705621df5/61e6f19f486905791dcc1b27_JAMEEL_FAMILY_ARCHIVE_PHOTO.jpg",
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "Community", "Team"],
});

function SectionCoreTeam({ team }: { team: TeamMember[] }) {
  return (
    <section className="">
      <h2 className="header-section py-6">Core</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        {team.map((member) => (
          <PersonalCard
            key={member.order}
            author={member}
            socialPlatforms={[]}
          ></PersonalCard>
        ))}
      </div>
    </section>
  );
}

function SectionCommitteeTeam({
  advisoryCommittee,
}: {
  advisoryCommittee: TeamMember[];
}) {
  return (
    <section className="">
      <h2 className="header-section pb-6">Advisory Committee</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {advisoryCommittee.map((member) => (
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

function SectionFamilyTeam({ leadership }: { leadership: TeamMember[] }) {
  return (
    <section>
      <h2 className="header-section pb-6">Jameel Family</h2>
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
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
      <h1 className="header-page pb-8">Team</h1>
      <SectionCoreTeam team={team} />
      <SectionDivider />
      <SectionCommitteeTeam advisoryCommittee={advisoryCommittee} />

      <SectionDivider />
      <SectionFamilyTeam leadership={leadership}></SectionFamilyTeam>
      <div className="pb-24"></div>
    </>
  );
}
