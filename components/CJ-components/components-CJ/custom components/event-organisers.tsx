import Image from "next/image";
export function EventOrganisers({
    organisers,
  }: {
    organisers: Array<{ name: string; logo: { url: string; alt?: string } }>;
  }) {
    if (organisers.length === 0) {
      return null;
    }
  
    return (
      <div>
        <div className="pt-12 pb-9">
          <div className="w-full h-[1px] bg-gray-300 block"></div>
        </div>
        <h2 className="header-section pb-6">Organisers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {organisers.map((organiser) => (
            <div
              key={organiser.name}
              className="flex border border-gray-200 rounded-md items-center justify-center"
            >
              <Image
                src={organiser.logo.url}
                alt={organiser.logo.alt || ""}
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  