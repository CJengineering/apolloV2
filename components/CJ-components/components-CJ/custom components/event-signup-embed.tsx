import { EventFieldDataCleaned } from "@/app/interfaces";

export function EventSignUpEmbed({
    eventSingleDataCleaned,
  }: {
    eventSingleDataCleaned: EventFieldDataCleaned;
  }) {
    const { signupEmbed } = eventSingleDataCleaned;
  
    if (!signupEmbed) {
      return null;
    }
  
    return (
      <div>
        <div
          className="md:w-1/3 w-full relative md:min-w-[400px] xl:min-w-[350px] lg:min-w-[260px]"
          dangerouslySetInnerHTML={{ __html: signupEmbed }}
        ></div>
      </div>
    );
  }