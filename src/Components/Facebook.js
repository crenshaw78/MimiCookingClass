import React, { useEffect } from "react";

const Facebook = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4" 
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
    <div className="top">
      <div id="fb-root"></div>
      <div
        className="fb-like-box"
        data-href="https://www.facebook.com/nytcooking/"
        data-width="360"
        data-height="600"
        data-colorscheme="light"
        data-show-faces="false"
        data-stream="true"
        data-show-border="false"
      >
        <blockquote
          cite="https://www.facebook.com/nytcooking/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/nytcooking">NYT Cooking</a>
        </blockquote>
      </div>
    </div>
  )};

export default Facebook;
