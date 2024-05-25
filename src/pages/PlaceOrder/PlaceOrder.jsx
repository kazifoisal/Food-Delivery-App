import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/storeContext";
import axios from "axios";

const PlaceOrder = () => {
  const { cartItems, food_list, getTotalAmount, token, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData ={
      address:data,
      items:orderItems,
      amount:getTotalAmount()+2,
    }

    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    console.log(response);
    
    if (response.data.success) {
      const {session_url}= response.data;
      window.location.replace(session_url);
      
    }
    else{
      alert("Error")
    }
  };
  return (
    <form
      onSubmit={placeOrder}
      id="place-order"
      className="container flex flex-col  lg:flex-row gap-8 mt-20 lg:py-12"
    >
      <div
        id="place-order-left"
        className="w-full md:w-1/2 flex flex-col gap-4"
      >
        <p id="title" className="text-2xl font-bold">
          Delivery Information
        </p>
        <div id="multi-fields" className="flex flex-wrap gap-4">
          <input required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First Name"
            className="flex-1 min-w-[150px] p-2 border rounded"
          />
          <input required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last Name"
            className="flex-1 min-w-[150px] p-2 border rounded"
          />
        </div>
        <input required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email Address"
          className="p-2 border rounded"
        />
        <input required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street Address"
          className="p-2 border rounded"
        />
        <div id="multi-fields" className="flex flex-wrap gap-4">
          <input required
            name= "city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="City"
            className="flex-1 min-w-[150px] p-2 border rounded"
          />
          <input required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
            className="flex-1 min-w-[150px] p-2 border rounded"
          />
        </div>
        <div id="multi-fields" className="flex flex-wrap gap-4">
          <input required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="Zip Code"
            className="flex-1 min-w-[150px] p-2 border rounded"
          />
          <input required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            placeholder="Country"
            className="flex-1 min-w-[150px] p-2 border rounded"
          />
        </div>
        <input required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Phone Number"
          className="p-2 border rounded"
        />
      </div>

      <div id="place-order-right" className="w-full md:w-1/2 lg:mt-12">
        <div id="cart-total" className="p-4 border rounded-lg bg-gray-50">
          <h2 className="text-3xl font-bold mb-4">Cart Totals</h2>
          <div id="cart-total-details" className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>${getTotalAmount()}</p>
          </div>
          <hr />
          <div
            id="cart-total-deliveryDetails"
            className="flex justify-between my-2"
          >
            <p>Delivery Fee</p>
            <p>${getTotalAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div id="cart-total-result" className="flex justify-between mt-2">
            <b>Total</b>
            <b>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</b>
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-4 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700"
        >
          Proceed to Checkout
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
