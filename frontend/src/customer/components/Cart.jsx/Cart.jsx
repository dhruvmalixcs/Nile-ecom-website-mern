import React from "react";
import CartItem from "./CartItem";
import "../ProductDetails/ProductDetails.css"
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate=useNavigate();
  const handleCheckout=()=>{
    navigate("/checkout?step=2")
  }
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:ps-16 relative">
        <div className="col-span-2">
          {[1,1,1].map(()=><CartItem />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>3424</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">-10</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">free</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Total Amount</span>
                <span className="text-green-600">3500</span>
              </div>
            </div>
            <button onClick={handleCheckout} className="w-full mt-5" sx={{px:"2.5rem",py:".7rem"}}> Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
