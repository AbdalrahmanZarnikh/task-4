import { Col, Container,Row } from "react-bootstrap"
import "../../App.css"
import SubTitle from "../SubTitle/SubTitle"
import Title from "../Title/Title"
import CardPrice from "../CardPrice/CardPrice"

function Pricing() {
  return (
    <div className="p-4">
        <Title title={"Pricing"}/>
        <SubTitle
        sub={
          "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        }
      />
      <Container>
        <Row>
            <Col xs={12} md={6} xl={3} className="mb-4" >
              <CardPrice head={"Free"} flag1={true} flag2={true} number={0}/>
            </Col>
            <Col xs={12} md={6} xl={3} className="mb-4">
              <CardPrice head={"Business"} flag2={true} number={19} bg={true}/>
            </Col>
            <Col xs={12} md={6} xl={3} className="mb-4">
              <CardPrice head={"Developer"} number={29}/>
            </Col>
            <Col xs={12} md={6} xl={3} className="mb-4">
              <CardPrice head={"Ultimate"} number={49}/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Pricing