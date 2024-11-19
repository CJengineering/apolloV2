import Image from "next/image";
export function EventPartners({
    partners,
  }: {
    partners: Array<{ name: string; logo: { url: string; alt?: string } }>;
  }) {
    if (partners.length === 0) {
      return null;
    }
  
    return (
      <div>
        <div className="pt-12 pb-9">
          <div className="w-full h-[1px] bg-gray-300 block"></div>
        </div>
        <h2 className="header-section pb-6">Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex border rounded-md items-center justify-center"
            >
              <Image
                src={partner.logo.url}
                alt={partner.logo.alt || ""}
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }