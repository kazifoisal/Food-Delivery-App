import { useState } from "react";
import { menu_list } from "../../assets/assets";
import "./Explore-menu.css"
const ExploreMenu = ({category, setCategory}) => {
  return (
    <>
      <div id="explore-menu" className="mx-[4%]">
      <h1 className="text-5xl font-semibold">Explore our menu</h1>
      <p id="explore-menu-text" className="max-w-[55%] text-gray-600 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos esse dolor quam, consequuntur suscipit fugit inventore veniam. Odit in sunt cupiditate soluta amet exercitationem labore nisi. Libero, ea illo! Sequi!
      </p>
      <div id="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div key={index} id="explore-menu-list-item" onClick={()=>setCategory(prev => prev === item.menu_name ? "All": item.menu_name)}>
              <img id={category === item.menu_name ? "Active": " "} src={item.menu_image} alt="" className="w-[7.5rvw] min-w-[80px] cursor-pointer rounded-full transition"/>
              <p className="mt-6 text-[#747474] cursor-pointer"> {item.menu_name}</p>
            </div>
          )
        })}
      </div>
      </div>
      <hr  className="m-[10px 0px] h-[2px] bg-[#e2e2e2] mx-12"/>
    </>
  );
};

export default ExploreMenu;
