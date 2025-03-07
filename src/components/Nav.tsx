import React from "react";
import MobileNav from "./MobileNav";

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <div>
      <MobileNav />
      <header className="px-4 hidden lg:flex lg:px-6 h-14 items-center bg-transparent justify-center border-b-[2.5px] border-b-[#234751]/20 border-b-solid pb-20 pt-10">
        <a
          className="flex items-center justify-cente h-[51px] w-[276px]"
          href="/"
        >
          <img className="h-[51px] w-auto" src="/assets/seamemorial_bg.png" />
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6 crimson-text-regular items-center justify-center whitespace-nowrap">
          <a
            className="text-lg hover:text-white font-medium hover:underline underline-offset-4 text-[#1E1E1E]"
            href="/"
          >
            Home
          </a>
          <a
            className="text-lg hover:text-white font-medium hover:underline underline-offset-4 text-[#1E1E1E]"
            href="/#about"
          >
            About
          </a>
          <a
            className="text-lg hover:text-white font-medium hover:underline underline-offset-4 text-[#1E1E1E]"
            href="/theexperience"
          >
            The Experience
          </a>
          <a
            className="text-lg hover:text-white font-medium hover:underline underline-offset-4 text-[#1E1E1E]"
            href="/whyseaburial"
          >
            Why A Sea Burial
          </a>
          <a
            className="text-lg hover:text-white font-medium hover:underline underline-offset-4 text-[#1E1E1E]"
            href="/prices"
          >
            Prices
          </a>
          <a
            className="text-lg hover:text-white font-medium hover:underline underline-offset-4 text-[#1E1E1E]"
            href="/booking"
          >
            Booking 
          </a>
          <a
            className="text-lg hover:text-white font-medium hover:underline underline-offset-4 text-[#1E1E1E]"
            href="/policies"
          >
            Policies
          </a>

          <div className="flex flex-col gap-y-2">
            <a className="text-xl text-black font-bold" href="/booking">
              Need Help?
            </a>
            <div className="flex bg-[#1E1E1E] px-4 py-1.5 rounded-lg space-x-1.5">
              <div className="scale-[0.75]">
                <img src="/icons/call_icon.png" height="24" width="24" />
              </div>
              <a href="tel:+17322325620" className="text-white hover:underline">
                {" "}
                732-232-5620
              </a>
            </div>
            <div className="flex bg-[#1E1E1E] px-4 py-1.5 rounded-lg space-x-1.5">
              <div className="scale-[0.75]">
                <img src="/icons/call_icon.png" height="24" width="24" />
              </div>
              <a href="tel:+17328924298" className="text-white hover:underline">
                732-892-4298
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
