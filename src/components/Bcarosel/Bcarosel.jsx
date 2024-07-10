import React from "react";
import "./Bcarosel.css";

function Bcarosel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div id="carousel-innnerz"  class="carousel-inner">
        <div id="video-div" class="carousel-item active">
          <video
            autoPlay
            loop
            muted
            src="https://www.astonmartin.com/-/media/models---dbx707-my25/videos-carousel-homepage/dbx707_my25_carousel_desktop.mp4?rev=235e45801236486292c5b057db86856e"
          ></video>

          <div className="contentz">
            <span className="small-title">POWER.DRIVEN.</span>
            <span className="big-title">DBX707</span>
            <div className="all-btn">
              <button className="btn-a">Explore</button>
              <button className="btn-b">Configure</button>
            </div>
          </div>
        </div>

        <div id="video-div" class="carousel-item">
          <video
            autoPlay
            loop
            muted
            src="https://www.astonmartin.com/-/media/homepage-vantage-coupe-launch/model-carousel-silverstone-day-night/vantage_my25_silverstone_day_desktop-carousel.mp4?rev=b9619cbe241842cdacd5babfb46a60eb"
          ></video>

          <div className="contentz">
            <span className="small-title">THRILL.DRIVEN.</span>
            <span className="big-title">Vantage</span>
            <div className="all-btn">
              <button className="btn-a">Explore</button>
              <button className="btn-b">Configure</button>
            </div>
          </div>
        </div>

        <div id="video-div" class="carousel-item">
          <video
            autoPlay
            loop
            muted
            src="https://www.astonmartin.com/-/media/homepage-vehicle-model-carousel/db12/db12_coupe_amalficoast_desktop_60fps_shot_01.mp4?rev=a468038c614b41dd81f2877009b3e3ad"
          ></video>
          <div className="contentz">
            <span className="small-title">ICON.DRIVEN.</span>
            <span className="big-title">DB12</span>
            <div className="all-btn">
              <button className="btn-a">Explore</button>
              <button className="btn-b">Configure</button>
            </div>
          </div>
        </div>
        <div id="video-div" class="carousel-item">
          <video
            autoPlay
            loop
            muted
            src="https://www.astonmartin.com/-/media/homepage-vehicle-model-carousel/dbs/dbs_zengarden_desktop_60fps_shot_01.mp4?rev=15df5ec86ad64ea1a3d75aeb546d0ec4"
          ></video>
          <div className="contentz">
            <span className="small-title">FEROCITY.DRIVEN</span>
            <span className="big-title">DBS</span>
            <div className="all-btn">
              <button className="btn-a">Explore</button>
              <button className="btn-b">Configure</button>
            </div>
          </div>
        </div>
        <div id="video-div" class="carousel-item">
          <video
            autoPlay
            loop
            muted
            src="https://www.astonmartin.com/-/media/homepage-vehicle-model-carousel/valour/am690_rainbow_desktop_60fps_shot_01.mp4?rev=d57f49f3690e4f719748f976711c08f9"
          ></video>
          <div className="contentz">
            {/* <span className="small-title">POWER.DRIVEN</span> */}
            <span className="big-title">valour</span>
            <div className="all-btn">
              <button className="btn-a">Explore</button>
              <button className="btn-b">Configure</button>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        id="prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button
        class="carousel-control-next"
        id="next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Bcarosel;
