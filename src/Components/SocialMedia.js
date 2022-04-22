import React from "react";
import { Row, Col } from "react-bootstrap";
import Instagram from "./Instagram";
import Facebook from "./Facebook";
import Tiktok from "./Tiktok"

function SocialMedia() {

  return (
    <Row id='social' className="top">
      <h1>Social Media</h1>
      <Col sm={4}>
        <Instagram />
      </Col>
      <Col sm={4}>
        <Facebook />
      </Col>
      <Col sm={4}>
        <Tiktok />
      </Col>
    </Row>
  );
}

export default SocialMedia;