import "./Navbar.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import mainlogo from "../../Assets/aslogo.png";
import sideicon from "../../Assets/menu.png";

// import v1 from "../components/a.mp4";
// import v2 from "../components/b.mp4";
// import v3 from "../components/c.mp4";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav>
      <div className="sidebar">
       
        <Button className="btn-ss" onClick={handleShow}>
          <img src={sideicon} alt="" width={30} />
        </Button>

        <Offcanvas className="offf-main" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
       
          </Offcanvas.Header>
          <Offcanvas.Body className="ooff-bodyy">

            <h4>Home</h4>
            <h4>Model</h4>
            <h4>Find the Dealer</h4>
            <h4>Owner</h4>
            <h4>Our World</h4>
            <h4>Store</h4>
            <h4>Experiences</h4>
            <h4>F1 Team</h4>
            
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <div className="logo">
        <img src={mainlogo} alt="" />
      </div>

      <div className="enquire">
        <button>Configure</button>
        <button>Enquire</button>
      </div>
    </nav>
  );
}

export default Navbar;
