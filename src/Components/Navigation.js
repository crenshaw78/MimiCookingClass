import React from "react";
import { Row, Col } from "react-bootstrap";
import { GiCook } from "react-icons/gi";

function Navigation() {
  return (
    <Row >
      <Col sm={3}>
        <GiCook size='10vmin' style={{background: 'grey'}}/>
      </Col>
      <Col sm={2}>
        <h2>About</h2>
      </Col>
      <Col sm={2}>
        <h2>Next Classes</h2>
      </Col>
      <Col sm={2}>
        <h2>Book Event</h2>
      </Col>
      <Col sm={2}>
        <h2>Social Media</h2>
      </Col>
    </Row>
  );
}

export default Navigation;