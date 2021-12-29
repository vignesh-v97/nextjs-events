import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/Button";

const EventDetailPage = () => {
 const router = useRouter();
 const clickedId = router.query.id;

 const event = getEventById(clickedId);

 if (!event) {
  return (
   <Fragment>
    <ErrorAlert>
     <p>No event found!</p>
    </ErrorAlert>
    <div className="center">
     <Button link="/events">Show All Events</Button>
    </div>
   </Fragment>
  );
 }

 console.log(clickedId);
 return (
  <div>
   <Fragment>
    <EventSummary title={event.title} />
    <EventLogistics
     date={event.date}
     address={event.location}
     image={event.image}
     imageAlt={event.title}
    />
    <EventContent>
     <p>{event.description}</p>
    </EventContent>
   </Fragment>
  </div>
 );
};

export default EventDetailPage;
