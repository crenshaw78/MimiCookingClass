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
        cite="https://www.tiktok.com/@mimiscookingclass/" 
        data-unique-id="mimiscookingclass"  
        data-embed-type="creator" 
        style={{width: '360', height: '500'}} 
        > 
        <section> 
          <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@mimiscookingclass?refer=creator_embed">@mimiscookingclass</a> 
        </section> 
      </blockquote> 
  </div>
    );
  }

export default Tiktok;