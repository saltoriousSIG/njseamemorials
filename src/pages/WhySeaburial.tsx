import React from "react";

interface WhySeaburialProps { }

const WhySeaburial: React.FC<WhySeaburialProps> = () => {
  return (
    <div className="relative h-[90vh] flex items-start justify-start bg-white">
      <div className="container mx-auto px-4 py-6 space-y-10 mt-20">
        <h1 className="text-4xl font-semibold text-center text-white mb-8">
          Why a Sea Burial?
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-600 mb-4">
            Sea burial, a practice with roots dating back thousands of years,
            has long been a sought-after final disposition. In the face of
            contemporary challenges like scarcity and high costs associated with
            traditional cemetery spaces, an increasing number of individuals are
            turning to the more affordable and environmentally conscious option
            of burial at sea.
          </p>
          <p className="text-gray-600 mb-4">
            This alternative, deemed highly affordable, resonates with those
            seeking an environmentally conscious and space-efficient solution.
            The shortage of available cemetery plots further contributes to the
            appeal of sea scattering.
          </p>
          <p className="text-gray-600 mb-4">
            For many families, the affinity for the ocean plays a central role
            in their decision, as they perceive no better final resting place
            for their earthly remains. The ocean, with its timeless expanse,
            offers a poignant and symbolic farewell.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhySeaburial;
