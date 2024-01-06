import React from "react";
import { Link } from "react-router-dom";
import BurgerPhoto from "../assets/banneryeni.jpg";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div
        className="homePage"
        style={{ backgroundImage: `url(${BurgerPhoto})` }}
      >
        <div className="order">
          <Link to="/menu">SİPARİŞ VER</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
