
import React from "react";
import ContactForm from "../components/ContactForm";

interface CalendarProps{}

const CalendarPage: React.FC<CalendarProps> = () => {
  return (
    <div className="relative flex flex-col pb-40  items-center justify-center bg-white">
      <div className="flex items-center justify-center py-20">
        <div>
          <img src="/assets/decorator.png" />
        </div>
        <div className="lg:w-[1000px] h-[1px] bg-black ml-10" />
      </div>
      <div className="flex items-center justify-center w-full h-auto w-3/4 h-[1000px]">
        <ContactForm />
      </div>
    </div>
  );
};

export default CalendarPage;
