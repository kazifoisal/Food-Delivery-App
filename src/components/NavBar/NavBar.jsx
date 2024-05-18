import { useState } from "react";
import { assets } from "../../assets/assets";
import "../NavBar/NavBar.css";

const NavBar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <>
      <div
        id="navBar"
        className="flex justify-between items-center mx-12 mt-5 font-outfit"
      >
        <img
          src={assets.logo}
          alt="logoImg"
          id="logo"
          className=" max-w-[8%]"
        />
        <ul className="flex gap-5 text-lg items-center " id="navBar-menu">
          <li className=" cursor-pointer" id={menu === "Home" ? "active" : " "} onClick={()=> setMenu("Home")}>
            Home
          </li>
          <li className=" cursor-pointer" id={menu === "Menu" ? "active" : " "} onClick={()=> setMenu("Menu")}>
            Menu
          </li>

          <li
            className=" cursor-pointer"
            id={menu === "MobileApp" ? "active" : " "}
            onClick={()=> setMenu("MobileApp")}
          >
            Mobile-App
          </li>
          <li
            className=" cursor-pointer"
            id={menu === "ContactUs" ? "active" : " "}
            onClick={()=> setMenu("ContactUs")}

          >
            Contact Us
          </li>
        </ul>
        <div className="flex gap-10 items-center" id="navBar-right">
          <img
            src={assets.search_icon}
            alt="search-food"
            className="w-[9%] h-[9%]"
          />
          <div id="navBar-search-Icon" className="relative">
            <img
              src={assets.basket_icon}
              alt="addtoCartIcon"
              className="w-[70%] h-[70%]"
            />
            <div className="absolute bg-red-600 rounded-full  w-3 h-3 top-[-5px] left-[44%] border-white border-2"></div>
          </div>
          <button className="border-2 px-5 py-1 text-md rounded-3xl hover:border-gray-500 ">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
