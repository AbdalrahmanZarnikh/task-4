import { Container, Row, Col,FloatingLabel, Button } from "react-bootstrap";
import "../../App.css";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import Form from "react-bootstrap/Form";

function Form1() {
  return (
    <div className="bg-body-secondary p-4">
      <Title title="MAKE AN APPOINTMENT" />
      <SubTitle
        sub={
          "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        }
      />
      <Container>
        <div className="d-flex flex-column align-items-center">
        <Row>
          <Col sm={12} md={4} className="mb-4 ">
            <Form.Control
              type="text"
              placeholder="Your Name "
              className="w-100 text-secondary"
            />
          </Col>
          <Col sm={12} md={4}className="mb-4 ">
            <Form.Control
              type="email"
              placeholder="Your Email"
              className="w-100 text-secondary"
            />
          </Col>
          <Col sm={12} md={4} className="mb-4 ">
            <Form.Control
              type="text"
              placeholder="Your Phone"
              className="w-100 text-secondary"
            />
          </Col>
          <Col sm={12} md={4} className="mb-4 ">
          <Form.Control
              type="date"
              className="w-100 text-secondary"
            />
          
          </Col>
          <Col sm={12} md={4} className="mb-4 ">
            <Form.Select aria-label="Default select example">
              <option>Select Department</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col sm={12} md={4} className="mb-4 ">
            <Form.Select aria-label="Default select example">
              <option>Select Doctor</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col sm={12} className="mb-4 " >
            <FloatingLabel controlId="floatingTextarea2" label="Message(optional)" className="text-secondary">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
               
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Button variant="primary" className="prime text-white border border-none  ">Make an Appointment</Button>
        </div>
      </Container>
    </div>
  );
}

export default Form1;
