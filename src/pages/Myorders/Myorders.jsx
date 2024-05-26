import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/storeContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      {
        headers: { token },
      }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className=" container mt-12  min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h2>
      <div className="space-y-4">
        {data.map((order, index) => (
          <div key={index} className="flex items-center justify-between  bg-white p-4 gap-4 shadow-xl border rounded-lg">
            <img src={assets.parcel_icon} alt="Parcel Icon" className="w-16 h-16 mr-4"/>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">
                {order.items.map((item, index) => (
                  <span key={index}>{item.name} x {item.quantity}{index < order.items.length - 1 ? ', ' : ''}</span>
                ))}
              </p>
            </div>
            <p className="font-semibold text-lg">${order.amount}.00</p>
            <p className="text-gray-500">Items: {order.items.length}</p>
            <p className="flex items-center text-sm font-semibold">
              <span className="text-green-500 mr-2">&#x25cf;</span> {order.status}
            </p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white py-2 rounded-lg px-4 ">Track Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
