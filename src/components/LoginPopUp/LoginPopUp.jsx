import { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/storeContext";
import axios from "axios";

const LoginPopUp = ({ setShowLogin }) => {
  const { url ,setToken} = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onLogin = async (event) => {
    event.preventDefault();

    let newUrl = url;
    if (currentState ==="Login") {
      newUrl += "/api/user/login"
    }
    else{
      newUrl +="/api/user/register"
    }

    const response = await axios.post(newUrl,data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token)
      setShowLogin(false);
    }
    else{
      alert(response.data.message)
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div
      id="logIn-PopUp"
      className="fixed inset-0 bg-gray-600 bg-opacity-80 flex justify-center items-center z-10"
    >
      <form
        onSubmit={onLogin}
        id="login-popUp-container"
        className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div
          id="login-popUp-title"
          className="flex justify-between items-center mb-4 md:mb-6"
        >
          <h2 className="text-xl font-semibold">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
            className="cursor-pointer"
          />
        </div>
        <div id="login-popUp-Inputs" className="space-y-3 md:space-y-4">
          {currentState === "Sign Up" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name ..."
              required
              className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your Email ..."
            required
            className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password ..."
            required
            className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div
          id="login-popUp-checkBox"
          className="flex items-start mt-3 md:mt-4"
        >
          <input type="checkbox" required className="mt-1" />
          <p className="ml-2 text-sm">
            By clicking this you agree to our{" "}
            <u className="hover:text-blue-700 hover:cursor-pointer">
              terms and conditions
            </u>{" "}
            and our{" "}
            <u className="hover:text-blue-700 hover:cursor-pointer">
              Privacy Policy
            </u>
          </p>
        </div>
        <button
          type="submit"
          className="mt-5 w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {currentState === "Sign Up" ? "Create an account" : "Login"}
        </button>

        {currentState === "Sign Up" ? (
          <p className="text-center mt-4">
            Already have an account?{" "}
            <span
              className="cursor-pointer text-orange-500 hover:text-orange-700"
              onClick={() => setCurrentState("Login")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <span
              className="cursor-pointer text-orange-500 hover:text-orange-700"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create an account
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
