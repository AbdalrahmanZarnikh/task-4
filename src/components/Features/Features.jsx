import { Col, Container,Row } from "react-bootstrap"
import "../../App.css"
import "./Features.css"
import { FaHandHoldingMedical, FaStaffSnake, FaSuitcaseMedical } from "react-icons/fa6";
import { FaFirstAid } from "react-icons/fa";
import { FaLungs } from "react-icons/fa";
import Feature from "../Feature/Feature"

const data=[
  {
    icon:<FaHandHoldingMedical className="fs-1 text-prime bg-white shadow icon"/>,
    head:"Lorem Ipsum",
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi consequatur pariatur praesentium optio distinctio!"
  },
  {
    icon:<FaSuitcaseMedical className="fs-1 text-prime bg-white shadow icon"/>,
    head:"Nemo Enim",
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi consequatur pariatur praesentium optio distinctio!"
  },
  {
    icon:<FaStaffSnake className="fs-1 text-prime bg-white shadow icon "/>,
    head:"Dine Pad",
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi consequatur pariatur praesentium optio distinctio!"
  },
  {
    icon:<FaLungs className="fs-1 text-prime bg-white shadow icon"/>,
    head:"Tride clove",
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi consequatur pariatur praesentium optio distinctio!"
  },

]
function Features() {
  return (
     <Container className="my-margin">
        <Row className="gap-5">
            <Col sm={12} md={6} >
              <img src="/img/features.jpg" alt="" className="w-100 h-100"/>
            </Col>
            <Col sm={12} md={5}>
            <h1 className="fw-bold head text-secondary-emphasis ">Enim quis est voluptatibus aliquid conseqautur fugiat</h1>
            <p className="mt-5 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere est odit illum officia aspernatur animi fugit porro vitae dignissimos et ducimus non modi eius, neque asperiores ad consectetur doloribus at.</p>
            {data.map((ele)=>{
              return (
                <Feature icon={ele.icon} head={ele.head} desc={ele.desc}/>
              )
            })}



            
            </Col>

        </Row>
     </Container>
  )
}

export default Features 