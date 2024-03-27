
import React from "react";
import FAQComponent from "../components/FAQ";

interface FAQProps{}

const FAQ: React.FC<FAQProps> = () => {
  return (
    <div className="relative flex flex-col pb-20  items-center justify-center bg-white">
      <div className="flex items-center justify-center py-20 pb-5">
        <div>
          <img src="/assets/decorator.png" />
        </div>
        <h2 className="text-3xl font-bold whitespace-nowrap text-black crimson-text-regular tracking-tighter text-left  sm:text-4xl md:text-5xl">
          FAQ
        </h2>
        <div className="w-[1000px] h-[1px] bg-black ml-10" />
      </div>
      <div className="flex items-center justify-center w-full h-auto w-3/4 container m-auto">
        <FAQComponent />
      </div>
    </div>
  );
};

export default FAQ;
