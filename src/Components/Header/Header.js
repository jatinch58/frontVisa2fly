import React from "react";
import "./Header.css";
export const Header = () => {
  return (
    <nav className="navbar">
      <div className="menu_items">
        <h3>VISA2FLY</h3>
        <p>Visa</p>
        <p>Travel Insurance</p>
        <p>Blog</p>
        <select className="other_selector">
          <option value="Others">Others</option>
          <option value="Offers">Offers</option>
          <option value="Free Visa">Free Visa</option>
          <option value="Visa On Arrival">Visa On Arrival</option>
        </select>
      </div>
      <div className="login_signup">
        <p>Sign in</p>
        <button>Sign up</button>
      </div>
    </nav>
  );
};
