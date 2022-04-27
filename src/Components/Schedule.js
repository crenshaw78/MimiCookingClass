import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import classList from "../assets/js/classArray";

function Schedule() {

  return (
    <Row id='schedule' className="top">
      {classList.map((cclass, i) => (
      <Row key={'c'+i}>
        <Col sm={5}>
          <Image fluid
            src={require(`../assets/images/${cclass.image}`)}
            alt={cclass.alt}
            className='cooking-class-image'
          />
        </Col>
        <Col sm={7}>
          <h1>{cclass.name}</h1>
          <p>{cclass.desc}</p>
          <h3>{cclass.day}</h3>
          <Row>
            <Col sm={6}>
              <p>{cclass.date}</p>
              <p>{cclass.time}</p>
            </Col>
            <Col sm={6}>
              <p>${cclass.cost} / person</p>
              <Button variant="success" className='enroll-button' type='button'>Enroll Now</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      ))}
    </Row>
  );
}

export default Schedule;