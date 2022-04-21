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
    <div>
      <blockquote 
        className="tiktok-embed" 
        cite="https://www.tiktok.com/@the_pastaqueen" 
        data-unique-id="the_pastaqueen"  
        data-embed-type="creator" 
        style={{maxWidth: '400px', minWidth: '288px'}} 
        > 
        <section> 
          <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@the_pastaqueen?refer=creator_embed">@the_pastaqueen</a> 
        </section> 
      </blockquote> 
  </div>
    );
  }

export default Tiktok;