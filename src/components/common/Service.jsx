import React, {useState, useEffect} from "react";
import { Minus, Plus } from "lucide-react";


const Service = ({service: {public_id, title, detail, price, priceUnit, minQuantity}, isClicked, handleClick, quantity}) => {
  // const [isClicked, setIsClicked] = useState(false);
  const [serviceQuantity, setServiceQuantity] = useState(() => {
    return quantity !== undefined ? quantity : undefined;
  });

  useEffect(() => {
    console.log(serviceQuantity);
  }, [serviceQuantity]);

  useEffect(() => {
    setServiceQuantity(quantity !== undefined ? quantity : undefined);
  }, [quantity]);

  return (
      <div className={`px-[10px] py-[30px] rounded-[20px] mb-[20px] flex flex-col justify-between bg-[#e4e2e2] min-h-[200px] sm:min-h-[300px] items-stretch
                    transition-transform duration-300 ease-in-out shadow-md cursor-default flex-1
                    ${isClicked ? "border-4 border-sky-400" : "hover:scale-102 hover:shadow-lg"}`}>
        <h2 className="text-xl !font-semibold">{title}</h2>
        {detail && <p className="text-black">{detail}</p>}
        {price && <h4 className="!font-bold text-black !text-2xl">{price} DZD {priceUnit && `/ ${priceUnit}`}</h4>}

        <div className="mt-4 flex items-center justify-between">
          {/* Selection Button (always displayed) */}
          <button onClick={() => handleClick && handleClick({public_id, quantity: isClicked ? 0 : 1})} 
            className="btn btn-primary text-white px-4 py-2 rounded-xl font-semibold"
            disabled={minQuantity > 0 || quantity > 0}>
            Sélectionner
          </button>
          {/* Quantity Selector (if applicable) */}
          { serviceQuantity !== undefined && (
            <div className="flex items-center">
              <button
                className="btn btn-primary text-white rounded-full p-0 disabled:opacity-50 flex items-center justify-center"
                onClick={() => handleClick && handleClick({public_id, quantity: serviceQuantity - 1})}
                disabled={serviceQuantity <= minQuantity}
              >
                <Minus size={24} className="rounded-full text-white p-1" />
              </button>
              <span className="mx-2 text-xl font-bold">{serviceQuantity}</span>
              <button
                className="btn btn-primary text-white rounded-full p-0 flex items-center justify-center"
                onClick={() => handleClick && handleClick({public_id, quantity: serviceQuantity + 1})}
                disabled={serviceQuantity >= 10}
              >
                <Plus size={24} className="rounded-full text-white p-1" />
              </button>
            </div>
          )}
        </div>
      </div>
  );
};

export default Service;