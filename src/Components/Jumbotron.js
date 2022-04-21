import React from 'react';
import { Carousel } from 'react-bootstrap';
import foodPictureList from '../assets/js/foodArray';
import Navigation from './Navigation';
  
function Jumbotron() {

  return (
    <div className="flex-center">
        <Carousel indicators = {false}>
          {foodPictureList.map((fpicture, i) => (
            <Carousel.Item key={'f'+i}>
              <img
                className='d-block w-100 jumbo-image'
                src={require(`../assets/images/${fpicture.image}`)}
                alt='carousel slide'
                style={{objectFit: 'cover', height: '60vmin'}}
              />
              <Carousel.Caption style={{top: '1.25rem', right: '5%', left: '5%'}}>
                <Navigation />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
    </div>
  );
}

export default Jumbotron;
