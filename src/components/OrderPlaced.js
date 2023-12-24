import React, { useEffect } from "react";
import { clearItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const OrderPlaced = ({ update }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    update();
  };

  return (
    <div className="flex  items-center mt-16  flex-col p-5     animate-fade-in">
      <h2 className="text-4xl text-black">Order Placed!</h2>
      <button
        className="mt-7 border border-solid border-black m-2 p-2 bg-gray-900 text-white rounded-ss-md font-semibold "
        onClick={handleClick}
      >
        Ok
      </button>
    </div>
  );
};

export default OrderPlaced;
