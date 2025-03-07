import React from "react";
import PriceCard from "../components/PriceCard";

interface PricesProps { }

const priceItems = [
  {
    id: 15,
    name: "Unattended Seaburial",
    description:
      "An unattended sea burial is a private ceremony where a vessel scatters a loved one's cremated remains at sea, allowing for a serene farewell without the physical presence of family or friends. This option suits families living far away or those uncomfortable with the ocean, as they can still participate in planning to honor the departed's memory.",
    price: "$300",
    deposit: 0.3,
    features: ["No additional spectators"],
  },
  {
    id: 16,
    name: "Small Gathering",
    description: "",
    price: "$650",
    deposit: 0.3,
    features: ["6 passengers or less"],
  },
  {
    id: 17,
    name: "Medium Gathering",
    description: "",
    price: "$800",
    deposit: 0.3,
    features: ["7 - 20 passengers"],
  },
  {
    id: 18,
    name: "Large Gathering",
    description: "",
    price: "$1000",
    deposit: 0.3,
    features: ["20 - 49 passengers"],
  },
  {
    id: 19,
    name: "Giant Gathering",
    description: "",
    price: "$1200",
    deposit: 0.3,
    features: ["50 up to max of 150 passengers"],
  },
  {
    id: 20,
    name: "Celebration of Life",
    description: "",
    price: "$2000",
    deposit: 0.3,
    features: ["Max of 150 passengers"],
  },
];
const Prices: React.FC<PricesProps> = () => {
  return (
    <div className="relative flex flex-col pb-40  items-center justify-center bg-white">
      <div className="flex items-center justify-center py-20">
        <div>
          <img src="/assets/decorator.png" />
        </div>
        <h2 className="text-3xl font-bold whitespace-nowrap text-black crimson-text-regular tracking-tighter text-left  sm:text-4xl md:text-5xl">
          Pricing
        </h2>

        <div className="w-[1000px] h-[1px] bg-black ml-10" />
      </div>
      <div className="w-full h-fit text-black mb-14 italic font-bold">
        If a religious representative will be present, they will be included in the  gathering size
      </div>

      <div className=" max-w-[85%] m-auto flex-wrap gap-x-20 gap-y-6 flex justify-center">
        {priceItems.map((item) => (
          <PriceCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default Prices;
