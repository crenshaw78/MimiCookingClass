import React from "react";
import { Row, Col, Image } from "react-bootstrap";

function BookEvent() {
  return (
    <Row style={{marginTop: '6vmin'}}>
      <Col sm={6}>
        <h1>Book an Event</h1>
        <p style={{marginTop: '3vmin'}}>Corporate Catering</p>
        <p>Wedding Receptions</p>
        <p>Formal Parties</p>
        <p>Special Events</p>
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