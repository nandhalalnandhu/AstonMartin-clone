import React, { useEffect } from "react";
import AOS from "aos";

import "./Caro.css";
import vidb from "../../Assets/DBX707_medical_car_video.mp4";

function Caro() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div id="carosel-innr" className="carousel-inner">
        
        <div id="coont" className="carousel-item active">
          <video autoPlay muted loop>
            <source
              src="https://www.astonmartin.com/-/media/amr24/amr24-web-videos/amr24-hero-8s-desktop-web.mp4?rev=e6e97ce250064662b4ac81cd389db415"
              type="video/mp4"
            />
          </video>

          <div className="content">
            <h1>
              ASTON MARTIN ARMCO <br /> FORMULA ONE® TEAM's 2024 <br />
              Challenger
            </h1>
            <br />
            <button className="btx">Explore AMR24</button>
          </div>
        </div>

        <div id="coontt" className="carousel-item">
          <video autoPlay loop muted>
            <source src={vidb} type="video/mp4" />
          </video>
          <div className="contentt">
            <span>POWER.DRIVEN</span>
            <h1>DBX707 Formula 1® Medical Car</h1>
            <br />
            <div className="allbtn">
              <button className="btx">Explore DBX707 FIA F1® Medical Car</button>

              <button className="btnn">Configure</button>
            </div>
          </div>
        </div>

        <div id="coont" className="carousel-item">
          <video autoPlay loop>
            <source
              src="https://www.astonmartin.com/-/media/models---dbx707-my25/dbx_film1_web/dbx707my25_film1_8s_desktop-web.mp4?rev=d676a5142cd043b9a0cc545ff6a6a607"
              type="video/mp4"
            />
          </video>
          <div className="contenttt">
            <span>THE NEW POWER WITHIN</span>
            <h1>DBX707</h1>
            <br />
            <div className="allbtnn">
              <button className="btxx">Explore</button>

              <button className="btnn">Configure</button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Caro;
