import Form from "react-bootstrap/Form";
import "../../App.css";
import { Button, Col, FloatingLabel, Row } from "react-bootstrap";

function Form2() {
  return (
    <div className="d-flex flex-column align-items-center bg-white p-5 h-100 shadow">
      <Row>
        <Col sm={12} md={6} className="mb-4 ">
          <Form.Control
            type="text"
            placeholder="Your Name "
            className="w-100 text-secondary"
          />
        </Col>
        <Col sm={12} md={6} className="mb-4 ">
          <Form.Control
            type="email"
            placeholder="Your Email"
            className="w-100 text-secondary"
          />
        </Col>
        <Col sm={12} md={12} className="mb-4 ">
          <Form.Control
            type="text"
            placeholder="Subject"
            className="w-100 text-secondary"
          />
        </Col>
        <Col sm={12} className="mb-4 ">
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Message(optional)"
            className="text-secondary"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "120px" }}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Button
        variant="primary"
        className="prime text-white border border-none  "
      >
       Send Message
      </Button>
    </div>
  );
}

export default Form2;
