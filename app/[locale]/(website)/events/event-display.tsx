'use client';
import React, { Suspense } from 'react'
import { useEventContext } from './event-context';
import EventCard from '@/components/custom beta components/EventCard';
import EventCardSmall from '@/components/custom beta components/EventCardSmall';

export default function EventsDisplay() {
    const {filteredEvents} = useEventContext();
  return (
    <div className="grid md:grid-cols-3 gap-6 ">
     
    <Suspense>
      {filteredEvents.map((event) => (
        <EventCardSmall key={Event.name} article={event} />
      ))}
    </Suspense>
  </div>
  )
}
