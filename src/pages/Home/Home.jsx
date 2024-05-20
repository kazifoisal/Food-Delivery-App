import { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/Explore-Menu/Explore-Menu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/App-Downloader/AppDownload";

const Home =()=>{
    const [category, setCategory]= useState("All");

 return (<>
 
 <Header/>
 <ExploreMenu category={category} setCategory={setCategory}/>
 <FoodDisplay category={category}/>
 <AppDownload/>

 </>)
}

export default Home;