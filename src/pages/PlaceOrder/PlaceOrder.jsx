import { useContext } from "react";
import { StoreContext } from "../../Context/storeContext";

const PlaceOrder = () => {
  const { cartItems, food_list } = useContext(StoreContext);

  const subtotal = food_list.reduce((acc, item) => {
    const quantity = cartItems[item._id] || 0;
    return acc + item.price * quantity;
  }, 0);

  const deliveryFee = 2;
  const total = subtotal + deliveryFee;

  return (
    <form id="place-order" className="container flex flex-col  lg:flex-row gap-8 mt-20 lg:py-12">
      <div id="place-order-left" className="w-full md:w-1/2 flex flex-col gap-4">
        <p id="title" className="text-2xl font-bold">Delivery Information</p>
        <div id="multi-fields" className="flex flex-wrap gap-4">
          <input type="text" placeholder="First Name" className="flex-1 min-w-[150px] p-2 border rounded" />
          <input type="text" placeholder="Last Name" className="flex-1 min-w-[150px] p-2 border rounded" />
        </div>
        <input type="email" placeholder="Email Address" className="p-2 border rounded" />
        <input type="text" placeholder="Street Address" className="p-2 border rounded" />
        <div id="multi-fields" className="flex flex-wrap gap-4">
          <input type="text" placeholder="City" className="flex-1 min-w-[150px] p-2 border rounded" />
          <input type="text" placeholder="State" className="flex-1 min-w-[150px] p-2 border rounded" />
        </div>
        <div id="multi-fields" className="flex flex-wrap gap-4">
          <input type="text" placeholder="Zip Code" className="flex-1 min-w-[150px] p-2 border rounded" />
          <input type="text" placeholder="Country" className="flex-1 min-w-[150px] p-2 border rounded" />
        </div>
        <input type="text" placeholder="Phone Number" className="p-2 border rounded" />
      </div>

      <div id="place-order-right" className="w-full md:w-1/2 lg:mt-12">
        <div id="cart-total" className="p-4 border rounded-lg bg-gray-50">
          <h2 className="text-3xl font-bold mb-4">Cart Totals</h2>
          <div id="cart-total-details" className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <hr />
          <div id="cart-total-deliveryDetails" className="flex justify-between my-2">
            <p>Delivery Fee</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <hr />
          <div id="cart-total-result" className="flex justify-between mt-2">
            <b>Total</b>
            <b>${total.toFixed(2)}</b>
          </div>
        </div>
        <button className="w-full mt-4 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700">Proceed to Checkout</button>
      </div>
    </form>
  );
};

export default PlaceOrder;
