import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/storeContext";

const FoodItem = ({ id, name, description, price, image }) => {
  const { addToCart, removeFromCart, cartItems ,url} = useContext(StoreContext);
  return (
    <div id="food-item" className="border rounded-xl overflow-hidden">
      <div id="food-item-img-container" className="relative mb-2">
        <img
          src={url+"/images/"+image}
          id="food-item-image"
          alt="food-image"
          className="w-full h-48 object-cover rounded-t-xl"
        />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt="Add"
            onClick={() => addToCart(id)}
            className="absolute w-8 h-8 rounded-full bg-green-500 text-white cursor-pointer hover:bg-green-600 shadow-lg right-4 bottom-4 transition duration-150 ease-in-out hover:scale-110"
          />
        ) : (
          <div className="absolute right-4 bottom-4 flex items-center gap-2 bg-white p-1 rounded-full">
            <img
              src={assets.remove_icon_red}
              alt="Remove"
              onClick={() => removeFromCart(id)}
              className="w-8 h-8 rounded-full bg-red-500 cursor-pointer hover:bg-red-600 transition duration-150 ease-in-out hover:scale-110"
            />
            <p className="text-md text-orange-600 font-medium">
              {cartItems[id]}
            </p>
            <img
              src={assets.add_icon_green}
              alt="Add"
              onClick={() => addToCart(id)}
              className="w-8 h-8 rounded-full bg-green-500 cursor-pointer hover:bg-green-600 transition duration-150 ease-in-out hover:scale-110"
            />
          </div>
        )}
      </div>
      <div id="food-item-info" className="p-4">
        <div
          id="food-item-name-rating"
          className="flex justify-between items-center"
        >
          <p className="text-lg md:text-xl font-semibold">{name}</p>
          <img src={assets.rating_starts} alt="rating stars" className="w-24" />
        </div>
        <p id="description" className="text-sm md:text-md">
          {description}
        </p>
        <p
          id="food-item-price"
          className="text-md md:text-lg font-semibold text-orange-600"
        >
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
