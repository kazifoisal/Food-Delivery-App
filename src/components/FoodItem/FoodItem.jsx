import { useState } from "react";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, description, price, image }) => {
    const [itemCounter, setItemCounter] = useState(0);

    return (
        <div id="food-item" className="border rounded-xl">
            <div id="food-item-img-container" className="relative mb-2">
                <img src={image} id="food-item-image" alt="food-image" className="rounded-t-xl z-10"/>
                {!itemCounter 
                ? <img src={assets.add_icon_white} alt="Add" onClick={() => setItemCounter(prev => prev + 1)}
                       className="absolute  w-8 h-8 rounded-full bg-green-500 text-white cursor-pointer hover:bg-green-600 shadow-lg right-4 bottom-4 transition duration-150 ease-in-out hover:scale-110" /> 
                : <div className="absolute right-4 bottom-4 flex items-center gap-2 bg-white p-1 rounded-full">
                    <img src={assets.remove_icon_red} alt="Remove" onClick={() => setItemCounter(prev => prev - 1)}
                         className="w-8 h-8 rounded-full bg-red-500 cursor-pointer hover:bg-red-600 shadow-lg transition duration-150 ease-in-out hover:scale-110"/>
                    <p className="text-md text-orange-600 font-medium">{itemCounter}</p>
                    <img src={assets.add_icon_green} alt="Add" onClick={() => setItemCounter(prev => prev + 1)}
                         className="w-8 h-8 rounded-full bg-green-500 cursor-pointer hover:bg-green-600 shadow-lg transition duration-150 ease-in-out hover:scale-110"/>
                 </div>
                }
            </div>
            <div id="food-item-info" className="flex flex-col gap-4 p-4">
                <div id="food-item-name-rating" className="flex justify-between items-center">
                    <p className="text-2xl font-semibold">{name}</p>
                    <img src={assets.rating_starts} alt="rating stars"/>
                </div>
                <p id="description" className="text-md font-medium">{description}</p>
                <p id="food-item-price" className="text-xl font-semibold text-orange-600">${price}</p>
            </div>
        </div>
    );
}

export default FoodItem;
