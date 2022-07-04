import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Newsletter from "./Newsletter";
import ContactForm from "./ContactForm";

function Contact() {

  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  }

  return (
    <Row id="contact">
      <Col sm={4}>
        <Button style={{background: '#009A44', margin: '6vmin 10vmin', fontSize: '4vmin'}} onClick={toggleForm}>
          Book Event
        </Button>
        {isFormOpen && <ContactForm closeForm={toggleForm}/>}
      </Col>
      <Col sm={4}>
        <h3 className="top">Mimi's Cooking Class</h3>
        <a href="tel:+08885551212" style={{textDecoration: 'none', color: 'inherit'}}><p>(952) 220-9333</p></a>
        <a href="mailto:mimiscookingclass@gmail.com" style={{textDecoration: 'none', color: 'inherit'}}><p>mimiscookingclass@gmail.com</p></a>
      </Col>
      <Col sm={4}>
        <Newsletter />
      </Col>
    </Row>
  );
}

export default Contact;