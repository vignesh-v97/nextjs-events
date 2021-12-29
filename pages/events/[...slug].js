import React, { Fragment } from "react";
import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert";

const FilteredEventsPage = () => {
 const router = useRouter();

 const filteredData = router.query.slug;

 if (!filteredData) {
  return <p className="center">Loading...</p>;
 }

 const filteredYear = filteredData[0];
 const filteredMonth = filteredData[1];

 const numYear = +filteredYear;
 const numMonth = +filteredMonth;

 if (
  isNaN(numMonth) ||
  isNaN(numYear) ||
  numYear > 2030 ||
  numYear < 2021 ||
  numMonth < 1 ||
  numMonth > 12
 ) {
  return (
   <Fragment>
    <ErrorAlert>
     <p>Invalid filter, please adjust your Values</p>
    </ErrorAlert>
    <div className="center">
     <Button link="/events">Show All Events</Button>
    </div>
   </Fragment>
  );
 }

 const filteredEvents = getFilteredEvents({
  year: numYear,
  month: numMonth,
 });

 if (!filteredEvents || filteredEvents.length === 0) {
  return (
   <Fragment>
    <ErrorAlert>
     <p>No events for the chosen filter!</p>
    </ErrorAlert>
    <div className="center">
     <Button link="/events">Show All Events</Button>
    </div>
   </Fragment>
  );
 }

 const date = new Date(numYear, numMonth - 1);

 return (
  <Fragment>
   <ResultsTitle date={date} />
   <EventList items={filteredEvents} />
  </Fragment>
 );
};

export default FilteredEventsPage;
