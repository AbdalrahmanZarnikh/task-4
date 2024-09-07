import { Col, Container, Row } from "react-bootstrap"
import "../../App.css"
import SubTitle from "../SubTitle/SubTitle"
import Title from "../Title/Title"
import "./Contact.css"
import Form2 from "../Form2/Form2"
import BoxInfo from "../BoxInfo/BoxInfo"
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

function Contact() {
  const data=[
    {
      icon:<IoLocationOutline className="fs-2 text-prime my-css"/>,
      head:"Address",
      text:"A 108 Adam Street, New York,NY 535022"
    },
    {
      icon:<FiPhone className="fs-2 text-prime my-css"/>,
      head:"Call Us",
      text:"+1 5589 55488 55"
    },
    {
      icon:<TfiEmail className="fs-2 text-prime my-css"/>,
      head:"Email Us",
      text:"info@example.com"
    },
  ]

  return (
    <div id="contact">
        <Title title={"Contact Us"}/>
        <SubTitle sub={"Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"}/>
        <div className="mb-4">
        <iframe
          className="map"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103885.2875067226!2d35.63612179696933!3d35.54344583290378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1526ac2d61d4607d%3A0x8e325bf8a14195de!2sLatakia%2C%20Syria!5e0!3m2!1sen!2snl!4v1724134357945!5m2!1sen!2snl"
        />
        </div>
        <Container>
            <Row>
              <Col sm={12} md={6}>
                 <Row>
                   <Col className="mb-5" sm={12}>
                   <BoxInfo icon={data[0].icon} head={data[0].head} text={data[0].text}/>
                   </Col>
                  </Row> 
                 <Row>
                  <Col sm={12} md={6} className="mb-4">
                  <BoxInfo icon={data[1].icon} head={data[1].head} text={data[1].text} /> 
                  </Col>
                  <Col sm={12} md={6} className="mb-4">
                  <BoxInfo icon={data[2].icon} head={data[2].head} text={data[2].text}/>
                  
                  </Col>
                 </Row>
              </Col>
              <Col sm={12} md={6} className="mb-4">
                 <Form2/>
              </Col>
            </Row>
        </Container>


    </div>
  )
}

export default Contact