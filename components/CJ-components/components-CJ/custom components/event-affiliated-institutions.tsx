import Image from "next/image";
export function EventAffiliatedInstitutions({
  institutions,
}: {
  institutions: Array<{ name: string; logo: { url: string; alt?: string } }>;
}) {
  if (institutions.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="pt-12 pb-9">
        <div className="w-full h-[1px] bg-gray-300 block"></div>
      </div>
      <h2 className="header-section pb-6">With representatives from</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {institutions.map((institution) => (
          <div key={institution.name} className="flex justify-center">
            <Image
              src={institution.logo.url}
              alt={institution.logo.alt || ""}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}