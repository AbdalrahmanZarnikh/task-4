import { Col, Container, Row ,Accordion} from "react-bootstrap";
import "../../App.css";
import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";

function Questions() {
    const Ques=[
        {
          title:"Non Consectetur erat nam al lectus urna dusi?"  
        },
        {
            title:"Freuguiat scelerisque varius morbi enim nunc faucibus?"  
        },
        {
            title:"Dolor sit amet consectetur adipiscing elit pellentesque?"  
        },
        {
            title:"Ac odio tempor orci dapibus.Aliquam eleifend mi in nulla?"  
        },
        {
            title:"Tempus quam pellentesque nec nam aliquam sem et tortor?"  
        },
        {
            title:"Perspiciatis quod quo quos nulla quo illum ullam?"  
        }
    ]
  return (
    <div className="bg-body-secondary p-4">
      <Title title={"Frequently Asked Questions"} />
      <SubTitle
        sub={
          "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        }
      />
      <Container>
        <Row>
          {Ques.map((ele)=>{
            return(
                <Col sm={12} className="mb-4 ">
                <Accordion defaultActiveKey="0" className="w-75 m-auto">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{ele.title}</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Questions;
