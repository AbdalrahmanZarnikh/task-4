import "./NavBar.css"
import "../../App.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-white">
    <Container >
      <Navbar.Brand href="#"><img src="/img/logo.png" className="image" alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Button variant="primary" className="prime text-white border border-none order-3 ">Make an Appointment</Button>
      <Navbar.Collapse id="navbarScroll" className="flex-grow-0 ">
        <Nav className="me-auto my-2 my-lg-0 gap-4 "  >
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#services">SERVICES</Nav.Link>
          <Nav.Link href="#department">DEPARTMENT</Nav.Link>
          <Nav.Link href="#doctors">DOCTORS</Nav.Link>
          <NavDropdown title="DROPDOWN" id="navbarScrollingDropdown">
          </NavDropdown>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  
  
    </Container>
  </Navbar>
  )
}

export default NavBar