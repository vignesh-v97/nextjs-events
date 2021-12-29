import React, { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
 const events = getAllEvents();
 const router = useRouter();
 function findEventsHandler(year, month) {
  const fullPath = `/events/${year}/${month}`;

  router.push(fullPath);
 }

 return (
  <Fragment>
   <EventsSearch onSearch={findEventsHandler} />
   <EventList items={events} />
  </Fragment>
 );
}

export default AllEventsPage;
