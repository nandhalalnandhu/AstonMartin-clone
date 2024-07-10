import React from "react";
import "./Footer.css";
import socio from  "../../Assets/socio.png"

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="as-head">
        <span className="hedz">ASTON MARTIN</span>
        <br />
        <div className="line"></div>
      </div>

      <div className="middle">
        <div className="A-li">
          <tr>
            <ul>Our World</ul>
            <ul>Models</ul>
            <ul>Owners</ul>
            <ul>F1 Team</ul>
            <ul>Preowned</ul>
            <ul>Experiences</ul>
            <ul>Store</ul>
          </tr>

          <tr>
            <ul>Dealers</ul>
            <ul>Enquiry</ul>
            <ul>Contact us</ul>
          </tr>

          <tr>
            <ul>Corporate</ul>
            <ul>About us</ul>
            <ul>Media</ul>
            <ul>Careers</ul>
            <ul>Investors</ul>
          </tr>
        </div>
        <div className="sear">
          <span className="find">Find a dealer</span>
          <br />
          <input type="text" placeholder="Town/Postcode" />
        </div>
      </div>

      <div className="botto">

        <span className="botto-text">
            The emissions/fuel economy figures quoeted are sourced from official regulated test results obtained through laboratory testing. THey are for comparability purposes only and may not reflect your real driving experience.which may vary  depending on factors including road condition, weather, vechicle load and driving style
        </span>
        <br /><br />
          
          <a href=""> WLTP - CONSUMPTION AND EMISSION VALUES</a>
      </div>

      <div className="socio">
        <img src={socio} alt="" width={180} />
      </div>

      <div className="last">
        <span className="last-inter">International site </span>

        <div className="all-last">
            <span className="llast">Terms & Conditions </span>
            <span className="llast">Privacy </span>
            <span className="llast">Cookies </span>
            <span className="llast"> © Aston Martin 2024 </span>
        </div>

      </div>
    </div>
  );
};
