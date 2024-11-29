import { EventFieldDataCleaned } from "@/app/interfaces";

export function EventMetaData(props: {
    eventSingleDataCleaned: EventFieldDataCleaned;
  }) {
    return (
      <div className="w-full ">
        {props.eventSingleDataCleaned.eventDate && (
          <div className="sans-serif text-lg">
            {props.eventSingleDataCleaned.eventDate}
            {props.eventSingleDataCleaned.endDate &&
              props.eventSingleDataCleaned.endDate !==
                props.eventSingleDataCleaned.eventDate && (
                <> - {props.eventSingleDataCleaned.endDate}</>
              )}
          </div>
        )}
  
        {props.eventSingleDataCleaned.time && (
          <div className="sans-serif text-lg">
            {props.eventSingleDataCleaned.time}
          </div>
        )}
  
        {props.eventSingleDataCleaned.address && (
          <div className="sans-serif text-lg">
            {props.eventSingleDataCleaned.address}
          </div>
        )}
      </div>
    );
  }