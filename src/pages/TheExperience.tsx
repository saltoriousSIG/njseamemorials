const TheExperiece = () => {
  return (
    <div className="relative flex items-center justify-start">
      <div className="container mx-auto px-4 relative">
        <h1 className="text-4xl font-semibold text-center text-white my-6">
          The Experience
        </h1>

        <div className="space-y-6 max-w-[75%] m-auto">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <img
              src="/src/assets/dauntless_open.jpeg"
              alt="Placeholder"
              className="w-full h-auto mb-4 rounded h-[250px] w-auto"
            />
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              Vessel Journey
            </h2>
            <p className="text-gray-600">
              NJ Sea Memorial Service offers two vessels for a journey of solace
              and reverence. Departing from either Broadway Basin in Point
              Pleasant Beach or Belmar, New Jersey, our vessels cater to your
              preference, adding personalization to your experience. The journey
              to the ceremony location is a serene 15-20 minute ride, perfect
              for reflection and remembrance.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <img
              src="/src/assets/nearfall_inlet_2.jpeg"
              alt="Placeholder"
              className="w-full h-auto mb-4 rounded h-[250px] w-auto"
            />
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              Customized Ceremony
            </h2>
            <p className="text-gray-600">
              Upon arrival at the ceremony site, families are invited to engage
              in a customized ceremony that truly reflects the essence of their
              loved one's life. Set against the vastness of the ocean, this
              intimate moment allows for the sharing of memories and stories,
              creating an emotionally resonant experience over 15-30 minutes.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <img
              src="/src/assets/dauntless_inlet.jpeg"
              alt="Placeholder"
              className="w-full h-auto mb-4 rounded h-[250px] w-auto"
            />
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              Duration and Tribute
            </h2>
            <p className="text-gray-600">
              The entire sea memorial experience spans approximately 1 to 1.5
              hours, providing families ample time to navigate their emotions in
              a beautiful tribute. This is more than a farewell; it's a unique
              and memorable way to honor a life well-lived against the
              picturesque New Jersey coastline.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <img
              src="/src/assets/nearfall_inlet.jpeg"
              alt="Placeholder"
              className="w-full h-auto mb-4 rounded h-[250px] w-auto"
            />
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              A Serene Farewell
            </h2>
            <p className="text-gray-600">
              Experience a peaceful and dignified farewell as you journey
              through the calm waters, surrounded by the beauty of the ocean.
              This final voyage provides a moment of reflection and connection,
              set against the stunning backdrop of the sea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheExperiece;
