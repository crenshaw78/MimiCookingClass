import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import galleryPictureList from '../assets/js/galleryArray';
import Modal from './Modal';
  
function Gallery() {

  const [textDesc, setTextDesc] = useState(null)

  const [currentPhoto, setCurrentPhoto] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (index) => {
    setCurrentPhoto({index});
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="top" style={{width: '90%', margin: 'auto'}}>
      <div style={{display: 'flex', overflowX: 'scroll'}}>
        {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal}/>}
        {galleryPictureList.map((gpicture, i) => (
          <div key={'c'+i} style={{position: 'relative'}}
            onMouseEnter={() => setTextDesc(i)}
            onMouseLeave={() => setTextDesc(null)}
            onClick={() => toggleModal(i)}
          >
              <Image
                src={require(`../assets/images/${gpicture.image}`)}
                alt='gallery image'
                style={{height: '50vmin', width: '50vmin', objectFit: 'cover', padding: '1.25vmin'}}
              />
              {(textDesc === i && !isModalOpen) && (
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  backgroundColor: 'rgba(254, 221, 0, 1)',
                  marginLeft: '12px',
                  marginRight: '10px',
                  padding: '1.25vmin',
                  height: '20vmin',
                  width: '47vmin',
                  overflow: 'hidden',
                  opacity: '80%' 
                }}>
                  <p>{gpicture.message}</p> 
                </div>  
              )}
          </div>    
        ))}
      </div>
    </div>
  );
}

export default Gallery;