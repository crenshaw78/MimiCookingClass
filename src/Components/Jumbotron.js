import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import foodPictureList from '../assets/js/foodArray';
import Navigation from './Navigation';
  
function Jumbotron() {

  return (
    <div className="flex-center">
        <Carousel fade indicators = {false}>
          {foodPictureList.map((fpicture, i) => (
            <Carousel.Item key={'f'+i}>
              <Image fluid
                className='d-block w-100 jumbo-image'
                src={require(`../assets/images/${fpicture.image}`)}
                alt='carousel slide'
                style={{objectFit: 'cover', height: '60vmin'}}
              />
              <Carousel.Caption className='nav-bar'>
                <Navigation />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
    </div>
  );
}

export default Jumbotron;
