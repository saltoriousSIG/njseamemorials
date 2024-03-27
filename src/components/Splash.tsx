import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

interface SplashProps {}

const Splash: React.FC<SplashProps> = () => {
  return (
    <section className="relative w-full p-5 pt-10 h-[100vh] bg-[url('/assets/hero.png')] bg-no-repeat bg-cover bg-center">
      <div className="relative z-20">
        <Nav />
      </div>
      <div className="absolute h-full w-full top-0 left-0 bg-[rgba(190,236,255,0.45)] z-[3] opacity-80" />
      <div className="relative container px-4 md:px-6 z-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="flex flex-col items-center space-y-10 text-center -scroll-mb-20">
          <div>
            <img src="/logo_white.png" height="86" width="467" />
          </div>
          <div className="space-y-2 mb-10">
            <h1 className="text-xl font-bold sm:text-2xl md:text-2xl lg:text-5xl/none max-w-[900px] crimson-text-regular tracking-normal">
              Engage in a beautiful farewell, scattering ashes upon the waves,
              where each ripple tells the story of a life well-lived.
            </h1>
          </div>
          <div className="space-x-4">
            <a
              className="inline-flex h-9 items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#contact"
            >
              Contact Us
            </a>
            <a
              className="inline-flex h-9 items-center justify-center rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 text-white hover:text-white"
              href="/calendar"
            >
              Calendar
            </a>

            <a
              className="inline-flex h-9 items-center justify-center rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 text-white hover:text-white"
              href="/faq"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Splash;
