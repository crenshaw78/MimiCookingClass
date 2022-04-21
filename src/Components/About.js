import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";


function About() {
  
  return (
    <Row id='about' className="top">
      <Col sm={9}>
        <h1>Mimi's Cooking Class</h1>
        <h3><FaUtensils style={{color: 'grey'}} /> Learn to Cook <GiCookingPot style={{color: 'grey'}} /></h3>
        <p>Mimi is an energetic cooking instructor who is passionate about cooking in general and Ethiopian/Eritrean cuisine in particular.  She finds cooking very relaxing and curative beyond its advantages.  She enjoys sharing her cooking skills with her long list of experience that  includes teaching cooking at community education classes in Minnesota as well as leading cooking classes around the Midwest and Southwest. Mimi's culinary expertise spans cultures and includes everything from Mediterranean to Asian to southern food.</p>
      </Col>
      <Col sm={3} id='selfPhoto'>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"> <FaFacebook size={'6vmin'} style={{background:'white', borderRadius: '5vmin'}} /> </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"> <FaInstagram color='white' size={'6vmin'} style={{backgroundImage:'linear-gradient(to top right, yellow, red, purple)', borderRadius: '1vmin'}}/> </a>
          <a href="https://www.tiktok.com/en/" target="_blank" rel="noreferrer"> <FaTiktok color='white' size={'6vmin'} style={{background:'black', borderRadius: '5vmin'}}/> </a>
      </Col>
    </Row>
  );
}

export default About;