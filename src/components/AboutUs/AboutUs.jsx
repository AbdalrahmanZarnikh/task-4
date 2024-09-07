import { Col, Container, Row } from "react-bootstrap"
import "../../App.css"
import SubTitle from "../SubTitle/SubTitle"
import Title from "../Title/Title"
import { MdPlayCircle } from "react-icons/md";
import { RiCheckDoubleLine } from "react-icons/ri";
import "./AboutUs.css"


function AboutUs() {
  return (
    <div id="about">
        <Title title={"About Us"}/>
        <SubTitle sub={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}/>
        <Container >
           <Row >
              <Col className="position-relative w-sm-100 w-md-50 my-height" sm={12} md={6}>
                  <img src="/img/about.jpg" className="h-75 w-100" alt="" />
                  <MdPlayCircle className="play  position-absolute bottom-50 start-50  translate-middle"/>
              </Col>
              <Col className="h-40" sm={12} md={6}>
                 <h2 className="fw-bold">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h2 >
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, excepturi quod repellendus laboriosam quas non tempore omnis quasi unde veniam.</p>
                 <div className="d-flex gap-1">
                  <RiCheckDoubleLine className="fs-4 text-prime"/>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea?</p>
                 </div>
                 <div className="d-flex gap-1">
                  <RiCheckDoubleLine className="fs-4 text-prime"/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique?</p>
                 </div>
                 <div className="d-flex gap-1">
                 <RiCheckDoubleLine className="fs-1 text-prime"/>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi molestiae eveniet voluptatum est. Magni tempore quam repellat nihil hic veniam sapiente ea earum qui eius.</p>
                 </div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum provident mollitia dolor sunt vero consectetur nam obcaecati ullam deleniti repellat aperiam molestiae eveniet voluptatum, molestias autem.</p>
              </Col>
           </Row>
        </Container>
    </div>
  )
}

export default AboutUs