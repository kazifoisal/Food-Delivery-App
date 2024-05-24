import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import { StoreContext } from "../../Context/storeContext";

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  const handleLogout = () => {
    setToken(null);
    setIsOpen(false);
  };

  const { getTotalAmount, token, setToken } = useContext(StoreContext);
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

            <div
              className={
                getTotalAmount() === 0
                  ? ""
                  : "absolute bg-red-600 rounded-full w-3 h-3 top-[-5px] left-[44%] border-white border-2"
              }
            ></div>
          </div>
          {!token ? (
            <button
              className="border-2 px-4 py-2 text-sm sm:text-md rounded-3xl hover:border-gray-500 transition duration-300"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          ) : (
            <div className="relative z-10">
              <img
                src={assets.profile_icon}
                onClick={toggle}
                alt="Profile Icon"
                className="sm:w-5 sm:h-5 rounded-full cursor-pointer"
              />
              {isOpen && (
                <ul
                  id="nav-profile-dropdown"
                  className="absolute right-0 mt-2 w-40 sm:w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <li className="flex items-center px-3 py-2 sm:px-4 sm:py-2 hover:bg-gray-100 cursor-pointer">
                    <img
                      src={assets.bag_icon}
                      alt="Orders Icon"
                      className="w-2 h-2 sm:w-5 sm:h-5 mr-2 sm:mr-3"
                    />
                    <p className="text-xs sm:text-sm">Orders</p>
                  </li>
                  <hr className="border-gray-200" />
                  <li
                    className="flex items-center px-3 py-2 sm:px-4 sm:py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    <img
                      src={assets.logout_icon}
                      alt="Logout Icon"
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3"
                    />
                    <p className="text-xs sm:text-sm">Logout</p>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
