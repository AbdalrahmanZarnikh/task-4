import { Carousel, Col, Container, Row } from "react-bootstrap";
import "../../App.css";
import "./Testimonials.css";
import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";
import "./Testimonials.css";
import Testimonial from "../Testimonial/Testimonial";
import Slider from "react-slick";
import { FaRegCircle } from "react-icons/fa";
import { useState } from "react";
import "../Gallery/Gallery.css"
function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const data = [
    {
      img: "/img/testimonials/testimonials-3.jpg",
      name: "Jena Karles",
      job: "Store Owner",
    },
    {
      img: "/img/testimonials/testimonials-4.jpg",
      name: "Matt Brandon",
      job: "Freelancer",
    },
    {
      img: "/img/testimonials/testimonials-5.jpg",
      name: "John Larson",
      job: "Entrepreneur",
    },
    {
      img: "/img/testimonials/testimonials-2.jpg",
      name: "John Larson",
      job: "Entrepreneur",
    },
    {
      img: "/img/testimonials/testimonials-1.jpg",
      name: "John Larson",
      job: "Entrepreneur",
    },
  ];
  return (
    <div
      id="testimonials"
      className="p-5 d-flex flex-column align-items-center "
    >
      <Title title={"Testimonials"} />
      <SubTitle
        sub={
          "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        }
      />
      <Container className="">
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Row>
            <Col sm={12} md={4}>
               <div className="fill w-100 ">
               <Testimonial img={data[0].img} name={data[0].name} job={data[0].job}/>
               </div>
            </Col>
            <Col className="d-none d-md-block" sm={12} md={4}>
               <div className="fill w-100 ">
               <Testimonial img={data[1].img} name={data[1].name} job={data[1].job}/>
               </div>
            </Col>
            <Col className="d-none d-md-block"  sm={12} md={4}>
               <div className="fill w-100 ">
               <Testimonial img={data[2].img} name={data[2].name} job={data[2].job}/>
               </div>
            </Col>
          
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
          <Col sm={12} md={4}>
               <div className="fill w-100 ">
               <Testimonial img={data[3].img} name={data[3].name} job={data[3].job}/>
               </div>
            </Col>
            <Col className="d-none d-md-block" sm={12} md={4}>
               <div className="fill w-100 ">
               <Testimonial img={data[4].img} name={data[4].name} job={data[4].job}/>
               </div>
            </Col>
            <Col className="d-none d-md-block" sm={12} md={4}>
               <div className="fill w-100 ">
               <Testimonial img={data[0].img} name={data[0].name} job={data[0].job}/>
               </div>
            </Col>
          
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
          <Col sm={12} md={4}>
               <div className="fill w-100 ">
               <Testimonial img={data[1].img} name={data[1].name} job={data[1].job}/>
               </div>
            </Col>
            <Col sm={12} md={4} className="d-none d-md-block">
               <div className="fill w-100 ">
               <Testimonial img={data[2].img} name={data[2].name} job={data[2].job}/>
               </div>
            </Col>
            <Col sm={12} md={4} className="d-none d-md-block">
               <div className="fill w-100 ">
               <Testimonial img={data[3].img} name={data[3].name} job={data[3].job}/>
               </div>
            </Col>
          
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
          <Col  sm={12} md={4}>
               <div className="fill w-100 ">
               <Testimonial img={data[4].img} name={data[4].name} job={data[4].job}/>
               </div>
            </Col>
            <Col className="d-none d-md-block" sm={12} md={4}>
               <div className="fill w-100 ">
               <Testimonial img={data[0].img} name={data[0].name} job={data[0].job}/>
               </div>
            </Col>
            <Col className="d-none d-md-block" sm={12} md={4}>
               <div className="fill w-100 ">
               <Testimonial img={data[1].img} name={data[1].name} job={data[1].job}/>
               </div>
            </Col>
          
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
          <Col sm={12} md={4}>
               <div className="fill w-100 ">
               <Testimonial img={data[2].img} name={data[2].name} job={data[2].job}/>
               </div>
            </Col>
            <Col className="d-none d-md-block" sm={12} md={4}>
               <div className="fill w-100 ">
               <Testimonial img={data[3].img} name={data[3].name} job={data[3].job}/>
               </div>
            </Col>
            <Col className="d-none d-md-block" sm={12} md={4}>
               <div className="fill w-100 ">
               <Testimonial img={data[4].img} name={data[4].name} job={data[4].job}/>
               </div>
            </Col>
          
          </Row>
        </Carousel.Item>
       
        </Carousel>
      </Container>
      
    </div>
  );
}

export default Testimonials;

// <Container>
// <div className="d-flex flex-column align-items-center">
// <Row  className="my-margin">
// <Col sm={12} md={4}>
//   <Testimonial img={data[0].img} name={data[0].name} job={data[0].job}/>
// </Col>
// <Col className="d-none d-md-block" md={4}>
//   <Testimonial img={data[1].img} name={data[1].name} job={data[1].job}/>
// </Col>
// <Col className="d-none d-md-block" md={4}>
//   <Testimonial img={data[2].img} name={data[2].name} job={data[2].job}/>
// </Col>

// </Row>

// <div className="d-flex gap-2 ">
// <FaRegCircle className="text-prime"/>
//  <FaRegCircle className="text-prime"/>
//  <FaRegCircle className="text-prime prime rounded-circle"/>
//  <FaRegCircle className="text-prime"/>
//  <FaRegCircle className="text-prime"/>

// </div>
// </div>

// </Container>





// <Container>
//         <Slider {...settings}>
//           {data.map((ele) => {
//             return (
//               <div>
//                 <Testimonial img={ele.img} name={ele.name} job={ele.job} />
//               </div>
//             );
//           })}
//         </Slider>
//       </Container>






// {data.map((image) => {
            
//   return (
//     <Carousel.Item>
//       <Row>
//         <Col>
//         <div className="fill w-100 ">
//       <Testimonial img={image.img} name={image.name} job={image.job}/>
//       </div>
//         </Col>

//       </Row>
       
//     </Carousel.Item>
//   );
// })}