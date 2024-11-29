import { EventFieldDataCleaned } from "@/app/interfaces";
import ButtonCJ from "../basic components/ButtonCJ";

export function EventRegisterButton({
    eventSingleDataCleaned,
  }: {
    eventSingleDataCleaned: EventFieldDataCleaned;
  }) {
    const { rsvpLink, buttonCtaText } = eventSingleDataCleaned;
  
    if (!rsvpLink) {
      return null;
    }
  
    return (
      <div className="pb-3 ">
        <ButtonCJ href={rsvpLink} text={buttonCtaText}></ButtonCJ>
      </div>
    );
  }