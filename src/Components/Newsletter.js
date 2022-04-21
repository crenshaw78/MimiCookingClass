import React from "react";

function Newsletter() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="top">
      <h3>Join Our Newsletter</h3>
      <form onSubmit={handleSubmit}>
        <input style={{marginTop: '1.3vmin', width: '57vmin'}} type="text" name="email" defaultValue="Email Address" /><br />
        <input style={{marginTop: '1.3vmin', background: '#009A44', color: 'white'}} type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Newsletter;