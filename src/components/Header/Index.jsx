import logo from "/logo.jpg";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <div className="header__logo">
          <img src={logo} alt="logo" />
          <p> World Problems Log</p>
        </div>
      </Link>

      <div className="header__action">
        <div className="header__search">
          <span className="material-icons-sharp search__icon">search</span>
          <input type="text" placeholder="Search" />
        </div>

        <button className="header__cta">Get Started</button>
      </div>
    </div>
  );
};

export default Header;
