import { Col, Container, Row, Card } from "react-bootstrap";
import "../../App.css";
import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";

function Doctors() {
  const info = [
    {
      img: "img/doctors/doctors-1.jpg",
      name: "Walter White",
      job: "Chief Medical Officer",
    },
    {
      img: "img/doctors/doctors-2.jpg",
      name: "Sarah Jhonson",
      job: "Anesthesiologist",
    },
    {
      img: "img/doctors/doctors-3.jpg",
      name: "William Anderson",
      job: "Cardiology",
    },
    {
      img: "img/doctors/doctors-4.jpg",
      name: "Amanda Jepson",
      job: "Neurosurgeon",
    },
  ];
  return (
    <div id="doctors" className="bg-body-secondary p-4 ">
      <Title title={"Doctors"} />
      <SubTitle
        sub={
          "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        }
      />
      <Container>
        <Row>
          {info.map((ele) => {
            return (
              <Col sm={12} md={3} className="mb-4" >
                <Card style={{ maxWidth: "35rem" }}>
                  <Card.Img variant="top" src={ele.img} />
                  <Card.Body>
                    <Card.Title>{ele.name}</Card.Title>
                    <Card.Text>{ele.job}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Doctors;
