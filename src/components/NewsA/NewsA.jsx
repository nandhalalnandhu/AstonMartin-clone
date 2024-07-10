import React from "react";
import "./NewsA.css";
import newa from "../../Assets/newsA.png";
import newb from "../../Assets/newB.webp";
import newc from "../../Assets/newC.webp";
import newd from "../../Assets/newcD.webp";

function NewsA() {
  return (
    <div className="News">
      <div className="head-name">
        <span className="new-title">NEWS</span>
        <span className="new-title">SEE ALL NEWS →</span>
      </div>

      <div class="containerr flexx">
        <div class="item flex-itemm">
          <img src={newa} alt="" />

          <div className="txt">
            <span className="new-cont">26 jun 2024</span>

            <span className="new-cont">
              Aston Martin Valuant:The champion of pure <br />
              driving passion
            </span>
          </div>
          <br />

          <div className="expl">Expolre +</div>
        </div>

        <div class="item flex-item">
          <img src={newb} alt="" />

          <div className="txt">
            <span className="new-cont">26 jun 2024</span>

            <span className="new-cont">
              Aston Martin returns to Le Mans with two <br />Valkyrie  hypercars in 2025
            </span>
          </div>
          <br />

          <div className="expl">Expolre +</div>
        </div>
        <div class="item flex-item">
          <img src={newc} alt="" />

          <div className="txt">
            <span className="new-cont">26 jun 2024</span>

            <span className="new-cont">
              Aston Martin  completes long-term pay <br />agreement  benfitting  2,500 eligible UK <br />workers
            </span>
          </div>
          <br />

          <div className="expl">Expolre +</div>
        </div>
        <div class="item flex-item">
          <img src={newd} alt="" />

          <div className="txt">
            <span className="new-cont">26 jun 2024</span>

            <span className="new-cont">
              Aston Martin  aims for 20th class victory at <br /> the 24 Hours of Le  Mans as new Vantage  <br />GT3 makes debut
            </span>
          </div>
          <br />

          <div className="expl">Expolre +</div>
        </div>
      </div>
    </div>
  );
}

export default NewsA;
