import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { EmailOutlined, HelpOutline, MobileOffOutlined } from "@material-ui/icons";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://logodix.com/logo/1594505.png"
        />
      </Link>
      <div className="header__option">
          <span className="header__optionLineOne">    <EmailOutlined /></span>
          <span className="header__optionLineTwo">gcvrapp@gmail.com</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne"><MobileOffOutlined/></span>
          <span className="header__optionLineTwo">+91 9360515218</span>
        </div>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

          
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
              </span>
          </div>
        </Link>
        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        
        <div className="header__option">
         <HelpOutline />
        </div>
      </div>
    </div>
  );
}

export default Header;
