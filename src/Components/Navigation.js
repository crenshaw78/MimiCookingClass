import React from "react";
import { Row, Col } from "react-bootstrap";
import { GiCook } from "react-icons/gi";

function Navigation() {

  return (
    <Row >
      <Col sm={1}></Col>
      <Col sm={1}>
        <GiCook className="logo" size= '5vmin'/>
      </Col>
      <Col sm={2}>
        <a href="#about" ><h2>About</h2></a>
      </Col>
      <Col sm={2}>
      <a href="#schedule" ><h2>Classes</h2></a>
      </Col>
      <Col sm={2}>
        <a href="#contact" ><h2>Book Event</h2></a>
      </Col>
      <Col sm={3}>
        <a href="#social" ><h2>Social Media</h2></a>
      </Col>
    </Row>
  );
}

export default Navigation;