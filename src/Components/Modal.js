import React from 'react';
import classPictureList from '../assets/js/classArray';

function Modal({onClose, currentPhoto}) {
  const message = classPictureList[currentPhoto.index].message
  const image = classPictureList[currentPhoto.index].image

  console.log(currentPhoto)
  console.log(currentPhoto.index)

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <img key={'m'+currentPhoto} src={require(`../assets/images/${image}`)} alt="cooking class" />
        <p>
          {message}
        </p>
        <button onClick={onClose} type="button">
          Close
        </button>
      </div>
</div>
  );
}

export default Modal;