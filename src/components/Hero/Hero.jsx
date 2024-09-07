import "../../App.css";
import "./Hero.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div id="home">
      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item  >
          <div className="carousel-image" >
            <img src="/img/hero-carousel/hero-carousel-1.jpg" alt="" />
          </div>
          <Carousel.Caption>
            <div className="--bg-white text-dark w-100 h-75 my_border ">
              <h1 className="fw-bold mb-4">Temporibus autem quibusdam</h1>
              <p className="mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi sapiente, consequatur temporibus dolorum
                exercitationem neque quibusdam? Accusamus nam soluta in
                cupiditate hic, iusto corrupti neque rem facere mollitia
                temporibus vitae?
              </p>
              <Button
                variant="primary"
                className="prime text-white border border-none px-4 "
              >
                Read More
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-image">
            <img src="/img/hero-carousel/hero-carousel-2.jpg" alt="" />
          </div>
          <Carousel.Caption>
            <div className="--bg-white text-dark w-100 h-75 my_border   ">
              <h1 className="fw-bold mb-4">Temporibus autem quibusdam</h1>
              <p className="mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi sapiente, consequatur temporibus dolorum
                exercitationem neque quibusdam? Accusamus nam soluta in
                cupiditate hic, iusto corrupti neque rem facere mollitia
              </p>
              <Button
                variant="primary"
                className="prime text-white border border-none px-4  "
              >
                Read More
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-image">
            <img src="/img/hero-carousel/hero-carousel-3.jpg" alt="" />
          </div>
          <Carousel.Caption>
            <div className="--bg-white text-dark w-100 h-75 my_border ">
              <h1 className="fw-bold mb-4">Temporibus autem quibusdam</h1>
              <p className="mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi sapiente, consequatur temporibus dolorum
                exercitationem neque quibusdam? Accusamus nam soluta in
                cupiditate hic, iusto corrupti neque rem facere mollitia
                temporibus vitae?
              </p>
              <Button
                variant="primary"
                className="prime text-white border border-none px-4  "
              >
                Read More
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
