import { useContext } from "react";
import { StoreContext } from "../../Context/storeContext";
import {useNavigate} from "react-router-dom"

const Cart = () => {
  const { cartItems, food_list, removeFromCart ,getTotalAmount,url} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <>
      <div id="cart" className="container mx-auto p-4 mt-20">
        <div id="cart-item" className="w-full mb-6">
          <div id="cart-item-title" className="flex flex-wrap justify-between items-center mt-8 text-lg md:text-xl">
            <p className="w-1/6 text-center">Image</p>
            <p className="w-1/6 text-center">Title</p>
            <p className="w-1/6 text-center">Price</p>
            <p className="w-1/6 text-center">Quantity</p>
            <p className="w-1/6 text-center">Total</p>
            <p className="w-1/6 text-center">Remove</p>
          </div>
          <hr className="my-4" />
          {food_list
            .filter((item) => cartItems[item._id] > 0)
            .map((item) => {
              const quantity = cartItems[item._id];
              return (
                <div key={item._id} id="cart-item-details-quantity" className="flex flex-wrap items-center justify-between py-4 ">
                  <img src={url+"/images/"+item.image} alt={item.name} className="w-[56px] lg:w-[95px] rounded-xl mx-auto" />
                  <p className="w-1/6 text-center">{item.name}</p>
                  <p className="w-1/6 text-center">${item.price}</p>
                  <p className="w-1/6 text-center">{quantity}</p>
                  <p className="w-1/6 text-center">${item.price * quantity}</p>
                  <button onClick={() => removeFromCart(item._id)} className="w-1/6 text-center text-red-600">
                    X
                  </button>
                </div>
              );
            })}
        </div>
        <hr />
      </div>

<div className="flex flex-col lg:flex-row lg:mx-[120px] lg:mt-8 bg-gray-100 rounded-2xl p-4 mb-12 "> 
      <div id="cart-bottom" className="container mx-auto p-4 mt-10 ">
        <div id="cart-total" className=" p-4 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Cart Totals</h2>
          <div id="cart-total-details" className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>${getTotalAmount()}</p>
          </div>
          <hr />
          <div id="cart-total-deliveryDetails" className="flex justify-between my-2">
            <p>Delivery Fee</p>
            <p>${getTotalAmount()===0?0:2}</p>
          </div>
          <hr />
          <div id="cart-total-result" className="flex justify-between mt-2">
            <b>Total</b>
            <b>${getTotalAmount()===0?0:getTotalAmount()+2}</b>
          </div>
        </div>
        <button className="w-full mt-4 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 " onClick={()=> navigate("/order")}>Proceed to Checkout</button>
      </div>

      <div id="cart-promocode" className="container mx-auto p-4  mt-10 lg:mt-14  rounded-lg lg:w-[90%]">
        <p className="mb-2">If you have a promocode enter it here</p>
        <div id="cart-promocode-input" className="flex">
          <input type="text" placeholder="Promo Code" className="flex-grow p-2 border rounded-l-lg" />
          <button className="bg-orange-600 text-white px-4 rounded-r-lg hover:bg-orange-700 " >Submit</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Cart;
