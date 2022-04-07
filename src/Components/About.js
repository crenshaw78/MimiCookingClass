import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";


function About() {
  
  return (
    <Row id='about' style={{marginTop: '6vmin'}}>
      <Col sm={9}>
        <h1>Mimi's Cooking Class</h1>
        <h3><FaUtensils /> Learn to Cook <GiCookingPot /></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Col>
      <Col sm={3} id='selfPhoto'>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"> <FaFacebook size={'4vmin'}  style={{background: 'white'}}/> </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer"> <FaTwitter size={'4vmin'}  style={{background: 'white'}}/> </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"> <FaInstagram color='white' size={'4vmin'} style={{background: 'purple'}} /> </a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"> <FaPinterest color='red' size={'4vmin'}  style={{background: 'white'}}/> </a>
      </Col>
    </Row>
  );
}

export default About;