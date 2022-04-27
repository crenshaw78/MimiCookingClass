import React, { useEffect } from "react";

function Tiktok() {

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://www.tiktok.com/embed.js" 
    script.async = true

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="top">
      <blockquote 
        className="tiktok-embed" 
        cite="https://www.tiktok.com/@the_pastaqueen" 
        data-unique-id="the_pastaqueen"  
        data-embed-type="creator" 
        style={{width: '360', height: '500'}} 
        > 
        <section> 
          <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@the_pastaqueen?refer=creator_embed">@the_pastaqueen</a> 
        </section> 
      </blockquote> 
  </div>
    );
  }

export default Tiktok;