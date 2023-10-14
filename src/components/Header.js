import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../utils/images/Foodie Pal Logo.png";
const Header = () => {
  const [loginBtnValue, setLoginBtnValue] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-orange-100">
      <div className="logo-container">
        <img className="w-48 h-44" src={logo} />
      </div>
      <div className="flex items-center ">
        <ul className="flex m-4 p-4 ">
          <li className="px-4 font-bold text-xl ">
            {onlineStatus ? "✅ Online" : "❌ Disconnected"}
          </li>
          <li className="px-4  text-xl font-bold">
            <Link className="nav-links" to={"/"}>
              Home
            </Link>
          </li>
          <li className="px-4 text-xl font-bold">
            <Link className="nav-links" to={"/About"}>
              About Us
            </Link>
          </li>
          <li className="px-4 text-xl font-bold">
            <Link className="nav-links" to={"/Cart"}>
              Cart
            </Link>
          </li>
          <li className="px-4 text-xl font-bold">
            <button
              className="login-btn"
              onClick={() => {
                if (loginBtnValue === "Login") setLoginBtnValue("Logout");
                else setLoginBtnValue("Login");
              }}
            >
              {loginBtnValue}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
