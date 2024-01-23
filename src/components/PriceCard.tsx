import React from "react";
import { useNavigate } from "react-router";

interface PriceCardProps {
  name: string;
  description: string;
  price: string;
  features: string[];
}

const PriceCard: React.FC<PriceCardProps> = ({
  name,
  description, 
  price,
  features
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const item = {
      name,
      description,
      price,
      features
    }
    const stringedItem = JSON.stringify(item);
    const encodedItem = btoa(stringedItem);
    navigate(`/book/${encodedItem}`);
  }
  return (
    <a className="w-[300px] bg-[rgba(250,250,225,0.5)] rounded-[5px] text-slate-800" href="#">
      <div className="card transition-shadow duration-200 ease-in-out">
        <div className="card-content p-4">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <div className="text-4xl my-4">{price}</div>
          <ul className="text-gray-600 dark:text-gray-800 text-sm mb-4">
            {features.map((feat) => (<li>{feat}</li>))}
          </ul>
          <button onClick={handleClick} className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-10 px-4 py-2 w-full">
            Book Now
          </button>
        </div>
      </div>
    </a>
  );
};

export default PriceCard;