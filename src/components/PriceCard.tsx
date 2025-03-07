import React from "react";
import { useNavigate } from "react-router";

interface PriceCardProps {
  id: number;
  name: string;
  description: string;
  price: string;
  features: string[];
}

const PriceCard: React.FC<PriceCardProps> = ({
  name,
  price,
  features
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    //const item = {
    //  id,
    //  name,
    //  description,
    //  price,
    //  features
    //}
    //const stringedItem = JSON.stringify(item);
    //const encodedItem = btoa(stringedItem);
    navigate(`/booking`);
  }
  return (
    <a className="w-[587px] shadow-2xl bg-[#f6f6f6] rounded-[18px] text-slate-800" href="#">
      <div className="card transition-shadow duration-200 ease-in-out">
        <div className="card-content p-4">
          <h2 className="text-[22px] font-bold mb-2">{name}</h2>
          <div className="text-[36px] my-4 font-bold">{price}</div>
          <ul className="text-gray-600 dark:text-gray-800 text-sm mb-4 font-bold">
            {features.map((feat) => (<li>{feat}</li>))}
          </ul>
          <button onClick={handleClick} className="inline-flex text-black items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-10 px-4 py-2 w-full rounded-[100px] bg-[#BEECFF]">
            Book Now
          </button>
        </div>
      </div>
    </a>
  );
};

export default PriceCard;
