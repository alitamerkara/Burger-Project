import React from "react";
import BannerImg from "../assets/banneryeni.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${BannerImg})` }}
        ></div>
        <div className="aboutBottom">
          <h1>Hakkımızda</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            ullam explicabo ea nesciunt dignissimos, aliquid magnam fugit enim
            debitis velit, dolorum vitae dicta beatae sint nostrum iure tempora
            odio eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nostrum et iure recusandae sunt voluptate illo distinctio, nobis
            reiciendis porro in excepturi magnam non quae vitae vero eveniet
            provident consequatur temporibus? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro ratione ea suscipit tempore
            cumque. Qui libero excepturi vero quidem optio ullam, itaque
            quaerat, ducimus obcaecati facilis, maxime debitis velit assumenda?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus, velit facere qui quaerat, sint aliquam, doloribus eaque
            voluptatem deserunt nemo itaque quod similique voluptate? Quae sequi
            delectus laboriosam nisi dolorum. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Voluptatum sunt facilis eos explicabo
            laborum est necessitatibus saepe deleniti esse, praesentium ullam
            repellendus asperiores, reprehenderit iste enim eveniet beatae alias
            recusandae.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
