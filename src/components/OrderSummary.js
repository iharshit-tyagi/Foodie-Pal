import { useSelector, useDispatch } from "react-redux";
const OrderSummary = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalAmount = cartItems.reduce((acc, curr) => {
    return cartItems.length != 0
      ? (acc +=
          Math.ceil(curr.info.price / 100) ||
          Math.ceil(curr.info.defaultPrice / 100))
      : 0;
  }, 0);

  return (
    <div className="text-left bg-gray-300 h-60 w-56">
      <h2 className="text-center font-bold">Order Summary </h2>
      <div className="text-lg font-semibold mx-5 my-5">
        <h2>Total Items : {cartItems.length}</h2>
        <h2>Total Amount : ₹{totalAmount}</h2>
      </div>
      <div className="flex justify-center my-11">
        <button className="border border-solid border-black m-2 p-2 bg-gray-900 text-white rounded-ss-md font-semibold  ">
          Buy Items
        </button>
      </div>
    </div>
  );
};
export default OrderSummary;
