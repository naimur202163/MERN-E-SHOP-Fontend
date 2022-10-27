import React from "react";
import playStore from "../../../images/playstore.png";
import appstore from "../../../images/Appstore.png";
import "./Footer.css";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download APP for Andriod and IOS mobile phone</p>
        <img src={playStore} alt="playStore" />
        <img src={appstore} alt="appStore" />
      </div>
      <div className="midFooter">
        <h1>E-shop</h1>
        <p>High Quality Our Frist priority</p>
        <p>copyrights 2021 &copy Naimur Rahman</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="/#">Istagram</a>
        <a href="/#">Youtube</a>
        <a href="/#">Facebook</a>
      </div>
    </footer>
  );
}
