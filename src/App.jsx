import NavBar from "./components/NavBar/NavBar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import LoginPopUp from "./components/LoginPopUp/LoginPopUp"
import Verify from "./pages/Verify/Verify"

function App() {
  const [showLogin, setShowLogin]=useState(false);

  return (
    <>
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : <></>}
    <NavBar setShowLogin={setShowLogin} />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/order" element={<PlaceOrder/>}/>
    <Route path="/verify" element={<Verify/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
