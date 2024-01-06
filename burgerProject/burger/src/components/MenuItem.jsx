import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${item.image})` }}></div>
      <h1 style={{ marginBottom: "10px" }}>{item.name}</h1>
      <h6 style={{ marginTop: "0px" }}>{item.content}</h6>
      <p>
        <i style={{ color: "red" }}>{item.price} TL</i>
      </p>
    </div>
  );
};

export default MenuItem;
