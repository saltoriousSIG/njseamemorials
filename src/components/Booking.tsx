import React, {useState, useEffect, useMemo} from "react";
import axios from 'axios';
import { useParams } from "react-router";
import Paypal from "../components/Paypal";

interface BookingProps {}

const Booking: React.FC<BookingProps> = ({}) => {
  const { pkg } = useParams();
  const data = JSON.parse(atob(pkg as string));
  const [isPaypalShowing, setIsPaypalShowing] = useState<boolean>(false);

  const handleSubmit = () => {
    setIsPaypalShowing(true)
  }
  console.log(data)

  const [dates, setDates] = useState<Array<any>>();

  useEffect(() => {
    const load = async () => {
      const calendarData = await axios.get(
        `https://www.googleapis.com/calendar/v3/calendars/6c0cff25d0ecb149ece0c49bdddc02bfa2a772c7f7e590df9aebb2c0302b3327@group.calendar.google.com/events?maxResults=2500&key=AIzaSyA4bsYsAgHd9TprAmhOi0tdySV6FfR-vwQ`
      );
      const { data: { items } } = calendarData
      console.log(items)
      const dates = items.map((item: any) => { 
        console.log(item)
        const { start:{ dateTime } } = item;
        return dateTime;
      })
      console.log(dates);
      setDates(dates);
    }
    load()
  }, []);

  console.log(dates);

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
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="date"
              >
                Date
              </label>
              <button
                type="button"
                role="combobox"
                aria-controls="radix-:r1c:"
                aria-expanded="false"
                aria-autocomplete="none"
                dir="ltr"
                data-state="closed"
                data-placeholder=""
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="date"
              >
                <span style={{ pointerEvents: "none" }}>Select</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 opacity-50"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <select
                aria-hidden="true"
                tabIndex={1}
                style={{
                  position: "absolute",
                  border: "0px",
                  width: "1px",
                  height: "1px",
                  padding: "0px",
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0px, 0px, 0px, 0px)",
                  whiteSpace: "nowrap",
                  overflowWrap: "normal",
                }}
              >
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email
            </label>
            <input
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
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <button onClick={handleSubmit} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-400 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Submit
          </button>
        </div>
      </div>
      {isPaypalShowing && (<Paypal  id="hi" pageData={{}}/>)}
    </div>
  );
};

export default Booking;
