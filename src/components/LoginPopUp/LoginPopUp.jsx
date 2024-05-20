import { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div
      id="logIn-PopUp"
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-10"
    >
      <form
        id="login-popUp-container"
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <div
          id="login-popUp-title"
          className="flex justify-between items-center mb-6"
        >
          <h2 className="text-xl font-semibold">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
            className="cursor-pointer"
          />
        </div>
        <div id="login-popUp-Inputs" className="space-y-4">
          {currentState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your name ..."
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            type="email"
            placeholder="Your Email ..."
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password ..."
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div id="login-popUp-checkBox" className="flex items-start mt-4">
          <input type="checkbox" required className="mt-1" />
          <p className="ml-2 text-sm">
            By clicking this you agree to our <u>terms and conditions</u> and
            our <u>Privacy Policy</u>
          </p>
        </div>
        <button className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {currentState === "Sign Up" ? "Create an account" : "Login"}
        </button>

        {currentState==="Sign Up"?  <p>
          Already have an account? <span className="cursor-pointer" onClick={()=>setCurrentState("Login")}>Click here</span>
        </p>
        : <p>
        Don't have any account ? <span className="cursor-pointer"  onClick={()=>setCurrentState("Sign Up")}>Create an account</span>
      </p>
    }
      
        
      </form>
    </div>
  );
};

export default LoginPopUp;
