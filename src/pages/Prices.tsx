import React from "react";
import PriceCard from "../components/PriceCard";

interface PricesProps {}

const priceItems = [
  {
    name: "Unattended Seaburial",
    description:
      "An unattended sea burial is a private ceremony where a vessel scatters a loved one's cremated remains at sea, allowing for a serene farewell without the physical presence of family or friends. This option suits families living far away or those uncomfortable with the ocean, as they can still participate in planning to honor the departed's memory.",
    price: "$300",
    deposit: 0.3,
    features: ["No additional spectators"],
  },
  {
    name: "Small Gathering",
    description: "",
    price: "$650",
    deposit: 0.3,
    features: ["6 passengers or less"],
  },
  {
    name: "Medium Gathering",
    description: "",
    price: "$800",
    deposit: 0.3,
    features: ["7 - 20 passengers"],
  },
  {
    name: "Large Gathering",
    description: "",
    price: "$1000",
    deposit: 0.3,
    features: ["20 - 49 passengers"],
  },
  {
    name: "Giant Gathering",
    description: "",
    price: "$1200",
    deposit: 0.3,
    features: ["50 up to max of 150 passengers"],
  },
];
const Prices: React.FC<PricesProps> = () => {
  return (
    <div className="relative h-[90vh] flex items-center justify-center">
      <div className=" max-w-[65%] m-auto flex-wrap gap-x-20 gap-y-6 flex justify-center">
      {priceItems.map((item) => (
        <PriceCard {...item} />
      ))}
      </div>
    </div>
  );
};

export default Prices;
