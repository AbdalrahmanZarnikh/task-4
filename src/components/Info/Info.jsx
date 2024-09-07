import "./Info.css"
import "../../App.css"
import { FaRegClock } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import { FaMobileAlt } from "react-icons/fa";

function Info() {
  return (
    <div className=" prime">
        <Container className="d-flex justify-content-center   justify-content-md-between  align-items-center text-white fs-5">
          <p className="d-none  d-md-flex align-items-center  justify-content-center  gap-1">
        <FaRegClock/> Monday-Saturday, 8AM to 10PM
      </p>
      <p className="d-flex justify-content-sm-center  gap-1  align-items-center">
        <FaMobileAlt/> Call us now +1 5589 55488 55
      </p>
        </Container>
    </div>
  )
}

export default Info