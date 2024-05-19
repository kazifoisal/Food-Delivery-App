import { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/Explore-Menu/Explore-Menu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home =()=>{
    const [category, setCategory]= useState("All");

 return (<>
 
 <Header/>
 <ExploreMenu category={category} setCategory={setCategory}/>
 <FoodDisplay category={category}/>
 </>)
}

export default Home;