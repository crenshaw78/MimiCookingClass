import React from "react";
import { Carousel, Row, Col, Image } from "react-bootstrap";
import eventList from "../assets/js/eventArray";

function BookEvent() {

  return (
    <Row className="top">
        <h1>Book an Event</h1>
        <Carousel fade indicators={false} controls={false}>
          {eventList.map((event, i) => (
            <Carousel.Item key={'e'+i}>
              <Row style={{justifyContent:'center'}}>
                <Col sm={6}>
                    <h4>{event.name}</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
                <Col sm={6}>
                  <Image
                    src={require(`../assets/images/${event.image}`)}
                    alt={event.alt}
                    style={{height: '68.5vmin', width: 'auto', maxWidth: '100%', objectFit: 'cover'}}
                  />
                </Col>
              </Row>   
            </Carousel.Item>
          ))}
        </Carousel>
    </Row>
  );
}

export default BookEvent;