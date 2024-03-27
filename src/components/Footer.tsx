import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex w-full gap-2 sm:flex-row py-6 pr-20 shrink-0 items-start justify-between border-t bg-slate-800 h-[292px]">
      <div className="h-[51px] w-[276px]">
        <img src="/logo_white.png" />
      </div>
      <div className="flex flex-col items-start justify-start text-left space-y-3">
        <a href='/' className="text-white">Home</a>
        <a href='/theexperience' className="text-white">The Experience</a>
        <a href='/whyseaburial' className="text-white">Why A Sea Burial</a>
        <a href='/policies' className="text-white">Policies</a>
        <a href='/prices' className="text-white">Prices</a>
        <a href='/calendar' className="text-white">Calendar</a>
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/NJSeaMemorials"
            target="_blank"
          >
            <img height="50" width="50" src="/icons/facebook.svg" />
          </a>
          <a href="https://www.instagram.com/nj_sea_memorials/" target="_blank">
            <img height="50" width="50" src="/icons/instagram.svg" />
          </a>
          <a href="mailto:njseamemorials@gmail.com" target="_blank">
            <img height="50" width="50" src="/icons/google.svg" />
          </a>
        </div>

        <div className="max-w-[200px] text-xl text-center whitespace-wrap text-white">
          Learn More About The Vessels
        </div>
        <div className="flex flex-col gap-y-1 justify-center items-center w-full">
          <a href="https://nearfallfishingcharters.com/" className="my-2" target="_blank">
            <div className="text-white tex-sm bg-black px-2 py-1 rounded-lg w-[150px] outline outline-2 outline-white">
              NEARFALL
            </div>
          </a>
          <a href="https://www.dauntlessfishing.com/" target="_blank">
            <div className="text-white text-sm bg-black px-2 py-1 rounded-lg  w-[150px] outline outline-2 outline-white">
              DAUNTLESS
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
