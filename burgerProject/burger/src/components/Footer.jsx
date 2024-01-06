import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <p>Bütün hakları saklıdır | BurgerYiyelim</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
