import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [loginBtnValue, setLoginBtnValue] = useState("Login");
  return (
    <div className="Header-container">
      <div className="logo-container">
        <img className="logo-img" src={LOGO_URL} />
      </div>
      <div className="nav-list-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
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
