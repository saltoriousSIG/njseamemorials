const TheExperiece = () => {
  return (
    <div className="relative flex items-center justify-start bg-white mb-5 md:mb-10 lg:mb-20">
      <div className="container mx-auto px-4 relative">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-white my-4 md:my-6">
          The Experience
        </h1>

        <div className="space-y-6 flex flex-col items-center mx-auto w-full px-2">
          <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <div className="w-auto">
              <img
                src="/assets/decorator.png"
                alt="Decorator"
                className="h-16 md:h-24"
              />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap text-black tracking-tighter text-center my-4 md:my-0 md:ml-4">
              The Experience
            </h2>
            <div className="w-full h-[1px] bg-black mt-2 md:mt-0 md:ml-4" />
          </div>

          <div className="p-4 md:p-6 flex flex-col lg:flex-row-reverse justify-between w-full gap-4">
            <img
              src="/assets/dauntless_open.jpeg"
              alt="Dauntless Open"
              className="rounded md:h-[200px] lg:h-[400px] w-full md:w-auto"
            />
            <div className="flex flex-col items-start w-full md:min-w-[200px] lg:min-w-[400px] max-w-[450px]">
              <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-3">
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

          <div className="p-4 md:p-6 flex flex-col lg:flex-row justify-between w-full items-center gap-4">
            <img
              src="/assets/nearfall_inlet_2.jpeg"
              alt="Nearfall Inlet"
              className="rounded md:h-[200px] lg:h-[400px] lg:min-w-[650px] w-full md:w-auto"
            />
            <div className="flex flex-col w-full md:min-w-[200px] lg:min-w-[400px] items-start text-left max-w-[450px]">
              <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-3">
                Customized Ceremony
              </h2>
              <p className="text-gray-600">
                Upon arrival at the ceremony site, families are invited to engage in a customized ceremony that truly reflects the essence of their loved one's life. Set against the vastness of the ocean, this intimate moment allows for the sharing of memories and stories, creating an memorable experience over 15-30 minutes.
              </p>
            </div>
          </div>

          <div className="p-4 md:p-6 flex flex-col lg:flex-row-reverse items-center justify-between w-full gap-4">
            <img
              src="/assets/dauntless_inlet.jpeg"
              alt="Dauntless Inlet"
              className="rounded md:h-[200px] lg:h-[400px] w-full md:w-auto"
            />
            <div className="flex flex-col items-start w-full max-w-[450px] md:min-w-[200px] lg:min-w-[400px]">
              <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-3">
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

          <div className="p-4 md:p-6 flex flex-col lg:flex-row items-center justify-between w-full gap-4">
            <img
              src="/assets/nearfall_inlet.jpeg"
              alt="Nearfall Inlet"
              className="rounded md:h-[200px] lg:h-[400px] w-full lg:min-w-[650px] md:w-auto"
            />
            <div className="flex flex-col items-start w-full  max-w-[450px] md:min-w-[200px] lg:min-w-[400px]">
              <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-3">
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
