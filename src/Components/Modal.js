import React from 'react';
import galleryPictureList from '../assets/js/galleryArray';

function Modal({onClose, currentPhoto}) {
  const message = galleryPictureList[currentPhoto.index].message
  const image = galleryPictureList[currentPhoto.index].image

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <img className="modalImage" key={'m'+currentPhoto} src={require(`../assets/images/${image}`)} alt="cooking class" />
        <p style={{background: 'rgba(254, 221, 0, 1)', padding: '15px'}}>{message}</p>
        <button onClick={onClose} type="button" style={{color: 'white', background: 'red'}}>
          Close
        </button>
      </div>
</div>
  );
}

export default Modal;