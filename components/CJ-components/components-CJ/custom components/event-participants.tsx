import { divide } from "cypress/types/lodash";
import Image from "next/image";
export function EventParticipants({
  relatedPeopleData,
}: {
  relatedPeopleData: Array<{
    name: string;
    profilePicture: { url: string; alt?: string };
    shortDescription: string;
  }>;
}) {
  if (relatedPeopleData.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="pt-12 pb-9">
        <div className="w-full h-[1px] bg-gray-300 block"></div>
      </div>
      <h2 className="header-section pb-6">Participants</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedPeopleData.map((person) => (
          <div key={person.name} className="text-left">
            {person.profilePicture.url ?  (
              <Image
                src={person.profilePicture.url}
                alt={person.profilePicture.alt || ""}
                width={330}
                height={330}
                className="mx-auto w-full"
              />
            ):((
                <div className="w-[188px] h-[188px] md:w-[286px] md:h-[286px] lg:w-[306px] lg:h-[306px] bg-gray-100 "> </div>
              ))}

            <div className="mt-4">
              <h2 className="font-medium sans-serif text-lg text-left">
                {person.name}
              </h2>
              <p className="mt-1 sans-serif text-base font-normal text-left">
                {person.shortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
