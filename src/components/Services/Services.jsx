import { Col, Container, Row } from "react-bootstrap";
import "../../App.css";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import ServiceCard from "../ServiceCard/ServiceCard";
import { FaHeartbeat } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";
import { FaHospitalUser, FaNotesMedical, FaPills, FaRegHourglassHalf } from "react-icons/fa6";
const data = [
  {
    icon: 
      <FaHeartbeat className="bg-white text-prime shadow rounded-circle icon2" />
    ,
    head: "Nesciunt Mete",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi odio sunt ipsum, voluptatibus error maiores deserunt fugiat rerum alias possimus?",
  },
  {
    icon: 
      <FaPills className="bg-white text-prime shadow rounded-circle icon2" />
    ,
    head: "Eosle Commodi",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi odio sunt ipsum, voluptatibus error maiores deserunt fugiat rerum alias possimus?",
  },
  {
    icon: 
      <FaHospitalUser className="bg-white text-prime shadow rounded-circle icon2" />
    ,
    head: "Ledo Markt",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi odio sunt ipsum, voluptatibus error maiores deserunt fugiat rerum alias possimus?",
  },
  {
    icon: 
      <FaRegHourglassHalf className="bg-white text-prime shadow rounded-circle icon2" />
    ,
    head: "Asperiores Commodit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi odio sunt ipsum, voluptatibus error maiores deserunt fugiat rerum alias possimus?",
  },
  {
    icon: 
      <FaHeartbeat className="bg-white text-prime shadow rounded-circle icon2" />
    ,
    head: "Velit Doloremque",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi odio sunt ipsum, voluptatibus error maiores deserunt fugiat rerum alias possimus?",
  },
  {
    icon: 
      <MdAddToPhotos className="bg-white text-prime shadow rounded-circle icon2" />
    ,
    head: "Dolori Architecto",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi odio sunt ipsum, voluptatibus error maiores deserunt fugiat rerum alias possimus?",
  },
];

function Services() {
  return (
    <Container id='services'>
      <Title title={"Services"} />
      <SubTitle
        sub={
          "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        }
      />
      <Row>
        {data.map((ele)=>{
            return(
                <Col sm={12} md={4}>
                   <ServiceCard icon={ele.icon} head={ele.head} desc={ele.desc}/>
                </Col>
            )
        })}
      </Row>
    </Container>
  );
}

export default Services;
