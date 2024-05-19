import { useContext } from "react";
import { StoreContext } from "../../Context/storeContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div id="food-display" className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-medium my-8">Top dishes near you</h2>
            <div id="food-display-list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {food_list.filter(item => category === "All" || item.category === category).map((item, index) => (
                    <FoodItem 
                        key={item.id} 
                        id={item.id} 
                        name={item.name} 
                        description={item.description} 
                        price={item.price} 
                        image={item.image} 
                    />
                ))}
            </div>
        </div>
    );
}

export default FoodDisplay;
