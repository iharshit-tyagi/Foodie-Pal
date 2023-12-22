import { useSelector, useDispatch } from "react-redux";

import RestaurantMenuItem from "./RestaurantMenuItem";
import { clearItems } from "../utils/cartSlice";
import OrderSummary from "./OrderSummary";
import { useState } from "react";
import OrderPlaced from "./OrderPlaced";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [showOrderPlaced, setShowOrderPlaced] = useState(false);
  const showOrderConfirmation = () => {
    setShowOrderPlaced(!showOrderPlaced);
  };
  const handleClearCart = () => {
    dispatch(clearItems());
  };
  return cartItems.length !== 0 ? (
    <div>
      {!showOrderPlaced && (
        <div>
          <div>
            <h1 className=" m-4 p-4 text-2xl font-bold text-center">Cart</h1>
          </div>
          <div className=" my-3 mx-9">
            <button
              className="border border-solid border-black m-2 p-2 bg-gray-900 text-white rounded-ss-md font-semibold"
              onClick={handleClearCart}
            >
              Clear Cart 📪
            </button>
          </div>

          <div className="flex  justify-evenly mb-5">
            <div className=" flex-grow">
              {cartItems.map((items) => {
                return (
                  <RestaurantMenuItem key={items.info.id} itemDetails={items} />
                );
              })}
            </div>

            <div className="mr-8 ">
              <OrderSummary update={showOrderConfirmation} />
            </div>
          </div>
        </div>
      )}

      {showOrderPlaced && (
        <div className="w-1/3 mx-auto  animate-fade-in">
          <OrderPlaced update={showOrderConfirmation} />
        </div>
      )}
    </div>
  ) : (
    <div>
      <h2 className=" text-center my-16 text-4xl bg- from-neutral-900">
        Empty Cart
      </h2>
    </div>
  );
};
export default Cart;
