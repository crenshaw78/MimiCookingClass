import React from "react";
import { Row } from "react-bootstrap";
import Facebook from "./Facebook";
import Instagram from "./Instagram";

function SocialMedia() {

  return (
    <Row id='social' style={{marginTop: '6vmin'}}>
      <h1>Social Media</h1>
      <Facebook />
      <Instagram />
    </Row>
  );
}

export default SocialMedia;