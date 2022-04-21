import React, { useState } from 'react';
import {Row, Col, Button} from 'react-bootstrap';

function ContactForm({closeForm}) {

  const [formState, setFormState] = useState({ name: '', email: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email } = formState;

  function handleChange(e) {
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required.`);
    } else {
      if (e.target.name === 'email') {
        var emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegEx.test(String(e.target.value).toLowerCase())) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
          setErrorMessage('');
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
    }
  }

  return (
    <div className="formBackdrop">
      <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" style={{marginRight: 23, marginBottom: 15}}>Contact Name:</label><br />
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" style={{width: '60%'}} />
        </div>
        <div>
          <label htmlFor="email" style={{marginRight: 28, marginBottom: 15}}>Contact Email:</label><br />
          <input type="email" defaultValue={email} onBlur={handleChange} name="email" style={{width: '60%'}} />
        </div>
        <div>
          <label htmlFor="event" style={{marginRight: 28, marginBottom: 15}}>Event Type:</label><br />
          <input type="event" defaultValue={email} onBlur={handleChange} name="event" style={{width: '60%'}} />
        </div>
        <div>
          <label htmlFor="date" style={{marginRight: 28, marginBottom: 15}}>Event Date:</label><br />
          <input type="date" defaultValue={email} onBlur={handleChange} name="date" style={{width: '60%'}} />
        </div>
        <div>
          <label htmlFor="number" style={{marginRight: 28, marginBottom: 15}}>Number of Attendees:</label><br />
          <input type="number" defaultValue={email} onBlur={handleChange} name="number" style={{width: '60%'}} />
        </div>
        {errorMessage && (
          <div>
          <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Row>
          <Col sm={6}>
            <Button type="submit">Submit </Button>
          </Col>
          <Col sm={6}>
            <Button onClick={closeForm}>Close</Button>
          </Col>
        </Row>
      </form>
      </div>
    </div>
  );
}

export default ContactForm;