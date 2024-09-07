import { Col, Container, Nav, Row } from "react-bootstrap";
import "../../App.css";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-body-secondary p-4 position-relative">
      <Container>
        <Row>
          <Col sm={12} md={4} className="mb-4">
            <h2 className="fw-bold mb-5 ">Medicio</h2>
            <p className="mb-0 text-secondary">A108 Adam Street</p>
            <p className="mt-0 text-secondary">New York,NY 535022</p>

            <p className="mb-0 text-secondary">
              <span className="fw-bold text-dark ">Phone: </span>+1 5589 55488 55
            </p>
            <p className="mt-0 text-secondary">
              <span className="fw-bold text-dark">Email: </span>info@example.com
            </p>
            <div  className="d-flex gap-2 mt-4">
              <FaXTwitter className="fs-5 change"/>
              <FaFacebook className="fs-5 change"/>
              <FaInstagram className="fs-5 change"/>
              <FaLinkedin className="fs-5 change"/>
            </div>
          </Col>
          <Col sm={12} md={2} className="mb-4">
            <h4 className="fw-bold">Useful Links</h4>
            <p className="text-secondary">Home</p>
            <p className="text-secondary">About us</p>
            <p className="text-secondary">Services</p>
            <p className="text-secondary">Terms of service</p>
            <p className="text-secondary">Privacy policy </p>
          </Col>
          <Col sm={12} md={2} className="mb-4">
            <h4 className="fw-bold">Our Services</h4>
            <p className="text-secondary">Web Design</p>
            <p className="text-secondary">Web Development</p>
            <p className="text-secondary">Product Management</p>
            <p className="text-secondary">Marketing</p>
            <p className="text-secondary">Graphic Design</p>
          </Col>
          <Col sm={12} md={2} className="mb-4">
            <h4 className="fw-bold">Hic solutasept</h4>
            <p className="text-secondary">Molestiae accusamus iure</p>
            <p className="text-secondary">Excepturi dignissimos</p>
            <p className="text-secondary">Suscipit distictio</p>
            <p className="text-secondary">Dilecta</p>
            <p className="text-secondary">Sit quas consectetur</p>
          </Col>
          <Col sm={12} md={2} className="mb-4">
            <h4 className="fw-bold">Nobis illum</h4>
            <p className="text-secondary">Ipsam</p>
            <p className="text-secondary">Laudantium dolorum</p>
            <p className="text-secondary">Dinera</p>
            <p className="text-secondary">Trodelas</p>
            <p className="text-secondary">Flexo</p>
          </Col>
        </Row>
        <hr />
        <div className="text-center">
          <p>
            &copy; Copyright <span className="fw-bold">Medicio</span> All Rights Reserved
          </p>
          <p>
            Designed by <span className="text-prime">BootstrapMade</span>
          </p>
        </div>
      </Container>
      <button className="p-2 prime border-none rounded-2 position-absolute end-0 bottom-0 m-2">
            <Nav.Link href="#home"><FaArrowUp className="text-light"/></Nav.Link>
          </button>
    </div>
  );
}

export default Footer;
