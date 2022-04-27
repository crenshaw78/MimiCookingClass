import React from 'react';
import galleryPictureList from '../assets/js/galleryArray';
import { Image, Button } from 'react-bootstrap';

function Modal({onClose, currentPhoto}) {
  const message = galleryPictureList[currentPhoto.index].message
  const image = galleryPictureList[currentPhoto.index].image

  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div className="modalContainer" onClick={e => e.stopPropagation()}>
        <Image rounded className="modalImage" key={'m'+currentPhoto} src={require(`../assets/images/${image}`)} alt="cooking class" />
        <p style={{background: 'rgba(254, 221, 0, 1)', padding: '15px'}}>{message}</p>
        <Button variant="danger" className="modalCloseButton" onClick={onClose} type="button">
          X
        </Button>
      </div>
</div>
  );
}

export default Modal;