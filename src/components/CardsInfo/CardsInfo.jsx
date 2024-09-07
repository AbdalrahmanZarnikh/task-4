import "../../App.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardInfo from "../CardInfo/CardInfo";
import { FaHeartbeat } from "react-icons/fa";
import { FaPills, FaRegHourglassHalf, FaThermometer } from "react-icons/fa6";



function CardsInfo() {
  return (
    <Container className="mb-5 mt-5">
    <Row >
      <Col xs={12} sm={6}  md={3} className="mb-3" >
      <CardInfo icon={<FaHeartbeat className="text-prime fs-2 mb-3"/>} head={"Lorem Ipsum"}/>
      </Col>
      <Col xs={12} sm={6} md={3} className="mb-3">
      <CardInfo icon={<FaPills className="text-prime fs-2 mb-3"/>} head={"Sed ut perpspici"}/>
      </Col>
      <Col xs={12} sm={6} md={3} className="mb-3">
      <CardInfo icon={<FaThermometer className="text-prime fs-2 mb-3"/>} head={"Magni Dolores"}/>
      </Col>
      <Col xs={12} sm={6} md={3} className="mb-3">
      <CardInfo icon={<FaRegHourglassHalf className="text-prime fs-2 mb-3"/>} head={"Nemo Enim"}/>
      </Col>
    </Row>
  </Container>
  )
}

export default CardsInfo