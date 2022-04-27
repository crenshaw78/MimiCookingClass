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
    <div className="top gallery-container">
      <div className='scrolling-gallery'>
        {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal}/>}
        {galleryPictureList.map((gpicture, i) => (
          <div key={'c'+i}
            className='gallery-image-container' 
            onMouseEnter={() => setTextDesc(i)}
            onMouseLeave={() => setTextDesc(null)}
            onClick={() => toggleModal(i)}
          >
              <Image
                src={require(`../assets/images/${gpicture.image}`)}
                alt='gallery image'
                className='gallery-image'
              />
              {(textDesc === i && !isModalOpen) && (
                <div className='gallery-text-box'>
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