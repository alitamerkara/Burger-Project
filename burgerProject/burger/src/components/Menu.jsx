import React from "react";
import "../styles/menu.css";
import { Data } from "../helpers/Data";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <h1 className="menuTitle">Burgerlerimiz</h1>
        <div className="menuList">
          {Data.map((item, index) => {
            return <MenuItem item={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
