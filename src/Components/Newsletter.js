import React from "react";
import { Button } from 'react-bootstrap';

function Newsletter() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="top">
      <h3>Join Our Newsletter</h3>
      <form onSubmit={handleSubmit}>
        <input style={{marginTop: '1.3vmin'}} type="text" name="email" defaultValue="Email Address" /><br />
        <Button variant="success" style={{marginTop: '1.3vmin', background: '#009A44', color: 'white', fontSize: '2.5vmin'}}>Join Now</Button>
      </form>
    </div>
  );
}

export default Newsletter;