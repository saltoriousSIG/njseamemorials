const TheExperiece = () => {
  return (
    <div className="relative flex items-center justify-start bg-white mb-20">
      <div className="container mx-auto px-4 relative">
        <h1 className="text-4xl whitespace-nowrap font-semibold text-center text-white my-6">
          The Experience
        </h1>

        <div className="space-y-6 flex flex-col items-center m-auto w-full">
          <div className="flex items-center justify-center w-[80%]">
            <div>
              <img src="/assets/decorator.png" />
            </div>
            <h2 className="text-3xl font-bold whitespace-nowrap text-black crimson-text-regular tracking-tighter text-left  sm:text-4xl md:text-5xl">
              The Experience
            </h2>
            <div className="w-[1000px] h-[1px] bg-black ml-10" />
          </div>

          <div className="p-6 flex items-center flex-row-reverse justify-between w-[80%]">
            <img
              src="/assets/dauntless_open.jpeg"
              alt="Placeholder"
              className=" mb-4 rounded h-[400px] min-w-[620px] w-auto"
            />
            <div className="flex flex-col items-start max-w-[400px]">
              <h2 className="text-2xl font-bold text-gray-700 mb-3">
                Vessel Journey
              </h2>
              <p className="text-gray-600 text-left">
                NJ Sea Memorial Service offers two vessels for a journey of
                solace and reverence. Departing from either Broadway Basin in
                Point Pleasant Beach or Belmar, New Jersey, our vessels cater to
                your preference, adding personalization to your experience. The
                journey to the ceremony location is a serene 15-20 minute ride,
                perfect for reflection and remembrance.
              </p>
            </div>
          </div>

          <div className="p-6 flex justify-between w-[80%] items-center">
            <img
              src="/assets/nearfall_inlet_2.jpeg"
              alt="Placeholder"
              className="mb-4 rounded h-[400px] min-w-[620px] w-auto"
            />
            <div className="flex flex-col max-w-[400px] items-start text-left">
              <h2 className="text-2xl font-bold text-gray-700 mb-3">
                Customized Ceremony
              </h2>
              <p className="text-gray-600">
                Upon arrival at the ceremony site, families are invited to
                engage in a customized ceremony that truly reflects the essence
                of their loved one's life. Set against the vastness of the
                ocean, this intimate moment allows for the sharing of memories
                and stories, creating an emotionally resonant experience over
                15-30 minutes.
              </p>
            </div>
          </div>

          <div className="p-6 flex items-center flex-row-reverse justify-between w-[80%]">
            <img
              src="/assets/dauntless_inlet.jpeg"
              alt="Placeholder"
              className=" mb-4 rounded h-[400px] min-w-[620px] w-auto"
            />
            <div className="flex flex-col items-start max-w-[400px]">
              <h2 className="text-2xl font-bold text-gray-700 mb-3">
                Duration and Tribute
              </h2>
              <p className="text-gray-600 text-left">
                The entire sea memorial experience spans approximately 1 to 1.5
                hours, providing families ample time to navigate their emotions
                in a beautiful tribute. This is more than a farewell; it's a
                unique and memorable way to honor a life well-lived against the
                picturesque New Jersey coastline.
              </p>
            </div>
          </div>

          <div className="p-6 flex items-center justify-between w-[80%]">
            <img
              src="/assets/nearfall_inlet.jpeg"
              alt="Placeholder"
              className=" mb-4 rounded h-[400px] min-w-[620px] w-auto"
            />
            <div className="flex flex-col items-start max-w-[400px]">
              <h2 className="text-2xl font-bold text-gray-700 mb-3">
                A Serene Farewell
              </h2>
              <p className="text-gray-600 text-left">
                Experience a peaceful and dignified farewell as you journey
                through the calm waters, surrounded by the beauty of the ocean.
                This final voyage provides a moment of reflection and
                connection, set against the stunning backdrop of the sea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheExperiece;
