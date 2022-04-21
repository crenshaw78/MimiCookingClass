import React from "react";
import { Carousel, Row, Col, Image } from "react-bootstrap";
import eventList from "../assets/js/eventArray";

function BookEvent() {

  return (
    <Row id='book' className="top">
        <h1>Book an Event</h1>
        <Carousel fade indicators={false} controls={false}>
          {eventList.map((event, i) => (
            <Carousel.Item key={'e'+i}>
              <Row style={{justifyContent:'center'}}>
                <Col sm={5}>
                    <h4>{event.name}</h4>
                </Col>
                <Col sm={6}>
                  <Image
                    src={require(`../assets/images/${event.image}`)}
                    alt={event.alt}
                    style={{height: '45vmin', width: 'auto'}}
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