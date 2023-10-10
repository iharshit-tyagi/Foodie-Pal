import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [loginBtnValue, setLoginBtnValue] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="Header-container">
      <div className="logo-container">
        <img className="logo-img" src={LOGO_URL} />
      </div>
      <div className="nav-list-container">
        <ul>
          <li>{onlineStatus ? "✅ Online" : "❌ Disconnected"}</li>
          <li>
            <Link className="nav-links" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links" to={"/About"}>
              {" "}
              About Us
            </Link>
          </li>
          <li>
            <Link className="nav-links" to={"/Cart"}>
              Cart
            </Link>
          </li>
          <li>
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
