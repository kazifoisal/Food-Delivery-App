import NavBar from "./components/NavBar/NavBar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
    <NavBar />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/Order" element={<PlaceOrder/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
