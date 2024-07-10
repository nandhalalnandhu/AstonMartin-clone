import React from "react";
import "./Double.css";
import aa from "../../Assets/aa.mp4"
import bb from "../../Assets/bb.mp4"

function Double() {
  return (
    <div className="Double">
      <div className="AA">
        <video autoplay loop muted>
          <source src={aa} type="video/mp4" />
        </video>

        <span className="titleAA">ASTON MARTIN PRE OWNED</span>
        <div className="center-demmyy"></div>
        <span className="titleBB">Explore →</span>
      </div>

      <div className="BB">
      <video autoplay loop muted>
          <source src={bb} type="video/mp4" />
        </video>
        <span className="titleAA">ASTON MARTIN MAGAZINE</span>
        <div className="center-demmyy"></div>
        <span className="titleBB">Explore →</span>
      </div>
    </div>
  );
}

export default Double;
