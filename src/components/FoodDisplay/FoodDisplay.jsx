import { useContext } from "react";
import { StoreContext } from "../../Context/storeContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div id="food-display" className="container">
            <h2 className="text-5xl font-medium my-8">Top dishes near you</h2>
            <div id="food-display-list" className="grid grid-cols-4  gap-8">
                {food_list.map((item, index) => {
                    if (category ==="All" || category === item.category) {
                        return (

                            <FoodItem 
                                key={index} 
                                id={item.id} 
                                name={item.name} 
                                description={item.description} 
                                price={item.price} 
                                image={item.image} 
                            /> 
                        );
                    }
              
                   

                })}
            </div>
        </div>
    );
}

export default FoodDisplay;
