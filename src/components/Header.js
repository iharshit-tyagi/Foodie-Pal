import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../utils/images/Foodie Pal Logo.png";
import { useSelector } from "react-redux";
const Header = () => {
  const [loginBtnValue, setLoginBtnValue] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { pathname } = useLocation();
  //Subscribing to store
  const cartItems = useSelector((store) => store.cart.items);
  useEffect(() => {
    // Scroll to the top whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="flex justify-between shadow-md bg-white">
      <div className="logo-container">
        <img className="w-28 h-28" src={logo} />
      </div>
      <div className="flex items-center ">
        <ul className="flex m-4 p-4 ">
          <li className="px-4 font-semibold text-lg hover:text-orange-500 ">
            {onlineStatus ? "✅ Online" : "❌ Disconnected"}
          </li>
          <li className="px-4  text-lg font-semibold hover:text-orange-500 ">
            <Link className="nav-links" to={"/"}>
              Home
            </Link>
          </li>
          <li className="px-4 text-lg font-semibold hover:text-orange-500 ">
            <Link className="nav-links" to={"/About"}>
              About Us
            </Link>
          </li>
          <li className="px-4 text-lg font-semibold hover:text-orange-500 ">
            <Link className="nav-links" to={"/Cart"}>
              Cart ({cartItems.length})
            </Link>
          </li>
          <li className="px-4 text-lg font-semibold hover:text-orange-500 ">
            <Link to={"/Login"}>
              <button
                className="login-btn"
                onClick={() => {
                  if (loginBtnValue === "Login") setLoginBtnValue("Logout");
                  else setLoginBtnValue("Login");
                }}
              >
                {loginBtnValue}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
