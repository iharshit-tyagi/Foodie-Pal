import { useSelector, useDispatch } from "react-redux";

import RestaurantMenuItem from "./RestaurantMenuItem";
import { clearItems } from "../utils/cartSlice";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItems());
  };
  return cartItems.length !== 0 ? (
    <div>
      <div>
        <h1 className=" m-4 p-4 text-2xl font-bold text-center">Cart</h1>
      </div>
      <div className="flex justify-end my-3 mx-9">
        <button
          className="border border-solid border-black m-2 p-2 bg-gray-900 text-white rounded-ss-md font-semibold"
          onClick={handleClearCart}
        >
          Clear Cart 📪
        </button>
      </div>
      {cartItems.length === 0 && (
        <div>
          <h2 className=" text-center my-28 text-4xl bg- from-neutral-900">
            Your Cart is Empty 😢
          </h2>
        </div>
      )}
      <div className="flex">
        <div className="flex-1">
          {cartItems.map((items) => {
            return (
              <RestaurantMenuItem key={items.info.id} itemDetails={items} />
            );
          })}
        </div>

        <div className="">
          <OrderSummary />
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h2 className=" text-center my-28 text-4xl bg- from-neutral-900">
        Your Cart is Empty 😢
      </h2>
    </div>
  );
};
export default Cart;
