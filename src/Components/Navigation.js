import React from "react";
import { Row, Col } from "react-bootstrap";
import { GiCook } from "react-icons/gi";

function Navigation() {

  return (
    <Row >
      <Col sm={1}>
        <GiCook size='10vmin' style={{background: 'grey', borderRadius: '5vmin'}}/>
      </Col>
      <Col sm={2}>
        <a href="#about" style={{textDecoration: 'none', color: 'inherit'}}><h2>About</h2></a>
      </Col>
      <Col sm={2}>
      <a href="#schedule" style={{textDecoration: 'none', color: 'inherit'}}><h2>Next Class</h2></a>
      </Col>
      <Col sm={2}>
        <a href="#book" style={{textDecoration: 'none', color: 'inherit'}}><h2>Book Event</h2></a>
      </Col>
      <Col sm={2}>
        <a href="#contact" style={{textDecoration: 'none', color: 'inherit'}}><h2>Contact</h2></a>
      </Col>
      <Col sm={2}>
        <a href="#social" style={{textDecoration: 'none', color: 'inherit'}}><h2>Social Media</h2></a>
      </Col>
    </Row>
  );
}

export default Navigation;