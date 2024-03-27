import React, { useState } from "react";

interface MobileNavProps {}

const MobileNav: React.FC<MobileNavProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:hidden flex flex-col relative text-white p-5">
      <div className="flex justify-between items-center flex w-full justify-between">
        <span className="text-2xl font-bold flex flex-col text-sm space-y-2 max-w-[200px] relative">
          <img className="h-[51px] w-auto mb-2" src="/assets/seamemorial_bg.png" />
          <div className="absolute h-fit w-fit top-14 left-0">
          <a
            className="bg-[#1E1E1E] px-2.5 py-1.5 rounded-lg hover:cursor-pointer space-x-2 flex"
            href="https://www.anrdoezrs.net/click-101096395-10281236"
            target="_blank"
          >
            <div>
              <img src="/flower_vector.png" height="24" width="24" />
            </div>
            <span className="text-white">Flowers</span>
          </a>

          <div className="flex flex-col gap-y-1 mt-1">
            <div className="flex bg-[#1E1E1E] px-4 py-1.5 rounded-lg space-x-1.5">
              <div className="scale-[0.75]">
                <img src="/icons/call_icon.png" height="24" width="24" />
              </div>
              <a href="tel:+17328924298" className="text-white hover:underline">
                732-892-4298
              </a>
            </div>
            <div className="flex bg-[#1E1E1E] px-4 py-1.5 rounded-lg space-x-1.5">
              <div className="scale-[0.75]">
                <img src="/icons/call_icon.png" height="24" width="24" />
              </div>
              <a href="tel:+17322325620" className="text-white hover:underline">
                {" "}
                732-232-5620
              </a>
            </div>
          </div>

          </div>
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col mt-2 bg-gradient-to-r from-cyan-500/70 to-blue-500/50 gap-y-5 p-5 !text-white  uppercase font-bold z-50 relative max-h-[200px] overflow-y-scroll ">
          <a
            className="text-lg text-white font-medium hover:underline underline-offset-4"
            href="/"
          >
            Home
          </a>
          <a
            className="text-lg text-white font-medium hover:underline underline-offset-4 "
            href="/#about"
          >
            About
          </a>
          <a
            className="text-lg text-white font-medium hover:underline underline-offset-4"
            href="/theexperience"
          >
            The Experience
          </a>
          <a
            className="text-lg text-white font-medium hover:underline underline-offset-4 "
            href="/whyseaburial"
          >
            Why A Sea Burial
          </a>
          <a
            className="text-lg text-white font-medium hover:underline underline-offset-4 "
            href="/calendar"
          >
            Calendar
          </a>
          <a
            className="text-lg text-white font-medium hover:underline underline-offset-4 "
            href="/prices"
          >
            Prices
          </a>
          <a
            className="text-lg text-white font-medium hover:underline underline-offset-4 "
            href="/policies"
          >
            Policies
          </a>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
