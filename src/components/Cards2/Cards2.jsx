import "../../App.css";
import { FaFlask, FaUserDoctor } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import Card2 from "../Card2/Card2";
import { Container ,Row,Col} from "react-bootstrap";

const data = [
  {
    icon: <FaUserDoctor className="fs-1 text-prime" />,
    head: "25",
    desc: "Doctors",
  },
  {
    icon: <FaHospital className="fs-1 text-prime" />,
    head: "15",
    desc: "Departments",
  },
  {
    icon: <FaFlask className="fs-1 text-prime" />,
    head: "8",
    desc: "Research Labs",
  },
  {
    icon: <FaAward className="fs-1 text-prime" />,
    head: "150",
    desc: "Awards",
  },
];
function Cards2() {
  return <Container className="mb-5">
    <Row className="">
       {data.map((ele)=>{
        return (
            <Col sm={12} md={3} className="mb-3">
               <Card2 icon={ele.icon} head={ele.head} desc={ele.desc}/>
            </Col>
        )
       })}

    </Row>
      
  </Container>;
}

export default Cards2;
