import React from 'react';
import classPictureList from '../assets/js/classArray';

function Modal({onClose, currentPhoto}) {
  const message = classPictureList[currentPhoto.index].message
  const image = classPictureList[currentPhoto.index].image

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <img className="modalImage" key={'m'+currentPhoto} src={require(`../assets/images/${image}`)} alt="cooking class" />
        <p style={{background: 'white', padding: '15px'}}>{message}</p>
        <button onClick={onClose} type="button" style={{color: 'white', background: 'red'}}>
          Close
        </button>
      </div>
</div>
  );
}

export default Modal;