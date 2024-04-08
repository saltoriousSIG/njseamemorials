import React, { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router";
import Paypal from "../components/Paypal";

interface BookingProps { }

const Booking: React.FC<BookingProps> = ({ }) => {
  const [pageData, setPageData] = useState<Record<string, string>>({})
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  const { pkg } = useParams();
  const data = JSON.parse(atob(pkg as string));
  const [isPaypalShowing, setIsPaypalShowing] = useState<boolean>(false);

  const handleSubmit = () => {
    setIsPaypalShowing(true);
  };
  console.log(data);

  const [dates, setDates] = useState<Array<any>>();

  useEffect(() => {
    const load = async () => {
      const calendarData = await axios.get(
        `https://www.googleapis.com/calendar/v3/calendars/6c0cff25d0ecb149ece0c49bdddc02bfa2a772c7f7e590df9aebb2c0302b3327@group.calendar.google.com/events?maxResults=2500&key=AIzaSyA4bsYsAgHd9TprAmhOi0tdySV6FfR-vwQ`
      );
      const {
        data: { items },
      } = calendarData;
      const dates = items.map((item: any) => {
        const {
          start: { dateTime },
          id,
        } = item;
        return {
          id,
          date: dateTime,
        };
      }).sort((a: any, b: any) => {

        const aDate = new Date(a.date).getTime()
        const bDate = new Date(b.date).getTime()
        return aDate - bDate;
      });

      setDates(dates);
    };
    load();
  }, []);
  console.log(pageData);

  return (
    <div className="relative h-fit flex flex-col items-center justify-start mt-10 container m-auto space-y-20 text-black">
      <div className="text-4xl underline">{data.name}</div>
      <div className="max-w-[50%]">{data.description}</div>
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Book an Appointment</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
                Name
              </label>
              <input
                onChange={(e) => setPageData({
                  ...pageData,
                  name: e.target.value
                })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="date"
                className="text-sm font-medium leading-none"
              >
                Date
              </label>
              <select
                id="date"
                onChange={(e) => {
                  setPageData({
                    ...pageData,
                    scheduledDate: e.target.value
                  })
                }}
                className="block w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select</option>
                {dates?.map((date) => (
                  <option key={date.id} value={date.date}>
                    {formatter.format(new Date(date.date))}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Number of Attendees
            </label>
            <input
              onChange={(e) => setPageData({
                ...pageData,
                attendees: e.target.value
              })}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="attendees"
              placeholder="Number of attendees"
              type="number"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={(e) => setPageData({
                ...pageData,
                email: e.target.value
              })}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              onChange={(e) => setPageData({
                ...pageData,
                phone: e.target.value
              })}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-400 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Submit
          </button>
        </div>
      </div>
      {isPaypalShowing && <Paypal id={data.id} pageData={pageData} />}
    </div>
  );
};

export default Booking;
