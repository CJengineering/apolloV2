import { EventFieldDataCleaned } from "@/app/interfaces";
import { EventMetaData } from "./event-metadata";
import { EventShortDescription } from "./event-short-description";
import { EventSignUpEmbed } from "./event-signup-embed";
import { EventRegisterButton } from "./event-register-button";
import VerticalSpaceDivider from "@/components/components V2/generic/vertical-space-divider";

export function EventContent({
    eventSingleDataCleaned,
  }: {
    eventSingleDataCleaned: EventFieldDataCleaned;
  }) {
    return (
      <div className="flex flex-col ">
        <div className="prose prose-2xl sans-serif dark:prose-dark">
          <EventMetaData eventSingleDataCleaned={eventSingleDataCleaned} />
          <VerticalSpaceDivider padding={2}/>
          <EventRegisterButton eventSingleDataCleaned={eventSingleDataCleaned} />
          <EventShortDescription
            shortDescription2={eventSingleDataCleaned.shortDescription2}
          />
        </div>
        <div className="relative"></div>
        <EventSignUpEmbed eventSingleDataCleaned={eventSingleDataCleaned} />
  
      </div>
    );
  }