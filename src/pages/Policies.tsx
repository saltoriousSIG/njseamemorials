import React from "react";
import NFPolicies from '../components/Policies'; 

interface PoliciesProps{}

const Policies: React.FC<PoliciesProps> = () => {
  return (
    <div className="relative flex flex-col pb-20  items-center justify-center bg-white">
      <div className="flex items-center justify-center py-20 pb-5">
        <div>
          <img src="/assets/decorator.png" />
        </div>
        <h2 className="text-3xl font-bold whitespace-nowrap text-black crimson-text-regular tracking-tighter text-left  sm:text-4xl md:text-5xl">
          Policies
        </h2>
        <div className="w-[1000px] h-[1px] bg-black ml-10" />
      </div>
      <div className="flex items-center justify-center w-full h-auto w-3/4">
        <NFPolicies />
      </div>
    </div>
  );
};

export default Policies;
