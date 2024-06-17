import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <img source={require("../assets/icons/_img_order.png")} />
      <h1>Done</h1>
    </header>
  );
};

export default Header;
