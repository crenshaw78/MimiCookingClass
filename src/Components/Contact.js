import React from "react";
import { Row } from "react-bootstrap";

function Contact() {

  return (
    <Row id='contact' style={{marginTop: '6vmin'}}>
      <h3>Mimi's Cooking-Class</h3>
      <p>123 Main Street, Anywhere, USA</p>
      <a href="tel:+08885551212" style={{textDecoration: 'none', color: 'inherit'}}><p>(888) 555-1212</p></a>
      <a href="mailto:mimiscookingclass@gmail.com" style={{textDecoration: 'none', color: 'inherit'}}><p>mimiscookingclass@gmail.com</p></a>
      <div style={{width: '40vmin', height: '40vmin'}}>
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180748.7375543044!2d-93.24613681449931!3d44.939621877030845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b2d4cee4e9379f%3A0xc87291d23fda2e29!2sSt%20Paul%2C%20MN!5e0!3m2!1sen!2sus!4v1649208576788!5m2!1sen!2sus" width="300" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </Row>
  );
}

export default Contact;