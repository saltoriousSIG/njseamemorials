import React from "react";

interface WhySeaburialProps {}

const WhySeaburial: React.FC<WhySeaburialProps> = () => {
  return (
    <div className="relative h-[90vh] flex items-start justify-start bg-white">
      <div className="container mx-auto px-4 py-6 space-y-10 mt-20">
        <h1 className="text-4xl font-semibold text-center text-white mb-8">
          Why a Sea Burial?
        </h1>

        <div className="container">
          <div className="flex items-center justify-center">
            <div>
              <img src="/assets/decorator.png" />
            </div>
            <h2 className="text-3xl font-bold whitespace-nowrap text-black crimson-text-regular tracking-tighter text-left  sm:text-4xl md:text-5xl">
              History
            </h2>
            <div className="w-[1000px] h-[1px] bg-black ml-10" />
          </div>
          <div className="flex items-center m-auto justify-between w-[80%]">
            <div className="p-6 w-1/2 text-left max-w-[600px]">
              <p className="text-gray-600 mb-4">
                Sea burial, a practice with roots dating back thousands of
                years, has long been a sought-after final disposition. In the
                face of contemporary challenges like scarcity and high costs
                associated with traditional cemetery spaces, an increasing
                number of individuals are turning to the more affordable and
                environmentally conscious option of burial at sea.
              </p>
              <p className="text-gray-600 mb-4">
                This alternative, deemed highly affordable, resonates with those
                seeking an environmentally conscious and space-efficient
                solution. The shortage of available cemetery plots further
                contributes to the appeal of sea scattering.
              </p>
              <p className="text-gray-600 mb-4">
                For many families, the affinity for the ocean plays a central
                role in their decision, as they perceive no better final resting
                place for their earthly remains. The ocean, with its timeless
                expanse, offers a poignant and symbolic farewell.
              </p>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <img
                src="/assets/dauntless_open.jpeg"
                alt="Placeholder"
                className=" mb-4 rounded h-[400px]  w-auto"
              />
              <img />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySeaburial;
