"use client";

import { EventFieldDataCleaned } from "@/app/interfaces";
// src/context/EventContext.tsx
import React, { createContext, useContext, useMemo, useState } from "react";

interface RelatedCollection {
  id: string;
  name: string;
}

interface EventContextProps {
  programmes: RelatedCollection[];

  EventsClean: EventFieldDataCleaned[];
  filteredEvents: EventFieldDataCleaned[];
  setProgrammeFilter: (programmes: RelatedCollection[]) => void;

  EventQuery: string;
  setEventQuery: (query: string) => void;
}

const EventContext = createContext<EventContextProps | undefined>(undefined);

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within a EventProvider");
  }
  return context;
};

interface EventProviderProps {
  children: React.ReactNode;
  programmes: RelatedCollection[];

  EventsClean: EventFieldDataCleaned[];
}

export const EventProvider: React.FC<EventProviderProps> = ({
  children,
  programmes,
  EventsClean,
}) => {
  const [selectedProgrammes, setSelectedProgrammes] = useState<
    RelatedCollection[]
  >([]);

  const [EventQuery, setEventQuery] = useState("");
  const filteredEvents = useMemo(() => {
    let filtered = EventsClean;

    if (selectedProgrammes.length > 0) {
      // Filter by both programmes and people
      filtered = filtered.filter((Event) =>
        selectedProgrammes.some(
          (programme) => Event.programmeLabel === programme.name
        )
      );
    } else if (selectedProgrammes.length > 0) {
      // Filter by programmes only
      filtered = filtered.filter((Event) =>
        selectedProgrammes.some(
          (programme) => Event.programmeLabel === programme.name
        )
      );
    }

    // Further filter by the Event query if it's not empty
    if (EventQuery.trim() !== "") {
      filtered = filtered.filter((Event) =>
        Event.name.toLowerCase().includes(EventQuery.toLowerCase())
      );
    }

    return filtered;
  }, [EventsClean, selectedProgrammes, EventQuery]);

  const setProgrammeFilter = (programmes: RelatedCollection[]) => {
    setSelectedProgrammes(programmes);
  };

  return (
    <EventContext.Provider
      value={{
        programmes,

        EventsClean,
        filteredEvents,
        setProgrammeFilter,

        EventQuery,
        setEventQuery,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
