import React from 'react';
import { Image } from 'react-bootstrap';
import classPictureList from '../assets/js/classArray';
  
function Gallery() {

  return (
    <div style={{width: '90%', margin: 'auto', marginTop: '6vmin'}}>
      <div style={{display: 'flex', overflowX: 'scroll'}}>
          {classPictureList.map((cpicture, i) => (
              <Image
                key={'c'+i}
                src={require(`../assets/images/${cpicture.image}`)}
                alt='gallery image'
                style={{height: '50vmin', width: '50vmin', objectFit: 'cover', padding: '1.25vmin'}}
              />
          ))}
      </div>
    </div>
  );
}

export default Gallery;