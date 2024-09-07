import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Test.css';

const Test = () => {
    const images = [
        'img/gallery/gallery-1.jpg',
        'img/gallery/gallery-2.jpg',
        'img/gallery/gallery-3.jpg',
        'img/gallery/gallery-4.jpg',
        'img/gallery/gallery-5.jpg',
        'img/gallery/gallery-6.jpg',
        'img/gallery/gallery-7.jpg',
        
      ];

  const [activeIndex, setActiveIndex] = useState(2); // البداية في منتصف الصور

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Gallery - Center Mode Grid</h2>
      <div className="slider-container">
        <button className="prev-btn" onClick={prevSlide}>
          ❮
        </button>
        <Row className="justify-content-center align-items-center">
          {images.map((image, idx) => (
            <Col
              key={idx}
              xs={4}
              className={`image-wrapper ${
                idx === activeIndex ? 'active-center' : idx === (activeIndex - 1 + images.length) % images.length || idx === (activeIndex + 1) % images.length
                  ? 'adjacent'
                  : ''
              }`}
            >
              <img src={image} alt={`Slide ${idx + 1}`} className="img-fluid" />
            </Col>
          ))}
        </Row>
        <button className="next-btn" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </Container>
  );
};

export default Test;







// const images = [
//     'img/gallery/gallery-1.jpg',
//     'img/gallery/gallery-2.jpg',
//     'img/gallery/gallery-3.jpg',
//     'img/gallery/gallery-4.jpg',
//     'img/gallery/gallery-5.jpg',
//     'img/gallery/gallery-6.jpg',
//     'img/gallery/gallery-7.jpg',
    
//   ];