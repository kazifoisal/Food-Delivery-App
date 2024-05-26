import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../Context/storeContext";
import axios from "axios";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const {url} = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url+"/api/order/verify",{success,orderId
    });
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  }

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div id="verify" className="flex justify-center items-center h-screen">
      <div
        id="spinner"
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"
      ></div>
    </div>
  );
};

export default Verify;
