import React from "react";
import { Row, Col, Image } from "react-bootstrap";

function Schedule() {
  return (
    <Row style={{marginTop: '6vmin'}}>
      <Col sm={5}>
        <Image fluid
          src={require(`../assets/images/image2.jpeg`)}
          alt='carousel slide'
          style={{height: '45vmin', width: 'auto'}}
        />
      </Col>
      <Col sm={7}>
        <h1>Next Class:</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3>Saturday</h3>
        <Row>
          <Col sm={4}>
            <p>April 9th, 2022</p>
            <p>11 AM to 1 PM</p>
          </Col>
          <Col sm={4}>
            <p>6 seats available</p>
            <p>$195 / person</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Schedule;