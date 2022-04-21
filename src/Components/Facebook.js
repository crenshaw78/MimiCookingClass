import React, { useEffect } from "react";

const Facebook = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0" 
    script.nonce="La8M26By"
    script.async = true
    script.defer = true
    script.crossorigin="anonymous"

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  return (
    <React.Fragment>
      <div id="fb-root"></div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/nytcooking/"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/nytcooking/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/nytcooking">NYT Cooking</a>
        </blockquote>
      </div>
    </React.Fragment>
  )};

export default Facebook;

