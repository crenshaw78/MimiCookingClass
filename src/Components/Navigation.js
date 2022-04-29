import React from "react";
import { Row, Col } from "react-bootstrap";
import  logo  from "../assets/images/Mimi_logo.svg";

function Navigation() {

  return (
    <Row >
      <Col sm={1} />
      <Col sm={1}>
        <img
          className="logo"
          src={logo}
          alt="logo for Mimi's Cooking Class"
        >
        </img>
      </Col>
      <Col sm={2}>
        <a href="#about" ><h2>About</h2></a>
      </Col>
      <Col sm={2}>
      <a href="#schedule" ><h2>Classes</h2></a>
      </Col>
      <Col sm={3}>
        <a href="#contact" ><h2>Book Event</h2></a>
      </Col>
      <Col sm={3}>
        <a href="#social" ><h2>Social Media</h2></a>
      </Col>
    </Row>
  );
}

export default Navigation;