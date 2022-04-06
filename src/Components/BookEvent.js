import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Contact from "./Contact";

function BookEvent() {

  return (
    <Row id='book' style={{marginTop: '6vmin'}}>
      <Col sm={6}>
        <h1>Book an Event</h1>
        <Row>
          <Col sm={6}>
            <p>Wedding Receptions</p>
          </Col>
          <Col sm={6}>
            <p>Corporate Catering</p>
          </Col>
          <Col sm={6}>
            <p>Formal Parties</p>
          </Col>
          <Col sm={6}>
            <p>Special Events</p>
          </Col>
        </Row>
        <Contact />
      </Col>
      <Col sm={6}>
        <Image fluid
          src={require(`../assets/images/image1.jpeg`)}
          alt='carousel slide'
          style={{height: '50vmin', width: 'auto'}}
        />
      </Col>
    </Row>
  );
}

export default BookEvent;