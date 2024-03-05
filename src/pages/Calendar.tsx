
import React from "react";
import {NFCalendar} from "../components/Calendar";

interface CalendarProps{}

const CalendarPage: React.FC<CalendarProps> = () => {
  return (
    <div className="relative flex flex-col pb-40  items-center justify-center bg-white">
      <div className="flex items-center justify-center py-20">
        <div>
          <img src="/assets/decorator.png" />
        </div>
        <h2 className="text-3xl font-bold whitespace-nowrap text-black crimson-text-regular tracking-tighter text-left  sm:text-4xl md:text-5xl">
          Calendar
        </h2>
        <div className="w-[1000px] h-[1px] bg-black ml-10" />
      </div>
      <div className="flex items-center justify-center w-full h-auto w-3/4 h-[1000px]">
        <NFCalendar />
      </div>
    </div>
  );
};

export default CalendarPage;
