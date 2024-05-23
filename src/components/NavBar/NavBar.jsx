import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom"; 
import "../NavBar/NavBar.css";
import { StoreContext } from "../../Context/storeContext";

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const {getTotalAmount,token,setToken} = useContext(StoreContext)
  return (
    <>
      <div
        id="navBar"
        className="flex justify-between items-center mx-4 mt-7 md:mx-12 md:mt-5 font-outfit"
      >
        <Link to="/">
          <img
            src={assets.logo}
            alt="logoImg"
            id="logo"
            className="w-24 md:w-32 lg:w-40" 
          />
        </Link>

        <ul
          className="hidden gap-5 md:flex text-lg md:items-center"
          id="navBar-menu"
        >
          <li
            className="cursor-pointer"
            id={menu === "Home" ? "active" : ""}
            onClick={() => setMenu("Home")}
          >
            Home
          </li>
          <li
            className="cursor-pointer"
            id={menu === "Menu" ? "active" : ""}
            onClick={() => setMenu("Menu")}
          >
            Menu
          </li>
          <li
            className="cursor-pointer"
            id={menu === "MobileApp" ? "active" : ""}
            onClick={() => setMenu("MobileApp")}
          >
            Mobile-App
          </li>
          <li
            className="cursor-pointer"
            id={menu === "ContactUs" ? "active" : ""}
            onClick={() => setMenu("ContactUs")}
          >
            Contact Us
          </li>
        </ul>
        <div className="flex gap-5 md:gap-10 items-center" id="navBar-right">
          <img
            src={assets.search_icon}
            alt="search-food"
            className="w-[11%] h-[11%] md:w-[9%] md:h-[9%]"
          />
          <div id="navBar-search-Icon" className="relative">
          <Link to="/cart">
          <img
              src={assets.basket_icon}
              alt="addtoCartIcon"
              className="w-[65%] h-[65%] md:w-[70%] md:h-[70%]"
            />
        </Link>
          
            <div className={getTotalAmount()===0 ? "" :"absolute bg-red-600 rounded-full w-3 h-3 top-[-5px] left-[44%] border-white border-2"} ></div>
          </div>
          {!token ? <button
            className="border-2 px-5 py-1 text-md rounded-3xl hover:border-gray-500"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button> : <div>
            <img src={assets.profile_icon} alt=''/>
             <ul id="nav-profile-dropdown">
              <li><img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
             </ul>
             
             </div>}
          
        </div>
      </div>
    </>
  );
};

export default NavBar;
