import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [loginBtnValue, setLoginBtnValue] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-orange-200">
      <div className="logo-container">
        <img className="w-50 " src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex m-4 p-4 ">
          <li className="px-4 font-semibold">
            {onlineStatus ? "✅ Online" : "❌ Disconnected"}
          </li>
          <li className="px-4 font-semibold">
            <Link className="nav-links" to={"/"}>
              Home
            </Link>
          </li>
          <li className="px-4 font-semibold">
            <Link className="nav-links" to={"/About"}>
              About Us
            </Link>
          </li>
          <li className="px-4 font-semibold">
            <Link className="nav-links" to={"/Cart"}>
              Cart
            </Link>
          </li>
          <li className="px-4 font-semibold">
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
