import React from "react";
import { Link } from "react-router-dom";
import BurgerLogo from "../assets/burgerlogo.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="main">
          <img src={BurgerLogo} alt="" />
          <div className="container">
            <Link to="/">Anasayfa</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">Hakkımızda</Link>
            <Link to="/contact">İletişim</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
