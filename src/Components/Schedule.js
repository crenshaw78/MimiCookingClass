import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import classList from "../assets/js/classArray";

function Schedule() {

  return (
    <Row id='schedule' className="top">
      {classList.map((cclass, i) => (
      <Row key={'c'+i}>
        <Col sm={5} style={{marginBottom: '6vmin'}}>
          <Image fluid
            src={require(`../assets/images/${cclass.image}`)}
            alt={cclass.alt}
            style={{height: '45vmin', width: '60vmin', objectFit: 'cover'}}
          />
        </Col>
        <Col sm={7}>
          <h1>{cclass.name}</h1>
          <p>{cclass.desc}</p>
          <h3>{cclass.day}</h3>
          <Row>
            <Col sm={4}>
              <p>{cclass.date}</p>
              <p>{cclass.time}</p>
            </Col>
            <Col sm={4}>
              <p>{cclass.seats} seats available</p>
              <p>${cclass.cost} / person</p>
            </Col>
          </Row>
        </Col>
      </Row>
      ))}
    </Row>
  );
}

export default Schedule;